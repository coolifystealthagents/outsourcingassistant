import fs from 'node:fs';

const blogPath = 'app/blog-batch-2026-10-02.ts';
const researchPath = 'app/research-batch-2026-10-02.ts';
const blog = fs.readFileSync(blogPath, 'utf8');
const research = fs.readFileSync(researchPath, 'utf8');

const defects = [];
const reject = (condition, file, evidence) => {
  if (condition) defects.push({ file, evidence });
};

reject(/const makeOctoberPost\s*=/.test(blog), blogPath,
  'All October 2 Blog articles are emitted by makeOctoberPost. Article-specific metadata does not make a shared long-form body engine independent.');
reject(/specs\.map\(makeOctoberPost\)/.test(blog), blogPath,
  'The 12 Blog records are mapped through one prose generator.');
reject(/import \{ buildDecisionResearch/.test(research), researchPath,
  'October 2 Research imports the September 22 buildDecisionResearch prose engine.');
reject(/buildDecisionResearch\(spec, sources\)/.test(research), researchPath,
  'The five Research records are first generated from one shared long-form body.');
reject(/Application note \$\{index \+ 1\}/.test(research), researchPath,
  'A repeated suffix pads every inherited Research paragraph with interpolated topic nouns.');
reject(/post\.faqs\.map/.test(research) && /accountable owner/.test(research), researchPath,
  'Every inherited FAQ receives the same owner sentence with only the owner value changed.');
reject(/post\.serviceHandoff\.paragraphs\.map/.test(research), researchPath,
  'Every inherited service handoff receives the same retained-boundary suffix.');

const result = {
  audit: 'October 2 independent structure and argument gate',
  status: defects.length ? 'failed' : 'passed',
  rule: 'No family-wide long-form prose builder, imported campaign body, interpolation padding, or common scenario/argument engine.',
  defects,
};

console.log(JSON.stringify(result, null, 2));
if (defects.length) process.exitCode = 1;
