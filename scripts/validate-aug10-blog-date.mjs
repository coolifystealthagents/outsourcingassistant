import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/blog.json'), 'utf8'));
const assert = (ok, message) => { if (!ok) throw new Error(message); };
assert(manifest.schemaVersion === 1 && manifest.contract === 'sites3-aug10-public-date-v6', 'manifest identity mismatch');
assert(manifest.family === 'blog' && manifest.domain === 'outsourcingassistant.com', 'manifest family/domain mismatch');
assert(manifest.entries.length >= manifest.minimum && manifest.entries.length >= 22, 'accepted count is below minimum');
const seen = new Set();
const source = fs.readFileSync(path.join(root, 'app/blog-batch-2026-08-10-run2.ts'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
for (const entry of manifest.entries) {
  assert(!seen.has(entry.slug), `duplicate slug: ${entry.slug}`); seen.add(entry.slug);
  assert(entry.route === `/blog/${entry.slug}`, `wrong route: ${entry.slug}`);
  assert(entry.sourcePath === 'app/blog-batch-2026-08-10-run2.ts', `wrong source path: ${entry.slug}`);
  assert(entry.provenance === 'original-aug10-batch' && /^[0-9a-f]{40}$/.test(entry.introducedByCommit), `bad provenance: ${entry.slug}`);
  assert(entry.sourceDateField === 'published' && entry.sourceDate === '2026-08-10', `bad source date: ${entry.slug}`);
  assert(entry.renderedDate === '2026-08-10' && entry.renderedDateFields.includes('datePublished') && entry.renderedDateFields.includes('time[datetime]'), `bad rendered date declaration: ${entry.slug}`);
  assert(source.includes(`'${entry.slug}'`), `slug absent from source: ${entry.slug}`);
  assert(data.includes("blogPosts.sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''))"), 'index sort missing');
  assert(route.includes('datePublished: post.rich?.published ?? post.published'), 'JSON-LD datePublished wiring missing');
  assert(route.includes('time dateTime={published}'), 'rendered time wiring missing');
  assert(sitemap.includes('post.published'), 'sitemap eligibility wiring missing');
  let parent = '';
  try { parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/blog-batch-2026-08-10-run2.ts`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { /* newly introduced source file */ }
  assert(!parent.includes(`'${entry.slug}'`), `slug existed before introducing commit: ${entry.slug}`);
}
console.log(`Validated ${manifest.entries.length} August 10 Blog entries, source provenance, rendered dates, canonical routes, sitemap eligibility, and newest-first index wiring.`);
