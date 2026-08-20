import aug19Meta from '../aug19-meta.json';
import { fleetServices, researchPosts } from '../fleet-content';
import { blogPosts } from '../data';

const base = 'https://outsourcingassistant.com';

// These are content release dates, updated with the corresponding page content.
// They must never be replaced with request/build time.
const staticLastModified: Record<string, string> = {
  '': '2026-07-29',
  '/services': '2026-07-27',
  '/blog': '2026-08-07',
  '/blog/top-30-virtual-assistant-outsourcing-companies': '2026-07-29',
  '/research': '2026-08-07',
  '/alternatives': '2026-07-29',
  '/contact': '2026-07-27',
  '/privacy': '2026-07-27',
  '/terms': '2026-07-27',
  '/cancellation-policy': '2026-07-27',
};
const serviceLastModified = '2026-07-27';

function entry(path: string, lastModified: string) {
  return `<url><loc>${base}${path}</loc><lastmod>${lastModified}</lastmod></url>`;
}

export async function GET() {
  const staticEntries = Object.entries(staticLastModified);
  const blogPageEntries = Array.from(
    { length: Math.max(1, Math.ceil(blogPosts.length / 20)) },
    (_, i) => i + 1,
  )
    .filter((page) => page > 1)
    .map((page) => [`/blog/page/${page}`, staticLastModified['/blog']] as const);
  const entries = [
    ...staticEntries,
    ...fleetServices.map((service) => [`/services/${service.slug}`, serviceLastModified] as const),
    ...blogPosts.map((post) => [
      `/blog/${post.slug}`,
      post.rich?.updated ?? post.rich?.published ?? post.published ?? staticLastModified['/blog'],
    ] as const),
    ...blogPageEntries,
    ...researchPosts.map((post) => [`/research/${post.slug}`, post.published] as const),
    ...Object.entries(aug19Meta).map(([slug, value]) => [`/${(value as { family: string }).family}/${slug}`, '2026-08-19'] as const),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries
    .map(([path, lastModified]) => entry(path, lastModified))
    .join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
