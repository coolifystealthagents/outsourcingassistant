import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');

test('homepage auditor contract', () => {
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(page, /alt=["']\s*["']/);
  assert.doesNotMatch(chrome, /alt=["']\s*["']/);
  const title = layout.match(/default:\s*'([^']+)'/)?.[1] ?? '';
  assert.ok(title.length >= 30 && title.length <= 60, `title length was ${title.length}`);
});
