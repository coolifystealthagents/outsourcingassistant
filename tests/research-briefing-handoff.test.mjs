import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/fleet-content.ts', import.meta.url);

test('research briefing keeps its data-owned Research Assistance handoff and owner boundary', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const start = source.indexOf("topic('research-briefing-workflow'");
  const end = source.indexOf("topic('remote-team-access-controls'", start);
  assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
  const record = source.slice(start, end);

  assert.match(record, /updated: '2026-09-11'/);
  assert.match(record, /serviceHandoff: \{ heading: 'Turn research notes into a review packet', href: '\/services\/research-assistance', label: 'Review the research assistance service'/);
  assert.match(record, /A Philippines-based assistant can collect source notes, mark open questions, and format a brief for review\./);
  assert.match(record, /The authorised owner still checks the sources, approves the interpretation, and decides whether the brief is ready to use\./);
});
