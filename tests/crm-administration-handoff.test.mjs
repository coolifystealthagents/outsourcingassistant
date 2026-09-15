import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/fleet-content.ts', import.meta.url);

test('CRM evidence research keeps its data-owned CRM Administration handoff and owner boundary', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const start = source.indexOf("aug13Topic('crm-evidence-confidence'");
  const end = source.indexOf("aug13Topic('supplier-dependency-analysis'", start);
  assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
  const record = source.slice(start, end);

  assert.match(record, /published: '2026-08-13', updated: '2026-09-15'/);
  assert.match(record, /serviceHandoff: \{ heading: 'Prepare CRM corrections for owner review', href: '\/services\/crm-administration', label: 'Review the CRM administration service'/);
  assert.match(record, /A Philippines-based assistant can compare approved source records, flag conflicts, and prepare a proposed CRM correction for review\./);
  assert.match(record, /The authorised owner still approves record changes, access changes, and any update that affects customer commitments or reporting\./);
});
