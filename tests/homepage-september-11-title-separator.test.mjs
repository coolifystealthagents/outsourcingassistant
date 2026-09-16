import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const batch = readFileSync(new URL('../app/blog-batch-2026-09-11.ts', import.meta.url), 'utf8');
const homepageTitles = [...batch.matchAll(/title:'([^']+)'/g)]
  .slice(0, 3)
  .map(([, title]) => `${title}: September 11 field guide`);

test('September 11 homepage titles use colon separators', () => {
  assert.equal(homepageTitles.length, 3);
  for (const title of homepageTitles) {
    assert.match(title, /: September 11 field guide$/);
    assert.doesNotMatch(title, / — September 11 field guide$/);
  }

  assert.match(batch, /title:x\.title\+': September 11 field guide'/);
  assert.doesNotMatch(batch, /title:x\.title\+' — September 11 field guide'/);
});
