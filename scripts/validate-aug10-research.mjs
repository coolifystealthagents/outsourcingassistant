import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const article = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const index = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(manifest.entries.length >= manifest.minimum, 'accepted count is below minimum');
assert(manifest.family === 'research' && manifest.targetDate === '2026-08-10', 'manifest scope mismatch');
assert(new Set(manifest.entries.map((entry) => entry.slug)).size === manifest.entries.length, 'duplicate accepted slug');
assert(manifest.entries.every((entry) => entry.route === `/research/${entry.slug}`), 'route is not Research-family correct');
assert(manifest.entries.every((entry) => entry.sourcePath === 'app/fleet-content.ts'), 'source path mismatch');
assert(manifest.entries.every((entry) => entry.sourceDate === '2026-08-10' && entry.sourceDateField === 'published'), 'source date mismatch');
assert(article.includes("'@type':'Article'") && article.includes('datePublished:post.published'), 'JSON-LD datePublished wiring missing');
assert(article.includes('time dateTime={post.published}'), 'visible time wiring missing');
assert(article.includes('alternates:{canonical:`${base}/research/${p.slug}`}'), 'canonical wiring missing');
assert(sitemap.includes('researchPosts.map((post) => [`/research/${post.slug}`, post.published]'), 'sitemap eligibility wiring missing');
assert(index.includes('sort((a,b)=>b.published.localeCompare(a.published)'), 'index newest-first sort missing');
assert(source.includes("published: '2026-08-10', updated: '2026-08-10'"), 'authoritative August 10 source date missing');

for (const entry of manifest.entries) {
  assert(source.includes(`'${entry.slug}'`), `${entry.slug}: source record missing`);
  const sourceRecord = source.split('\n').find((line) => line.includes(`currentBatchTopic('${entry.slug}'`));
  assert(sourceRecord?.includes("{ published: '2026-08-10', updated: '2026-08-10' }"), `${entry.slug}: exact source date field missing from article record`);
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], { encoding: 'utf8' });
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  const introducedRecord = introduced.split('\n').find((line) => line.includes(`currentBatchTopic('${entry.slug}'`));
  assert(introducedRecord, `${entry.slug}: immutable introduction source record missing`);
  assert(sourceRecord?.includes("{ published: '2026-08-10', updated: '2026-08-10' }"), `${entry.slug}: exact current source date field missing`);
  const builtPath = path.join(root, '.next/server/app/research', entry.slug, 'index.html');
  if (fs.existsSync(builtPath)) {
    const built = fs.readFileSync(builtPath, 'utf8');
    assert(built.includes('2026-08-10'), `${entry.slug}: built route does not expose target date`);
  }
}

console.log(`Validated ${manifest.entries.length} August 10 Research entries, source/rendered dates, provenance, canonical routes, sitemap eligibility, and newest-first index order.`);
