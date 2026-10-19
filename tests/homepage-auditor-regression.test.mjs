import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

test('homepage auditor contract', () => {
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(page, /alt=["']\s*["']/);
  assert.doesNotMatch(chrome, /alt=["']\s*["']/);
  assert.match(page, /alt=\{`\$\{role\.name\} task icon`\}/);
  assert.doesNotMatch(page, /alt=\{`\$\{role\} task icon`\}/);
  assert.match(styles, /@media\(min-width:981px\) and \(max-height:820px\)[^{]*\{[^}]*\.nav-inner\{min-height:70px\}[^}]*\.oa-hero\{padding-top:24px;padding-bottom:28px\}/);
  assert.match(styles, /@media\(min-width:981px\) and \(max-height:820px\)\{\:root\{--header-height:70px\}\}\s*$/);
  const title = layout.match(/default:\s*'([^']+)'/)?.[1] ?? '';
  assert.ok(title.length >= 30 && title.length <= 60, `title length was ${title.length}`);
});
