import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(source, /const organization=\{'@id':`\$\{base\}\/#organization`\}/);
assert.match(source, /author:organization,publisher:organization/);
assert.match(source, /mainEntityOfPage:`\$\{base\}\/research\/\$\{post\.slug\}`/);