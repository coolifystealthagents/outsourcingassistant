import type { ReactNode } from 'react';
import { ArticleToc, type TocItem } from './site-client';

export const headingId = (value: string, index = 0) => {
  const base = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section';
  return `${base}-${index + 1}`;
};

type SidebarLink = { href: string; label: string };
type SidebarMeta = { label: string; value: string };
type EditorialSupport = { heading: string; body: string; href: string; label: string };

export function EditorialLayout({
  items,
  children,
  family,
  related = [],
  metadata = [],
  support = { heading: 'Plan the handoff', body: 'Turn the article into a bounded role, with a named reviewer and clear approval rules.', href: '/contact-us', label: 'Discuss your assistant role' },
  contentClassName = '',
}: {
  items: TocItem[];
  children: ReactNode;
  family: string;
  related?: SidebarLink[];
  metadata?: SidebarMeta[];
  support?: EditorialSupport;
  contentClassName?: string;
}) {
  return <div className="editorial-layout">
    <details className="mobile-toc"><summary>On this page</summary><ArticleToc items={items} /></details>
    <article className={`editorial-content ${contentClassName}`.trim()} data-family={family}>{children}</article>
    <aside className="editorial-sidebar" aria-label="Article guide">
      <div className="editorial-sidebar-inner">
        {metadata.length ? <dl className="sidebar-metadata">{metadata.map(item => <div key={`${item.label}-${item.value}`}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl> : null}
        <p className="sidebar-label">On this page</p>
        <ArticleToc items={items} />
        <section className="sidebar-support"><h2>{support.heading}</h2><p>{support.body}</p><a href={support.href}>{support.label}</a></section>
        {related.length ? <section className="sidebar-support"><h2>Related reading</h2><ul>{related.slice(0, 3).map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section> : null}
        <p className="sidebar-publisher"><strong>Publisher</strong><br />Outsourcing Assistant<br /><span>Practical guidance for scoping, delegating, and reviewing remote assistant work. Powered by Stealth Agents.</span></p>
      </div>
    </aside>
  </div>;
}
