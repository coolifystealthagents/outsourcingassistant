import type { ResearchPost, ResearchSource } from './fleet-content';
import type { ResearchDecisionSpec } from './research-batch-2026-09-22-run2';

const checked = 'Checked October 2, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'O*NET OnLine, Executive Secretaries and Executive Administrative Assistants', url: 'https://www.onetonline.org/link/details/43-6011.00', note: `Official U.S. Department of Labor occupational data used to identify administrative task dimensions that must be scoped locally, not to claim a universal role. ${checked}` },
  { name: 'U.S. Small Business Administration, Manage Your Business', url: 'https://www.sba.gov/counseling/manage-your-business/', note: `Official small-business guidance used to keep operating, finance, people, security, and continuity responsibility with the business owner. ${checked}` },
  { name: 'U.S. GAO, Assessing Data Reliability', url: 'https://www.gao.gov/products/gao-20-283g', note: `Primary audit-method guidance used to test accuracy, completeness, and applicability for the particular buyer decision. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary framework used for governance, roles, oversight, protection, response, recovery, and supplier-risk concepts. ${checked}` },
  { name: 'NIST SP 800-53 Rev. 5, Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: `Primary control catalogue used for least privilege, separation of duties, logging, record integrity, account management, and external services. ${checked}` },
];

const specs: readonly ResearchDecisionSpec[] = [
  {
    slug: 'customer-support-case-closure-evidence-study',
    title: 'Testing closure evidence in assistant-prepared customer support cases',
    excerpt: 'A case-level study of whether the promised action, customer-visible outcome, unresolved exception, and authorised closure decision remain connected.',
    cluster: 'Customer support research',
    question: 'What evidence should be present before an assistant-prepared support case is treated as resolved rather than merely answered?',
    decision: 'whether a case is ready for authorised closure, needs a customer or system confirmation, must return for correction, or requires an owner decision about remedy, policy, money, privacy, or safety',
    unit: 'one support case linked to the original request, verified identity where required, governing policy version, facts available at reply time, promised action, system event, customer response, exception state, reviewer, and final disposition',
    evidence: 'a consecutive case sample including reopened, transferred, escalated, abandoned, corrected, and still-open work; reply drafts; policy versions; system events; customer confirmations; reviewer decisions; and closure reasons',
    variation: 'question versus incident, first contact versus repeat contact, customer-visible commitment, refund or credit involvement, identity sensitivity, system dependency, channel, language, handoff count, and whether the customer later reopened the issue',
    boundary: 'The protocol tests whether closure is supported in a declared support lane. It does not determine legal liability, customer satisfaction, policy fairness, fraud, safety, entitlement to a remedy, or the suitability of a particular worker or provider.',
    test: 'Blind-review a stratified case sample against pre-declared closure fields, compare the record with the underlying system event and customer-facing promise, preserve reviewer disagreement, and pilot draft-only closure recommendations before granting any closing authority.',
    failure: 'equating a sent reply with resolution, excluding reopened cases, accepting a status label without the underlying event, treating silence as confirmation, or allowing a macro to override a case-specific exception',
    owner: 'the support owner who controls policy, remedies, commitments, sensitive exceptions, closure authority, and correction notices',
    handoff: '/services', label: 'scope a controlled customer-support lane',
    related: ['customer-support-response-authority-readiness', 'support-context-quality', 'queue-denominator-integrity'],
  },
  {
    slug: 'meeting-action-acceptance-traceability-study',
    title: 'Tracing acceptance of meeting actions prepared by an assistant',
    excerpt: 'An action-level protocol for separating captured discussion, proposed ownership, accepted commitment, evidence of completion, and later correction.',
    cluster: 'Meeting administration research',
    question: 'Can a meeting-administration lane preserve the difference between a discussed action and a commitment accepted by the authorised owner?',
    decision: 'whether an action record is an unconfirmed proposal, an accepted commitment, blocked pending evidence, completed under its finish definition, superseded by a later decision, or ready for owner-approved closure',
    unit: 'one proposed action linked to the source meeting, exact decision context, proposed owner, acceptance event, due condition, dependencies, sensitivity, status evidence, completion artifact, reviewer, and revision history',
    evidence: 'meeting materials, recordings or notes where permitted, decision logs, action-owner acknowledgements, source-system changes, completion artifacts, disputed records, reassignment history, overdue items, and superseding decisions',
    variation: 'decision versus discussion, named versus inferred owner, internal versus external commitment, fixed date versus conditional due point, confidential context, multi-owner action, reassignment, partial completion, and later correction',
    boundary: 'The study evaluates traceability in one meeting workflow. It does not authorise commitments, interpret privileged or regulated discussions, judge individual performance, certify completion quality, or let an assistant assign work by inference.',
    test: 'Sample actions from different meeting and consequence classes, ask two reviewers to reconstruct the acceptance and finish evidence independently, retain disputed cases, and test a workflow that requires owner acknowledgement before an item enters the committed queue.',
    failure: 'turning a speaker suggestion into an assignment, inferring an owner from attendance, using a calendar date as acceptance, closing on a verbal progress claim, or overwriting the original action when scope changes',
    owner: 'the meeting or workstream owner who confirms decisions, accepts commitments, assigns accountable owners, changes due conditions, and accepts completion',
    handoff: '/services/meeting-administration', label: 'review meeting-administration support',
    related: ['meeting-notes-action-tracking', 'meeting-administration-decision-capture-readiness', 'handoff-state-transitions'],
  },
  {
    slug: 'vendor-follow-up-nonresponse-escalation-study',
    title: 'Studying nonresponse escalation in delegated vendor follow-up',
    excerpt: 'A follow-up-event study that distinguishes delivery evidence, supplier silence, internal delay, disputed ownership, and an authorised escalation.',
    cluster: 'Vendor operations research',
    question: 'When a vendor does not reply, what evidence supports another reminder, a channel change, an internal decision, or a pause?',
    decision: 'whether to send an approved reminder, verify the contact route, wait for a declared response window, escalate internally, ask an authorised owner to change channel or consequence, or stop outreach',
    unit: 'one requested vendor response linked to the source obligation, contact identity, approved channel, sent event, delivery evidence, response window, business dependency, internal owner, follow-up history, exception, and disposition',
    evidence: 'approved vendor and contract records, communication logs, delivery or bounce events, declared response windows, dependency records, prior replies, contact changes, disputed requests, internal approvals, and final outcomes',
    variation: 'routine update versus contractual notice, known versus changed contact, message delivery state, urgency, supplier time zone, dependency consequence, personal data, legal sensitivity, outage, and simultaneous internal action',
    boundary: 'The method evaluates a defined administrative follow-up lane. It does not interpret a contract, establish breach, approve a threat or commercial concession, authenticate a changed payment route, or predict that more contact will produce a response.',
    test: 'Reconstruct a stratified sample of answered and unanswered requests, separate sent from delivered and delivered from acknowledged, compare each escalation with the written authority map, and pilot recommendation-only routing on new cases.',
    failure: 'counting automated delivery as human receipt, increasing urgency without owner authority, contacting an unverified address, hiding an internal approval delay behind supplier age, or resetting elapsed time after reassignment',
    owner: 'the vendor relationship owner who controls commercial commitments, contractual or legal notices, channel changes, escalation consequences, and acceptance of the supplier response',
    handoff: '/services/vendor-follow-up', label: 'review vendor follow-up support',
    related: ['vendor-follow-up-decision-rights-register', 'supplier-dependency-analysis', 'approval-dependency-latency'],
  },
  {
    slug: 'travel-option-expiry-revalidation-study',
    title: 'Revalidating expiring travel options before owner approval',
    excerpt: 'An option-level study of price, availability, time zone, restrictions, accessibility, source time, and traveller approval without implying a booking guarantee.',
    cluster: 'Travel coordination research',
    question: 'How should an assistant show when a researched travel option has become too stale for a traveller to approve safely?',
    decision: 'whether an option remains reviewable, needs a targeted recheck, is no longer comparable, should be replaced, or must pause for traveller, budget, policy, accessibility, identity, or specialist input',
    unit: 'one travel option linked to the official supplier source, search timestamp and time zone, itinerary segment, total shown price, included and excluded items, change and cancellation terms, accessibility needs, identity assumptions, expiry signal, recheck, and owner decision',
    evidence: 'official supplier records, time-stamped search captures where permitted, traveller-approved requirements, policy and budget rules, fare or room conditions, accessibility confirmations, recheck events, rejected options, changed inventory, and booking-owner decisions',
    variation: 'air, rail, lodging, and ground transport; refundable and restricted terms; currency; taxes and fees; loyalty status; time zone; accessibility; passport or visa questions; supplier inventory; and linked itinerary segments',
    boundary: 'This protocol tests how option evidence is prepared for review. It does not guarantee availability or price, determine entry eligibility, provide legal or medical advice, make a booking, spend funds, or decide the traveller’s priorities.',
    test: 'Prepare contrasting options with recorded source times, define which fields must be rechecked at different ages and before approval, simulate one changed price and one unavailable segment, and compare the assistant packet with the booking owner’s decision.',
    failure: 'presenting a cached price as current, omitting material restrictions, mixing search times without labels, assuming linked segments remain compatible, converting an accessibility request into a guarantee, or treating a hold as a confirmed booking',
    owner: 'the traveller or authorised travel owner who sets priorities, confirms identity facts, approves spend and terms, decides among trade-offs, and completes or authorises booking',
    handoff: '/services/travel-coordination', label: 'review travel-coordination support',
    related: ['travel-coordination-disruption-handoff-test', 'calendar-reschedule-cost-evidence-protocol', 'time-zone-handoff-design'],
  },
  {
    slug: 'crm-duplicate-merge-reversibility-study',
    title: 'Testing reversibility before delegated CRM duplicate merges',
    excerpt: 'A record-pair method for evaluating identity evidence, field conflicts, relationship history, downstream effects, approval, and rollback before consolidation.',
    cluster: 'CRM administration research',
    question: 'What evidence is sufficient to propose that two CRM records represent the same entity without erasing a legitimate distinction?',
    decision: 'whether a suspected duplicate is safe to propose for merge, needs more identity evidence, must remain separate, requires specialist review, or should be excluded because downstream effects or rollback are not understood',
    unit: 'one candidate record pair linked to stable identifiers, source systems, creation events, names and aliases, verified contact points, account relationships, consent or preference state, field conflicts, activity history, downstream references, approver, merge event, and rollback evidence',
    evidence: 'source records, import and creation logs, verified identifiers, relationship and ownership history, communication preferences, conflicting fields, linked transactions or cases, system merge behaviour, backup or export evidence, approvals, and corrected examples',
    variation: 'person versus organisation, shared contact points, household or branch relationships, renamed entities, recycled addresses, integrations, consent states, record ownership, open opportunities or cases, and systems that do not support a full rollback',
    boundary: 'The study evaluates record-management evidence for a declared CRM configuration. It does not establish legal identity, decide data-protection obligations, approve deletion, resolve customer ownership, certify consent, or guarantee that every integration can reverse a merge.',
    test: 'Build a stratified set of clear matches, clear nonmatches, and ambiguous pairs; have two reviewers apply the identity rule independently; inspect downstream effects in a safe environment; and require owner approval plus recoverable evidence before a production merge.',
    failure: 'matching on name or email alone, treating an empty field as agreement, selecting a master record without a field rule, losing relationship history, merging across consent states, or claiming reversibility without testing connected systems',
    owner: 'the CRM data owner who controls identity rules, master-field policy, customer or account ownership, merge authority, retention, downstream coordination, and correction',
    handoff: '/services/crm-administration', label: 'review CRM-administration support',
    related: ['crm-assistant-change-authority-matrix', 'crm-evidence-confidence', 'record-correction-confidence'],
  },
];

const fieldNotes: Readonly<Record<string, { heading: string; paragraphs: readonly string[] }>> = {
  'customer-support-case-closure-evidence-study': {
    heading: 'Follow the promise through to the customer-visible result',
    paragraphs: [
      'Closure begins with a reconstruction of what the customer actually asked for, not with the label selected at the end of the queue. Split the case into requested outcome, facts supplied, facts verified, response given, action promised, and condition that would make the promise complete. A password-reset explanation may be complete when the verified customer receives a working recovery route; a replacement promise remains open until the authorised order event exists; an explanation of policy can be delivered even when the customer disagrees. Those are different finish conditions. The study should preserve that difference instead of rewarding the fastest path to a closed status.',
      'Reopened work needs its own causal review. A reopen may expose a missing action, an inaccurate explanation, a new fact, a separate request, or a customer who simply needs the same information in another form. Link the reopen to the original case, then have a reviewer classify the relationship without altering either record. If the original promise was fulfilled and a new issue arose, the first closure may remain supported. If the promised system change never occurred, the initial closure was premature. Reporting those outcomes separately prevents a raw reopen rate from becoming an unfair quality score or a reason to keep every case open indefinitely.',
      'The hardest examples combine a routine message with consequential authority. A customer asks for an address correction after shipment, disputes a recurring charge, requests deletion while an account issue is open, or reports a possible safety concern using ordinary language. The assistant can preserve identity evidence, prepare the approved response, mark the conflicting policy paths, and route the case. The assistant should not invent a remedy, decide fraud, waive a control, or close because the queue target is approaching. A good closure packet shows the unresolved decision plainly and keeps the customer-facing wording consistent with what the authorised owner actually decided.',
      'A useful pilot therefore compares four clocks: time to first accurate response, time to the promised operational event, time awaiting an authorised decision, and time to customer-visible confirmation where that is part of the finish rule. It also retains cases that time out, transfer, or remain silent. Reviewers should inspect a small set of ordinary cases plus every sampled high-consequence exception. The reader outcome is practical: a buyer can decide which closure recommendations an assistant may prepare, which evidence must be attached, and which case classes must stay open for a named owner rather than treating closure volume as proof of service quality.',
    ],
  },
  'meeting-action-acceptance-traceability-study': {
    heading: 'Separate conversation, commitment, and completion',
    paragraphs: [
      'Meeting language is full of provisional verbs: we could, someone should, I can look, perhaps next week. None is automatically an accepted assignment. The action record should quote or closely locate the source statement, describe the proposed output, and carry an explicit acceptance state. When the chair assigns work during the meeting, the chair decision is the authority event. When a participant volunteers subject to checking capacity, later acknowledgement may be required. When the minutes infer an owner because that person spoke most, the item remains proposed. This distinction prevents tidy minutes from quietly creating obligations that the meeting itself never made.',
      'Due information also needs structure. A date may be a requested target, a contractual milestone, a review window, or merely the date of the next meeting. Record the event that makes work due, the time zone when a clock time matters, and any dependency that can move the condition. “Friday” is incomplete when participants span locations. “Before launch” is incomplete when launch has no accepted version. The assistant can ask the missing question and show the conflict; the meeting owner decides which commitment changes. Preserving the original due condition makes later delay analysis possible without rewriting history around the latest forecast.',
      'Completion is not the same as a status word. Each action needs an observable finish: a decision entered in the approved log, a reviewed file stored at a stable link, a stakeholder message sent by an authorised person, or an exception accepted by the owner. For compound actions, show the unfinished component instead of closing the whole item when the easiest step is done. If a later meeting changes scope, link a superseding decision and keep the earlier version. That trail lets a reviewer answer what was agreed, what evidence supported closure, and why the work changed without relying on a participant’s memory.',
      'The field exercise should mix decisions, suggestions, volunteered work, confidential discussion, cross-team dependencies, corrected minutes, and an action reassigned after acceptance. Measure false assignments, missed commitments, unsupported due dates, owner acknowledgement, completion evidence, and supersession accuracy separately. Do not rank attendees or infer motivation. The buyer should finish with a rule for which meeting classes permit assistant-prepared action records, how owners accept them, and when an unresolved ambiguity returns to the chair. The value is a trustworthy bridge from a specific decision to a reviewable work queue, not a larger list of apparent actions.',
    ],
  },
  'vendor-follow-up-nonresponse-escalation-study': {
    heading: 'Diagnose silence before increasing pressure',
    paragraphs: [
      'An unanswered vendor request has at least four possible states: the message did not reach a valid route, it arrived but no person accepted ownership, a supplier owner is working within the agreed window, or the supplier is late. Internal prerequisites may also be missing. Start the record with the exact requested output, the source of the request, the contact route, sent and delivery evidence, the response window, and the internal owner who can answer questions. A mailbox copy proves only what was sent. It does not prove receipt by the right person, comprehension, agreement, or refusal.',
      'Follow-up cadence should come from the relationship record rather than from a universal sequence. A routine status request, a safety-related interruption, a contract notice, and a suspected bank-detail change cannot share the same escalation. Identify whether the next step is another reminder, verification through a known channel, an internal decision, or specialist review. The assistant may draft language inside an approved playbook and record each attempt. Threats, concessions, changed deadlines, public escalation, legal characterisations, or promises to third parties stay with the authorised owner even when silence is inconvenient.',
      'Age the dependency from the first unmet condition and preserve pauses with reasons. If the business waited three days to approve a clarification, that interval should not be described as supplier silence. If the contact bounced and a verified replacement was found, retain both events rather than resetting the case. If a supplier answered only part of a multi-field request, mark the answered fields and keep the unresolved output visible. This event history supports a useful operational question—what evidence or decision is needed next—without converting delay into a claim about the vendor’s competence or intent.',
      'A bounded review should sample delivered replies, bounces, no-response cases, changed contacts, partial answers, urgent exceptions, and requests that were later withdrawn. Review whether each next contact used an authorised address, reflected the current dependency, respected the allowed wording, and preserved the response window. Compare assistant recommendations with the vendor owner’s independent choice. The buyer outcome is a nonresponse lane with explicit stop points: preparation can continue while evidence is clear, but channel changes and consequential escalation wait for authority. That design reduces repeated noise while making genuinely blocked work easier to see.',
    ],
  },
  'travel-option-expiry-revalidation-study': {
    heading: 'Treat every itinerary choice as time-sensitive evidence',
    paragraphs: [
      'A travel comparison is a snapshot assembled from sources that change on different clocks. Inventory may disappear immediately; a fare condition may remain stable; an entry rule can change independently; a hotel cancellation window can move as the arrival date approaches. Attach a checked time and time zone to every material field, not just to the document. State whether the value came from an official supplier page, an authenticated account, a policy record, or a secondary discovery source. If two options were checked hours apart, the table should not imply that they were simultaneously available.',
      'Comparability requires more than headline price. Build the owner’s decision around total shown cost, currency, payment timing, baggage or meal inclusion, connection risk, transfer requirements, change and cancellation rules, room attributes, accessibility confirmation, and dependencies between segments. Unknown taxes or fees remain unknown. Loyalty benefits should be labelled with the account assumption used. A lower price paired with a nonrefundable term is not simply cheaper; it represents a different trade-off. The assistant can expose that difference while the traveller decides which inconvenience, risk, or flexibility matters.',
      'Revalidation should be targeted. Before approval, recheck fields whose volatility could reverse the decision: availability, current total, material restrictions, linked-segment timing, and any supplier confirmation on which accessibility depends. Preserve the older snapshot so the owner can see what changed. If the preferred option vanishes, do not silently substitute the next result; show the loss, refresh comparable alternatives, and request a new decision. A temporary hold is recorded with its expiry and conditions and never described as a ticket, confirmed room, eligibility decision, or guaranteed accommodation.',
      'Test the protocol with a stable domestic trip, a multi-segment international journey, a hotel with a changing cancellation boundary, a traveller-requested accessibility feature, and a disruption that invalidates one segment. Include one price change and one source conflict. Score timestamp completeness, source authority, comparison consistency, restrictions, recheck accuracy, and whether the packet stops at the correct approval boundary. The buyer should emerge knowing how long each field can remain decision-useful and what must be checked again, while recognising that live inventory and official requirements can still change after a careful review.',
    ],
  },
  'crm-duplicate-merge-reversibility-study': {
    heading: 'Prove identity and downstream safety before consolidation',
    paragraphs: [
      'Duplicate detection produces candidates, not facts. Two records sharing a name may represent different people; two organisations using the same domain may be separate branches; one person may legitimately have different roles, preferences, or customer relationships. Start with stable identifiers and provenance: who or what created each record, when, from which system, and under which relationship. Treat email, telephone, postal address, employer, alias, and external identifier as evidence with different reliability and change patterns. A blank value is not agreement, and a normalized spelling is not proof of identity.',
      'Field selection needs an explicit master rule. The newest value is not always best, especially when an import overwrote a verified record. For every conflicting field, retain both source, observation time, verification status, permitted use, and downstream consumer. Communication preferences and consent-related records require their own authorised interpretation rather than an automatic winner. Open cases, opportunities, invoices, campaign history, and ownership may attach differently to the two records. The proposed merge packet should show exactly which values survive, which remain historical, and which conflict prevents consolidation.',
      'Reversibility must be demonstrated in the actual configuration. A CRM interface may offer an undo while an email platform, reporting warehouse, automation, or billing integration has already consumed the merged identifier. Map those consumers and test with safe records. Exporting the two source rows can help recovery but may not restore activity links, audit history, suppression state, or external references. When full rollback is unavailable, narrow merge authority and raise the evidence threshold. The assistant can collect the dependency map and prepare a recommendation; the data owner accepts the residual risk and initiates the change.',
      'Construct a challenge set with obvious duplicates, obvious nonmatches, family members sharing contact details, an employee who changed companies, renamed organisations, a recycled email address, conflicting marketing preferences, and records with open commercial work. Have reviewers decide independently and explain the identifiers they trusted. Report false-merge risk separately from missed duplicates, because their consequences differ. The buyer outcome is not a promise of a clean database. It is a controlled lane where uncertain pairs remain separate, approved pairs have field-level evidence, and every production action has an owner, timestamp, downstream check, and correction path.',
    ],
  },
};

const closingAnalysis: Readonly<Record<string, { heading: string; paragraphs: readonly string[] }>> = {
  'customer-support-case-closure-evidence-study': { heading: 'Decide closure from the customer-visible outcome', paragraphs: [
    'Read each sampled case from the customer outcome backward. Identify the exact promise in the reply, then locate the operational event that proves or contradicts it. A replacement needs shipment evidence, an access correction needs a successful account event, and a promised review needs an authorised disposition. Silence does not prove any of those outcomes. If the workflow permits administrative closure after a stated interval, label that rule separately from confirmed resolution so reporting does not merge two different states.',
    'Reopened cases need a reason code grounded in the later message. Separate a failed promised action from a new request, delayed external event, or fact that was unavailable at closure. Preserve the first decision rather than rewriting it after the reopen. The support owner can then correct the reply, repair the operational step, or change the closure rule. The assistant maintains links and state history; remedies, policy exceptions, money, privacy, safety, and final closure authority remain with the owner.',
    'Sample cases by consequence, not only by volume. Include ordinary questions, system-dependent promises, transferred work, money-related requests, identity checks, corrections, and unresolved exceptions. Ask two reviewers to name the closure claim and its evidence without seeing each other’s answer. A disagreement may show that the finish condition is vague or that the event cannot be retrieved reliably. Repair the earliest unsupported transition instead of telling staff to add more notes everywhere.',
    'A weekly closure review can stay small. Select cases from each consequence class, record the first unsupported link, assign the correction to the system or policy owner, and verify that the customer record reflects the final action. Trends should change the workflow only after the support owner reviews contrary cases and confirms that the proposed rule would not close a different class of request prematurely.',
  ] },
  'meeting-action-acceptance-traceability-study': { heading: 'Keep acceptance and completion as separate events', paragraphs: [
    'An action becomes a commitment only when the authorised owner accepts the work and its finish condition. Attendance, silence, a facilitator’s summary, or a date typed into notes does not establish acceptance. Keep proposed work visible in a pending state and retain the exact source context. If two people offer partial help, record each contribution instead of inventing a single owner. If the due point depends on another event, preserve the condition rather than presenting a calendar date as an unconditional promise.',
    'Completion requires its own artifact and accepting decision. A chat message saying done may be enough for a low-consequence reminder, but it cannot prove that a client deliverable was accepted or a system change succeeded. Reassignment also remains an event: record who first accepted, why it moved, who accepted next, and whether scope changed. This gives the reader a register that protects people from inferred commitments while making genuine commitments and their evidence easy to reconstruct.',
    'A useful challenge set includes an unassigned suggestion, two partial volunteers, a client request outside scope, an owner who agrees subject to missing information, and an artifact that fails the written finish condition. Independent reviewers should place each item in the same state. If they cannot, change the state definition or evidence rule before measuring overdue work. The assistant may request confirmation and maintain the log, but the meeting owner confirms decisions and accepts completion.',
    'Review overdue actions against acceptance time, not meeting time, and keep blocked work separate from work the owner simply has not started. This distinction prevents the dashboard from blaming an assistant for a decision that never became a commitment. It also lets the meeting owner see whether delays come from unclear acceptance, missing dependencies, reassignment, or failure to produce the agreed artifact.',
  ] },
  'vendor-follow-up-nonresponse-escalation-study': { heading: 'Diagnose the route before escalating the supplier', paragraphs: [
    'An unanswered request may have bounced, reached a retired address, arrived during a local closure, lacked a clear ask, or be waiting on the buyer’s own approval. Confirm delivery and the approved contact route before labelling the vendor nonresponsive. An automated receipt proves system acceptance, not human acknowledgement. Reassignment inside the buyer’s team must not reset the external clock, and an internal hold should remain visible as internal delay instead of being added to supplier age.',
    'The escalation brief should state the dependency affected, the declared response window, the attempts with delivery evidence, and the owner decision now required. More reminders do not create authority to threaten, concede, change channels, or update payment details. Changed contacts stop for independent verification. Reviewing answered, partial, bounced, disputed, and unanswered cases together lets the buyer distinguish a supplier pattern from unclear requests or a broken route. The result is an evidence-based ladder, not an urgency script.',
    'Time zones and outages belong in the record without becoming excuses assumed on the supplier’s behalf. The assistant records the applicable business window and any verified service notice. The relationship owner decides whether that information changes the next step. Close the case only when the requested evidence arrives, the owner changes the dependency, or the owner expressly stops outreach. This preserves the difference between a supplier response, an internal workaround, and an abandoned request.',
    'Measure the process by route accuracy as well as elapsed time. A prompt response sent to an unverified address is not a success, and a slower case may be correct when payment or contract details require independent checks. Keep the original request, delivery events, replies, internal decisions, and final disposition under one stable identifier so the next reviewer does not restart contact or misstate what the vendor received.',
  ] },
  'travel-option-expiry-revalidation-study': { heading: 'Show when an option stopped being comparable', paragraphs: [
    'A travel search is a time-stamped observation. Price, inventory, restrictions, connection feasibility, room type, and accessibility details may change on different schedules. Record the source time and time zone for every option. Recheck the complete itinerary, total shown price, taxes and fees, cancellation terms, and linked transfers before approval. If one segment disappears, reassess the whole option rather than substituting a new segment while leaving old totals and timings in place.',
    'Distinguish a supplier hold from a buyer review window and from an ordinary result with no guarantee. Each has a different meaning. Accessibility requests need direct confirmation through the approved provider channel, while passport, visa, health, and entry questions stay with the traveller or qualified source. A useful brief tells the traveller when each option was checked, what can change, which downstream plans it affects, and what must be decided. It does not turn research into a booking promise.',
    'Test the packet by changing one fact at a time: raise the fare, remove a segment, move the arrival airport, shorten a connection, alter a cancellation term, or let a hold expire. The exercise shows which fields need a final check immediately before purchase. Record rejected options as well as the selected one so the decision remains understandable after inventory changes. The traveller or authorised owner chooses the trade-off and completes or expressly authorises the booking.',
    'The final brief should also state when it expires for internal use. Once that point passes, the assistant refreshes volatile fields or labels the option stale rather than silently carrying it forward. This protects the traveller from comparing a fresh fare with an old room rate or an updated flight with a transfer that no longer works. The source timestamps remain visible after revalidation.',
  ] },
  'crm-duplicate-merge-reversibility-study': { heading: 'Require field-level evidence and a tested rollback path', paragraphs: [
    'A suspected duplicate is an identity question, not a cleanup instruction. Shared names, domains, telephone numbers, and addresses can belong to distinct people or organisations. Record creation provenance and stable identifiers before comparing values. A recent import is not automatically more reliable than an older verified field. Consent, suppression, ownership, billing, open cases, and commercial relationships may each have different authoritative sources, so the proposal must show which value survives and which conflict blocks the merge.',
    'Test rollback beyond the CRM interface. Email automation, analytics, billing, support, and warehouse systems may consume the surviving identifier before an error is found. Exported rows may not restore activity links, audit history, or communication preferences. Use challenge pairs such as family members, company movers, shared domains, renamed organisations, and recycled addresses. The assistant prepares provenance and downstream checks; the data owner accepts identity and rollback risk and initiates the production change.',
    'Report false-merge risk separately from missed duplicates because the remedies differ. An uncertain pair can remain separate while staff gather evidence; a false merge may expose information, distort reporting, or attach activity to the wrong relationship. After an approved merge, verify the survivor record and every mapped consumer, then retain the approval, timestamp, affected identifiers, and correction path. If the platform cannot support that evidence, narrow merge authority rather than treating the limitation as routine cleanup.',
    'A useful queue keeps three outcomes distinct: merge approved, remain separate, and evidence incomplete. The third outcome is not failure and should not be forced into either of the others to improve throughput. Reviewers can sample each outcome against later corrections, but they should never use a low correction count as proof when the system makes mistaken merges difficult to detect or report.',
  ] },
};

export const researchBatch20261002: readonly ResearchPost[] = specs.map((spec) => {
  return {
    slug: spec.slug,
    title: spec.title,
    excerpt: spec.excerpt,
    published: '2026-10-02',
    updated: '2026-10-02',
    cluster: spec.cluster,
    image: { url: '/illustrations/getillustrations/goodle-team/assistant-handoff-collaboration.svg', alt: `Owner and assistant reviewing evidence for ${spec.title.toLowerCase()}` },
    headlineStat: spec.question,
    methodology: spec.test,
    keyStats: [spec.decision, spec.unit, spec.evidence],
    takeaways: [spec.boundary, spec.failure, spec.owner],
    sources,
    related: spec.related,
    body: [spec.question, spec.decision, spec.unit, spec.evidence, spec.variation, spec.boundary, spec.test, spec.failure],
    serviceHandoff: { heading: 'Apply this study to a defined assistant role', href: spec.handoff, label: spec.label, paragraphs: [spec.boundary] },
    faqs: [
      { q: spec.question, a: spec.decision },
      { q: 'Who owns the consequential decision?', a: spec.owner },
    ],
    sections: [
      { heading: fieldNotes[spec.slug].heading, paragraphs: fieldNotes[spec.slug].paragraphs, rows: [] },
      { heading: closingAnalysis[spec.slug].heading, paragraphs: closingAnalysis[spec.slug].paragraphs, rows: [] },
    ],
  };
});
