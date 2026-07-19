import { navPages, site } from './data';

export function Header(){
  return <header className="nav"><div className="container nav-inner"><a href="/" className="logo"><span className="mark">OA</span><span>{site.brand}</span></a><nav className="links">{navPages.filter((p)=>p.href !== '/').map((p)=><a key={p.href} href={p.href}>{p.label}</a>)}</nav><a className="btn" href="/contact">Get plan</a></div></header>;
}

export function Footer(){
  return <footer className="footer"><div className="container footer-grid"><div><b>{site.brand}</b><p>Plain assistant outsourcing guides for buyers who want clear steps, safe handoffs, and less hype.</p><p>© {new Date().getFullYear()} {site.brand}. Independent education site. Replace contact details before launch.</p></div><div><b>Plan</b><a href="/pricing">Pricing guide</a><a href="/resources/assistant-sop-handoff-checklist">SOP checklist</a><a href="/blog/assistant-onboarding-checklist">Onboarding guide</a></div><div><b>Legal</b><a href="/privacy">Privacy placeholder</a><a href="/terms">Terms placeholder</a></div></div></footer>;
}

export function CTA(){
  return <section className="section"><div className="container"><div className="callout"><p className="eyebrow" style={{color:'white'}}>Need help deciding?</p><h2>Get a simple assistant hiring plan.</h2><p>Tell us the tasks, tools, hours, and coverage you need. We will map the role, cost range, interview questions, and first-week checklist.</p><a className="btn secondary" href="/contact">Request a quote-style plan</a></div></div></section>;
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }){
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
