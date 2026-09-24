import type { ResearchPost, ResearchSource } from './fleet-content';
import { buildDecisionResearch, type ResearchDecisionSpec } from './research-batch-2026-09-22-run2';

const checked = 'Checked September 24, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'O*NET OnLine, Executive Secretaries and Executive Administrative Assistants', url: 'https://www.onetonline.org/link/details/43-6011.00', note: `Official U.S. Department of Labor occupational data used only to identify administrative task and work-context dimensions that a buyer should verify locally. ${checked}` },
  { name: 'U.S. Small Business Administration, Manage Your Business', url: 'https://www.sba.gov/business-guide/manage-your-business', note: `Official small-business guidance used for the buyer responsibilities surrounding finance, operations, cybersecurity, and continuity; it does not endorse a staffing arrangement. ${checked}` },
  { name: 'Federal Trade Commission, Cybersecurity for Small Business', url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity', note: `Official U.S. business guidance used for access limitation, written security expectations, remote access, verification, and incident preparation. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary governance framework used for responsibility, supplier, protection, detection, response, and recovery concepts; it does not select an assistant or service model. ${checked}` },
  { name: 'NIST SP 800-53 Rev. 5, Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: `Primary control catalogue used for least privilege, separation of duties, logging, external services, account management, and contingency concepts. ${checked}` },
];

const specs: readonly ResearchDecisionSpec[] = [
  {
    slug: 'meeting-administration-decision-capture-readiness', title: 'Testing decision-capture readiness for meeting administration',
    excerpt: 'A buyer-side protocol for turning approved meeting records into reviewable decisions, actions, owners, due points, and unresolved questions without inventing commitments.', cluster: 'Meeting administration research',
    question: 'Can a declared class of meetings be converted into a reliable action record while preserving who decided, who owns each action, and what remains unconfirmed?',
    decision: 'whether an assistant may prepare notes only, draft an action register for chair approval, distribute an approved record, or must stop because the source, authority, or review path is incomplete',
    unit: 'one proposed decision or action linked to meeting identifier, source timestamp, exact supporting words, speaker, accountable owner, due point, confidence state, reviewer, approval time, and correction history',
    evidence: 'the agenda, authorised recording or contemporaneous notes, attendee list, prior action register, approved terminology, consecutive normal and ambiguous examples, reviewer decisions, corrections, and distribution rules',
    variation: 'formal versus informal meetings, absent decision makers, overlapping speakers, unclear dates, sensitive subjects, amended decisions, external attendees, recording restrictions, and actions that depend on another approval',
    boundary: 'This protocol tests record preparation for a declared meeting lane. It does not authorize recording, decide what participants meant, assign work on a manager’s behalf, change a deadline, or prove that a meeting was effective.',
    test: 'Have the chair independently reconstruct a representative set of decisions and actions, compare the result with the assistant-prepared register, retain disagreements, and enable distribution only after named approval.',
    failure: 'turning discussion into a decision, assigning an owner from context, replacing an uncertain date with a plausible one, omitting unresolved actions, or distributing sensitive notes to the full invitation list by default',
    owner: 'the meeting chair or named decision owner who can confirm the official record, commitments, recipients, and correction process',
    handoff: '/services/meeting-administration', label: 'review meeting administration support',
    related: ['meeting-notes-action-tracking', 'meeting-decision-ownership', 'meeting-action-evidence-trail'],
  },
  {
    slug: 'customer-support-response-authority-readiness', title: 'A response-authority readiness test for customer support assistants',
    excerpt: 'A queue-level test for separating classification, information retrieval, drafting, approved replies, exceptions, and business commitments before support work is delegated.', cluster: 'Customer support research',
    question: 'Which support requests can an assistant prepare or answer under declared rules without silently acquiring authority to promise refunds, remedies, security actions, or policy exceptions?',
    decision: 'whether a case class is classification-only, draft-only, eligible for a pre-approved response, dependent on case-by-case approval, specialist-controlled, or outside the delegated queue',
    unit: 'one customer case linked to intake channel, customer and account verification state, issue category, source records, sensitivity, approved knowledge, proposed response, authority rule, escalation owner, send identity, and closure evidence',
    evidence: 'a consecutive case sample including open and reopened work, current policies, approved response examples, identity and privacy rules, entitlement records, exception history, escalations, sent replies, corrections, and customer-visible commitments',
    variation: 'information requests versus complaints, verified versus unverified identity, personal data, payment or refund requests, service incidents, policy ambiguity, vulnerable customers, channel, queue age, language, and downstream consequence',
    boundary: 'The test documents readiness for a bounded queue. It does not establish legal compliance, authorize refunds or contract changes, diagnose security incidents, decide contested facts, or promise a customer outcome.',
    test: 'Apply the proposed authority matrix to a representative historical sample, compare independent reviewer dispositions, preserve false-safe classifications, and pilot only cases with stable evidence and a reachable escalation owner.',
    failure: 'using urgency as authority, treating an empathetic draft as approval, exposing account details before verification, closing on a sent reply instead of an accepted outcome, or excluding escalated cases from quality review',
    owner: 'the support service owner who controls policy, customer commitments, exception decisions, specialist routing, and access removal',
    handoff: '/services/customer-support', label: 'scope a customer support lane',
    related: ['customer-support-escalation-matrix', 'outsourced-support-case-classification', 'support-queue-privacy-controls'],
  },
  {
    slug: 'bookkeeping-preparation-source-control-boundary', title: 'Defining the source-control boundary for bookkeeping preparation',
    excerpt: 'A record-level method for separating document collection, coding proposals, reconciliation support, exceptions, approvals, and controlled accounting decisions.', cluster: 'Bookkeeping preparation research',
    question: 'Which bookkeeping-preparation steps can an assistant perform from approved source records while leaving accounting judgments, payments, filings, and final entries with authorised owners?',
    decision: 'whether a recurring step is collection-only, proposal-only, eligible for controlled entry, requires accountant or owner approval, or must remain outside the assistant lane',
    unit: 'one financial source record linked to entity, period, counterparty, amount, currency, account or category proposal, source location, duplicate state, exception, approval, system event, and reconciliation disposition',
    evidence: 'the chart of accounts and data dictionary, approved source repositories, bank and card records available through controlled access, sample invoices and receipts, duplicate rules, close checklist, exception history, audit trail, corrections, and owner instructions',
    variation: 'cash versus accrual context, entity and period, recurring versus novel transactions, taxes, foreign currency, split transactions, missing documents, duplicates, personal expenditure, disputed charges, and whether an entry affects payment or filing',
    boundary: 'This method structures document and record preparation. It is not accounting, tax, legal, audit, or financial advice and does not authorize payment, journal approval, account reconciliation sign-off, filing, or a conclusion about deductibility.',
    test: 'Use a reversible copy of representative records, compare each source-to-proposal chain with the authorised reviewer’s independent disposition, and activate only steps with complete evidence, logging, and rollback.',
    failure: 'guessing a category from a merchant name, treating a missing receipt as zero evidence, clearing a reconciliation difference to make totals match, copying bank details from email, or using production payment permissions for data preparation',
    owner: 'the business finance owner and qualified accounting or tax professional responsible for the books, filings, payments, policies, and final judgments',
    handoff: '/services/bookkeeping-preparation', label: 'review bookkeeping preparation support',
    related: ['access-purpose-evidence', 'record-correction-confidence', 'reversible-action-boundaries'],
  },
  {
    slug: 'sales-prospect-research-acceptance-record', title: 'An acceptance record for delegated sales prospect research',
    excerpt: 'A claim-level review model for company fit, contact provenance, freshness, uncertainty, exclusions, and approved use before research enters a sales workflow.', cluster: 'Sales support research',
    question: 'What evidence must a prospect record contain before a buyer accepts it for a declared, lawful sales-support use?',
    decision: 'whether a prospect record is accepted for the declared segment, returned for missing or conflicting evidence, restricted to research only, escalated for specialist review, or excluded',
    unit: 'one material prospect field linked to the target criterion, source title or system, URL or record identifier, observed date, exact support, confidence, conflict, permitted use, reviewer, and final disposition',
    evidence: 'the approved segment definition and exclusions, required fields, first-party company pages and authoritative registers where relevant, dated source notes, contact-source provenance, suppression rules, conflict records, reviewer decisions, and correction history',
    variation: 'company versus individual data, public versus licensed sources, jurisdiction, company changes, role changes, ambiguous entities, franchises and subsidiaries, confidence, source age, commercial incentive, and the intended outreach channel',
    boundary: 'This acceptance record can make research traceable for a stated sales-support use. It does not establish a lawful basis for processing or outreach, verify consent, guarantee identity or fit, score buying intent, or authorize contact.',
    test: 'Have a reviewer reproduce a representative sample from the cited evidence without private explanation, retain contradictions and unknowns, and import only fields whose support and permitted use match the written acceptance rule.',
    failure: 'inferring a personal email address, treating a directory listing as current employment, filling required fields with guesses, ignoring suppression records, or presenting an algorithmic score as observed buying intent',
    owner: 'the sales operations and privacy owners who define the segment, lawful use, acceptance rule, system permissions, outreach authority, and removal process',
    handoff: '/services/sales-support', label: 'define a sales support research lane',
    related: ['research-evidence-strength-ranking', 'crm-record-confidence-review', 'outsourced-crm-field-change-provenance'],
  },
  {
    slug: 'travel-coordination-disruption-handoff-test', title: 'Testing disruption handoffs in delegated travel coordination',
    excerpt: 'A scenario-based test for itinerary truth, approval limits, traveller contact, supplier evidence, time zones, spending, and safe escalation during travel changes.', cluster: 'Travel coordination research',
    question: 'Can a travel-support lane preserve the current itinerary and reach an authorised decision when a delay, cancellation, missed connection, or traveller-contact failure occurs?',
    decision: 'whether the assistant may monitor and prepare options, communicate an approved update, execute a narrow pre-authorised change, or must route the disruption to the traveller or specialist owner',
    unit: 'one itinerary segment and disruption linked to traveller, booking reference, supplier source, local and destination time, current status, constraints, option timestamp, price and terms, approval, communication evidence, and verified final state',
    evidence: 'the approved itinerary, traveller preferences and accessibility needs, supplier records, booking and fare terms, insurance or corporate travel rules, contact tree, spending limits, time-zone map, disruption examples, approvals, and final confirmations',
    variation: 'domestic versus international travel, separate tickets, visa or border constraints, accessibility, traveller reachability, overnight disruption, loyalty status, refundable terms, companion travellers, price changes, and supplier channel reliability',
    boundary: 'The test evaluates a documented coordination lane in selected scenarios. It does not provide immigration, legal, safety, medical, insurance, or tax advice; guarantee supplier availability; or authorize bookings, spending, or itinerary changes beyond written limits.',
    test: 'Run tabletop exercises for a delay, cancellation, missed connection, and unreachable traveller using time-stamped supplier information; record decision latency and gaps; then repair the smallest missing source, authority, or contact control.',
    failure: 'editing a local itinerary without changing the supplier booking, presenting an expired option as available, assuming the cheapest option is acceptable, exposing identity documents in a broad channel, or making an irreversible change before approval',
    owner: 'the traveller or named travel manager who controls preferences, spending, booking changes, risk decisions, emergency contacts, and final acceptance',
    handoff: '/services/travel-coordination', label: 'review travel coordination support',
    related: ['time-zone-handoff-design', 'calendar-conflict-evidence-log', 'assistant-business-continuity-coverage-readiness'],
  },
];

export const researchBatch20260924: readonly ResearchPost[] = specs.map(spec => {
  const post = buildDecisionResearch(spec, sources);
  return {
    ...post,
    published: '2026-09-24',
    updated: '2026-09-24',
    methodology: post.methodology.replaceAll('September 22, 2026', 'September 24, 2026'),
  };
});
