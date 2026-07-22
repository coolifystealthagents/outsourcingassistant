import { Header, Footer, CTA, JsonLd } from '../../components';
import { checklistSteps, site } from '../../data';

export const metadata = {
  title: 'Assistant SOP handoff checklist',
  description: 'A practical handoff checklist for teams working with Filipino talent.',
  alternates: { canonical: `${site.url}/resources/assistant-sop-handoff-checklist` },
};

const accessLanes = [
  {
    level: '01',
    label: 'Watch',
    title: 'Show the work first',
    body: 'Let the assistant watch the task and read a finished example. Keep every account in view-only mode when the tool allows it.',
    link: '/services/inbox-triage',
    linkLabel: 'Plan an inbox lane',
  },
  {
    level: '02',
    label: 'Draft',
    title: 'Review the first attempts',
    body: 'Ask the assistant to prepare drafts or update a test record. A named manager checks the work before anything reaches a customer.',
    link: '/services/crm-administration',
    linkLabel: 'Plan a CRM lane',
  },
  {
    level: '03',
    label: 'Run',
    title: 'Open only proven steps',
    body: 'Give the smallest access needed for the approved task. Refunds, payments, passwords, and final promises still stay with the owner.',
    link: '/contact',
    linkLabel: 'Scope a Filipino assistant',
  },
] as const;

export default function Checklist() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${site.url}/resources/assistant-sop-handoff-checklist#howto`,
        name: 'How to hand off assistant work safely',
        description: 'A simple SOP handoff process for Filipino talent.',
        step: checklistSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${site.url}/resources/assistant-sop-handoff-checklist#access-ladder`,
        name: 'Assistant access ladder',
        itemListElement: accessLanes.map((lane, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${lane.label}: ${lane.title}`,
          url: `${site.url}${lane.link}`,
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section sop-resource" data-resource="assistant-access-ladder-2026">
        <JsonLd data={schema} />
        <div className="container article">
          <p className="eyebrow">Resource</p>
          <h1>Assistant SOP handoff checklist</h1>
          <p className="lead">Use this before you give Filipino talent access to an inbox, CRM, customer queue, or admin workflow.</p>
          <figure className="resource-hero">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80" alt="Laptop beside an open notebook used to map an assistant handoff" />
            <figcaption>Keep the first handoff visible: task, tool, example, stop rule, and review time.</figcaption>
          </figure>

          <section className="card">
            <h2>The checklist</h2>
            <div className="checklist">
              {checklistSteps.map((step, index) => <div key={step}><b>{index + 1}</b><span>{step}</span></div>)}
            </div>
          </section>

          <section className="sop-access" id="access-ladder" aria-labelledby="access-ladder-title">
            <div className="sop-access-head">
              <div>
                <p className="eyebrow">Access ladder</p>
                <h2 id="access-ladder-title">Watch. Draft. Then run.</h2>
              </div>
              <p>A good handoff does not start with every login. Move a Filipino assistant up one level only after the last level is clean and easy to review.</p>
            </div>
            <div className="sop-access-grid">
              {accessLanes.map((lane) => (
                <article key={lane.level}>
                  <div className="sop-access-label"><span>{lane.level}</span><b>{lane.label}</b></div>
                  <h3>{lane.title}</h3>
                  <p>{lane.body}</p>
                  <a href={lane.link}>{lane.linkLabel} <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
            <div className="sop-source-note">
              <span>Control note</span>
              <p>NIST recommends limiting access to what each person needs for their work. Read the <a href="https://www.nist.gov/cyberframework" rel="noreferrer">NIST Cybersecurity Framework</a>, then write the rule in plain words for your team.</p>
            </div>
          </section>

          <section className="card article-block">
            <h2>Copy-ready handoff note</h2>
            <p className="quote">&quot;Please do this task using the checklist below. If a customer asks for a refund, discount, legal answer, medical answer, password change, or account decision, stop and tag me before replying.&quot;</p>
          </section>

          <section className="card article-block">
            <h2>Weekly scorecard</h2>
            <div className="table">
              <div className="row"><b>Area</b><b>Score</b><b>What to check</b></div>
              <div className="row"><span>Accuracy</span><span>1-5</span><span>Did the assistant follow the example?</span></div>
              <div className="row"><span>Speed</span><span>1-5</span><span>Was the work done on time?</span></div>
              <div className="row"><span>Judgment</span><span>1-5</span><span>Did they ask before risky steps?</span></div>
            </div>
          </section>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
