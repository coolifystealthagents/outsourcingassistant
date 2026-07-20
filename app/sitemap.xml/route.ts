import { blogPosts, site } from '../data';

export function GET() {
  const paths = ['', '/blog', '/resources/assistant-sop-handoff-checklist', '/contact', '/privacy', '/terms', ...blogPosts.map(p=>'/blog/'+p.slug)];
  const urls = paths.map((p)=>`<url><loc>${site.url}${p}</loc><lastmod>2026-07-19</lastmod></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
