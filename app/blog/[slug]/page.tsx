import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site, sourceNotes, type BlogPost } from '../../data';
import { EditorialLayout, headingId } from '../../editorial';
import type { TocItem } from '../../site-client';
import { resolveBlogImage } from '../../editorial-images';

function blogToc(post: BlogPost): TocItem[] {
  const headings: { label: string; level?: 2 | 3 }[] = [];
  const section = (index: number) => headings.push({ label: post.sections[index].heading });
  if (post.rich) {
    section(0); section(1); headings.push({ label: post.rich.banners[0].title });
    section(2); section(3); headings.push({ label: post.rich.banners[1].title });
    section(4); section(5); section(6); section(7);
    headings.push({ label: 'Keep planning the handoff' }, { label: post.rich.banners[2].title });
  } else {
    post.sections.forEach(item => headings.push({ label: item.heading }));
    if (post.internalLinks?.length) headings.push({ label: 'Keep planning' });
  }
  headings.push({ label: 'Questions people ask' });
  post.faqs.forEach(faq => headings.push({ label: faq.q, level: 3 }));
  headings.push({ label: post.rich ? 'Sources' : 'Reference notes' });
  return headings.map((item, index) => ({ ...item, id: headingId(item.label, index) }));
}

const tocId = (items: TocItem[], label: string) => items.find(item => item.label === label)?.id;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Guide not found' };
  const hero = resolveBlogImage(post);
  const datedTitle = /(?:\d{4}-\d{2}-\d{2}|(?:january|february|march|april|may|june|july|august|september|october|november|december)-\d{1,2}-\d{4})$/i.test(post.slug)
    ? `${post.title} (${post.published})`
    : post.title;
  const description = `${post.excerpt} Guide: ${datedTitle}.`;
  return {
    title: datedTitle,
    description,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: { title: datedTitle, description, type: 'article', url: `${site.url}/blog/${post.slug}`, publishedTime: post.published, modifiedTime: post.updated ?? post.published, images: [{ url: hero.url, alt: hero.alt }] }
  };
}

function ArticleSections({ post, start, end, items }: { post: BlogPost; start: number; end: number; items: TocItem[] }) {
  const published = post.rich?.published ?? post.published;
  return <>{start === 0 && published ? <div className="article-meta"><time dateTime={published}>Published: {new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${published}T00:00:00Z`))}</time><span>{post.minutes} minute read</span></div> : null}{post.sections.slice(start, end).map((section) => (
    <section className="card article-block" key={section.heading}>
      <h2 id={tocId(items, section.heading)} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>{section.heading}</h2>
      {section.paragraphs?.length ? section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{section.body}</p>}
      {section.bullets ? <ul className="list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
    </section>
  ))}</>;
}

function ArticleBanner({ banner, position, items }: { banner: NonNullable<BlogPost['rich']>['banners'][number]; position: number; items: TocItem[] }) {
  return <aside className={`article-banner article-banner-${position}`} data-banner-position={position}>
    <h2 id={tocId(items, banner.title)} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>{banner.title}</h2>
    <p>{banner.body}</p>
    <a className="btn primary" href={banner.href}>{banner.label}</a>
  </aside>;
}

function ComplaintChart({ chart }: { chart: NonNullable<BlogPost['rich']>['chart'] }) {
  const max = Math.max(...chart.rows.map((row) => row.value));
  return <figure className="article-visual article-chart" data-visual={chart.visualId ?? 'complaint-chart'}>
    <svg viewBox="0 0 820 300" role="img" aria-labelledby="complaint-chart-title complaint-chart-desc">
      <title id="complaint-chart-title">{chart.title}</title>
      <desc id="complaint-chart-desc">{chart.description}</desc>
      <text x="30" y="38" className="svg-title">{chart.headline ?? '2024 FBI IC3 complaint counts'}</text>
      {chart.rows.map((row, index) => {
        const y = 82 + index * 92;
        const width = Math.round((row.value / max) * 560);
        return <Fragment key={row.label}>
          <text x="30" y={y} className="svg-label">{row.label}</text>
          <rect x="30" y={y + 16} width="560" height="28" rx="8" className="svg-track" />
          <rect x="30" y={y + 16} width={width} height="28" rx="8" className={`svg-bar svg-bar-${index + 1}`} />
          <text x="610" y={y + 37} className="svg-value">{row.display}</text>
        </Fragment>;
      })}
      <text x="30" y="275" className="svg-unit">{chart.unit ?? 'Unit: complaints received by FBI IC3'}</text>
    </svg>
    <figcaption><strong>{chart.title}.</strong> {chart.method}</figcaption>
  </figure>;
}

function AccessGraphic({ graphic }: { graphic: NonNullable<BlogPost['rich']>['graphic'] }) {
  return <figure className="article-visual access-graphic" data-visual={graphic.visualId ?? 'access-ladder'}>
    <svg viewBox="0 0 820 420" role="img" aria-labelledby="access-ladder-title access-ladder-desc">
      <title id="access-ladder-title">{graphic.title}</title>
      <desc id="access-ladder-desc">{graphic.description}</desc>
      <text x="30" y="40" className="svg-title">{graphic.headline ?? 'A controlled access path'}</text>
      {graphic.steps.map((step, index) => {
        const x = 30 + (index % 2) * 390;
        const y = 72 + Math.floor(index / 2) * 145;
        return <g key={step.label}>
          <rect x={x} y={y} width="360" height="112" rx="18" className={`ladder-step ladder-step-${index + 1}`} />
          <text x={x + 22} y={y + 38} className="ladder-label">{step.label}</text>
          <foreignObject x={x + 22} y={y + 50} width="315" height="48">
            <div className="ladder-detail">{step.detail}</div>
          </foreignObject>

        </g>;
      })}
      <text x="30" y="385" className="svg-unit">{graphic.footerNote ?? 'Manager rule: expand one permission only after a reviewed work sample.'}</text>
    </svg>
    <figcaption><strong>{graphic.title}.</strong> {graphic.description}</figcaption>
  </figure>;
}

function RichPost({ post, items }: { post: BlogPost & { rich: NonNullable<BlogPost['rich']> }; items: TocItem[] }) {
  const rich = post.rich;
  return <>
    <div className="article-stats" aria-label={rich.chart.title}>
      {rich.stats.map((stat) => <a href={stat.sourceUrl} className="article-stat" key={stat.label}>
        <strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.detail}</small>
      </a>)}
    </div>
    <ArticleSections post={post} start={0} end={2} items={items} />
    <div className="article-table-wrap" role="region" aria-label={rich.table.caption} tabIndex={0}>
      <table className="article-table">
        <caption>{rich.table.caption}</caption>
        <thead><tr>{rich.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
        <tbody>{rich.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <ArticleBanner banner={rich.banners[0]} position={1} items={items} />
    <ArticleSections post={post} start={2} end={4} items={items} />
    <ComplaintChart chart={rich.chart} />
    <blockquote className="expert-quote">
      <p>{rich.quote.text}</p>
      <cite>{rich.quote.person}, {rich.quote.title}. <a href={rich.quote.sourceUrl}>Read the source.</a></cite>
    </blockquote>
    <ArticleBanner banner={rich.banners[1]} position={2} items={items} />
    <ArticleSections post={post} start={4} end={6} items={items} />
    <AccessGraphic graphic={rich.graphic} />
    <ArticleSections post={post} start={6} end={8} items={items} />
    <section className="card article-block related-paths">
      <h2 id={tocId(items, 'Keep planning the handoff')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Keep planning the handoff</h2>
      <div className="related-path-grid">{rich.internalLinks.map((link) => <a href={link.href} key={link.href}><strong>{link.label}</strong><span>{link.note}</span></a>)}</div>
    </section>
    <ArticleBanner banner={rich.banners[2]} position={3} items={items} />
    <section className="card article-block"><h2 id={tocId(items, 'Questions people ask')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Questions people ask</h2>{post.faqs.map((faq) => <div key={faq.q} className="faq"><h3 id={tocId(items, faq.q)} className="article-subsection-heading" style={{ scrollMarginTop: '7rem' }}>{faq.q}</h3><p>{faq.a}</p></div>)}</section>
    <section className="card article-block numbered-sources" aria-labelledby="sources-heading">
      <h2 id={tocId(items, 'Sources')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Sources</h2>
      <p>The figures and guidance above come from the original publishers. Each note says how the source was used.</p>
      <ol>{rich.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a><span>{source.note}</span></li>)}</ol>
    </section>
    <span className="article-marker" data-article-marker={rich.marker} hidden>{rich.marker}</span>
  </>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const items = blogToc(post);
  const hero = resolveBlogImage(post);
  const related = (post.rich?.internalLinks ?? post.internalLinks ?? []).map(link => ({ href: link.href, label: link.label }));
  const citations = post.rich?.sources.map((source) => source.url) ?? post.citations?.map((source) => source.url) ?? sourceNotes.map((source) => source.url);
  const schema = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${site.url}/blog/${post.slug}#article`, headline: post.title, description: post.excerpt, url: `${site.url}/blog/${post.slug}`, datePublished: post.rich?.published ?? post.published, dateModified: post.rich?.updated ?? post.updated ?? post.published, image: `${site.url}${hero.url}`, publisher: { '@id': `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/blog/${post.slug}`, citation: citations, hasPart: post.sections.map((section, index) => ({ '@type': 'WebPageElement', position: index + 1, name: section.heading })) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: post.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` }] }
  ];
  return <><Header/><main id="main-content" className="section"><JsonLd data={schema}/><div className="container"><EditorialLayout items={items} family="blog" related={related} contentClassName={`article ${post.rich ? 'rich-article' : ''}`}><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><img className="article-hero-image" src={hero.url} alt={hero.alt} width="1600" height="900" /><div className="takeaway"><b>Key takeaway:</b> {post.takeaway}</div>{post.rich ? <RichPost post={post as BlogPost & { rich: NonNullable<BlogPost['rich']> }} items={items} /> : <><ArticleSections post={post} start={0} end={post.sections.length} items={items} />{post.internalLinks?.length ? <section className="card"><h2 id={tocId(items, 'Keep planning')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Keep planning</h2>{post.internalLinks.map((link) => <p key={link.href}><a href={link.href}>{link.label}</a></p>)}</section> : null}<section className="card"><h2 id={tocId(items, 'Questions people ask')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Questions people ask</h2>{post.faqs.map((faq) => <div key={faq.q} className="faq"><h3 id={tocId(items, faq.q)} className="article-subsection-heading" style={{ scrollMarginTop: '7rem' }}>{faq.q}</h3><p>{faq.a}</p></div>)}</section><section className="card"><h2 id={tocId(items, 'Reference notes')} className="article-section-heading" style={{ scrollMarginTop: '7rem' }}>Reference notes</h2><p>These links are a starting point for general context. They are not custom legal, tax, hiring, or cybersecurity advice.</p><ul className="list">{(post.citations ?? sourceNotes).map((source) => <li key={source.url}><a href={source.url}>{source.name}</a>: {source.note}</li>)}</ul></section></>}</EditorialLayout></div>{post.cta ? <p className="container"><a className="btn primary" href={post.cta.href}>{post.cta.label}</a></p> : <CTA/>}</main><Footer/></>;
}
