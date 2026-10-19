import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header } from '../components';
import { indexImages } from '../editorial-images';
import styles from '../editorial-index.module.css';

export const metadata: Metadata = {
  title: 'Outsourcing Alternatives for Owner-Led Businesses',
  description: 'Compare practical alternatives to hiring employees, adding agencies, and keeping recurring work with the owner.',
  alternates: { canonical: '/alternatives' },
};

const reviewed = '2026-10-19';
const categories = [
  { title: 'Role alternatives', topic: 'Role design', body: 'Compare ways to cover recurring executive, administrative, customer support, bookkeeping support, and operations work.', image: '/images/blog-2026-08-21/outsourced-assistant-role-reset.png', alt: 'A role scope being reset before an outsourcing decision' },
  { title: 'Service alternatives', topic: 'Delivery model', body: 'Review focused assistant support alongside agencies, software, freelancers, and in-house service teams.', image: '/images/blog-2026-08-20/remote-project-dependency-register.png', alt: 'A delivery workflow showing service dependencies' },
  { title: 'Hiring alternatives', topic: 'Staffing model', body: 'Understand the tradeoffs between a direct hire, a managed staffing partner, a contractor, and a narrower outsourced role.', image: '/images/blog-2026-08-21/outsourced-assistant-weekly-capacity-map.png', alt: 'A weekly capacity map used to compare staffing options' },
  { title: 'Process alternatives', topic: 'Workflow design', body: 'Decide whether to delegate, automate, simplify, or stop a recurring process before adding more headcount.', image: '/aug19-heroes/virtual-assistant-work-queue-ownership.webp', alt: 'A work queue used to decide what to delegate or redesign' },
] as const;

export default function Alternatives() {
  return <>
    <Header />
    <main className="fleet-main fleet-outsourcingassistant">
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div><p className="eyebrow">Alternatives library</p><h1>Compare practical ways to move recurring work off the owner</h1><p>Choose between an assistant, an employee, an agency, software, or a redesigned process. Start with scope and control rather than assuming one delivery model fits every queue.</p><p className={styles.cardMeta}><time dateTime={reviewed}>Reviewed October 19, 2026</time><span>Decision guide</span></p></div>
          <div className={styles.heroMedia}><Image src={indexImages.alternatives.url} alt={indexImages.alternatives.alt} fill priority sizes="(max-width: 720px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className={styles.library} aria-labelledby="alternative-categories">
        <div className="container">
          <header className={styles.libraryHeader}><h2 id="alternative-categories">Start with the decision you need to make</h2><p>These four comparison paths separate the role, delivery model, hiring relationship, and underlying process so costs and control remain easier to evaluate.</p></header>
          <div className={styles.grid}>{categories.map(category => <article className={styles.card} key={category.title}>
            <div className={styles.cardMedia}><Image src={category.image} alt={category.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw" /></div>
            <div className={`${styles.cardBody} ${styles.decisionCard}`}><p className={styles.cardMeta}><span>{category.topic}</span><time dateTime={reviewed}>Updated October 19, 2026</time></p><h3>{category.title}</h3><p>{category.body}</p></div>
          </article>)}</div>
        </div>
      </section>
      <section className="section band"><div className="container"><h2>Define the work, access, and approval boundary first</h2><p>A useful comparison starts with the recurring tasks and the decisions that must stay with the owner. Use the handoff checklist to write that scope before choosing a delivery model.</p><a className="btn" href="/resources/assistant-sop-handoff-checklist">Open the SOP handoff checklist</a></div></section>
    </main>
    <Footer />
  </>;
}
