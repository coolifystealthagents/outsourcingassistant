import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'ops', 'recurring-routines.json'), 'utf8'));
const routineTitle = process.argv[2];
const routine = manifest.routines.find(({ title }) => title === routineTitle);

if (!routine) {
  console.error(`Unknown routine. Choose: ${manifest.routines.map(({ title }) => title).join(' | ')}`);
  process.exit(2);
}

const quantity = Number(process.env.ROUTINE_QUANTITY ?? 0);
if (!Number.isInteger(quantity) || quantity < routine.target.min || quantity > routine.target.max) {
  console.error(`${routine.title} requires ROUTINE_QUANTITY between ${routine.target.min} and ${routine.target.max}.`);
  process.exit(2);
}

const run = {
  routine: routine.title,
  quantity,
  scheduledCron: routine.cron,
  timezone: routine.timezone,
  targetDirectory: routine.contentDirectory,
  completionRequired: 'successful push to coolifystealthagents/outsourcingassistant:main',
  coolifyDeployment: 'not run by this routine',
  googleSearchConsole: 'not used by this routine',
  status: 'ready_for_pipeline_execution',
};

console.log(JSON.stringify(run, null, 2));
