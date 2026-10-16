import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const contentPath = new URL('../content/research/virtual-assistant-source-quality-evidence-research.md', import.meta.url);
const rendererPath = new URL('../app/aug19-content.tsx', import.meta.url);

test('August 19 source-quality research has one bounded Research Briefing handoff', async () => {
  const [content, renderer] = await Promise.all([readFile(contentPath, 'utf8'), readFile(rendererPath, 'utf8')]);
  assert.match(content, /updatedAt: "2026-10-16T00:00:00\.000Z"/);
  assert.match(content, /serviceHandoffHref: "\/services\/research-briefing"/);
  assert.match(content, /serviceHandoffLabel: "Plan a research briefing"/);
  assert.match(content, /The owner still decides how the findings are interpreted, published, or used for legal, privacy, security, financial, or employment decisions\./);
  assert.doesNotMatch(content, /serviceHandoffHref: "\/services\/research-assistance"/);
  assert.match(renderer, /article\.serviceHandoff&&<section className="card article-block">/);
  assert.match(renderer, /dateModified:article\.updated/);
  assert.match(renderer, /modifiedTime:article\.updated/);
});