import Image from 'next/image';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { checklistSteps, site } from '../../data';
import { EditorialLayout, headingId } from '../../editorial';
import { indexImages } from '../../editorial-images';
import type { TocItem } from '../../site-client';
import styles from './resource.module.css';

const published = '2026-08-08';
const updated = '2026-10-19';
export const metadata = {
  title: 'Assistant SOP handoff checklist',
  description: 'A practical handoff checklist for teams working with Filipino talent.',
  alternates: { canonical: `${site.url}/resources/assistant-sop-handoff-checklist` },
  openGraph: { images: [{ url: indexImages.resource.url, alt: indexImages.resource.alt }] },
};

const accessLanes = [
  { label: 'Watch', title: 'Show the work first', body: 'Let the assistant watch the task and read a finished example. Keep every account in view-only mode when the tool allows it.', link: '/services/inbox-triage', linkLabel: 'Plan an inbox lane' },
  { label: 'Draft', title: 'Review the first attempts', body: 'Ask the assistant to prepare drafts or update a test record. A named manager checks the work before anything reaches a customer.', link: '/services/crm-administration', linkLabel: 'Plan a CRM lane' },
  { label: 'Run', title: 'Open only proven steps', body: 'Give the smallest access needed for the approved task. Refunds, payments, passwords, and final promises still stay with the owner.', link: '/contact-us', linkLabel: 'Scope a Filipino assistant' },
] as const;

const tocHeadings: { label: string; level?: 2 | 3 }[] = [
  { label: 'The handoff checklist' },
  { label: 'Use a gradual access path' },
  ...accessLanes.map(lane => ({ label: lane.title, level: 3 as const })),
  { label: 'Copy-ready handoff note' },
  { label: 'Weekly review scorecard' },
  { label: 'Source and control note' },
];
const tocItems: TocItem[] = tocHeadings.map((item, index) => ({ ...item, id: headingId(item.label, index) }));
const idFor = (label: string) => tocItems.find(item => item.label === label)?.id;

export default function Checklist() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'HowTo', '@id': `${site.url}/resources/assistant-sop-handoff-checklist#howto`, name: 'How to hand off assistant work safely', description: 'A simple SOP handoff process for Filipino talent.', image: `${site.url}${indexImages.resource.url}`, datePublished: published, dateModified: updated, step: checklistSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step, text: step })) },
      { '@type': 'ItemList', '@id': `${site.url}/resources/assistant-sop-handoff-checklist#access-path`, name: 'Assistant access path', itemListElement: accessLanes.map((lane, index) => ({ '@type': 'ListItem', position: index + 1, name: `${lane.label}: ${lane.title}`, url: `${site.url}${lane.link}` })) },
    ],
  };

  return <>
    <Header />
    <main id="main-content" className="section sop-resource" data-resource="assistant-access-ladder-2026">
      <JsonLd data={schema} />
      <div className="container">
        <EditorialLayout
          items={tocItems}
          family="resource"
          contentClassName="article"
          metadata={[{ label: 'Published', value: 'August 8, 2026' }, { label: 'Updated', value: 'October 19, 2026' }, { label: 'Format', value: 'Operational checklist' }]}
          support={{ heading: 'Use this with a real task', body: 'Choose one recurring queue, name its reviewer, and test the handoff with a small work sample before widening access.', href: '/contact-us', label: 'Discuss the first work lane' }}
          related={[{ href: '/services/inbox-triage', label: 'Inbox triage scope' }, { href: '/services/crm-administration', label: 'CRM administration scope' }, { href: '/research/remote-team-access-controls', label: 'Remote access control research' }]}
        >
          <header className={styles.header}><h1>Assistant SOP handoff checklist</h1><p className="lead">Use this before you give Filipino talent access to an inbox, CRM, customer queue, or administrative workflow.</p><p className={styles.meta}><time dateTime={published}>Published August 8, 2026</time><time dateTime={updated}>Updated October 19, 2026</time><span>Operational resource</span></p></header>
          <figure className={`${styles.hero} article-hero-image`}><div className={styles.heroMedia}><Image src={indexImages.resource.url} alt={indexImages.resource.alt} fill priority sizes="(max-width: 900px) 100vw, 760px" /></div><figcaption>Keep the first handoff visible: task, tool, example, stop rule, and review time.</figcaption></figure>

          <section className="card article-block"><h2 id={idFor('The handoff checklist')} className="article-section-heading">The handoff checklist</h2><ol className="checklist">{checklistSteps.map(step => <li key={step}>{step}</li>)}</ol></section>

          <section className="article-block" aria-labelledby={idFor('Use a gradual access path')}><h2 id={idFor('Use a gradual access path')} className="article-section-heading">Use a gradual access path</h2><p>A useful handoff starts with observation, moves to reviewed drafts, and opens a bounded task only after the assistant demonstrates the documented process. Tool access is not permission to make financial, legal, security, or customer commitments.</p><div className={styles.sequence}>{accessLanes.map(lane => <article key={lane.label}><span className={styles.stage}>{lane.label}</span><h3 id={idFor(lane.title)} className="article-subsection-heading">{lane.title}</h3><p>{lane.body}</p><a href={lane.link}>{lane.linkLabel} →</a></article>)}</div></section>

          <section className="card article-block"><h2 id={idFor('Copy-ready handoff note')} className="article-section-heading">Copy-ready handoff note</h2><blockquote>&quot;Please do this task using the checklist below. If a customer asks for a refund, discount, legal answer, medical answer, password change, or account decision, stop and tag me before replying.&quot;</blockquote></section>

          <section className="card article-block"><h2 id={idFor('Weekly review scorecard')} className="article-section-heading">Weekly review scorecard</h2><div className={styles.tableWrap} role="region" aria-label="Weekly handoff review scorecard" tabIndex={0}><table className={styles.table}><caption>Review each area against the source example and the written approval boundary.</caption><thead><tr><th scope="col">Area</th><th scope="col">Review scale</th><th scope="col">What to check</th></tr></thead><tbody><tr><th scope="row">Accuracy</th><td>1 to 5</td><td>Did the assistant follow the approved example?</td></tr><tr><th scope="row">Timeliness</th><td>1 to 5</td><td>Was the work ready by the agreed review time?</td></tr><tr><th scope="row">Judgment</th><td>1 to 5</td><td>Did the assistant stop and ask before a risky step?</td></tr></tbody></table></div></section>

          <section className="article-block"><h2 id={idFor('Source and control note')} className="article-section-heading">Source and control note</h2><div className={styles.source}><p>NIST describes least privilege as restricting access to the minimum needed for assigned tasks. Use the <a href="https://csrc.nist.gov/glossary/term/least_privilege" rel="noreferrer">NIST least privilege definition</a> as a control principle, then document the actual permissions and approval rules for your team. This checklist is operational guidance, not legal or cybersecurity advice.</p></div></section>
        </EditorialLayout>
      </div>
      <CTA />
    </main>
    <Footer />
  </>;
}
