'use client';

import { useEffect, useRef, useState } from 'react';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const focusable = () => [...(panel.current?.querySelectorAll<HTMLElement>('a,button') ?? [])];
    focusable()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
      if (event.key === 'Tab') {
        const items = focusable();
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    document.body.classList.add('menu-open');
    return () => { document.removeEventListener('keydown', keydown); document.body.classList.remove('menu-open'); };
  }, [open]);

  return <div className="mobile-navigation">
    <button ref={button} type="button" aria-label={open ? 'Close main navigation' : 'Open main navigation'} aria-expanded={open} aria-controls="mobile-navigation-panel" onClick={() => setOpen(value => !value)}>Menu</button>
    {open ? <div ref={panel} id="mobile-navigation-panel" className="mobile-navigation-panel" role="dialog" aria-modal="true" aria-label="Main navigation">
      <button type="button" className="mobile-close" onClick={() => { setOpen(false); button.current?.focus(); }}>Close</button>
      <nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav>
    </div> : null}
  </div>;
}

export const sanitizeVisibleText = (value: string) => value
  .replace(/[\u2013\u2014]/g, '-')
  .replace(/\s+--\s+/g, ' - ');
export function VisibleTextSanitizer() {
  useEffect(() => {
    const apply = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      for (const node of nodes) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script,style,pre,code,kbd,samp')) continue;
        const next = sanitizeVisibleText(node.data);
        if (next !== node.data) node.data = next;
      }
      if (root === document) document.querySelector('main')?.setAttribute('id', 'main-content');
    };
    apply(document);
    const observer = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(apply)));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}

export type TocItem = { id: string; label: string; level?: 2 | 3 };
export function ArticleToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const elements = items.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-96px 0px -65% 0px', threshold: [0, 1] });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);
  return <nav className="article-toc" aria-label="Table of contents"><ol>{items.map(item => <li className={`${item.level === 3 ? 'toc-subitem ' : ''}${active === item.id ? 'is-active' : ''}`} key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a></li>)}</ol></nav>;
}
