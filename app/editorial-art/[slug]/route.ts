import type { NextRequest } from 'next/server';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const embeddedFont = readFileSync(join(process.cwd(), 'public/fonts/dm-sans-700.ttf')).toString('base64');

const escapeXml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[character] ?? character));

function wrapTitle(title: string) {
  const lines: string[] = [];
  let line = '';
  for (const word of title.trim().split(/\s+/)) {
    if (`${line} ${word}`.trim().length > 22 && line) { lines.push(line); line = word; }
    else line = `${line} ${word}`.trim();
  }
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function hash(value: string) {
  let result = 2166136261;
  for (const character of value) result = Math.imul(result ^ character.charCodeAt(0), 16777619);
  return result >>> 0;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = request.nextUrl.searchParams.get('title')?.slice(0, 180) || 'Delegation operating guide';
  const family = request.nextUrl.searchParams.get('family')?.slice(0, 40) || 'Editorial guide';
  const seed = hash(slug);
  const accent = ['#f59e0b', '#60a5fa', '#a3d65c', '#fb7185'][seed % 4];
  const pale = ['#dbeafe', '#fef3c7', '#dcfce7', '#ffe4e6'][(seed >>> 3) % 4];
  const label = /calendar|schedule|meeting/i.test(title) ? 'SCHEDULE' : /crm|data|record/i.test(title) ? 'SYSTEMS' : /research|source|evidence/i.test(title) ? 'EVIDENCE' : /inbox|support|customer/i.test(title) ? 'SERVICE' : /access|security|permission/i.test(title) ? 'ACCESS' : 'WORKFLOW';
  const lines = wrapTitle(title).map((line, index) => `<text x="88" y="${236 + index * 62}" class="title">${escapeXml(line)}</text>`).join('');
  const graph = Array.from({ length: 5 }, (_, index) => `${40 + index * 82},${350 - ((seed >>> (index * 3)) % 155)}`).join(' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-labelledby="title desc"><title id="title">${escapeXml(title)}</title><desc id="desc">A topic-specific Outsourcing Assistant workflow illustration for ${escapeXml(title)}.</desc><style>@font-face{font-family:EmbeddedDM;src:url(data:font/ttf;base64,${embeddedFont}) format('truetype');font-weight:700}.title{font:700 46px EmbeddedDM,sans-serif;fill:#f8fafc}.small{font:700 18px EmbeddedDM,sans-serif;letter-spacing:3px;fill:${accent}}.note{font:700 20px EmbeddedDM,sans-serif;fill:#0b172a}.muted{font:700 17px EmbeddedDM,sans-serif;fill:#475569}</style><rect width="1280" height="720" fill="#071525"/><circle cx="1160" cy="80" r="280" fill="none" stroke="#17324f" stroke-width="2"/><circle cx="1100" cy="680" r="390" fill="none" stroke="#17324f" stroke-width="2"/><text x="88" y="104" class="small">OUTSOURCING ASSISTANT · ${escapeXml(family.toUpperCase())}</text><rect x="88" y="142" width="84" height="5" rx="3" fill="${accent}"/>${lines}<g transform="translate(720 112)"><rect width="474" height="500" rx="34" fill="#f8fafc"/><rect x="34" y="34" width="406" height="72" rx="18" fill="${pale}"/><circle cx="70" cy="70" r="13" fill="${accent}"/><text x="98" y="77" class="note">${label} HANDOFF</text><g fill="#fff" stroke="#94a3b8" stroke-width="2"><rect x="42" y="138" width="184" height="86" rx="14"/><rect x="248" y="138" width="184" height="86" rx="14"/><rect x="42" y="246" width="390" height="132" rx="14"/></g><text x="62" y="174" class="muted">Input</text><text x="268" y="174" class="muted">Owner rule</text><text x="62" y="282" class="muted">Evidence and next action</text><polyline points="${graph}" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><line x1="68" y1="420" x2="406" y2="420" stroke="#cbd5e1" stroke-width="3"/></g><text x="88" y="650" class="small">SCOPE · HANDOFF · REVIEW</text></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' } });
}
