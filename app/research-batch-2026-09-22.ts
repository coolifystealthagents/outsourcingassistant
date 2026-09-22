import type { ResearchPost, ResearchSection, ResearchSource } from './fleet-content';

const checked = 'Checked September 22, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'O*NET OnLine, Executive Secretaries and Executive Administrative Assistants', url: 'https://www.onetonline.org/link/details/43-6011.00', note: `Official U.S. Department of Labor occupational data describing tasks, work activities, context, and requirements rather than a universal assistant job description. ${checked}` },
  { name: 'U.S. GAO, Assessing Data Reliability', url: 'https://www.gao.gov/products/gao-20-283g', note: `Primary audit-method guidance for deciding whether operational evidence is reliable enough for its intended use. ${checked}` },
  { name: 'UK Government Service Manual, Measuring the Success of Your Service', url: 'https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service', note: `Official guidance on matching measures to a transaction, end-to-end journey, or organisational decision. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary governance framework for expressing outcomes, responsibilities, risk context, and review. ${checked}` },
  { name: 'NIST SP 800-53 Rev. 5, Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: `Primary control catalogue covering account management, least privilege, separation of duties, logging, and review. ${checked}` },
];

type Spec = {
  slug: string; title: string; excerpt: string; cluster: string; question: string;
  decision: string; unit: string; evidence: string; variation: string; boundary: string;
  pilot: string; failure: string; owner: string; service: string; serviceLabel: string;
  related: readonly string[];
};

const specs: readonly Spec[] = [
  {
    slug: 'virtual-assistant-role-scope-task-inventory-study',
    title: 'Building a task inventory before scoping a virtual assistant role',
    excerpt: 'A source-led method for turning recurring work into a reviewable assistant role without copying a generic job description.',
    cluster: 'Assistant role design',
    question: 'Which observed tasks belong in the first scope for a virtual assistant, and which should remain with the owner?',
    decision: 'whether the buyer has enough task evidence to request a focused assistant staffing plan',
    unit: 'one recurring task instance linked to its trigger, inputs, action, output, authority limit, and reviewer',
    evidence: 'a consecutive task log, examples of acceptable outputs, tool and information dependencies, exception cases, and the owner decision that closes the task',
    variation: 'frequency by week, seasonal demand, consequence when wrong, input quality, number of systems touched, and the amount of owner judgment required',
    boundary: 'A task inventory describes work that was observed in one business. It does not establish a universal virtual assistant job, prove that every task should be delegated, or predict a candidate’s performance.',
    pilot: 'Choose a narrow lane of repeatable, reviewable tasks; retain the original examples; and test whether a named reviewer can judge completion consistently before adding adjacent work.',
    failure: 'starting from a broad title such as “general VA,” listing aspirations instead of observed work, or hiding rare but consequential exceptions inside a simple frequency count',
    owner: 'the business owner or functional manager who currently accepts the output and can define the authority boundary',
    service: '/contact-us', serviceLabel: 'request a staffing plan',
    related: ['assistant-task-intake-design', 'assistant-quality-scorecard', 'research-briefing-workflow'],
  },
  {
    slug: 'assistant-workload-volume-variability-baseline',
    title: 'Measuring workload volume and variability before hiring an assistant',
    excerpt: 'How to observe recurring demand, peaks, waiting, and review capacity before turning a busy week into a staffing assumption.',
    cluster: 'Staffing decision research',
    question: 'What workload record is sufficient to choose an initial assistant schedule without pretending demand is constant?',
    decision: 'whether a proposed assistant schedule and initial queue are supported by the buyer’s actual pattern of work',
    unit: 'one eligible work item entering a declared queue, including completed, cancelled, merged, waiting, returned, and still-open items',
    evidence: 'arrival and disposition timestamps, active versus waiting state, task class, requested due point, exception reason, owner review time, and open items at the observation cutoff',
    variation: 'day-of-week and month-end peaks, campaigns, absences, task mix, customer response dependencies, and changes in the owner’s available review time',
    boundary: 'An observed workload range supports a local scheduling decision. It is not a promise of assistant capacity, a productivity benchmark, or evidence that a full-time or part-time arrangement is universally better.',
    pilot: 'Observe at least one representative operating cycle, show the range rather than only the average, and start with a schedule that has explicit overflow and owner-review rules.',
    failure: 'multiplying one unusually busy day into a monthly forecast, excluding abandoned work, confusing waiting with active effort, or treating every item as equal in complexity',
    owner: 'the queue owner who can explain demand changes, accept trade-offs, and decide what waits when volume exceeds the planned lane',
    service: '/contact-us', serviceLabel: 'request a staffing plan',
    related: ['capacity-variance-signals', 'virtual-assistant-owner-review-capacity', 'queue-denominator-integrity'],
  },
  {
    slug: 'managed-assistant-supervision-responsibility-map',
    title: 'Mapping supervision responsibilities for managed assistant support',
    excerpt: 'A buyer-side responsibility map for comparing managed support with direct supervision without assuming that coordination transfers accountability.',
    cluster: 'Staffing model research',
    question: 'Which supervision, quality, access, and business decisions stay with the buyer when assistant support includes a management layer?',
    decision: 'whether the proposed management model names a reachable owner for every consequential decision and routine review',
    unit: 'one recurring responsibility attached to a trigger, accountable owner, preparer, approver, evidence record, backup, and escalation time',
    evidence: 'the proposed responsibility matrix, service boundaries, access approvals, sample-review cadence, escalation examples, coverage arrangements, and buyer decisions that cannot be delegated',
    variation: 'whether work is routine or exceptional, the consequence of an error, client-specific policy, system permissions, schedule coverage, and the maturity of the buyer’s own procedure',
    boundary: 'A responsibility map clarifies an operating arrangement. It does not determine legal employment status, replace a contract, transfer regulatory duties, or prove that one staffing model produces better results.',
    pilot: 'Walk three normal cases and three exception cases through the proposed map, identify every ownerless interval, and revise the scope before live permissions or customer commitments expand.',
    failure: 'using “managed” as a substitute for naming decisions, assuming a coordinator owns the buyer’s policy, or leaving backup coverage and access removal outside the map',
    owner: 'the buyer’s accountable manager, supported by the staffing contact for coordination and by authorised specialists for legal, privacy, security, or employment questions',
    service: '/services', serviceLabel: 'review the available service lanes',
    related: ['virtual-assistant-exception-owner-continuity', 'assistant-approval-evidence-for-recurring-work', 'remote-team-access-controls'],
  },
  {
    slug: 'philippines-assistant-first-week-pilot-readiness',
    title: 'A readiness test for the first week with a Philippines-based assistant',
    excerpt: 'An evidence-based go, narrow, or wait test for examples, access, review coverage, and escalation before a first-week pilot begins.',
    cluster: 'Philippines staffing research',
    question: 'What must be ready before a buyer starts a bounded first-week lane with a Philippines-based assistant?',
    decision: 'whether the buyer should launch the proposed first-week task lane, narrow it, or postpone it until a missing control has an owner',
    unit: 'one proposed first-week task type with a real example, finish condition, permitted action, prohibited action, reviewer, access path, and escalation route',
    evidence: 'approved examples, a task-specific checklist, named review windows in both local contexts, least-privilege access, safe test records, exception examples, and a stop rule',
    variation: 'time-zone overlap, source-system availability, owner response coverage, task consequence, example quality, training needs, and whether the assistant is working in a live or test environment',
    boundary: 'Readiness is task-specific and time-specific. Passing this test does not certify a person, guarantee a ramp period, justify broad access, or show that a Philippines-based arrangement causes a particular outcome.',
    pilot: 'Launch only the tasks with complete examples and reachable review; sample every early output; keep consequential actions in draft or preparation state; and hold a dated go, narrow, or stop review.',
    failure: 'treating tool access as readiness, scheduling work when no authorised reviewer is reachable, using a policy description without a finished example, or expanding after silent rather than explicit approval',
    owner: 'the buyer’s named first-week reviewer, with a backup who has the same decision authority during the stated coverage window',
    service: '/contact-us', serviceLabel: 'request a staffing plan',
    related: ['philippines-assistant-review-window-capacity', 'assistant-task-intake-evidence-quality', 'remote-team-access-controls'],
  },
  {
    slug: 'virtual-assistant-access-sequencing-task-evidence',
    title: 'Sequencing virtual assistant access from task evidence',
    excerpt: 'A least-privilege method for granting view, draft, edit, send, and administrative capabilities only when the task record supports them.',
    cluster: 'Assistant access research',
    question: 'What evidence should a buyer require before expanding a virtual assistant from observation to action in a business system?',
    decision: 'whether a specific permission is necessary for the current task lane and safe to grant at the proposed stage',
    unit: 'one permission-to-task relationship with a system, resource, permitted action, business purpose, approver, evidence, review date, and removal trigger',
    evidence: 'the task inventory, completed dry runs, sampled outputs, exception history, system audit capability, data sensitivity, approval record, and a tested revocation path',
    variation: 'read versus write capability, reversibility, customer visibility, data sensitivity, bulk actions, integration reach, shared credentials, and the consequence of a mistaken action',
    boundary: 'A staged access record supports a local authorisation decision. It is not a security certification, a substitute for system-specific risk review, or evidence that task success warrants unrelated permissions.',
    pilot: 'Begin with the smallest capability that permits a realistic dry run, review retained evidence, expand one material capability at a time, and verify removal and logging before broader use.',
    failure: 'copying a predecessor’s permissions, granting an administrator role for convenience, using shared credentials, or treating several correct drafts as approval to send or change records',
    owner: 'the authorised system or data owner who understands both the business purpose and the consequence of the requested capability',
    service: '/services', serviceLabel: 'review the available service lanes',
    related: ['access-purpose-evidence', 'permission-review-expiry', 'remote-team-access-controls'],
  },
];

const row = (label: string, value: string, source: string) => ({ label, value, source });
const section = (heading: string, paragraphs: readonly string[], rows: ResearchSection['rows']): ResearchSection => ({ heading, paragraphs, rows });

function make(x: Spec): ResearchPost {
  return {
    slug: x.slug,
    title: x.title,
    excerpt: x.excerpt,
    published: '2026-09-22',
    updated: '2026-09-22',
    cluster: x.cluster,
    image: { url: '/illustrations/getillustrations/goodle-team/assistant-handoff-collaboration.svg', alt: `Business owner and assistant reviewing a staffing decision for ${x.title.toLowerCase()}` },
    headlineStat: 'One observed task record, one named decision owner, and zero universal staffing promises.',
    methodology: `Structured desk review of five current primary or official sources, checked September 22, 2026, followed by a proposed local observation protocol. Research question: ${x.question} Unit of analysis: ${x.unit}. The protocol separates source facts, author analysis, local inference, and uncertainty. It has not been run on OutsourcingAssistant.com client results and makes no causal performance, price, hiring, location, or time-saving claim.`,
    keyStats: [`Decision: ${x.decision}.`, `Observation unit: ${x.unit}.`, 'Evidence base: five named primary or official sources, each with a URL and checked date.'],
    takeaways: [x.boundary, x.pilot, `Accountable owner: ${x.owner}.`],
    sources,
    related: x.related,
    body: [x.question, x.decision, x.unit, x.evidence, x.variation, x.boundary, x.pilot, x.failure],
    serviceHandoff: { heading: 'Connect the evidence to a staffing conversation', href: x.service, label: x.serviceLabel, paragraphs: [`Use the completed record to ${x.serviceLabel}. Bring the observed tasks, examples, exceptions, access limits, schedule constraints, and the name of the reviewer who will accept early work.`, 'The buyer remains responsible for consequential business decisions and should obtain appropriate specialist advice where legal, employment, privacy, security, financial, or regulated questions arise.'] },
    sections: [
      section('Start with the buyer decision, not a staffing claim', [
        x.question,
        `The decision in scope is ${x.decision}. That is deliberately narrower than deciding whether assistants are generally effective or whether a location, vendor model, or job title is “best.” A useful study begins with the choice the buyer must make, the evidence available before that choice, and the person who can accept the consequence.`,
        `The observation unit is ${x.unit}. Keeping one unit prevents unlike events from disappearing inside a broad impression. It also makes missing evidence visible. A spreadsheet row, ticket, calendar event, or system log is only a source record; it becomes decision evidence when its definition, scope, date, and relationship to the buyer’s question are explicit.`,
        `O*NET describes administrative work through multiple tasks, activities, contexts, and requirements. Its occupational profile is useful as a discovery prompt, not as a ready-made scope for one company. The local task record must decide what work actually occurs, what an acceptable output looks like, and where authority stops.`,
      ], [row('Buyer decision', x.decision, 'Pre-specified local protocol'), row('Observation unit', x.unit, 'Pre-specified local protocol')]),
      section('Collect a local evidence set before designing the lane', [
        `The minimum evidence set is ${x.evidence}. Collect consecutive eligible cases during a declared window instead of selecting memorable successes or failures. Preserve cancelled, paused, returned, exceptional, and still-open work when it entered the defined population. Every exclusion needs a reason and an owner.`,
        `Use the work’s original records where practical. Record when a timestamp comes from a system, a participant’s recollection, or a later reconstruction. Keep unknown values unknown. A blank review time cannot safely become zero, and an absent exception note cannot become evidence that no exception occurred. Corrections should preserve the prior value, correction reason, author, and time.`,
        `GAO’s data-reliability method asks whether data is sufficiently reliable for its intended use. Apply that test field by field. A rough frequency count may support a discovery conversation while being too weak for a schedule decision. A polished checklist may explain intended work while being too weak to show what actually happens. Reliability is contextual, not a permanent label attached to a file.`,
      ], [row('Minimum evidence', x.evidence, 'Local records plus GAO reliability test'), row('Missing values', 'Retain as unknown; do not silently convert to success, failure, or zero', 'GAO data-reliability method')]),
      section('Describe demand and variation without hiding the hard cases', [
        `The important sources of variation are ${x.variation}. State them before interpreting totals. Report a range, count, and distribution where the sample permits it; show individual cases when it does not. An average without its denominator and open work can make an unstable lane look predictable.`,
        `Separate arrival, active preparation, waiting, review, return, and final disposition. These states answer different questions. Waiting for an owner is not assistant effort. A responsible escalation is not a defect. A cancelled request may still have consumed preparation time. A reopened item may represent new facts instead of premature closure. Preserve the state history before assigning a performance meaning.`,
        `The UK Government Service Manual distinguishes transaction measures from end-to-end journey and organisational measures. The transferable lesson is to match the measure to the question. A buyer choosing an initial task lane may need task completion evidence, exception patterns, reviewer availability, and user or stakeholder feedback together. No single activity count represents the whole staffing decision.`,
      ], [row('Variation to retain', x.variation, 'Local study design'), row('Measurement rule', 'Match the measure to the decision and the full work journey', 'UK Government Service Manual')]),
      section('Draw the authority boundary before access or volume expands', [
        `The accountable owner is ${x.owner}. Name that person or role in the protocol. Then distinguish preparation, recommendation, approval, execution, verification, and exception ownership. A person may prepare a customer reply without authority to send it, update a clean field without authority to change a commercial term, or assemble payment evidence without authority to move money.`,
        `NIST CSF 2.0 places governance and responsibility inside the risk-management system rather than treating them as an afterthought. NIST SP 800-53 supplies more detailed concepts such as account management, least privilege, separation of duties, and logging. These sources do not prescribe a staffing arrangement; they support the narrower conclusion that permission and accountability should be explicit, reviewable, and connected to purpose.`,
        `The safest default is not “the assistant can never act.” It is that each action has a stated evidence threshold and owner. Low-consequence, reversible work may move after sampled review. Customer promises, access expansion, bulk changes, money movement, sensitive personnel matters, and regulated judgments need the specifically authorised path. Silence, repeated completion, or possession of a tool does not create authority.`,
      ], [row('Accountable owner', x.owner, 'Local governance record'), row('Access principle', 'Task-specific, least-privilege, approved, logged, and reviewable', 'NIST CSF 2.0 and SP 800-53')]),
      section('Run a bounded pilot with observable stop rules', [
        `${x.pilot} Write the eligible task types, start point, finish condition, review sample, escalation window, and end date before the first live item. A pilot is a learning period with controlled exposure; it is not a discounted production promise or a reason to weaken acceptance rules.`,
        `Use real-shaped but safe work for dry runs. Remove or mask sensitive data when the decision does not require it. Ask the reviewer to judge the output against the declared example and finish condition. Record disagreement and the reason for it rather than rewriting the original score after discussion. If reviewers cannot apply the rule consistently, clarify the rule before increasing volume.`,
        `Pre-commit to go, narrow, pause, and stop outcomes. A go decision means only that the tested lane can continue under its current controls. Narrow when a subset is ready but another task type lacks evidence or review. Pause when a recoverable dependency has a named owner and date. Stop when the safe boundary is repeatedly crossed, the required owner is unavailable, or reliable evaluation is not possible.`,
      ], [row('Pilot action', x.pilot, 'Proposed bounded test'), row('Decision states', 'Go, narrow, pause, or stop with owner and evidence', 'Local governance protocol')]),
      section('Protect the analysis from predictable distortions', [
        `The main distortion risk is ${x.failure}. Prevent it by preserving the full eligible population and by keeping the original record beside every category. Do not improve a result by changing eligibility after outcomes are known, dropping the oldest open cases, combining unlike tasks, or replacing a missing field with a favourable assumption.`,
        `Separate four layers in the review. Facts are retained events, records, and source statements. Analysis applies the declared definitions. Inference proposes why a pattern occurred or what might happen next. Uncertainty covers missing records, ambiguous categories, small counts, changing conditions, and reasonable rival explanations. Put the inference boundary next to the conclusion, not in a distant disclaimer.`,
        `${x.boundary} The five cited sources offer occupational, measurement, governance, and control principles. None evaluates this exact buyer, assistant, staffing partner, task lane, or pilot. Any recommendation here is therefore a proposed operating method derived from those principles, not a reported outcome or testimonial.`,
      ], [row('Known distortion', x.failure, 'Niche-specific risk analysis'), row('Claim boundary', x.boundary, 'Explicit limitation')]),
      section('Make a decision packet another reviewer can reconstruct', [
        `The final packet should contain the buyer question, scope, eligible population, observation window, source register, field definitions, raw case references, exclusions, missing-data note, comparison, exception list, owner decisions, limitations, and proposed next step. Date the packet and retain the version used for the decision. Later edits should receive a truthful modification record rather than replacing history.`,
        `A second reviewer should be able to trace a conclusion back to the cases and authoritative sources without relying on a private conversation. That does not require publishing sensitive records. Use stable internal identifiers, minimise personal information, and provide only the evidence needed for the stated purpose. Route unresolved security, privacy, employment, legal, tax, or regulated questions to a qualified owner or adviser.`,
        `The decision-grade conclusion is modest: ${x.boundary} The practical next step is also bounded: ${x.pilot} Repeat the same definitions after the change, retain contrary cases, and compare only like work. That creates an honest learning loop for assistant staffing while keeping the buyer in control of scope, access, and consequential decisions.`,
      ], [row('Packet owner', x.owner, 'Named local decision record'), row('Next test', x.pilot, 'Prospective repeat using stable definitions')]),
    ],
    faqs: [
      { q: `What is the first question to answer for ${x.title.toLowerCase()}?`, a: `${x.question} Define that decision and the observation unit before choosing a metric or staffing arrangement.` },
      { q: 'Does this research prove that a virtual assistant will improve performance?', a: 'No. It proposes a local evidence and decision method. It does not report client outcomes or establish a causal, universal, geographic, cost, speed, or quality claim.' },
      { q: 'Who should approve the final scope?', a: `The accountable owner is ${x.owner}. Other specialists should review issues within their legal, privacy, security, financial, employment, or regulated authority.` },
    ],
  };
}

export const researchBatch20260922: readonly ResearchPost[] = specs.map(make);
