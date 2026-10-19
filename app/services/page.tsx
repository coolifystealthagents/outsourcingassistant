import { Header, Footer, JsonLd } from '../components';
import { fleetServices } from '../fleet-content';
import { site } from '../data';

export const metadata = {
  title: 'Assistant Staffing Services',
  description: 'Compare Philippines assistant staffing services by scope, required inputs, review controls, deliverables, and owner decision boundaries.',
  alternates: { canonical: '/services' },
};

const operatingSteps = [
  { title: 'Name the queue', body: 'Choose repeatable work with a visible starting point, finish line, and accountable business owner.' },
  { title: 'Set access and authority', body: 'Provide only the tools needed for the work and write down what the assistant may prepare, change, send, or escalate.' },
  { title: 'Review a small sample', body: 'Check early outputs against source records, classify defects, and resolve exceptions before increasing volume.' },
  { title: 'Run a visible handoff', body: 'Use a daily record of completed work, open questions, evidence, and the person who owns the next decision.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Outsourcing Assistant services',
  itemListElement: fleetServices.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    url: `${site.url}/services/${service.slug}`,
  })),
};

export default function Services() {
  return <>
    <Header />
    <main id="main-content" className="fleet-main fleet-outsourcingassistant services-index">
      <JsonLd data={schema} />
      <section className="fleet-hero services-index-hero"><div className="container service-hero-grid">
        <div><p className="eyebrow">Philippines-based services</p><h1>Assistant staffing scoped around real work, not a vague job title</h1><p className="lead">Choose a focused service lane, then define the source records, tools, approvals, deliverables, and review rhythm your Philippines-based specialist will use.</p><div className="services-hero-actions"><a className="btn primary" href="/contact-us">Discuss your work queue</a><a className="btn secondary" href="#service-directory">Compare services</a></div></div>
        <figure className="service-hero-image"><img src="/assistant-collaboration.jpg" alt="Team collaborating around a shared work queue in a modern office" /><figcaption>Scope the work, evidence, access, and decision owner before the search begins.</figcaption></figure>
      </div></section>

      <section className="section services-introduction"><div className="container service-boundary-grid"><div><p className="eyebrow">Who this is for</p><h2>Operators with recurring work and limited management time</h2></div><div><p>These services suit owners and team leads who can identify a repeatable queue, provide real examples, and review a small first batch. They are not a substitute for an executive, project leader, licensed professional, or accountable decision-maker.</p><p>A good starting scope gives an assistant enough context to prepare reliable work without implying authority over money, contracts, privacy, access, personnel, or customer commitments.</p></div></div></section>

      <section className="section services-directory" id="service-directory"><div className="container"><div className="service-section-heading"><p className="eyebrow">Service directory</p><h2>Pick the work lane that is already asking for an owner</h2><p>Every detail page explains the audience, operating problem, tasks, required inputs, workflow, outputs, human boundaries, quality controls, starting scenarios, and common questions.</p></div><div className="fleet-card-grid">{fleetServices.map((service) => <a className="fleet-card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.title}</h2><p>{service.summary}</p><ul className="service-card-tasks">{service.tasks.slice(0, 2).map((task) => <li key={task}>{task}</li>)}</ul><b>Review scope and controls →</b></a>)}</div></div></section>

      <section className="section services-operating-model"><div className="container"><div className="service-section-heading"><p className="eyebrow">Shared operating model</p><h2>Preparation is delegated. Accountability stays visible.</h2></div><ol className="service-workflow-list">{operatingSteps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol></div></section>

      <section className="section services-controls"><div className="container fleet-detail-grid">
        <article><h2>Inputs to have ready</h2><ul><li>Examples of completed work and the authoritative source records</li><li>Tool list, minimum access, schedule, and expected queue volume</li><li>A named reviewer plus normal and urgent escalation routes</li></ul></article>
        <article><h2>What good delivery shows</h2><ul><li>Completed work linked to its source or instruction</li><li>Exceptions, missing inputs, and owner-held decisions clearly separated</li><li>A concise status handoff with next owner and due point</li></ul></article>
        <article><h2>Decisions your team keeps</h2><ul><li>Money, contracts, legal positions, privacy, security, and access</li><li>Personnel decisions, priorities, and final customer promises</li><li>Changes to scope, policy, quality thresholds, and approval authority</li></ul></article>
      </div></section>

      <section className="section services-quality"><div className="container service-boundary-grid"><div><p className="eyebrow">Quality before volume</p><h2>A review system, not a promise of perfect output</h2></div><div><p>For the first work batch, compare each item with the approved source and record defects by type: missing input, incorrect preparation, unclear rule, tool issue, or owner decision. Throughput alone does not demonstrate quality.</p><p>Expand a lane only when the finish line is observable, exceptions arrive with enough evidence to decide, and access still matches the work. If quality slips, narrow the queue or improve the instruction before granting broader authority.</p></div></div></section>

      <section className="section services-faq"><div className="container service-reading-width"><p className="eyebrow">Before you choose</p><h2>Common service questions</h2><details><summary>Which service should we start with?</summary><p>Choose one queue that repeats, has accessible source records, and has a manager who can review exceptions. Do not start with the broadest or most sensitive part of the role.</p></details><details><summary>Can several services become one role?</summary><p>Yes, when schedules, access, and review capacity make the combination realistic. Prove one or two connected lanes first rather than handing over an unbounded list.</p></details><details><summary>What if our process is not documented?</summary><p>Bring examples and walk through a recent case. The initial scope can capture the repeatable steps and open decisions, but your team must still approve the resulting operating rule.</p></details></div></section>

      <section className="final-cta services-index-cta"><p className="eyebrow">Start with one queue</p><h2>Turn recurring work into a role someone can responsibly own.</h2><p>Share the tasks, tools, examples, schedule, approval needs, and current sticking points. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>
    </main>
    <Footer />
  </>;
}
