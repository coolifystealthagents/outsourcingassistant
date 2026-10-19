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

type Topic = 'schedule' | 'systems' | 'evidence' | 'service' | 'access' | 'finance' | 'quality' | 'handoff' | 'people' | 'workflow';
function topicFor(title: string): Topic {
  if (/calendar|schedule|meeting|timezone|travel|appointment|deadline/i.test(title)) return 'schedule';
  if (/crm|data|record|database|system|integration|automation/i.test(title)) return 'systems';
  if (/research|source|evidence|claim|citation|content|article/i.test(title)) return 'evidence';
  if (/inbox|support|customer|ticket|service|recovery/i.test(title)) return 'service';
  if (/access|security|permission|password|governance|offboard/i.test(title)) return 'access';
  if (/invoice|bookkeep|finance|payment|billing|payroll|expense/i.test(title)) return 'finance';
  if (/quality|review|sample|scorecard|acceptance|defect|audit/i.test(title)) return 'quality';
  if (/handoff|shift|async|escalat|routing|queue|delegat/i.test(title)) return 'handoff';
  if (/hire|role|team|assistant|manager|owner|capacity|staff/i.test(title)) return 'people';
  return 'workflow';
}

function topicVisual(topic: Topic, accent: string, pale: string, seed: number) {
  const jitter = (seed % 28) - 14;
  const common = `fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"`;
  switch (topic) {
    case 'schedule':
      return `<g data-visual="schedule"><rect x="48" y="92" width="378" height="330" rx="26" fill="#fff" stroke="#94a3b8" stroke-width="3"/><rect x="48" y="92" width="378" height="70" rx="26" fill="${pale}"/><line x1="48" y1="162" x2="426" y2="162" stroke="#94a3b8" stroke-width="3"/><g fill="${accent}"><circle cx="120" cy="226" r="16"/><circle cx="238" cy="226" r="16"/><circle cx="356" cy="302" r="16"/><rect x="96" y="338" width="166" height="28" rx="14"/></g><g stroke="#cbd5e1" stroke-width="3"><line x1="166" y1="184" x2="166" y2="398"/><line x1="284" y1="184" x2="284" y2="398"/><line x1="74" y1="272" x2="400" y2="272"/></g><text x="74" y="137" class="note">SCHEDULE MAP</text></g>`;
    case 'systems':
      return `<g data-visual="systems"><g fill="${pale}" stroke="${accent}" stroke-width="4"><ellipse cx="237" cy="112" rx="150" ry="42"/><path d="M87 112v92c0 24 67 42 150 42s150-18 150-42v-92"/><path d="M87 204v92c0 24 67 42 150 42s150-18 150-42v-92"/></g><g fill="#fff" stroke="#94a3b8" stroke-width="3"><rect x="52" y="382" width="118" height="70" rx="16"/><rect x="178" y="382" width="118" height="70" rx="16"/><rect x="304" y="382" width="118" height="70" rx="16"/></g><path d="M237 338v28M111 366v16M363 366v16M111 366h252" ${common}/><text x="137" y="188" class="note">SOURCE OF TRUTH</text></g>`;
    case 'evidence':
      return `<g data-visual="evidence"><g transform="translate(${jitter} 0)"><rect x="70" y="86" width="255" height="320" rx="20" fill="#fff" stroke="#94a3b8" stroke-width="3"/><rect x="98" y="124" width="152" height="18" rx="9" fill="${accent}"/><g stroke="#cbd5e1" stroke-width="9"><line x1="98" y1="180" x2="288" y2="180"/><line x1="98" y1="220" x2="270" y2="220"/><line x1="98" y1="260" x2="286" y2="260"/><line x1="98" y1="300" x2="230" y2="300"/></g><circle cx="328" cy="342" r="82" fill="${pale}" stroke="${accent}" stroke-width="8"/><line x1="386" y1="400" x2="438" y2="452" ${common}/><path d="M292 342l25 25 48-57" ${common}/></g><text x="92" y="474" class="note">SOURCE CHECK</text></g>`;
    case 'service':
      return `<g data-visual="service"><g fill="#fff" stroke="#94a3b8" stroke-width="3"><rect x="46" y="88" width="382" height="98" rx="20"/><rect x="46" y="205" width="382" height="98" rx="20"/><rect x="46" y="322" width="382" height="98" rx="20"/></g><g fill="${accent}"><circle cx="91" cy="137" r="18"/><circle cx="91" cy="254" r="18"/><circle cx="91" cy="371" r="18"/></g><g stroke="#cbd5e1" stroke-width="9"><line x1="130" y1="126" x2="324" y2="126"/><line x1="130" y1="151" x2="272" y2="151"/><line x1="130" y1="243" x2="350" y2="243"/><line x1="130" y1="268" x2="250" y2="268"/><line x1="130" y1="360" x2="310" y2="360"/><line x1="130" y1="385" x2="364" y2="385"/></g><path d="M360 106l22 22 34-42" ${common}/><text x="48" y="470" class="note">SERVICE QUEUE</text></g>`;
    case 'access':
      return `<g data-visual="access"><rect x="72" y="206" width="330" height="244" rx="30" fill="#fff" stroke="#94a3b8" stroke-width="3"/><path d="M146 206v-56c0-72 43-112 91-112s91 40 91 112v56" fill="none" stroke="${accent}" stroke-width="22"/><circle cx="237" cy="302" r="34" fill="${pale}" stroke="${accent}" stroke-width="6"/><line x1="237" y1="336" x2="237" y2="386" ${common}/><g fill="${accent}"><circle cx="104" cy="476" r="10"/><circle cx="140" cy="476" r="10"/><circle cx="176" cy="476" r="10"/></g><text x="211" y="484" class="note">OWNER APPROVAL</text></g>`;
    case 'finance':
      return `<g data-visual="finance"><rect x="62" y="68" width="350" height="394" rx="24" fill="#fff" stroke="#94a3b8" stroke-width="3"/><text x="94" y="120" class="note">INVOICE REVIEW</text><g stroke="#cbd5e1" stroke-width="8"><line x1="94" y1="162" x2="360" y2="162"/><line x1="94" y1="204" x2="312" y2="204"/><line x1="94" y1="246" x2="348" y2="246"/></g><g fill="${pale}"><rect x="94" y="296" width="66" height="112" rx="12"/><rect x="184" y="254" width="66" height="154" rx="12"/><rect x="274" y="326" width="66" height="82" rx="12"/></g><path d="M94 382l123-92 90 47 77-116" ${common}/><circle cx="384" cy="221" r="10" fill="${accent}"/></g>`;
    case 'quality':
      return `<g data-visual="quality"><circle cx="237" cy="252" r="172" fill="#fff" stroke="#cbd5e1" stroke-width="28"/><path d="M237 80a172 172 0 0 1 158 104" fill="none" stroke="${accent}" stroke-width="28" stroke-linecap="round"/><circle cx="237" cy="252" r="94" fill="${pale}"/><text x="176" y="266" class="score">${82 + seed % 16}%</text><path d="M150 382l46 46 104-116" ${common}/><text x="130" y="484" class="note">QUALITY SAMPLE</text></g>`;
    case 'handoff':
      return `<g data-visual="handoff"><g fill="#fff" stroke="#94a3b8" stroke-width="3"><rect x="42" y="102" width="132" height="286" rx="22"/><rect x="300" y="102" width="132" height="286" rx="22"/></g><text x="76" y="148" class="note">ASSIST</text><text x="334" y="148" class="note">OWNER</text><g fill="${pale}"><rect x="66" y="188" width="84" height="54" rx="12"/><rect x="66" y="270" width="84" height="54" rx="12"/><rect x="324" y="188" width="84" height="54" rx="12"/><rect x="324" y="270" width="84" height="54" rx="12"/></g><path d="M178 214h104l-24-24m24 24l-24 24M296 298H192l24-24m-24 24l24 24" ${common}/><text x="129" y="450" class="note">HANDOFF LOOP</text></g>`;
    case 'people':
      return `<g data-visual="people"><g fill="${pale}" stroke="${accent}" stroke-width="5"><circle cx="237" cy="112" r="54"/><circle cx="100" cy="306" r="48"/><circle cx="237" cy="366" r="48"/><circle cx="374" cy="306" r="48"/></g><g stroke="${accent}" stroke-width="7"><line x1="207" y1="158" x2="126" y2="263"/><line x1="237" y1="166" x2="237" y2="318"/><line x1="267" y1="158" x2="348" y2="263"/></g><g fill="#fff"><circle cx="237" cy="102" r="16"/><circle cx="100" cy="296" r="14"/><circle cx="237" cy="356" r="14"/><circle cx="374" cy="296" r="14"/></g><text x="138" y="464" class="note">ROLE OWNERSHIP</text></g>`;
    default:
      return `<g data-visual="workflow"><g fill="#fff" stroke="#94a3b8" stroke-width="3"><rect x="38" y="92" width="112" height="330" rx="20"/><rect x="181" y="92" width="112" height="330" rx="20"/><rect x="324" y="92" width="112" height="330" rx="20"/></g><g fill="${accent}"><rect x="58" y="132" width="72" height="76" rx="14"/><rect x="201" y="238" width="72" height="94" rx="14"/><rect x="344" y="152" width="72" height="128" rx="14"/></g><path d="M150 250h31M293 250h31" ${common}/><text x="58" y="458" class="note">WORKFLOW BOARD</text></g>`;
  }
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = request.nextUrl.searchParams.get('title')?.slice(0, 180) || 'Delegation operating guide';
  const family = request.nextUrl.searchParams.get('family')?.slice(0, 40) || 'Editorial guide';
  const seed = hash(slug);
  const accent = ['#f59e0b', '#60a5fa', '#a3d65c', '#fb7185'][seed % 4];
  const pale = ['#dbeafe', '#fef3c7', '#dcfce7', '#ffe4e6'][(seed >>> 3) % 4];
  const topic = topicFor(title);
  const lines = wrapTitle(title).map((line, index) => `<text x="88" y="${236 + index * 62}" class="title">${escapeXml(line)}</text>`).join('');
  const visual = topicVisual(topic, accent, pale, seed);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-labelledby="title desc"><title id="title">${escapeXml(title)}</title><desc id="desc">A ${topic} illustration for ${escapeXml(title)}.</desc><style>@font-face{font-family:EmbeddedDM;src:url(data:font/ttf;base64,${embeddedFont}) format('truetype');font-weight:700}.title{font:700 46px EmbeddedDM,sans-serif;fill:#f8fafc}.small{font:700 18px EmbeddedDM,sans-serif;letter-spacing:3px;fill:${accent}}.note{font:700 18px EmbeddedDM,sans-serif;fill:#0b172a}.score{font:700 38px EmbeddedDM,sans-serif;fill:#0b172a}</style><rect width="1280" height="720" fill="#071525"/><circle cx="1160" cy="80" r="280" fill="none" stroke="#17324f" stroke-width="2"/><circle cx="1100" cy="680" r="390" fill="none" stroke="#17324f" stroke-width="2"/><text x="88" y="104" class="small">OUTSOURCING ASSISTANT · ${escapeXml(family.toUpperCase())}</text><rect x="88" y="142" width="84" height="5" rx="3" fill="${accent}"/>${lines}<g transform="translate(720 86)"><rect width="474" height="548" rx="34" fill="#f8fafc"/>${visual}</g><text x="88" y="650" class="small">${topic.toUpperCase()} · SCOPE · REVIEW</text></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' } });
}
