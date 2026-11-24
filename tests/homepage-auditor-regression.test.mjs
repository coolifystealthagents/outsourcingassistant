import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const home = readFileSync(new URL('../app/_refresh/Experience.tsx', import.meta.url), 'utf8');
const motion = readFileSync(new URL('../app/_refresh/Motion.tsx', import.meta.url), 'utf8');
const shell = readFileSync(new URL('../app/_refresh/Shell.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../app/_refresh/redesign.css', import.meta.url), 'utf8');
const services = readFileSync(new URL('../app/_refresh/ServiceOverview.tsx', import.meta.url), 'utf8');
const content = readFileSync(new URL('../app/_refresh/content.json', import.meta.url), 'utf8');
const booking = readFileSync(new URL('../app/booking-components.tsx', import.meta.url), 'utf8');

test('homepage contrast and service-card refresh contract', () => {
  assert.equal((home.match(/<h1\b/g) || []).length, 1);
  assert.match(home, /alt=\{c\.heroAlt\}/);
  assert.match(content, /"heroImage": "\/assistant-collaboration\.jpg"/);
  assert.ok(existsSync(new URL('../public/assistant-collaboration.jpg', import.meta.url)));
  assert.match(shell, /rf-powered-plate/);
  assert.match(shell, /stealth-agents-parent\.png/);
  assert.match(motion, /className="rf-service-index"/);
  assert.match(styles, /\.rf-powered-plate\{[^}]*background:#fff/);
  assert.match(styles, /\.rf-service-card:nth-child\(2\):before\{background:#fb923c\}/);
  assert.match(styles, /\.rf-page:not\(\.sv-page\):not\(\.rf-contact\) \.rf-hero\{[^}]*background:/);
  const title = layout.match(/default:\s*'([^']+)'/)?.[1] ?? '';
  assert.ok(title.length >= 30 && title.length <= 60, `title length was ${title.length}`);
});

test('service directory is dense, image-led, and testimonial rail keeps subpixel motion', () => {
  assert.match(services, /className="sv-card-index"/);
  assert.match(services, /width="1000" height="667" loading="lazy"/);
  assert.match(content, /"servicesHeroImage": "\/refresh\/services-overview-20261117\.jpg"/);
  assert.match(styles, /\.sv-editorial \.sv-catalog\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(styles, /\.sv-page \.sv-directory\{[^}]*background:#071f3b/);
  assert.match(booking, /let position = element\.scrollLeft/);
  assert.match(booking, /position \+= pixelsPerSecond \* elapsed \/ 1000/);
  assert.match(booking, /element\.scrollLeft = position/);
});
