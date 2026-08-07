#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const batchFile = resolve(process.env.DAILY_BLOG_BATCH_FILE || 'ops/daily-blog-batch.json');
const stateFile = resolve(process.env.COOLIFY_DEPLOYMENT_STATE_FILE || 'ops/.coolify-deployment-state.json');
const now = new Date().toISOString();
const outcomes = new Set(['SKIPPED_INCOMPLETE', 'SKIPPED_COOLIFY_QUEUE', 'NO_NEW_CHANGES', 'DEPLOYMENT_ALREADY_PENDING', 'DEPLOYMENT_IN_PROGRESS', 'DEPLOYMENT_SUBMITTED', 'DEPLOYMENT_FAILED', 'LIVE_VERIFIED']);
const readJson = (file) => { try { return JSON.parse(readFileSync(file, 'utf8')); } catch { return null; } };
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
const statusOf = (item) => String(item.status || item.deployment_status || '').toLowerCase().replaceAll('-', '_').replaceAll(' ', '_');
const shaOf = (item) => item.commit_sha || item.commit || item.git_commit_sha || item.gitCommitSha || null;
const uuidOf = (item) => item.deployment_uuid || item.uuid || item.id || null;
const listOf = (body) => Array.isArray(body) ? body : (body?.deployments || body?.data || body?.items || []);
const active = new Set(['queued', 'pending', 'starting', 'in_progress', 'running', 'building', 'deploying']);
const successful = new Set(['finished', 'success', 'succeeded', 'completed']);
const failed = new Set(['failed', 'error', 'errored', 'cancelled', 'canceled', 'crashed']);

function persist(record) {
  const previous = readJson(stateFile) || {};
  const safe = { ...previous, ...record, timestampUtc: now };
  delete safe.COOLIFY_API_TOKEN;
  writeFileSync(stateFile, `${JSON.stringify(safe, null, 2)}\n`);
}
function finish(outcome, details = {}) {
  if (!outcomes.has(outcome)) throw new Error(`Invalid terminal outcome: ${outcome}`);
  persist({ outcome, ...details });
  console.log(JSON.stringify({ outcome, timestampUtc: now, ...details }));
}
function incomplete(reason) { finish('SKIPPED_INCOMPLETE', { reason }); }

const batch = readJson(batchFile);
const blogs = (batch?.blogs || []).map((blog) => typeof blog === 'string' ? { slug: blog, status: 'completed', validated: true, path: `/blog/${blog}` } : blog);
const research = (batch?.research || []).map((post) => typeof post === 'string' ? { slug: post, status: 'completed', validated: true, path: `/research/${post}` } : post);
const validBatch = batch?.status === 'completed' && batch?.validated === true && batch?.buildPassed === true &&
  Array.isArray(blogs) && blogs.length > 0 && blogs.every((blog) => blog.status === 'completed' && blog.validated === true) &&
  Array.isArray(batch.files) && batch.files.length > 0;
if (!validBatch) { incomplete('daily Blog batch is missing or every required item is not complete and validated'); process.exit(0); }

const required = ['COOLIFY_API_URL', 'COOLIFY_API_TOKEN', 'COOLIFY_APPLICATION_UUID'];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) { incomplete(`protected Coolify configuration is missing: ${missing.join(', ')}`); process.exit(0); }
if ((process.env.PRODUCTION_BRANCH || 'main') !== 'main') { incomplete('production branch mapping must be exact: main'); process.exit(0); }

const api = async (endpoint, options = {}) => {
  const response = await fetch(`${process.env.COOLIFY_API_URL.replace(/\/$/, '')}/api/v1${endpoint}`, {
    ...options,
    headers: { Accept: 'application/json', Authorization: `Bearer ${process.env.COOLIFY_API_TOKEN}`, ...(options.headers || {}) },
  });
  const text = await response.text();
  let body; try { body = text ? JSON.parse(text) : {}; } catch { body = {}; }
  if (!response.ok) throw new Error(`Coolify HTTP ${response.status}`);
  return body;
};
const allDeployments = async () => {
  const all = [];
  for (let page = 1; page <= 100; page += 1) {
    const items = listOf(await api(`/deployments?take=100&page=${page}`));
    all.push(...items); if (items.length < 100) break;
  }
  return all;
};
const liveVerify = async () => {
  const origin = (process.env.WEBSITE_URL || 'https://outsourcingassistant.com').replace(/\/$/, '');
  const paths = [...new Set(['/', '/blog', '/research', ...blogs.map((blog) => blog.path || `/blog/${blog.slug}`), ...research.map((post) => post.path || `/research/${post.slug}`)])];
  for (const path of paths) { const response = await fetch(`${origin}${path.startsWith('/') ? path : `/${path}`}`, { redirect: 'follow' }); if (!response.ok) return false; }
  return true;
};

try {
  const state = readJson(stateFile) || {};
  let commitSha = state.batchSha || state.commitSha || git('rev-parse', 'HEAD');
  const deployments = await allDeployments();
  // Reconcile persisted SHA/deployment before any git or deployment mutation.
  const persisted = state.deploymentUuid && deployments.find((item) => uuidOf(item) === state.deploymentUuid);
  const sameCommit = deployments.filter((item) => shaOf(item) === commitSha);
  const known = persisted || sameCommit.find((item) => active.has(statusOf(item)) || successful.has(statusOf(item)) || failed.has(statusOf(item)));
  if (known && active.has(statusOf(known))) { finish(statusOf(known) === 'queued' ? 'DEPLOYMENT_ALREADY_PENDING' : 'DEPLOYMENT_IN_PROGRESS', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(known), acceptedStatus: statusOf(known) }); process.exit(0); }
  if (known && successful.has(statusOf(known))) { const live = await liveVerify(); finish(live ? 'LIVE_VERIFIED' : 'DEPLOYMENT_FAILED', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(known), acceptedStatus: statusOf(known), reason: live ? undefined : 'successful Coolify deployment did not verify on live Blog pages' }); process.exit(0); }
  if (known && failed.has(statusOf(known))) { finish('DEPLOYMENT_FAILED', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(known), acceptedStatus: statusOf(known), reason: 'existing deployment failed; no blind retry' }); process.exit(0); }

  const listed = new Set(batch.files);
  const changed = git('status', '--porcelain').split('\n').filter(Boolean).map((line) => line.slice(3));
  const operational = new Set([batchFile.slice(root.length + 1), stateFile.slice(root.length + 1)]);
  const unrelated = changed.filter((file) => !listed.has(file) && !operational.has(file));
  if (unrelated.length) { incomplete(`unlisted working-tree files present: ${unrelated.join(', ')}`); process.exit(0); }
  if (changed.length) {
    execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
    execFileSync('git', ['add', '--', ...batch.files], { cwd: root, stdio: 'inherit' });
    if (git('diff', '--cached', '--name-only')) {
      execFileSync('git', ['commit', '-m', `content: publish daily Blog batch ${batch.batchId || now.slice(0, 10)}`], { cwd: root, stdio: 'inherit' });
      execFileSync('git', ['push', 'origin', `${process.env.PRODUCTION_BRANCH || 'main'}:${process.env.PRODUCTION_BRANCH || 'main'}`], { cwd: root, stdio: 'inherit' });
    }
    commitSha = git('rev-parse', 'HEAD');
    persist({ domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, batchSha: commitSha });
  } else if (!state.batchSha && !state.commitSha) { finish('NO_NEW_CHANGES', { commitSha }); process.exit(0); }

  const afterPush = await allDeployments();
  const duplicate = afterPush.find((item) => shaOf(item) === commitSha);
  if (duplicate && active.has(statusOf(duplicate))) { finish(statusOf(duplicate) === 'queued' ? 'DEPLOYMENT_ALREADY_PENDING' : 'DEPLOYMENT_IN_PROGRESS', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(duplicate), acceptedStatus: statusOf(duplicate) }); process.exit(0); }
  if (duplicate && successful.has(statusOf(duplicate))) { finish(await liveVerify() ? 'LIVE_VERIFIED' : 'DEPLOYMENT_FAILED', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(duplicate), acceptedStatus: statusOf(duplicate) }); process.exit(0); }
  const queuedCount = afterPush.filter((item) => statusOf(item) === 'queued').length;
  if (queuedCount >= 3) { finish('SKIPPED_COOLIFY_QUEUE', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, queuedCount }); process.exit(0); }
  let accepted;
  try { accepted = await api(`/deploy?uuid=${encodeURIComponent(process.env.COOLIFY_APPLICATION_UUID)}&force=false`); }
  catch { const reconciled = (await allDeployments()).find((item) => shaOf(item) === commitSha); if (reconciled) { finish(active.has(statusOf(reconciled)) ? 'DEPLOYMENT_IN_PROGRESS' : 'DEPLOYMENT_FAILED', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid: uuidOf(reconciled), acceptedStatus: statusOf(reconciled), queuedCount }); } else finish('DEPLOYMENT_FAILED', { commitSha, queuedCount, reason: 'uncertain deployment request; no blind retry' }); process.exit(0); }
  const deployment = listOf(accepted)[0] || accepted;
  const deploymentUuid = uuidOf(deployment);
  if (!deploymentUuid) { finish('DEPLOYMENT_FAILED', { commitSha, queuedCount, reason: 'accepted response lacked deployment UUID; no retry' }); process.exit(0); }
  finish('DEPLOYMENT_SUBMITTED', { domain: 'outsourcingassistant.com', paperclipProject: 'Onboarding', applicationUuid: process.env.COOLIFY_APPLICATION_UUID, commitSha, deploymentUuid, triggerTimeUtc: now, acceptedStatus: statusOf(deployment) || 'accepted', queuedCount });
} catch (error) { finish('DEPLOYMENT_FAILED', { reason: error.message }); }
