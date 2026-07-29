#!/usr/bin/env node

import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {basename, resolve} from 'node:path';

const enabled = /^(1|true|yes)$/i.test(process.env.WAYBACK_SPN_ENABLED || '');
const inputPath = process.env.WAYBACK_SPN_INPUT;
const endpoint = (process.env.WAYBACK_SPN_ENDPOINT || 'https://web.archive.org/save').replace(/\/+$/, '');
const limit = 20;
const timeoutMs = Number(process.env.WAYBACK_SPN_TIMEOUT_MS || 30_000);
const today = new Date().toISOString().slice(0, 10);
const outputPath = resolve(process.env.WAYBACK_SPN_OUTPUT || `seo/wayback/report-${today}.json`);

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeRows(payload) {
  const rows = Array.isArray(payload) ? payload : payload.rows;
  if (!Array.isArray(rows)) throw new Error('input must be an array or contain a rows array');

  const clicksByUrl = new Map();
  for (const row of rows) {
    if (row.period && row.period !== 'current') continue;
    const keys = Array.isArray(row.keys) ? row.keys : [];
    const url = row.page || row.url || keys[0] || '';
    if (!/^https?:\/\//i.test(url)) continue;
    clicksByUrl.set(url, (clicksByUrl.get(url) || 0) + number(row.clicks));
  }

  return [...clicksByUrl.entries()]
    .map(([url, clicks]) => ({url, clicks}))
    .sort((a, b) => b.clicks - a.clicks || a.url.localeCompare(b.url))
    .slice(0, limit);
}

async function save(url) {
  const headers = {Accept: 'application/json'};
  if (process.env.WAYBACK_SPN_AUTH) headers.Authorization = process.env.WAYBACK_SPN_AUTH;

  const response = await fetch(`${endpoint}/${encodeURI(url)}`, {
    method: 'POST',
    headers,
    redirect: 'manual',
    signal: AbortSignal.timeout(timeoutMs),
  });
  const location = response.headers.get('content-location') || response.headers.get('location');
  if (!response.ok && response.status < 300) throw new Error(`HTTP ${response.status}`);
  if (response.status >= 400) throw new Error(`HTTP ${response.status}`);
  return {status: response.status, snapshot: location || null};
}

async function writeReport(report) {
  await mkdir(resolve(outputPath, '..'), {recursive: true});
  await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

if (!enabled) {
  console.log('[wayback-spn] skipped: WAYBACK_SPN_ENABLED is not configured.');
} else if (!inputPath) {
  console.error('[wayback-spn] WAYBACK_SPN_INPUT is required when the feature is enabled.');
  process.exitCode = 1;
} else {
  try {
    const payload = JSON.parse(await readFile(resolve(inputPath), 'utf8'));
    const targets = normalizeRows(payload);
    const results = [];

    for (const target of targets) {
      try {
        results.push({...target, ok: true, ...await save(target.url)});
      } catch (error) {
        results.push({...target, ok: false, error: error.message});
      }
    }

    const successes = results.filter((result) => result.ok).length;
    const report = {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      source: basename(inputPath),
      windowDays: 28,
      requested: results.length,
      successes,
      failures: results.length - successes,
      results,
    };
    await writeReport(report);
    console.log(`[wayback-spn] ${successes}/${results.length} saved; ${report.failures} failed.`);
    for (const failure of results.filter((result) => !result.ok)) {
      console.log(`[wayback-spn] failed ${failure.url}: ${failure.error}`);
    }
    console.log(`[wayback-spn] report: ${outputPath}`);
    if (report.failures) process.exitCode = 1;
  } catch (error) {
    console.error(`[wayback-spn] ${error.message}; no report was written.`);
    process.exitCode = 1;
  }
}
