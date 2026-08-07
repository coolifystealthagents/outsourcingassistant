import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'ops', 'recurring-routines.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const expected = [
  {
    title: 'Daily Blog Publishing',
    cron: '0 9 * * 1-5',
    concurrency: 'skip_if_active',
    catchUp: 'skip_missed',
    priority: 'medium',
    min: 20,
    max: 25,
  },
  {
    title: 'Daily Research Publishing',
    cron: '0 6 * * *',
    concurrency: 'always_enqueue',
    catchUp: 'skip_missed',
    priority: 'high',
    min: 10,
    max: 15,
  },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(manifest.version === '2.4', 'manifest must use playbook version 2.4');
assert(manifest.site === 'OutsourcingAssistant.com', 'site identity mismatch');
assert(manifest.repository === 'coolifystealthagents/outsourcingassistant', 'repository mismatch');
assert(manifest.productionBranch === 'main', 'production branch must be main');
assert(manifest.timezone === 'UTC', 'timezone must be UTC');
assert(manifest.completionBoundary === 'github_push', 'completion must require a GitHub push');
assert(manifest.coolifyDeploymentInRoutine === false, 'Coolify deployment must stay outside these routines');
assert(manifest.googleSearchConsoleInRoutine === false, 'Google Search Console must stay outside these routines');
assert(Array.isArray(manifest.routines) && manifest.routines.length === expected.length + 1, 'exactly two content routines plus one Coolify routine are required');

for (const [index, rule] of expected.entries()) {
  const routine = manifest.routines[index];
  assert(routine.title === rule.title, `routine ${index + 1} title mismatch`);
  assert(routine.cron === rule.cron, `${rule.title}: cron mismatch`);
  assert(routine.timezone === 'UTC', `${rule.title}: timezone mismatch`);
  assert(routine.concurrency === rule.concurrency, `${rule.title}: concurrency mismatch`);
  assert(routine.catchUp === rule.catchUp, `${rule.title}: catch-up mismatch`);
  assert(routine.priority === rule.priority, `${rule.title}: priority mismatch`);
  assert(routine.target?.min === rule.min && routine.target?.max === rule.max, `${rule.title}: target range mismatch`);
  assert(routine.pipeline.at(-2) === 'commit_and_push', `${rule.title}: commit/push must be penultimate`);
  assert(routine.pipeline.at(-1) === 'record_push_evidence', `${rule.title}: push evidence must be final`);
  assert(!routine.pipeline.includes('coolify_deploy'), `${rule.title}: Coolify deployment is prohibited`);
  assert(!routine.pipeline.includes('google_search_console'), `${rule.title}: GSC is prohibited`);
}

const coolify = manifest.routines[2];
assert(coolify.id === 'batched-coolify-deployment' && coolify.title === 'Batched Coolify Deployment', 'Coolify routine identity mismatch');
assert(coolify.active === true, 'Coolify routine must be active');
assert(coolify.assignedTo?.length === 1 && coolify.assignedTo[0] === 'Chief of Staff', 'Coolify routine must be assigned to Chief of Staff');
assert(coolify.cron === '0 3,9,15,21 * * *' && coolify.timezone === 'UTC', 'Coolify schedule mismatch');
assert(coolify.concurrency === 'skip_if_active' && coolify.catchUp === 'skip_missed' && coolify.priority === 'high', 'Coolify execution policy mismatch');
assert(coolify.mapping?.domain === 'outsourcingassistant.com' && coolify.mapping?.paperclipProject === 'Onboarding', 'Coolify domain/project mapping mismatch');
assert(coolify.mapping?.repository === 'coolifystealthagents/outsourcingassistant' && coolify.mapping?.productionBranch === 'main', 'Coolify repository/branch mapping mismatch');
assert(coolify.mapping?.applicationUuidFrom === 'COOLIFY_APPLICATION_UUID', 'Coolify application UUID must come from protected configuration');
assert(JSON.stringify(coolify.configuration?.protected) === JSON.stringify(['COOLIFY_API_URL', 'COOLIFY_API_TOKEN', 'COOLIFY_APPLICATION_UUID']), 'Coolify protected configuration mismatch');
assert(coolify.configuration?.neverPersist?.includes('COOLIFY_API_TOKEN'), 'Coolify token persistence guard missing');
assert(coolify.allowedOutcomes?.includes('SKIPPED_COOLIFY_QUEUE') && coolify.allowedOutcomes?.includes('LIVE_VERIFIED'), 'Coolify allowed outcomes incomplete');

console.log(`Validated ${manifest.routines.length} v2.4 routines for ${manifest.site}.`);
