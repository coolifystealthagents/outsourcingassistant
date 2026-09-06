import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/fleet-content.ts', import.meta.url);

test('time-zone handoff research keeps its data-owned Travel Coordination handoff and owner boundary', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const start = source.indexOf("topic('time-zone-handoff-design'");
  const end = source.indexOf("topic('secure-offboarding-checklist'", start);
  assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
  const record = source.slice(start, end);

  assert.match(record, /updated: '2026-09-06'/);
  assert.match(record, /serviceHandoff: \{ heading: 'Plan the travel handoff before the shift ends', href: '\/services\/travel-coordination', label: 'Review the travel coordination service'/);
  assert.match(record, /A Philippines-based assistant can prepare itinerary changes, check the source record, and list missing details before the next shift\./);
  assert.match(record, /The traveller or authorised owner still approves bookings, schedule changes, spending, and any commitment made in their name\./);
});
