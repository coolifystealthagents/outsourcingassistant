import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {existsSync,readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {dailyBlogBatch20261012 as blogs} from '../../app/blog-batch-2026-10-12.ts';
import {researchBatch20261012 as research} from '../../app/research-batch-2026-10-12.ts';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const manifest=JSON.parse(readFileSync(resolve(root,'publishing/2026-10-12/manifest.json'),'utf8'));
const items=[...blogs.map(x=>({...x,system:'Blog'})),...research.map(x=>({...x,system:'Research'}))];
const words=x=>JSON.stringify(x).replace(/https?:\/\/\S+/g,' ').match(/[A-Za-z0-9'-]+/g)?.length??0;
assert.equal(blogs.length,12); assert.equal(research.length,5); assert.equal(items.length,17);
assert.equal(new Set(items.map(x=>x.slug)).size,17); assert.equal(new Set(items.map(x=>x.title)).size,17);
for(const item of items){
  assert.equal(item.published,'2026-10-12',`${item.slug}: published`);
  assert.equal(item.updated,'2026-10-12',`${item.slug}: updated`);
  assert.doesNotMatch(item.title,/2026|October\s+12|10[-/]12/i,`${item.slug}: date-free title`);
  assert.ok(item.image?.url===`/oct12/${item.slug}.png`,`${item.slug}: image`);
  assert.ok(words(item)>=(item.system==='Research'?1050:750),`${item.slug}: depth ${words(item)}`);
  if(item.system==='Research'){
    assert.equal(item.sources.length,10,`${item.slug}: ten sources`);
    for(const source of item.sources) assert.match(source.url,/^https:\/\//,`${item.slug}: HTTPS source`);
    assert.equal(item.related.length,3,`${item.slug}: related research`);
  } else {
    assert.ok(item.internalLinks?.some(x=>x.href==='/research'),`${item.slug}: research link`);
  }
}
assert.equal(manifest.blogCount,12); assert.equal(manifest.researchCount,5); assert.equal(manifest.items.length,17);
for(const item of items){const m=manifest.items.find(x=>x.slug===item.slug);assert.ok(m,`${item.slug}: manifest`);assert.equal(m.title,item.title);assert.equal(m.thumbnailTitle,item.title);assert.equal(m.system,item.system);}
const routeChecks=[['app/blog/[slug]/page.tsx',/published|formatDate/i,/related/i],['app/research/[slug]/page.tsx',/published|formatDate/i,/related/i],['app/blog/page.tsx',/BlogListing/],['app/blog/blog-listing.tsx',/blogPosts/,/formatDate/],['app/research/page.tsx',/researchPosts/,/formatDate/]];
for(const [path,...patterns] of routeChecks){const source=readFileSync(resolve(root,path),'utf8');for(const p of patterns)assert.match(source,p,`${path}: ${p}`);}
const data=readFileSync(resolve(root,'app/data.ts'),'utf8'), fleet=readFileSync(resolve(root,'app/fleet-content.ts'),'utf8');
assert.match(data,/dailyBlogBatch20261012/); assert.match(fleet,/researchBatch20261012/);
const hashes=[];
for(const item of items){const p=resolve(root,'public',item.image.url.slice(1));assert.ok(existsSync(p),`${item.slug}: thumbnail exists`);const buf=readFileSync(p);assert.equal(buf.toString('ascii',1,4),'PNG');assert.equal(buf.readUInt32BE(16),1672);assert.equal(buf.readUInt32BE(20),941);hashes.push(createHash('sha256').update(buf).digest('hex'));}
assert.equal(new Set(hashes).size,17,'unique thumbnail files');
const paragraphs=items.flatMap(x=>x.sections.flatMap(s=>s.paragraphs??[])).filter(x=>x.split(/\s+/).length>=20);
assert.equal(new Set(paragraphs).size,paragraphs.length,'duplicate substantive paragraph in batch');
console.log(`PASS: ${blogs.length} Blog + ${research.length} Research, ${hashes.length} unique exact-title manifest thumbnails, separate registries/routes, sources and prose verified.`);
