import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site, sourceNotes } from '../../data';

export function generateStaticParams() { return blogPosts.map((p)=>({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p)=>p.slug===slug);
  return { title: post?.title || 'Guide', description: post?.excerpt, alternates: { canonical: `${site.url}/blog/${slug}` } };
}
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug) || blogPosts[0];
 const schema = [
  { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${site.url}/blog/${post.slug}#article`, headline: post.title, description: post.excerpt, url: `${site.url}/blog/${post.slug}`, publisher: { '@id': `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/blog/${post.slug}`, citation: sourceNotes.map((s)=>s.url), hasPart: post.sections.map((s, i)=>({ '@type': 'WebPageElement', position: i+1, name: s.heading })) },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: post.faqs.map((f)=>({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` }] }
 ];
 return <><Header/><main className="section"><JsonLd data={schema}/><article className="container article"><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="takeaway"><b>Key takeaway:</b> {post.takeaway}</div>{post.sections.map((section)=><section className="card article-block" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets ? <ul className="list">{section.bullets.map((b)=><li key={b}>{b}</li>)}</ul> : null}</section>)}<section className="card"><h2>Questions people ask</h2>{post.faqs.map((f)=><div key={f.q} className="faq"><h3>{f.q}</h3><p>{f.a}</p></div>)}</section><section className="card"><h2>Source placeholders</h2><p>Use these as citation starting points before paid traffic or outreach. Do not treat them as custom legal, tax, hiring, or cybersecurity advice.</p><ul className="list">{sourceNotes.map((s)=><li key={s.url}><a href={s.url}>{s.name}</a>: {s.note}</li>)}</ul></section></article><CTA/></main><Footer/></>;
}
