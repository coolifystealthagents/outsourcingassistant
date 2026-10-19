import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('header visibly attributes the parent and uses the exact three-link navigation', async () => {
  const source = await read('app/components.tsx');
  const client = await read('app/site-client.tsx');
  assert.match(source, /Powered by StealthAgents/);
  assert.match(source, /PrimaryNavigation/);
  assert.match(client, /aria-current=\{current \? 'page'/);
  assert.match(client, /\{ href: '\/', label: 'Home' \}.*\{ href: '\/services', label: 'Services' \}.*\{ href: '\/contact-us', label: 'Contact Us' \}/s);
});

test('every rendered main template provides the shared skip-link target', async () => {
  const templates = [
    'app/not-found.tsx', 'app/thanks-whats-next/page.tsx', 'app/terms/page.tsx',
    'app/research/[slug]/page.tsx', 'app/research/page.tsx', 'app/contact-us/page.tsx',
    'app/services/[slug]/page.tsx', 'app/services/page.tsx', 'app/thank-you/page.tsx',
    'app/resources/assistant-sop-handoff-checklist/page.tsx', 'app/privacy/page.tsx',
    'app/alternatives/page.tsx', 'app/blog/[slug]/page.tsx',
    'app/blog/top-30-virtual-assistant-outsourcing-companies/page.tsx',
    'app/blog/blog-listing.tsx', 'app/page.tsx', 'app/aug19-content.tsx',
    'app/cancellation-policy/page.tsx',
  ];
  for (const template of templates) {
    const source = await read(template);
    assert.match(source, /<main id="main-content"/, template);
  }
});

test('contact copy is claims-safe and mobile parent attribution stays readable', async () => {
  const contact = await read('app/contact-us/page.tsx');
  const css = await read('app/globals.css');
  assert.doesNotMatch(contact, /35\+|Forbes|top rated/i);
  assert.match(contact, /recruiting, account management, training, and ongoing service operations/);
  assert.doesNotMatch(css, /parent-brand-compact[^}]*font-size:(?:7|8|9)px/);
  assert.match(css, /parent-brand-compact\{[^}]*font-size:11px/);
  assert.match(css, /parent-brand-compact span\{[^}]*font-size:10px/);
});

test('homepage role icon alternatives use the role name rather than object coercion', async () => {
  const source = await read('app/page.tsx');
  assert.match(source, /alt=\{`\$\{role\.name\} task icon`\}/);
  assert.doesNotMatch(source, /alt=\{`\$\{role\} task icon`\}/);
});

test('review rail has exactly 14 unique reviews and no playback controls', async () => {
  const source = await read('app/booking-components.tsx');
  const names = [...source.matchAll(/\{ name: '([^']+)'/g)].map(([, name]) => name);
  assert.equal(names.length, 14);
  assert.equal(new Set(names).size, 14);
  assert.doesNotMatch(source, /testimonial-toggle|Pause reviews|Resume reviews/);
  assert.match(source, /data-review-count=\{testimonials\.length\}/);
  assert.match(source, /Array\.from\(\{ length: 5 \}/);
  assert.match(source, /sa-review-star/);
  const css = await read('app/globals.css');
  assert.match(source, /requestAnimationFrame/);
  assert.match(source, /track\.append\(first\)/);
  assert.match(source, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /\.sa-testimonial-track\{display:grid/);
  assert.doesNotMatch(css, /@keyframes sa-testimonial-scroll|translateY\(-190px\)/);
});

test('the React contact form is the only contact submission owner', async () => {
  const acr = await read('app/acr-client.tsx');
  const form = await read('app/contact-us/StandardContactForm.tsx');
  assert.doesNotMatch(acr, /addEventListener\(['"]submit|fetch\(action/);
  assert.match(form, /onSubmit=\{submit\}/);
  assert.match(form, /trackLead/);
});

test('editorial detail heroes are unique topic-labelled generated illustrations', async () => {
  const source = await read('app/editorial-images.ts');
  const route = await read('app/editorial-art/[slug]/route.ts');
  assert.match(source, /editorial-art\/\$\{family\}-\$\{encodeURIComponent\(slug\)\}\.svg/);
  assert.match(source, /encodeURIComponent\(title\)/);
  assert.match(route, /embeddedFont/);
  assert.doesNotMatch(route, /font:[^;}]*Arial/);
});

test('blog layout never renders banners before the header or after the footer', async () => {
  const source = await read('app/blog/layout.tsx');
  assert.doesNotMatch(source, /BlogBanner/);
  assert.match(source, /return children/);
});

test('conversion routes are direct, canonical, and noindex', async () => {
  for (const route of ['thank-you', 'thanks-whats-next']) {
    const source = await read(`app/${route}/page.tsx`);
    assert.match(source, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false\s*\}/);
    assert.match(source, new RegExp(`canonical: ['\"]\\/${route}['\"]`));
  }
});

test('sitemap deduplicates by path and emits deterministic ordering', async () => {
  const source = await read('app/sitemap.xml/route.ts');
  assert.match(source, /new Map<string, string>/);
  assert.match(source, /byPath\.set\(path, lastModified\)/);
  assert.match(source, /sort\(\(\[left\], \[right\]\) => left\.localeCompare\(right\)\)/);
  assert.doesNotMatch(source, /['\"]\/(?:thank-you|thanks-whats-next)['\"]/);
});

test('all required security headers and canonical host redirect are configured', async () => {
  const source = await read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(source, new RegExp(header));
  assert.match(source, /frame-src 'self' https:\/\/go\.oncehub\.com/);
  assert.match(source, /type: 'host', value: 'www\.outsourcingassistant\.com'/);
  assert.match(source, /destination: 'https:\/\/outsourcingassistant\.com\/:path\*'/);
});

test('mobile menu is modal, focus trapped, and escape dismissible', async () => {
  const source = await read('app/site-client.tsx');
  assert.match(source, /role="dialog" aria-modal="true"/);
  assert.match(source, /event\.key === 'Escape'/);
  assert.match(source, /event\.key === 'Tab'/);
  assert.match(source, /last\.focus\(\)/);
  assert.match(source, /first\.focus\(\)/);
  assert.match(source, /aria-expanded=\{open\}/);
});

test('visible punctuation sanitizer normalizes dash punctuation but excludes code', async () => {
  const source = await read('app/site-client.tsx');
  assert.match(source, /export const sanitizeVisibleText/);
  assert.match(source, /\\u2013\\u2014/);
  assert.match(source, /script,style,pre,code,kbd,samp/);
  assert.match(source, /MutationObserver/);
});
