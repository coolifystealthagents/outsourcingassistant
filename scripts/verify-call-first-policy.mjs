import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const pricing = read('app/pricing/page.tsx');
const contact = read('app/contact-us/StandardContactForm.tsx');
const fleet = read('app/fleet-content.ts');
const publicSource = [pricing, contact, fleet].join('\n');

if (!pricing.includes("redirect('/contact-us')")) throw new Error('/pricing must redirect to /contact-us');
if (pricing.includes('publicTiers')) throw new Error('/pricing must not render public tiers');
if (contact.includes('publicTiers')) throw new Error('/contact-us must not import or render public tiers');
if (!contact.includes('How Many Positions to Fill')) throw new Error('/contact-us must ask for staffing needs without rates');
if (/\$\s*\d|\d+\s*\/\s*hour|\d+\s*per\s*hour/i.test(publicSource)) throw new Error('Public pricing or hourly rates remain');

console.log('PASS: call-first policy, pricing redirect, and rate-free contact intake verified');
