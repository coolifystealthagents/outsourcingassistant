import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { EditorialLayout, headingId } from '../../editorial';
import type { TocItem } from '../../site-client';
import { researchPosts, type ResearchPost } from '../../fleet-content';
import { resolveResearchImage } from '../../editorial-images';

const base = 'https://outsourcingassistant.com';
const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

function researchToc(post: ResearchPost): TocItem[] {
  const headings: { label: string; level?: 2 | 3 }[] = [
    { label: 'Headline statistic' },
    { label: 'Key stats' },
    { label: 'Key takeaways' },
    ...post.sections.map(section => ({ label: section.heading })),
  ];
  if (post.body.length) headings.push({ label: 'Research notes' });
  if (post.serviceHandoff) headings.push({ label: post.serviceHandoff.heading });
  headings.push({ label: 'Questions people ask' });
  post.faqs.forEach(faq => headings.push({ label: faq.q, level: 3 }));
  headings.push({ label: 'Sources' });
  if (post.related.length) headings.push({ label: 'Related research' });
  return headings.map((item, index) => ({ ...item, id: headingId(item.label, index) }));
}

const tocId = (items: TocItem[], label: string) => items.find(item => item.label === label)?.id;
const Heading = ({ items, children }: { items: TocItem[]; children: string }) => <h2 id={tocId(items, children)} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>{children}</h2>;

export function generateStaticParams() { return researchPosts.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find(item => item.slug === slug);
  if (!post) return {};
  const hero = resolveResearchImage(post);
  return { title: post.title, description: post.excerpt, alternates: { canonical: `${base}/research/${post.slug}` }, openGraph: { title: post.title, description: post.excerpt, type: 'article', url: `${base}/research/${post.slug}`, publishedTime: post.published, modifiedTime: post.updated, images: [{ url: hero.url, alt: hero.alt }] } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find(item => item.slug === slug);
  if (!post) notFound();
  const hero = resolveResearchImage(post);
  const items = researchToc(post);
  const related = post.related.map(relatedSlug => {
    const match = researchPosts.find(item => item.slug === relatedSlug);
    return { href: `/research/${relatedSlug}`, label: match?.title ?? relatedSlug.replace(/-/g, ' ') };
  });
  const organization={'@id':`${base}/#organization`};
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Article', '@id': `${base}/research/${post.slug}#article`, headline: post.title, description: post.excerpt, datePublished: post.published, dateModified: post.updated, image: `${base}${hero.url}`, mainEntityOfPage:`${base}/research/${post.slug}`, author:organization,publisher:organization, citation: post.sources.map(source => source.url) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Research', item: `${base}/research` }, { '@type': 'ListItem', position: 3, name: post.title, item: `${base}/research/${post.slug}` }] },
  ];

  return <><Header/><main id="main-content" className="section"><div className="container"><EditorialLayout items={items} family="research" related={related} contentClassName="article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><img className="article-hero-image" src={hero.url} alt={hero.alt}/><p className="article-meta"><time dateTime={post.published}>Published: {formatPublicDate(post.published)}</time>{post.updated !== post.published && <> · <time dateTime={post.updated}>Updated {formatPublicDate(post.updated)}</time></>}</p>
    <section className="card article-block"><Heading items={items}>Headline statistic</Heading><p>{post.headlineStat}</p><p><b>Methodology:</b> {post.methodology}</p></section>
    <section className="card article-block"><Heading items={items}>Key stats</Heading><ul className="list">{post.keyStats.map(stat => <li key={stat}>{stat}</li>)}</ul></section>
    <section className="card article-block"><Heading items={items}>Key takeaways</Heading><ul className="list">{post.takeaways.map(takeaway => <li key={takeaway}>{takeaway}</li>)}</ul></section>
    {post.sections.map(section => <section className="card article-block" key={section.heading}><Heading items={items}>{section.heading}</Heading>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.rows.length ? <div className="article-table-wrap" role="region" aria-label={`${section.heading} evidence table`} tabIndex={0}><table className="article-table"><caption>{section.heading} evidence</caption><thead><tr><th scope="col">Item</th><th scope="col">Finding or control</th><th scope="col">Source</th></tr></thead><tbody>{section.rows.map(row => <tr key={`${row.label}-${row.source}`}><th scope="row">{row.label}</th><td>{row.value}</td><td>{row.source}</td></tr>)}</tbody></table></div> : null}</section>)}
    {post.body.length ? <section className="card article-block"><Heading items={items}>Research notes</Heading>{post.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section> : null}
    {post.serviceHandoff ? <section className="card article-block"><Heading items={items}>{post.serviceHandoff.heading}</Heading>{post.serviceHandoff.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p><a href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a></p></section> : null}
    <section className="card article-block"><Heading items={items}>Questions people ask</Heading>{post.faqs.map(faq => <div className="faq" key={faq.q}><h3 id={tocId(items, faq.q)} className="article-subsection-heading" style={{ scrollMarginTop: '7rem' }}>{faq.q}</h3><p>{faq.a}</p></div>)}</section>
    <section className="card article-block"><Heading items={items}>Sources</Heading><ol className="list">{post.sources.map(source => <li key={source.url}><a href={source.url}>{source.name}</a>: {source.note}</li>)}</ol></section>
    {post.related.length ? <section className="card article-block"><Heading items={items}>Related research</Heading><ul className="list">{related.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section> : null}
  </EditorialLayout></div></main><Footer/></>;
}
