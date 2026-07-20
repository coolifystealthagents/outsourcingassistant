import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';
export const metadata = { title: 'Virtual assistant hiring blog', description: 'Plain guides for assistant planning, task delegation, VA comparison, onboarding, SOPs, and risk controls.', alternates: { canonical: `${site.url}/blog` } };
export default function Blog(){
 const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Virtual assistant hiring blog', url: `${site.url}/blog`, hasPart: blogPosts.map((p)=>({ '@type': 'BlogPosting', headline: p.title, url: `${site.url}/blog/${p.slug}` })) };
 return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">Blog</p><h1>Plain guides for hiring assistant help</h1><p className="lead">Use these guides to compare planning, tasks, providers, SOPs, handoffs, and onboarding steps before you hire.</p><div className="cards">{blogPosts.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></main><Footer/></>;
}
