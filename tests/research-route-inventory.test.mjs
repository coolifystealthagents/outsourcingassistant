import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const sourcePath = path.join(root, 'app', 'fleet-content.ts');

test('registered research batches do not publish duplicate route slugs', async () => {
  const source = await readFile(sourcePath, 'utf8');
  const imports = new Map(
    [...source.matchAll(/import\s+\{\s*(researchBatch[A-Za-z0-9]+)\s*\}\s+from\s+'(\.\/research-batch-[^']+)'/g)]
      .map(([, name, file]) => [name, file]),
  );
  const registry = source.match(/export const researchPosts:[\s\S]*?=\s*\[([\s\S]*?)\];/);
  assert.ok(registry, 'research post registry is present');

  const batches = [...registry[1].matchAll(/\.\.\.(researchBatch[A-Za-z0-9]+)/g)].map(([, name]) => name);
  assert.ok(batches.length > 0, 'research post registry has batches');

  const owners = new Map();
  for (const batch of batches) {
    const relativeFile = imports.get(batch);
    assert.ok(relativeFile, `${batch} is imported by the registry source`);
    const batchSource = await readFile(path.join(root, 'app', `${relativeFile.slice(2)}.ts`), 'utf8');
    for (const [, slug] of batchSource.matchAll(/"slug":\s*"([^"]+)"/g)) {
      assert.ok(!owners.has(slug), `duplicate registered research slug ${slug} in ${owners.get(slug)} and ${batch}`);
      owners.set(slug, batch);
    }
  }
});
