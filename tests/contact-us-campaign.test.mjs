import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('contact-us publishes the required trust and indexability contract', () => {
  const page = read('app/contact-us/page.tsx');
  assert.match(page, /alternates: \{ canonical: "\/contact-us" \}/);
  assert.match(page, /robots: \{ index: true, follow: true \}/);
  assert.match(page, /<h2>About Stealth Agents<\/h2>/);
  assert.match(page, /Stealth Agents works with over 35\+ different industries\. We're featured on Forbes as the top rated virtual assistant company\./);
  assert.match(page, />Powered by Stealth Agents<\/a>/);
});

test('contact-us form supports enhanced and native submission without losing fields', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const route = read('app/api/contact/route.ts');
  assert.match(form, /<form action=\{endpoint\} method="post" onSubmit=\{submit\}/);
  assert.match(form, /name="countryCode"/);
  assert.match(form, /name="phoneLocal"/);
  assert.match(form, /name="companyName"/);
  assert.match(form, /name="referral"/);
  assert.match(form, /name="message" rows=\{4\} required/);
  for (const field of ['countryCode', 'phoneLocal', 'companyName', 'referral', 'referralSpecify']) {
    assert.ok(route.includes(`text(form,'${field}'`), `API route must preserve ${field}`);
  }
  assert.match(route, /new URL\('\/contact-us'/);
});

test('contact-us imagery and responsive layout assets are local and present', () => {
  const page = read('app/contact-us/page.tsx');
  const css = read('app/contact-us/contact.css');
  const image = 'public/illustrations/getillustrations/grain-teamwork/delegation-team-planning.webp';
  assert.ok(existsSync(new URL(`../${image}`, import.meta.url)), `${image} must exist`);
  assert.match(page, /src="\/illustrations\/getillustrations\/grain-teamwork\/delegation-team-planning\.webp"/);
  assert.match(page, /width="1400" height="1400" alt="[^\"]+"/);
  assert.match(css, /grid-template-columns:minmax\(0,\.82fr\) minmax\(560px,1\.18fr\)/);
  assert.match(css, /@media\(max-width:980px\).*\.tc-hero-grid\{grid-template-columns:1fr\}/s);
  assert.match(css, /@media\(max-width:620px\).*\.tc-hero-grid>\.sa-form-card\{order:-1\}/s);
});

test('contact-us is the primary conversion route and legacy contact redirects', () => {
  const components = read('app/components.tsx');
  const legacy = read('app/contact/page.tsx');
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(components, /href="\/contact-us"/);
  assert.doesNotMatch(components, /href="\/contact"/);
  assert.match(legacy, /permanentRedirect\('\/contact-us'\)/);
  assert.match(sitemap, /'\/contact-us':/);
  assert.doesNotMatch(sitemap, /'\/contact':/);
});
