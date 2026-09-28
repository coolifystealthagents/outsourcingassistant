import type { ResearchPost, ResearchSource } from './fleet-content';
import { buildDecisionResearch, type ResearchDecisionSpec } from './research-batch-2026-09-22-run2';

const checked = 'Checked September 28, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'O*NET OnLine, Executive Secretaries and Executive Administrative Assistants', url: 'https://www.onetonline.org/link/details/43-6011.00', note: `Official U.S. Department of Labor occupational data used to identify administrative work dimensions a buyer must verify locally. ${checked}` },
  { name: 'U.S. Small Business Administration, Manage Your Business', url: 'https://www.sba.gov/business-guide/manage-your-business', note: `Official guidance used to frame the owner's continuing responsibility for operations, records, people, security, and continuity. ${checked}` },
  { name: 'U.S. GAO, Assessing Data Reliability', url: 'https://www.gao.gov/products/gao-20-283g', note: `Primary audit-method guidance used to test whether records are reliable enough for the specific management decision. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary framework used for governance, roles, protection, detection, response, recovery, and supplier oversight. ${checked}` },
  { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: `Primary control catalogue used for least privilege, separation of duties, logging, record integrity, and external services. ${checked}` },
];

const specs: readonly ResearchDecisionSpec[] = [
  {
    slug: 'document-production-version-control-acceptance-test',
    title: 'Testing version control in delegated document production',
    excerpt: 'A document-level study of approved sources, template state, tracked changes, reviewer authority, release evidence, and correction history.',
    cluster: 'Document production research',
    question: 'Can an assistant prepare a document from approved material without obscuring which source, template, review decision, and released version produced the final file?',
    decision: 'whether a document is ready for owner review, must return for a named correction, is blocked by source or template uncertainty, or can be released by the authorised owner',
    unit: 'one document version linked to request, approved sources, template identifier, required fields, preparer, tracked changes, reviewer comments, approval state, released file, recipients, and later corrections',
    evidence: 'the current template register, approved source set, representative requests, version history, reviewer comments, release records, returned files, correction reasons, access logs, and retention rules',
    variation: 'new versus revised documents, internal versus external recipients, structured versus narrative files, confidential fields, simultaneous edits, source conflicts, urgent requests, format conversions, and post-release corrections',
    boundary: 'The test evaluates traceability for a declared production lane. It does not establish legal sufficiency, approve content, authenticate every source, authorise external release, or replace specialist review.',
    test: 'Prepare a stratified sample in a controlled workspace, ask a second reviewer to reconstruct every material statement and change, retain disagreements, and release only versions with a named approval and recoverable history.',
    failure: 'emailing an untracked final-final file, overwriting reviewer changes, using an obsolete template, filling an unsupported field, removing source notes, or treating formatting completion as content approval',
    owner: 'the document owner who controls approved sources, template policy, substantive review, release authority, recipients, retention, and corrections',
    handoff: '/services/document-production', label: 'review document-production support',
    related: ['virtual-assistant-source-quality-evidence-research', 'research-evidence-strength-ranking', 'access-purpose-evidence'],
  },
  {
    slug: 'project-dependency-register-delegation-study',
    title: 'Studying a delegated project dependency register',
    excerpt: 'A dependency-level protocol for separating status collection from priority, commitment, scope, and risk decisions.',
    cluster: 'Project administration research',
    question: 'Can an assistant maintain decision-useful dependency status without inventing progress, changing priority, committing another owner, or concealing uncertainty?',
    decision: 'whether a dependency update is supported, awaiting named evidence, needs owner confirmation, creates a project exception, or requires a scope, priority, budget, or risk decision',
    unit: 'one dependency relationship linked to upstream deliverable, downstream work, accountable owners, required-by date, source event, status definition, confidence, blocker, next evidence, escalation, and resolution history',
    evidence: 'the approved project plan, responsibility map, milestone definitions, source-system events, owner updates, decision log, change records, overdue dependencies, disputed statuses, escalations, and completed examples',
    variation: 'internal and supplier dependencies, hard and soft dates, sequential and shared-resource work, partial delivery, changed scope, owner absence, conflicting systems, stale updates, and cross-time-zone handoffs',
    boundary: 'The study tests record quality for a defined project lane. It does not set priority, approve scope or budget, promise a completion date, determine contractual responsibility, or certify project health.',
    test: 'Sample dependencies across milestone, owner, age, and status; compare register entries with underlying events and independent owner decisions; then pilot updates using fixed definitions and an explicit stale-state rule.',
    failure: 'marking work on track because no blocker was reported, converting a forecast into a commitment, hiding disputed ownership, resetting age after reassignment, or summarising away the blocking relationship',
    owner: 'the project owner who controls priorities, scope, commitments, risk acceptance, status definitions, escalations, and final resolution',
    handoff: '/services/project-administration', label: 'scope project-administration support',
    related: ['handoff-state-transitions', 'daily-handoff-evidence-log', 'assistant-business-continuity-coverage-readiness'],
  },
  {
    slug: 'personal-executive-support-privacy-boundary-test',
    title: 'A privacy-boundary test for personal executive support',
    excerpt: 'A request-level method for separating routine preparation from private relationships, sensitive records, identity checks, spending, and personal decisions.',
    cluster: 'Personal executive support research',
    question: 'Which personal-support requests can an assistant prepare under minimum-necessary access while the executive retains private decisions, sensitive disclosures, spending, and commitments?',
    decision: 'whether a request is eligible for information gathering or drafting, can proceed under an approved rule, requires executive review, belongs with a specialist, or must remain outside delegated access',
    unit: 'one request linked to requester verification, purpose, people affected, data class, systems touched, requested action, spending or commitment authority, disclosure path, approver, completion evidence, and deletion or retention state',
    evidence: 'a representative request sample, approved contacts, purpose and access rules, sensitivity classes, spending limits, identity checks, communication templates, exceptions, approval records, corrections, and access events',
    variation: 'business and personal contexts, known and unknown requesters, family or health information, travel, household vendors, gifts, payments, account recovery, urgent language, confidential relationships, and cross-border data',
    boundary: 'The test evaluates a narrow administrative lane. It does not determine privacy compliance, verify identity from appearance, authorise financial activity, make personal choices, disclose sensitive information, or create legal commitments.',
    test: 'Classify historical scenarios without live action, oversample sensitive and ambiguous requests, compare the executive and assistant dispositions, and pilot only stable low-consequence classes with logging and rapid access removal.',
    failure: 'treating familiarity as verified authority, collecting extra personal data for convenience, exposing private calendar context, acting on urgency, sharing credentials, or retaining sensitive records without a declared need',
    owner: 'the executive or named personal-support owner who controls purpose, access, disclosure, spending, relationships, exceptions, retention, and account recovery',
    handoff: '/services/personal-executive-support', label: 'review personal executive support',
    related: ['calendar-delegation-controls', 'sensitive-case-segmentation', 'access-purpose-evidence'],
  },
  {
    slug: 'inbox-reply-template-drift-monitoring-study',
    title: 'Monitoring reply-template drift in delegated inbox work',
    excerpt: 'A sent-message protocol for detecting when approved wording, policy, context, or escalation rules no longer fit the case.',
    cluster: 'Inbox triage research',
    question: 'How can an owner detect when routine inbox replies have drifted from the approved policy, case facts, sender context, or current authority boundary?',
    decision: 'whether a template remains fit for a declared message class, needs revision, should be restricted to drafts, requires case-specific approval, or must be withdrawn',
    unit: 'one eligible inbound message linked to verified sender state, message class, policy version, template version, case facts, edits, reviewer, send identity, response, escalation, correction, and outcome evidence',
    evidence: 'the template register, policy and product change log, consecutive eligible messages, sent replies, assistant edits, owner approvals, escalations, customer corrections, complaints, security reports, and withdrawn wording',
    variation: 'message intent, known and unknown senders, product or policy version, jurisdiction, attachment risk, account state, emotional tone, sensitive data, commitment language, and exceptions inside otherwise routine classes',
    boundary: 'The study measures template fit in one declared lane. It does not establish legal compliance, judge customer intent, authenticate a sender by display name, permit unsupported promises, or authorise unrestricted sending.',
    test: 'Review a consecutive sample by template and policy version, compare every material statement with case evidence, oversample edited and escalated replies, and predefine thresholds for keep, revise, draft-only, or withdraw.',
    failure: 'sampling only unedited replies, ignoring policy dates, rewarding speed, treating absence of complaint as accuracy, copying sensitive details into a template, or letting a prior approval apply to a materially different case',
    owner: 'the mailbox and policy owner who controls message classes, approved wording, send authority, commitments, sensitive cases, review thresholds, and template withdrawal',
    handoff: '/services/inbox-triage', label: 'scope inbox-triage support',
    related: ['executive-inbox-delegation-readiness-test', 'shared-inbox-delegation-control-study', 'customer-support-response-authority-readiness'],
  },
  {
    slug: 'calendar-reschedule-cost-evidence-protocol',
    title: 'A calendar reschedule-cost evidence protocol',
    excerpt: 'An event-level method for recording disruption, preparation loss, attendee constraints, alternatives, authority, and uncertainty without inventing a dollar value.',
    cluster: 'Calendar management research',
    question: 'Which observable consequences should inform a reschedule decision before an assistant proposes options or changes an executive calendar?',
    decision: 'whether to preserve the event, propose alternate windows, change only under an existing rule, escalate a priority conflict, or leave the decision entirely with the calendar owner',
    unit: 'one proposed event change linked to requester, event purpose, attendees, time zones, notice, preparation already completed, travel or room dependencies, protected time, alternatives, approval, communication, and later correction',
    evidence: 'current calendar rules, original invitation, attendee constraints, preparation records, travel and room commitments, working hours, prior reschedules, accepted alternatives, owner decisions, declines, complaints, and event history',
    variation: 'internal and external meetings, notice period, attendee count and authority, recurring events, travel, confidential purpose, preparation intensity, time-zone spread, accessibility needs, and customer or candidate impact',
    boundary: 'The protocol structures evidence for a local scheduling choice. It does not assign a universal monetary cost, determine business priority, guarantee attendance, disclose private context, or authorise cancellation or spending.',
    test: 'Apply a predeclared consequence record to a stratified historical sample, compare assistant proposals with independent owner choices, retain disagreements and missing inputs, then pilot only reversible holds before actual changes.',
    failure: 'valuing every attendee hour identically, treating the organiser title as priority, hiding sunk preparation, ignoring destination time, counting accepted invitations as attendance, or presenting a guessed cost as measured fact',
    owner: 'the calendar owner who controls priority, protected time, private context, commitments, attendee communication, spending, exceptions, and final schedule changes',
    handoff: '/services/executive-calendar-management', label: 'review executive calendar management',
    related: ['calendar-scheduling-constraint-coverage-study', 'calendar-buffer-outcomes', 'calendar-delegation-risk-screening'],
  },
];

const topicSections: Record<string, ResearchPost['sections'][number]> = {
  'document-production-version-control-acceptance-test': {
    heading: 'Reconstruct the document from source to released file',
    paragraphs: [
      'Document production needs a chain of custody that is more precise than a folder name. Start the test when the request is accepted, not when someone opens a word processor. Give the request a stable identifier and record its purpose, intended audience, due point, substantive owner, approved template, and approved source bundle. Each source should have a title, owner or publisher, observed date, permitted use, and a note identifying which requested fields it supports. Screenshots and copied fragments should point back to their originating record. If the source conflicts with the request, the production state is blocked; the assistant should not select the more convenient value.',
      'Treat a template as a controlled input. Record its identifier and revision, then distinguish locked language, conditional language, calculated fields, and free drafting areas. A logo, header, signature block, disclaimer, address, and approval line can all become stale independently. The preparer should never silently repair the master while completing one request. Instead, flag the suspected master defect, continue only where the result remains safe, and let the template owner decide whether a new revision is needed. That preserves the difference between producing a document and governing the document system.',
      'A useful version sequence can be simple: source-complete draft, review copy, approved release candidate, and released file. What matters is that the identity cannot move backward. Reviewer comments belong to the reviewed version; accepting a change should not erase the comment that explains it. If two reviewers edit simultaneously, reconcile their proposals into a new candidate and retain both inputs. The released file should be immutable to ordinary editors, carry the release approver and time in the register, and be checked against the file actually delivered rather than the file the team intended to deliver.',
      'For a realistic exercise, include a clean repeat document, an obsolete-template request, conflicting address records, a late source replacement, two reviewers with incompatible edits, a PDF conversion that changes pagination, and a correction after release. Score traceability separately from formatting. A beautiful document fails if a reviewer cannot locate support for a material field; an accurately sourced draft may still require layout repair. Report unsupported fields, wrong-template starts, orphan comments, release mismatches, and recovery time as separate observations. This makes the conclusion actionable without pretending that one composite quality score measures legal or substantive fitness.',
    ],
    rows: [
      { label: 'Source-complete draft', value: 'Every material field points to an approved, dated input', source: 'Local version protocol' },
      { label: 'Released file', value: 'Approved candidate matches the delivered artifact and register', source: 'Local release record' },
    ],
  },
  'project-dependency-register-delegation-study': {
    heading: 'Test whether the dependency graph predicts a safe next question',
    paragraphs: [
      'A dependency register is not a decorated task list. Its basic claim is directional: a named downstream activity cannot reach a defined state until a particular upstream output reaches its own defined state. Record both ends, the type of dependency, the evidence that created the relationship, and the person authorised to change it. “Waiting on marketing” is not a usable edge. “Landing-page copy cannot enter compliance review until the campaign owner accepts revision C in the content system” identifies an output, state, owner, and observable event.',
      'Status collection should begin from system evidence and then request confirmation only where the evidence is incomplete. A comment saying “nearly done” does not satisfy a delivered definition. Likewise, a file upload may not satisfy acceptance. Give every state a permitted evidence type: submitted may require a stable link and timestamp; accepted may require the named reviewer’s decision; blocked may require the missing condition and next owner. The assistant can assemble and challenge the record against those definitions, but cannot decide that an incomplete output is good enough to protect a milestone.',
      'Age belongs to the dependency relationship, not merely to the current assignee. Preserve the first moment the downstream work became unable to proceed, each owner change, each promised evidence point, and every period where the dependency was disputed. Reassigning an item must not reset its clock. Separate active work from waiting for input, waiting for review, waiting for an external party, and paused by an owner decision. These distinctions let the project owner see whether a date risk arises from production, acceptance capacity, unclear authority, or an external constraint.',
      'Build the sample around paths rather than isolated rows. Include one simple predecessor, one fan-in where several outputs are needed, one fan-out where a late output affects several teams, one shared specialist constraint, one supplier dependency, and one edge made obsolete by a scope change. Ask the assistant to produce the next evidence request for each edge and ask the project owner independently whether that request would reduce uncertainty. Evaluate missing edges, unsupported status, stale evidence, incorrect age, hidden downstream impact, and unauthorised priority language separately. The register is useful when it exposes the next decision, not when every row is coloured green.',
    ],
    rows: [
      { label: 'Dependency edge', value: 'Upstream output and state constrain a named downstream state', source: 'Local project protocol' },
      { label: 'Aging rule', value: 'Preserve original blocked time across reassignment and status refreshes', source: 'Local event history' },
    ],
  },
  'personal-executive-support-privacy-boundary-test': {
    heading: 'Classify the request before revealing personal context',
    paragraphs: [
      'Personal executive support can combine low-consequence logistics with information whose sensitivity is unrelated to its apparent administrative simplicity. Begin with a purpose code and a minimum-information view. A restaurant comparison may require neighbourhood, time, party size, accessibility needs, and dietary constraints, but not the identity of every guest. A household service appointment may require a service address and access window, but not a broad view of family calendars. The test should ask whether the task can be completed with a narrower representation before granting access to the original record.',
      'Separate the identity of the requester from the authority behind the request. A familiar name, writing style, forwarded thread, or urgent phone call is not enough when the action would disclose location, change an account, move money, reveal a relationship, or affect a protected appointment. Record the approved channel, verification step, action class, and fallback owner. If the executive cannot be reached, the safe response may be to preserve options or pause. Convenience is not evidence that a substitute is authorised to make the personal decision.',
      'Use a sensitivity ladder that responds to context. Ordinary logistics, confidential preferences, precise location, financial details, health or accommodation information, identity documents, credentials, and information about another person need different handling. The ladder should govern which fields are visible, whether copying is permitted, where notes may be stored, who can approve disclosure, and when the working record is deleted. Avoid labels that invite assistants to infer sensitive facts. A neutral appointment code plus a private owner-held explanation can support scheduling without spreading the underlying context.',
      'Test compound scenarios because that is where boundaries fail: a gift request that includes a payment and home address; travel research that reveals a private relationship; a medical appointment followed by an insurance question; a family member requesting a calendar change; an urgent vendor asking for a door code; and account recovery prompted through a new channel. For each, score data minimisation, requester verification, authority recognition, safe option preservation, escalation quality, and disposal of working copies. Do not reward completion when the correct action was to stop. A well-run personal-support lane should make refusal and private escalation as operationally clear as ordinary preparation.',
    ],
    rows: [
      { label: 'Minimum view', value: 'Expose only fields required for the declared purpose and action', source: 'Local privacy protocol' },
      { label: 'High-consequence request', value: 'Verify authority through an approved independent path or pause', source: 'Local executive rule' },
    ],
  },
  'inbox-reply-template-drift-monitoring-study': {
    heading: 'Detect drift at the claim and decision-rule level',
    paragraphs: [
      'A reply template can remain grammatically polished while becoming operationally wrong. Break it into claims and actions before sampling: product or service description, eligibility statement, time expectation, required evidence, privacy wording, remedy, commitment, escalation instruction, and closing action. Connect each element to a policy owner and effective version. A message is not compliant merely because the template was once approved; its material sentences must fit the current case facts and the policy that applied when it was sent.',
      'Distinguish template drift from case-selection error. Template drift exists when the approved wording itself no longer reflects policy or reliably invites a wrong interpretation. Selection error occurs when an otherwise valid template is used for the wrong message class. Editing error changes protected wording or introduces an unsupported statement. Evidence error arises when the response uses an unverified account state, order state, date, or identity. These failures require different repairs: revise the master, improve classification, restrict editable regions, strengthen source checks, or remove send authority for that class.',
      'Create a sampling frame from all eligible inbound messages, not from the replies that were easiest to send. Retain items drafted but not sent, escalated items, abandoned drafts, complaints, corrections, and replies later superseded by new information. Stratify by template version and message class, then deliberately oversample manual edits, sensitive cases, unknown senders, unusual attachments, and replies sent near a policy change. Compare each material sentence with the source record available at send time. Later knowledge should be reported separately rather than used to rewrite the original evaluation.',
      'A drift signal should trigger a bounded decision. One unsupported commitment can justify immediate withdrawal even if the numerical rate is small. Repeated harmless formatting edits may justify a template improvement without restricting the lane. Record the numerator, eligible denominator, observation window, consequence class, reviewer agreement, and contrary cases behind every threshold decision. Then test the revised template in draft-only mode against fresh cases. Monitor whether assistants can recognise cases that no template should answer. The goal is not maximum template use; it is accurate routing with explicit authority and current wording.',
    ],
    rows: [
      { label: 'Template drift', value: 'Master wording no longer fits current policy or intended meaning', source: 'Local message review' },
      { label: 'Selection error', value: 'Valid wording applied to a case outside its declared class', source: 'Local classification review' },
    ],
  },
  'calendar-reschedule-cost-evidence-protocol': {
    heading: 'Represent disruption without inventing a universal price',
    paragraphs: [
      'A proposed calendar change creates several kinds of consequence, only some of which can be measured in money. Record preparation already completed, scarce attendee windows, travel or room commitments, customer or candidate expectations, interpreter or accessibility arrangements, dependencies on later meetings, and protected recovery time. Keep these as separate fields rather than forcing them into one score. The owner may value a confidential relationship or a rare decision window differently from the visible duration of the event, and the assistant should not infer that priority from seniority or meeting size.',
      'Use an event-change record with the original state and each proposed alternative. Preserve time zone with every timestamp, including the location whose daylight-saving rule applies. Note the notice each attendee would receive, what must be rebooked, which preparation remains reusable, and which constraints have been confirmed rather than assumed. A tentative hold is an option-preservation tool, not acceptance. It should have an expiry, a visible owner, and wording that does not imply a commitment to unconfirmed attendees.',
      'Separate sunk preparation from avoidable additional work. Work already completed may matter to the owner, but it should not automatically prevent a change that now serves the business better. Conversely, a one-hour move can impose a full day of disruption when travel, caregiving, room access, or another meeting is coupled to the original slot. The record should show who bears each consequence and whether the information is observed, reported, estimated, or unknown. Do not convert an attendee count into a currency figure without local compensation, duration, and use assumptions supplied by the authorised owner.',
      'Exercise contrasting events: an internal recurring check-in with no preparation, an external candidate interview with several interviewers, a customer decision meeting after a prepared workshop, a confidential event whose title cannot be disclosed, a meeting adjacent to travel, and a cross-time-zone session spanning a daylight-saving change. Ask the assistant to produce two feasible options plus a preserve-current option, then compare those with the owner’s independent decision. Score constraint capture, privacy, option feasibility, consequence labels, approval routing, and communication accuracy. The method succeeds when it makes trade-offs visible; it does not succeed merely because a meeting moved.',
    ],
    rows: [
      { label: 'Observed consequence', value: 'Supported by a current event, booking, preparation, or attendee record', source: 'Local calendar evidence' },
      { label: 'Unknown consequence', value: 'Preserved for owner review rather than converted to zero', source: 'Local decision protocol' },
    ],
  },
};

export const researchBatch20260928: readonly ResearchPost[] = specs.map((spec) => {
  const post = buildDecisionResearch(spec, sources);
  return {
    ...post,
    published: '2026-09-28',
    updated: '2026-09-28',
    methodology: post.methodology.replaceAll('September 22, 2026', 'September 28, 2026'),
    sections: [topicSections[spec.slug], ...post.sections],
  };
});
