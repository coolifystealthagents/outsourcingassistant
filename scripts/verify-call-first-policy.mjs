import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const pricing = read('app/pricing/page.tsx');
const contact = read('app/contact/page.tsx');
const fleet = read('app/fleet-content.ts');
const publicSource = [pricing, contact, fleet].join('\n');

if (!pricing.includes("redirect('/contact')")) throw new Error('/pricing must redirect to /contact');
if (pricing.includes('publicTiers')) throw new Error('/pricing must not render public tiers');
if (contact.includes('publicTiers')) throw new Error('/contact must not import or render public tiers');
if (!contact.includes('Support needed')) throw new Error('/contact must ask for support needs without rates');
if (/\$\s*\d|\d+\s*\/\s*hour|\d+\s*per\s*hour/i.test(publicSource)) throw new Error('Public pricing or hourly rates remain');

console.log('PASS: call-first policy, pricing redirect, and rate-free contact intake verified');
