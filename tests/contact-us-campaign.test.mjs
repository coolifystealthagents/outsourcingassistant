import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('contact-us publishes the required trust and indexability contract', () => {
  const page = read('app/contact-us/page.tsx');
  const contact = read('app/_refresh/Contact.tsx');
  const shell = read('app/_refresh/Shell.tsx');
  assert.match(page, /"alternates": \{"canonical": "\/contact-us"\}/);
  assert.doesNotMatch(page, /index:\s*false|"index":\s*false/);
  assert.match(contact, /Free consultation/);
  assert.match(shell, /StealthAgents recruits, employs and supports the remote professionals/);
  assert.doesNotMatch(`${page}${contact}${shell}`, /35\+|Forbes|top rated/i);
  assert.match(shell, /rf-powered-plate/);
  assert.match(shell, /alt="StealthAgents"/);
});

test('contact-us form supports enhanced and native submission without losing fields', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const route = read('app/api/contact/route.ts');
  assert.match(form, /<form action=\{endpoint\} method="post" onSubmit=\{submit\}/);
  assert.match(form, /name="countryCode"/);
  assert.match(form, /name="phoneLocal"/);
  assert.match(form, /name="companyName"/);
  assert.match(form, /name="referral"/);
  assert.match(form, /name="message" rows=\{2\} required/);
  assert.match(form, /textarea\{resize:vertical;min-height:150px\}/);
  for (const field of ['countryCode', 'phoneLocal', 'companyName', 'referral', 'referralSpecify']) {
    assert.ok(route.includes(`text(form,'${field}'`), `API route must preserve ${field}`);
  }
  assert.match(route, /new URL\('\/contact-us'/);
});

test('contact-us imagery and responsive layout assets are local and present', () => {
  const contact = read('app/_refresh/Contact.tsx');
  const css = read('app/_refresh/redesign.css');
  const image = 'public/images/blog-2026-08-20/assistant-training-sample-review.png';
  assert.ok(existsSync(new URL(`../${image}`, import.meta.url)), `${image} must exist`);
  assert.match(contact, /src="\/images\/blog-2026-08-20\/assistant-training-sample-review\.png"/);
  assert.match(contact, /alt="[^\"]+" width="1672" height="941"/);
  assert.doesNotMatch(contact, /team-bacolod\.jpg/);
  assert.match(css, /\.rf-contact-visual-grid\{display:grid;grid-template-columns:minmax\(0,1\.1fr\) minmax\(320px,\.9fr\)/);
  assert.match(css, /@media\(max-width:720px\).*\.rf-contact-visual-grid\{grid-template-columns:1fr/s);
});

test('contact-us is the primary conversion route and legacy contact redirects', () => {
  const shell = read('app/_refresh/Shell.tsx');
  const legacy = read('app/contact/page.tsx');
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(shell, /href="\/contact-us"/);
  assert.doesNotMatch(shell, /href="\/contact"/);
  assert.match(legacy, /permanentRedirect\('\/contact-us'\)/);
  assert.match(sitemap, /'\/contact-us':/);
  assert.doesNotMatch(sitemap, /'\/contact':/);
});
