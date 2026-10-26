import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const researchPath = new URL('../app/oct25-research.ts', import.meta.url);
const rendererPath = new URL('../app/research/[slug]/page.tsx', import.meta.url);

test('October 25 meeting-recap research uses the matching Meeting Administration handoff', async () => {
  const [research, renderer] = await Promise.all([readFile(researchPath, 'utf8'), readFile(rendererPath, 'utf8')]);
  const record = research.slice(
    research.indexOf('"slug": "outsourcingassistant-capacity-planning-for-the-meeting-recap"'),
    research.indexOf('"slug": "outsourcingassistant-early-warning-signals-in-the-backlog-item"'),
  );

  assert.match(record, /"updated": "2026-10-25"/);
  assert.match(record, /"heading": "Turn the recap into a reviewable queue"/);
  assert.match(record, /"href": "\/services\/meeting-administration"/);
  assert.match(record, /"label": "Review meeting administration support"/);
  assert.match(record, /The meeting chair or manager still confirms decisions, assigns commitments, and approves changes to deadlines or stakeholder messages\./);
  assert.doesNotMatch(record, /"href": "\/contact-us"/);
  assert.match(renderer, /post\.serviceHandoff \? <section className="card article-block">/);
  assert.match(renderer, /dateModified: post\.updated/);
  assert.match(renderer, /modifiedTime: post\.updated/);
});
