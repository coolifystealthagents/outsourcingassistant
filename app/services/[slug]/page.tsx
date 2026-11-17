import refreshContent from '../../_refresh/content.json';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { site } from '../../data';
import { serviceStories } from './service-stories';
import './service-detail.css';

type ServiceSlug = (typeof refreshContent.services)[number]['slug'];
type ServiceProfile = {
  audience: string;
  problem: string;
  inputs: readonly string[];
  deliverables: readonly string[];
  boundaries: readonly string[];
  quality: readonly string[];
  scenarios: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

const sharedFaq = {
  question: 'What happens when the instructions do not cover a request?',
  answer: 'The assistant records what is known, marks the item as an exception, and routes it to the named owner. A new rule is added only after the owner decides how similar cases should be handled.',
};

const serviceProfiles: Record<ServiceSlug, ServiceProfile> = {
  'executive-calendar-management': {
    audience: 'Executives and leadership teams whose calendars have recurring requests, clear working preferences, and a named person available for priority decisions.',
    problem: 'Meeting requests arrive through several channels, conflicts are noticed late, and routine calendar preparation repeatedly returns to the executive.',
    inputs: ['Working hours, focus blocks, time-zone and travel rules', 'Delegated calendar access and a list of sensitive meeting types', 'Examples of accepted invites plus the executive or manager approval route'],
    deliverables: ['Prepared invites with complete links, guests, notes, and time zones', 'A conflict list with options and the decision required', 'Daily open-question and approved-change log'],
    boundaries: ['The executive sets priorities and decides sensitive or ambiguous requests', 'The assistant does not decline, move priority meetings, or promise availability without approval', 'Travel purchases, private details, and access changes stay with an authorised owner'],
    quality: ['Check guest, date, time zone, location, and conferencing link before review', 'Compare proposed changes with focus, buffer, and travel rules', 'Sample completed updates weekly and record recurring exceptions'],
    scenarios: ['Start with one calendar and routine internal meetings', 'Prepare, but do not execute, a morning conflict list for one week'],
    faqs: [{ question: 'Can the assistant accept every meeting that fits?', answer: 'No. A free slot does not establish priority or authority. The executive defines which routine requests may be accepted and which must be reviewed.' }, sharedFaq],
  },
  'inbox-triage': {
    audience: 'Owners and teams with a repeatable shared or executive inbox queue and an accountable sender for consequential replies.',
    problem: 'Routine messages hide urgent requests, follow-ups are inconsistent, and drafting gets mixed up with authority to make promises.',
    inputs: ['Inbox access through an individual delegated account', 'Labels, priority signals, approved reply examples, and blocked senders', 'Named owners for money, legal, personnel, security, and customer commitments'],
    deliverables: ['Categorised message queue with priority and next owner', 'Draft replies for approved routine cases', 'Exception and unresolved-message handoff log'],
    boundaries: ['The assistant classifies and drafts; the owner approves consequential messages', 'No payment, refund, legal, HR, security, or contractual commitment is made', 'Suspicious links and identity changes are verified through a known channel'],
    quality: ['Reconcile unread and open labels at each handoff', 'Sample classifications and drafts against the original message', 'Track missed priority signals, wrong routes, and reopened threads'],
    scenarios: ['Begin with newsletters, receipts, and known routine requests', 'Use draft-only mode for customer and partner messages'],
    faqs: [{ question: 'Does inbox access mean authority to reply?', answer: 'No. Access permits only the actions documented in the scope. Sensitive and commitment-making replies remain with the named owner.' }, sharedFaq],
  },
  'travel-coordination': {
    audience: 'Frequent travellers and operations teams that need options assembled and itinerary records kept current while retaining purchase control.',
    problem: 'Comparing routes, requirements, and schedule constraints consumes time, while a missed detail can disrupt the whole itinerary.',
    inputs: ['Traveller preferences, loyalty details, budget ceiling, and accessibility needs', 'Approved booking sources, calendar constraints, and destination requirements', 'A purchaser and an urgent-change contact'],
    deliverables: ['Comparable travel option sheet with source links and expiry times', 'Draft itinerary with transfers, buffers, and open questions', 'Change and confirmation log after owner-approved bookings'],
    boundaries: ['The traveller or authorised owner selects and purchases travel', 'The assistant does not interpret immigration, health, tax, or legal requirements as advice', 'Identity documents and payment details receive minimum necessary access'],
    quality: ['Recheck names, dates, airports, time zones, fare terms, and source freshness', 'Mark prices and availability as time-sensitive rather than guaranteed', 'Reconcile approved bookings against confirmations and calendar holds'],
    scenarios: ['Compare three options for one domestic return trip', 'Build a draft itinerary from already-booked confirmations'],
    faqs: [{ question: 'Can an assistant book the lowest fare automatically?', answer: 'Only if a written policy explicitly authorises that exact purchase. The safe default is to prepare current options for the traveller or purchaser to approve.' }, sharedFaq],
  },
  'meeting-administration': {
    audience: 'Teams with recurring meetings that need consistent preparation, notes, action capture, and follow-through.',
    problem: 'Agendas arrive late, decisions disappear into notes, and action items lack an owner or due point.',
    inputs: ['Meeting purpose, attendees, cadence, and agenda template', 'Approved source documents and prior action register', 'Rules for confidential topics, recording, and distribution'],
    deliverables: ['Prepared agenda and pre-read packet', 'Draft decision, action, owner, and due-point record', 'Follow-up queue with unresolved questions clearly marked'],
    boundaries: ['The meeting chair confirms decisions and assignments', 'The assistant does not infer decisions from ambiguous discussion', 'Sensitive notes are distributed only to the approved audience'],
    quality: ['Link agenda items to source material before the meeting', 'Reconcile each action with the approved notes and named owner', 'Review a sample for omissions, incorrect attribution, and overdue follow-up'],
    scenarios: ['Start with one weekly operating meeting', 'Convert approved notes into a draft action register'],
    faqs: [{ question: 'Can the assistant decide who owns an action?', answer: 'The assistant can record or propose an owner, but the meeting chair or responsible manager confirms assignments and commitments.' }, sharedFaq],
  },
  'crm-administration': {
    audience: 'Sales and operations teams with defined CRM fields, trustworthy source records, and an owner for disputed changes.',
    problem: 'Incomplete and duplicate records weaken follow-up, but unsourced corrections can damage history, attribution, and reporting.',
    inputs: ['Field definitions, required values, and lifecycle rules', 'Approved source systems and identity-matching criteria', 'Role-based CRM access plus an owner for merges and material changes'],
    deliverables: ['Prepared record corrections with source notes', 'Duplicate and conflict review queue', 'Daily change, exception, and missing-data log'],
    boundaries: ['The owner approves merges, deletions, forecast changes, and disputed corrections', 'The assistant never invents a missing value or overwrites conflicting evidence', 'Exports, access changes, and bulk edits require separate approval'],
    quality: ['Compare identifiers across approved sources before proposing a correction', 'Test a small batch before expanding volume', 'Audit samples for field accuracy, source traceability, and preserved history'],
    scenarios: ['Complete missing fields for one clearly defined lead segment', 'Prepare likely duplicates without merging them'],
    faqs: [{ question: 'Can the assistant merge obvious duplicates?', answer: 'The initial scope should prepare suspected duplicates for review. Merge authority can be considered only after rules, recovery, and sampling are proven.' }, sharedFaq],
  },
  'research-briefing': {
    audience: 'Leaders, marketers, and operators who need source-led briefing support but retain responsibility for interpretation and decisions.',
    problem: 'Research requests expand without a stopping rule, and useful evidence becomes mixed with unsupported interpretation.',
    inputs: ['Decision question, audience, deadline, geography, and date range', 'Accepted and excluded source types', 'Brief template, citation standard, and reviewer'],
    deliverables: ['Source register with dates, links, and relevance notes', 'Structured evidence summary with conflicts and gaps visible', 'Draft brief that separates source findings from recommendations'],
    boundaries: ['The assistant does not provide legal, medical, financial, or other regulated advice', 'The owner validates material claims and approves the interpretation', 'Unknowns remain labelled; they are not resolved with invented facts'],
    quality: ['Open and verify every material source link', 'Attach claims to source notes and distinguish primary from secondary evidence', 'Review for recency, scope fit, contradictions, and unsupported language'],
    scenarios: ['Build a ten-source landscape brief for one bounded question', 'Refresh links and dates in an existing source register'],
    faqs: [{ question: 'Is a research brief ready to publish?', answer: 'Not by default. It is a review packet. The accountable subject owner checks sources, interpretation, rights, and final publication language.' }, sharedFaq],
  },
  'document-production': {
    audience: 'Teams producing recurring reports, proposals, manuals, or presentation documents from approved source material.',
    problem: 'Formatting and version assembly consume specialist time, while copying between files introduces omissions and stale content.',
    inputs: ['Approved source files and a clearly named source of truth', 'Template, style guide, audience, format, and due point', 'Reviewer plus rules for confidential and licensed material'],
    deliverables: ['Formatted draft in the agreed template', 'Source and version note with open placeholders', 'Preflight checklist covering links, labels, and required sections'],
    boundaries: ['The content owner approves meaning, claims, legal language, and release', 'The assistant does not invent missing copy, signatures, evidence, or permissions', 'Final publishing and external distribution require explicit approval'],
    quality: ['Compare headings, figures, names, dates, and links with source files', 'Use version names and preserve reviewer changes', 'Run a final completeness pass without silently resolving placeholders'],
    scenarios: ['Format one approved report into a standard template', 'Assemble a presentation from signed-off copy and charts'],
    faqs: [{ question: 'Can the assistant improve unclear claims?', answer: 'They can flag unclear language or prepare an explicitly marked suggestion. The content owner approves all substantive changes.' }, sharedFaq],
  },
  'vendor-follow-up': {
    audience: 'Operations and procurement teams with recurring supplier requests and clear commercial approval boundaries.',
    problem: 'Status chasing interrupts managers, while poorly controlled follow-up can imply authority or accept changed terms.',
    inputs: ['Verified vendor register, contacts, open items, and source documents', 'Approved message templates, cadence, and escalation thresholds', 'Named owners for price, terms, payment, performance, and disputes'],
    deliverables: ['Timestamped follow-up queue and contact history', 'Draft or approved routine status messages', 'Exception packet with evidence and the decision needed'],
    boundaries: ['The assistant does not agree price, scope, dates, credits, payment, or contract terms', 'Banking and contact changes are verified through a known channel', 'Disputes and sensitive performance conversations route to the owner'],
    quality: ['Verify vendor identity and open item before contact', 'Compare responses with the purchase order, contract, or approved request', 'Review overdue, reopened, and escalated cases by reason'],
    scenarios: ['Chase acknowledgements for approved purchase orders', 'Collect expiry dates for existing certificates without judging compliance'],
    faqs: [{ question: 'Can an assistant negotiate with a vendor?', answer: 'Not in this service lane. The assistant can organise evidence and follow up on an approved request; an authorised owner handles negotiations and commitments.' }, sharedFaq],
  },
  'project-administration': {
    audience: 'Project leads who need dependable status, document, dependency, and meeting administration around an existing delivery plan.',
    problem: 'Updates live across messages and tools, so dependencies become visible only after a deadline is at risk.',
    inputs: ['Approved plan, work breakdown, status definitions, owners, and dates', 'Project-system access and source-document locations', 'Change-control route and criteria for urgent escalation'],
    deliverables: ['Current task, dependency, decision, and risk registers', 'Prepared status digest with source links and stale items marked', 'Meeting and handoff notes with next owner'],
    boundaries: ['The project lead owns priorities, estimates, scope, staffing, and acceptance', 'The assistant records changes only after authorised approval', 'A status update never substitutes for technical or professional judgement'],
    quality: ['Reconcile updates with named owners and source records', 'Flag stale, blocked, ownerless, and conflicting items', 'Sample closed work against acceptance evidence before archiving'],
    scenarios: ['Maintain one project register from approved team updates', 'Prepare a weekly exception-led status digest'],
    faqs: [{ question: 'Does project administration replace a project manager?', answer: 'No. It supports the information flow. A project lead still makes trade-offs, directs delivery, accepts work, and handles stakeholders.' }, sharedFaq],
  },
  'personal-executive-support': {
    audience: 'Executives with repeatable personal-administration tasks that can be separated from highly sensitive or relationship-dependent decisions.',
    problem: 'Small coordination tasks fragment attention, yet broad personal access can create privacy and authority risks.',
    inputs: ['A narrow task list, preferences, budget limits, and approved contacts', 'Separate delegated accounts and minimum necessary records', 'Named approval and urgent-contact routes'],
    deliverables: ['Prepared options, reminders, and coordination notes', 'Current request queue with receipts or source links', 'Daily handoff listing completed, waiting, and owner-held items'],
    boundaries: ['The executive approves purchases, gifts, personal commitments, and sensitive messages', 'The assistant does not impersonate the executive or make family, health, legal, or financial decisions', 'Personal records are minimised and kept separate from general workspaces'],
    quality: ['Verify recipient, address, amount, date, and instruction before review', 'Keep an evidence trail for approved purchases and requests', 'Review access and retained personal data as the task list changes'],
    scenarios: ['Coordinate routine reservations without purchasing', 'Prepare gift options and confirm an address through an approved contact'],
    faqs: [{ question: 'How broad should personal support start?', answer: 'Start with one low-consequence recurring queue. Expand only after privacy, access, approval, and record-retention rules work in practice.' }, sharedFaq],
  },
};

export function generateStaticParams() {
  return refreshContent.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = refreshContent.services.find((item) => item.slug === slug);
  if (!service) return {};
  const url = `${site.url}/services/${service.slug}`;
  return { title: service.title, description: service.summary, alternates: { canonical: url }, openGraph: { title: service.title, description: service.summary, url, type: 'website' } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = refreshContent.services.find((item) => item.slug === slug);
  if (!service) notFound();
  const profile = serviceProfiles[slug];
  const story = serviceStories[slug];
  if (!profile || !story) notFound();

  const url = `${site.url}/services/${slug}`;
  const index = refreshContent.services.findIndex((item) => item.slug === slug);
  const related = [...refreshContent.services.slice(index + 1), ...refreshContent.services.slice(0, index)].slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.summary, url, serviceOutput: profile.deliverables.join('; '), hasPart: { '@id': `${url}#launch-plan` } },
      { '@type': 'HowTo', '@id': `${url}#launch-plan`, name: `How to launch ${service.title.toLowerCase()} support`, step: story.launch.map((step, position) => ({ '@type': 'HowToStep', position: position + 1, name: ['Agree the boundaries', 'Start with a small scope', 'Review the work'][position], text: step })) },
      { '@type': 'FAQPage', mainEntity: profile.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
    ],
  };

  return <>
    <Header />
    <main id="main-content" className="oa-detail" data-service-detail={slug}>
      <JsonLd data={schema} />
      <section className="oa-detail-hero">
        <div className="container oa-detail-hero-grid">
          <div className="oa-detail-hero-copy">
            <a className="oa-detail-back" href="/services">â† All services</a>
            <p className="eyebrow">Outsourcing Assistant / Services</p>
            <h1>{service.title}</h1>
            <p className="oa-detail-lead">{service.summary}</p>
            <p className="oa-detail-audience"><strong>Who this fits</strong>{profile.audience}</p>
            <a className="oa-detail-button" href={`/contact-us?role=${slug}`}>Discuss this service <span aria-hidden="true">â†—</span></a>
          </div>
          <figure className="oa-detail-hero-photo"><img src={service.image} alt={service.imageAlt} width="1000" height="667" fetchPriority="high" /></figure>
        </div>
      </section>

      <section className="oa-detail-intro">
        <div className="container oa-detail-intro-grid">
          <div><p className="eyebrow">Where it helps</p><h2>Clear space for the work that needs you.</h2></div>
          <div><p className="oa-detail-problem">{profile.problem}</p><p>Start with work that has clear inputs, a visible finish line and a person who can decide exceptions.</p></div>
        </div>
      </section>

      <section className="oa-detail-scope" id="the-work">
        <div className="container">
          <div className="oa-detail-section-head"><p className="eyebrow">The service, in practice</p><h2>What gets handled. What you can review.</h2></div>
          <div className="oa-detail-scope-grid">
            <div className="oa-detail-task-list"><h3>Recurring work</h3><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="oa-detail-scope-side"><div><h3>What you provide</h3><ul>{profile.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>What comes back</h3><ul>{profile.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
          </div>
        </div>
      </section>

      <section className="oa-detail-example">
        <div className="container oa-detail-example-grid">
          <div><p className="eyebrow">A working example</p><h2>{story.title}</h2><p>{story.request}</p></div>
          <div className="oa-detail-example-steps"><div><h3>The assistant prepares</h3><p>{story.preparation}</p></div><div><h3>The owner decides</h3><p>{story.handoff}</p></div></div>
        </div>
      </section>

      <section className="oa-detail-launch" id="launch-plan">
        <div className="container"><div className="oa-detail-section-head"><p className="eyebrow">Getting started</p><h2>Begin with a scope you can check.</h2></div>
          <div className="oa-detail-launch-grid">{story.launch.map((step, position) => <article key={step}><h3>{['Agree the boundaries', 'Start with a small scope', 'Review the work'][position]}</h3><p>{step}</p></article>)}</div>
        </div>
      </section>

      <section className="oa-detail-standards">
        <div className="container oa-detail-standards-grid">
          <div><p className="eyebrow">Ownership stays clear</p><h2>The lines to keep visible.</h2><p>Delegated access lets an assistant prepare and complete approved work. It does not move sensitive decisions or new commitments away from the named owner.</p><ul>{profile.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="oa-detail-quality"><h3>How to check the result</h3><ul>{profile.quality.map((item) => <li key={item}>{item}</li>)}</ul><p className="oa-detail-quality-note">A useful handoff shows the current status, source, next owner and unresolved questions.</p></div>
        </div>
      </section>

      <section className="oa-detail-faq"><div className="container oa-detail-faq-grid"><div><p className="eyebrow">Before you begin</p><h2>Common questions.</h2></div><div>{profile.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
      <section className="oa-detail-related"><div className="container"><div className="oa-detail-section-head"><p className="eyebrow">Related support</p><h2>Other work you can hand over.</h2></div><div className="oa-detail-related-grid">{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><img src={item.image} alt={item.imageAlt} width="500" height="333" loading="lazy" /><span>{item.title} <b aria-hidden="true">â†—</b></span><p>{item.summary}</p></a>)}</div></div></section>
      <section className="oa-detail-cta"><div className="container"><p className="eyebrow">Plan the handoff</p><h2>Tell us what would make your week easier.</h2><p>Share the recurring work, tools, schedule and approvals involved. We will help shape a practical role around them.</p><a className="oa-detail-button" href={`/contact-us?role=${slug}`}>Contact Us about {service.title} <span aria-hidden="true">â†—</span></a></div></section>
    </main>
    <Footer />
  </>;
}
