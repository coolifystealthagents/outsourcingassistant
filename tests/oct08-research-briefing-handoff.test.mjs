import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/research-batch-2026-10-08.ts', import.meta.url);

test('October 8 research records use the generated Research Briefing service route', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const slugs = [
    'assistant-queue-interruption-cost-study',
    'delegated-task-acceptance-clarity-experiment',
    'cross-time-zone-review-window-reliability-study',
    'source-evidence-retrieval-latency-study',
    'assistant-exception-escalation-calibration-study',
  ];

  for (const slug of slugs) {
    const start = source.indexOf(`"slug": "${slug}"`);
    const nextRecord = source.indexOf('\n  {', start + 1);
    const end = nextRecord === -1 ? source.length : nextRecord;
    assert.ok(start >= 0 && end > start, `${slug} record boundaries must be present and ordered`);
    const record = source.slice(start, end);
    assert.match(record, /"href": "\/services\/research-briefing"/);
    assert.match(record, /"label": "research briefing service"/);
    assert.match(record, /the business retains method approval, access decisions, interpretation, and every consequential disposition\./);
    assert.doesNotMatch(record, /research-assistance/);
  }
});
