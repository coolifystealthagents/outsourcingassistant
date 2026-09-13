import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/fleet-content.ts', import.meta.url);

test('meeting-action research keeps its data-owned Meeting Administration handoff and owner boundary', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const start = source.indexOf("topic('meeting-notes-action-tracking'");
  const end = source.indexOf("topic('crm-data-hygiene-workflow'", start);
  assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
  const record = source.slice(start, end);

  assert.match(record, /updated: '2026-09-13'/);
  assert.match(record, /serviceHandoff: \{ heading: 'Move meeting notes into a reviewable work queue', href: '\/services\/meeting-administration', label: 'Review the meeting administration service'/);
  assert.match(record, /A Philippines-based assistant can sort notes, name actions, and prepare a handoff for review\./);
  assert.match(record, /The meeting owner still confirms decisions, assigns commitments, and approves any change to a deadline or stakeholder message\./);
});
