import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import { EditorialLayout, headingId } from './editorial';
import type { TocItem } from './site-client';
import meta from './aug19-meta.json';

const SITE = 'https://outsourcingassistant.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };
type ArticleSource = { body: string; updated: string; serviceHandoff?: { heading: string; href: string; label: string; paragraph: string } };

function item(slug: string): Item { return (meta as Record<string, Item>)[slug]; }

function source(family: Family, slug: string): ArticleSource {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8');
  const frontmatter = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  const value = (key: string) => frontmatter?.[1].match(new RegExp(`^${key}:\\s*"([^"\\n]+)"\\s*$`, 'm'))?.[1];
  const handoffHref = value('serviceHandoffHref');
  const handoffLabel = value('serviceHandoffLabel');
  const handoffHeading = value('serviceHandoffHeading');
  const handoffParagraph = value('serviceHandoffParagraph');
  return {
    body: raw.replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, ''),
    updated: value('updatedAt')?.slice(0, 10) || '2026-08-19',
    serviceHandoff: handoffHref && handoffLabel && handoffHeading && handoffParagraph
      ? { href: handoffHref, label: handoffLabel, heading: handoffHeading, paragraph: handoffParagraph }
      : undefined,
  };
}

function articleToc(article: ArticleSource): TocItem[] {
  const headings = [...article.body.matchAll(/^(##|###)\s+(.+)$/gm)].map(match => ({ label: match[2].trim(), level: match[1] === '###' ? 3 as const : 2 as const }));
  if (article.serviceHandoff) headings.push({ label: article.serviceHandoff.heading, level: 2 });
  return headings.map((heading, index) => ({ ...heading, id: headingId(heading.label, index) }));
}

function blocks(text: string, items: TocItem[]) {
  let headingIndex = 0;
  return text.split(/\n\n+/).filter(Boolean).map((part, index) => {
    if (part.startsWith('### ')) {
      const heading = items[headingIndex++];
      return <h3 key={index} id={heading.id} className="article-subsection-heading" style={{ scrollMarginTop: '7rem' }}>{part.slice(4)}</h3>;
    }
    if (part.startsWith('## ')) {
      const heading = items[headingIndex++];
      return <h2 key={index} id={heading.id} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>{part.slice(3)}</h2>;
    }
    if (part.startsWith('- ')) return <ul key={index}>{part.split('\n').map((line, lineIndex) => <li key={lineIndex}>{line.replace(/^- /, '').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1: $2')}</li>)}</ul>;
    return <p key={index}>{part}</p>;
  });
}

export function getAug19Metadata(family: Family, slug: string): Metadata {
  const entry = item(slug);
  const article = source(family, slug);
  return { title: entry.title, description: entry.description, alternates: { canonical: `/${family}/${slug}` }, openGraph: { title: entry.title, description: entry.description, type: 'article', url: `${SITE}/${family}/${slug}`, publishedTime: '2026-08-19', modifiedTime:article.updated, images: [entry.hero] } };
}

export function renderAug19Article(family: Family, slug: string) {
  const entry = item(slug);
  const article = source(family, slug);
  const items = articleToc(article);
  const handoffId = article.serviceHandoff ? items.find(tocItem => tocItem.label === article.serviceHandoff?.heading)?.id : undefined;
  const related = family === 'research'
    ? [{ href: '/research', label: 'More assistant operations research' }, { href: '/blog', label: 'Practical assistant workflow guides' }]
    : [{ href: '/blog', label: 'More assistant workflow guides' }, { href: '/research', label: 'Evidence and operations research' }];
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: entry.title, datePublished: '2026-08-19', dateModified:article.updated, mainEntityOfPage: `${SITE}/${family}/${slug}`, image: `${SITE}${entry.hero}` };

  return <><Header/><main className="article-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><EditorialLayout items={items} family={family} related={related}><h1>{entry.title}</h1><p className="article-meta"><time dateTime="2026-08-19">August 19, 2026</time>{article.updated !== '2026-08-19' && <> · <time dateTime={article.updated}>Updated {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${article.updated}T00:00:00Z`))}</time></>}</p><img className="article-hero-image" src={entry.hero} alt={`${entry.title} editorial illustration`} width="1536" height="1024"/><div className="article-body">{blocks(article.body, items)}</div>{article.serviceHandoff&&<section className="card article-block"><h2 id={handoffId} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>{article.serviceHandoff.heading}</h2><p>{article.serviceHandoff.paragraph}</p><p><a href={article.serviceHandoff.href}>{article.serviceHandoff.label}</a></p></section>}</EditorialLayout><CTA/></main><Footer/></>;
}
