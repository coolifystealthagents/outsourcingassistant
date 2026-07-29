import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Outsourcing Alternatives for Owner-Led Businesses',
  description:
    'Compare practical alternatives to hiring employees, adding agencies, and keeping recurring work with the owner.',
  alternates: { canonical: '/alternatives' },
};

const categories = [
  {
    title: 'Role alternatives',
    body: 'Compare ways to cover recurring executive, administrative, customer support, bookkeeping support, and operations work.',
  },
  {
    title: 'Service alternatives',
    body: 'Review focused assistant support alongside agencies, software, freelancers, and in-house service teams.',
  },
  {
    title: 'Hiring alternatives',
    body: 'Understand the tradeoffs between a direct hire, a managed staffing partner, a contractor, and a narrower outsourced role.',
  },
  {
    title: 'Process alternatives',
    body: 'Decide whether to delegate, automate, simplify, or stop a recurring process before adding more headcount.',
  },
] as const;

export default function Alternatives() {
  return (
    <>
      <Header />
      <main className="fleet-main fleet-outsourcingassistant">
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Alternatives library</p>
            <h1>Compare practical ways to move recurring work off the owner</h1>
            <p className="lead">
              Use these comparisons to choose between an assistant, an employee, an agency, software,
              or a redesigned process. Each guide will make scope, cost drivers, control, and fit easier
              to compare.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="alternative-categories">
          <div className="container">
            <p className="eyebrow">Browse by decision</p>
            <h2 id="alternative-categories">Start with the kind of alternative you need</h2>
            <div className="fleet-card-grid">
              {categories.map((category) => (
                <article className="fleet-card" key={category.title}>
                  <h3>{category.title}</h3>
                  <p>{category.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section band">
          <div className="container">
            <p className="eyebrow">Plan before comparing</p>
            <h2>Define the work, access, and approval boundary first</h2>
            <p>
              A useful comparison starts with the recurring tasks and the decisions that must stay with
              the owner. Use the handoff checklist to write that scope before choosing a delivery model.
            </p>
            <a className="btn" href="/resources/assistant-sop-handoff-checklist">
              Open the SOP handoff checklist
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
