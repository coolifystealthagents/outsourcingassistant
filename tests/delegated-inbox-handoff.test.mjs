import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const sourcePath = new URL('../app/research-batch-2026-08-17.ts', import.meta.url);

test('delegated inbox research keeps its data-owned Inbox Triage handoff and owner boundary', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const start = source.indexOf("slug: 'delegated-inbox-risk-segmentation'");
  const end = source.indexOf("slug: 'outsourced-crm-field-change-provenance'", start);
  assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
  const record = source.slice(start, end);

  assert.match(record, /updated: '2026-09-03'/);
  assert.match(record, /serviceHandoff: \{ heading: 'Turn message rules into an inbox lane', href: '\/services\/inbox-triage', label: 'Review the inbox triage service'/);
  assert.match(record, /A Philippines-based assistant can sort routine messages, gather source details, and prepare approved drafts\./);
  assert.match(record, /The owner decides on payments, personal data disclosures, contract terms, and any reply that makes a commitment\. Review the inbox triage service to set routine categories and review points\./);
});
