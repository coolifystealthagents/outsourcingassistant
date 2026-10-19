import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const services = readFileSync(new URL('../app/services/page.tsx', import.meta.url), 'utf8');
const booking = readFileSync(new URL('../app/booking-components.tsx', import.meta.url), 'utf8');

test('homepage auditor contract', () => {
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(page, /alt=["']\s*["']/);
  assert.doesNotMatch(chrome, /alt=["']\s*["']/);
  assert.match(page, /alt=\{`\$\{role\.name\} task icon`\}/);
  assert.doesNotMatch(page, /alt=\{`\$\{role\} task icon`\}/);
  assert.doesNotMatch(page, /oa-desk-card|oa-image-label|Handoff board/);
  assert.match(styles, /\.oa-image-frame\{position:absolute;inset:0;overflow:visible;border-radius:0;background:transparent\}/);
  assert.match(styles, /\.oa-image-frame img\{object-fit:contain;object-position:center;background:transparent;padding:0;filter:none\}/);
  assert.doesNotMatch(styles, /\.oa-image-frame img\{[^}]*background:#e9f1ff/);
  assert.doesNotMatch(styles, /\.oa-image-frame:after/);
  assert.match(styles, /@media\(max-width:480px\)\{\.logo-name\{display:none\}\}/);
  assert.match(styles, /@media\(min-width:981px\) and \(max-height:820px\)[^{]*\{[^}]*\.nav-inner\{min-height:70px\}[^}]*\.oa-hero\{padding-top:24px;padding-bottom:28px\}/);
  assert.match(styles, /@media\(min-width:981px\) and \(max-height:820px\)\{\:root\{--header-height:70px\}\}\s*$/);
  const title = layout.match(/default:\s*'([^']+)'/)?.[1] ?? '';
  assert.ok(title.length >= 30 && title.length <= 60, `title length was ${title.length}`);
});

test('service heroes stay sharp and the testimonial rail keeps subpixel motion', () => {
  assert.match(services, /src="\/assistant-collaboration\.jpg"/);
  assert.doesNotMatch(services, /delegation-team-planning\.webp/);
  assert.match(styles, /\.service-hero-image img\{[^}]*height:auto[^}]*aspect-ratio:16\/9[^}]*object-fit:cover/);
  assert.doesNotMatch(styles, /\.service-hero-image img\{[^}]*height:430px/);
  assert.match(booking, /let position = element\.scrollLeft/);
  assert.match(booking, /position \+= pixelsPerSecond \* elapsed \/ 1000/);
  assert.match(booking, /element\.scrollLeft = position/);
});
