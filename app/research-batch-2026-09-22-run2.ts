import type { ResearchPost, ResearchSection, ResearchSource } from './fleet-content';

const checked = 'Checked September 22, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'O*NET OnLine, Executive Secretaries and Executive Administrative Assistants', url: 'https://www.onetonline.org/link/details/43-6011.00', note: `Official U.S. Department of Labor occupational data used only to identify task, work-context, and skill dimensions that a buyer should verify locally. ${checked}` },
  { name: 'U.S. Small Business Administration, Manage Your Business', url: 'https://www.sba.gov/counseling/manage-your-business/', note: `Official small-business guidance covering planning, employment, compliance, finance, cybersecurity, and continuity responsibilities. ${checked}` },
  { name: 'U.S. GAO, Assessing Data Reliability', url: 'https://www.gao.gov/products/gao-20-283g', note: `Primary audit-method guidance for deciding whether operational records are reliable enough for a stated staffing decision. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary governance framework used for responsibility, risk context, supplier, and review concepts; it does not endorse a staffing model. ${checked}` },
  { name: 'NIST SP 800-53 Rev. 5, Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: `Primary control catalogue used for least privilege, separation of duties, external-service, contingency, logging, and account-management concepts. ${checked}` },
];

export type ResearchDecisionSpec = {
  slug: string; title: string; excerpt: string; cluster: string; question: string;
  decision: string; unit: string; evidence: string; variation: string; boundary: string;
  test: string; failure: string; owner: string; handoff: string; label: string;
  related: readonly string[];
};

const specs: readonly ResearchDecisionSpec[] = [
  {
    slug: 'virtual-assistant-service-lane-fit-evidence-map',
    title: 'Choosing a virtual assistant service lane from task evidence',
    excerpt: 'A buyer-side method for matching real recurring work to an assistant service lane without starting from a vague title or a sales promise.',
    cluster: 'Assistant buying research',
    question: 'Which service lane best matches the buyer’s observed tasks, systems, outputs, exceptions, and review capacity?',
    decision: 'whether the first request belongs in executive support, customer support, sales support, operations, bookkeeping preparation, CRM administration, or a narrower custom lane',
    unit: 'one recurring task instance connected to its trigger, source record, system, expected output, recipient, authority limit, exception route, and accepting reviewer',
    evidence: 'a consecutive task sample, completed examples, queue volumes, system touchpoints, sensitivity markers, exception cases, review time, and dependencies on other roles',
    variation: 'routine versus exceptional work, internal versus customer-visible output, reversible versus consequential action, system permissions, subject expertise, seasonality, and owner availability',
    boundary: 'This map can organize a buyer’s discovery conversation. It cannot certify a candidate, determine employment status, quote a price, promise capacity, or show that one service lane will improve a business outcome.',
    test: 'Classify a representative task sample independently by work type and authority, reconcile disagreements, and pilot only the coherent lane whose reviewer and source records are ready.',
    failure: 'choosing from a job title alone, combining unrelated queues to fill hours, treating tool familiarity as decision authority, or ignoring the owner time needed to accept outputs',
    owner: 'the business manager who receives the completed work and can decide scope, priority, access, and exceptions',
    handoff: '/services', label: 'compare assistant service lanes',
    related: ['virtual-assistant-role-scope-task-inventory-study', 'assistant-task-intake-design', 'assistant-delegation-scope-mapping'],
  },
  {
    slug: 'assistant-staffing-provider-due-diligence-record',
    title: 'A due-diligence record for evaluating an assistant staffing provider',
    excerpt: 'A reconstructable comparison of scope, supervision, access, continuity, evidence, and unresolved risks before a buyer selects a provider.',
    cluster: 'Staffing provider research',
    question: 'What evidence should a buyer retain before deciding that an assistant staffing provider fits a defined work lane?',
    decision: 'whether to continue provider evaluation, request missing evidence, narrow the proposed scope, or stop the procurement review',
    unit: 'one material provider claim or operating requirement linked to its source, date, responsible party, verification status, uncertainty, and buyer decision',
    evidence: 'the buyer’s task scope, written service boundaries, supervision model, access process, continuity plan, security answers, escalation path, commercial documents, references where lawful, and open questions',
    variation: 'managed versus buyer-led supervision, named versus pooled coverage, system access, data sensitivity, geographic and legal context, replacement arrangements, service dependencies, and contract terms',
    boundary: 'A due-diligence record makes the buyer’s reasoning traceable. It is not legal, tax, employment, privacy, security, or financial advice and does not certify the provider or predict delivery quality.',
    test: 'Select several normal and exception scenarios, ask each provider to trace responsibility and evidence end to end, and compare answers against the same pre-declared criteria.',
    failure: 'scoring polished presentations instead of verifiable operating evidence, changing criteria after seeing a preferred provider, or converting unanswered questions into favourable assumptions',
    owner: 'the buyer’s accountable procurement or operating manager, with specialist review for legal, security, privacy, tax, and employment questions',
    handoff: '/contact-us', label: 'bring a scoped staffing request',
    related: ['managed-assistant-supervision-responsibility-map', 'research-evidence-strength-ranking', 'access-purpose-evidence'],
  },
  {
    slug: 'virtual-assistant-pilot-acceptance-criteria-design',
    title: 'Designing acceptance criteria for a virtual assistant pilot',
    excerpt: 'A prospective method for deciding what counts as ready, returned, escalated, or accepted before a staffing pilot begins.',
    cluster: 'Assistant pilot research',
    question: 'What observable evidence will let the buyer decide whether a bounded assistant pilot should continue, narrow, pause, or stop?',
    decision: 'whether the tested task lane meets its declared finish conditions under the access, review, and exception controls used during the pilot',
    unit: 'one eligible pilot item with its input state, expected output, acceptance checks, reviewer decision, return reason, exception state, elapsed states, and final disposition',
    evidence: 'versioned examples, eligibility rules, a scoring guide, all pilot items including open and cancelled work, independent review notes, corrections, exceptions, and the pre-committed decision rule',
    variation: 'input completeness, task class, consequence, reviewer, correction type, customer visibility, waiting dependencies, novelty, and whether the item followed the normal path',
    boundary: 'A pilot can test a specified lane under stated conditions. It cannot prove universal assistant performance, justify unrelated access, establish a permanent staffing ratio, or guarantee future results.',
    test: 'Blind-review a small but representative set against the same rubric, retain disagreements and exclusions, then apply the written go, narrow, pause, or stop rule without rewriting it after outcomes appear.',
    failure: 'measuring speed without acceptance, dropping returned or unfinished items, allowing coaching to erase the original result, or expanding scope because a few easy cases passed',
    owner: 'the buyer’s named pilot reviewer who has authority to accept work and change or stop the lane',
    handoff: '/contact-us', label: 'discuss a bounded assistant pilot',
    related: ['philippines-assistant-first-week-pilot-readiness', 'assistant-quality-sampling-plan', 'queue-denominator-integrity'],
  },
  {
    slug: 'assistant-business-continuity-coverage-readiness',
    title: 'Testing business-continuity coverage for an assistant work lane',
    excerpt: 'A scenario-based readiness check for absence, system outage, urgent exceptions, and owner unavailability in recurring delegated work.',
    cluster: 'Assistant continuity research',
    question: 'Can a recurring assistant lane reach a safe state when the usual worker, reviewer, system, or communication path is unavailable?',
    decision: 'whether the lane can launch or continue with its current backup ownership, records, access, recovery priorities, and stop rules',
    unit: 'one disruption scenario followed from the last known task state to safe pause, authorised reassignment, recovery, verification, and owner acceptance',
    evidence: 'task inventory, criticality and recovery needs, open-work register, backup owner acceptance, alternate contact path, minimum access, tested records, system dependencies, and exercise results',
    variation: 'planned versus sudden absence, outage duration, time-zone coverage, customer consequence, access availability, record freshness, queue age, and whether the normal reviewer is reachable',
    boundary: 'A tabletop or bounded exercise shows how the documented lane behaved in selected scenarios. It does not guarantee uninterrupted service, certify resilience, or prove that every disruption has been anticipated.',
    test: 'Exercise one worker-absence, one reviewer-unavailable, and one system-outage scenario; preserve timestamps and gaps; then repair only the controls whose absence affected a safe transition.',
    failure: 'naming a backup who has not accepted the role, copying broad access in advance, storing critical state in private messages, or treating continuous activity as more important than safe pause',
    owner: 'the business owner responsible for service priority and recovery, supported by system owners and accepted backup reviewers',
    handoff: '/services', label: 'review the operational support lanes',
    related: ['virtual-assistant-exception-owner-continuity', 'handoff-state-transitions', 'daily-handoff-evidence-log'],
  },
  {
    slug: 'outsourced-assistant-total-cost-decision-record',
    title: 'Building a total-cost decision record for outsourced assistant support',
    excerpt: 'A transparent way to compare quoted charges with setup, management, tools, review, correction, continuity, and exit work without inventing savings.',
    cluster: 'Staffing economics research',
    question: 'Which buyer-controlled and provider-supplied cost components belong in a decision record for a defined assistant work lane?',
    decision: 'whether the proposed lane has enough comparable cost and workload evidence for the buyer to approve, revise, or reject a staffing option',
    unit: 'one cost or resource component linked to quantity, unit, period, source, inclusion rule, uncertainty range, responsible party, and the task lane it supports',
    evidence: 'written quotes, workload observations, setup tasks, management and review time, tool and access costs, correction history where available, continuity needs, taxes or compliance advice, and exit assumptions',
    variation: 'task volume, schedule, skill mix, supervision model, billing basis, tool ownership, exchange and tax treatment, learning period, rework, absence, scope changes, and termination terms',
    boundary: 'This record structures a local comparison; it is not a market price, savings claim, forecast, accounting conclusion, tax determination, or recommendation of an employment or contracting model.',
    test: 'Normalize options to the same task lane, observation period, service level, and buyer responsibilities; show ranges and unknowns; then run sensitivity cases before approval.',
    failure: 'comparing a quoted hourly rate with a fully loaded internal figure, assigning zero cost to owner review, hiding setup and exit work, or presenting uncertain volume as a precise forecast',
    owner: 'the buyer’s budget owner, with operating validation and qualified accounting, tax, legal, or employment advice where required',
    handoff: '/contact-us', label: 'request a scope-first staffing conversation',
    related: ['assistant-workload-volume-variability-baseline', 'outsourced-pilot-baseline-design', 'capacity-variance-signals'],
  },
];

const row = (label: string, value: string, source: string) => ({ label, value, source });
const section = (heading: string, paragraphs: readonly string[], rows: ResearchSection['rows']): ResearchSection => ({ heading, paragraphs, rows });

export function buildDecisionResearch(x: ResearchDecisionSpec, sourceList: readonly ResearchSource[] = sources): ResearchPost {
  return {
    slug: x.slug, title: x.title, excerpt: x.excerpt, published: '2026-09-22', updated: '2026-09-22', cluster: x.cluster,
    image: { url: '/illustrations/getillustrations/goodle-team/assistant-handoff-collaboration.svg', alt: `Owner and assistant reviewing evidence for ${x.title.toLowerCase()}` },
    headlineStat: 'One declared buyer decision, one traceable observation unit, and zero assumed outcomes.',
    methodology: `Structured desk review of five named primary or official sources, checked September 22, 2026, followed by a proposed local decision protocol. Research question: ${x.question} Unit of analysis: ${x.unit}. The method separates retained facts, analysis, inference, and uncertainty. It has not been applied to private client outcomes and makes no universal claim about price, savings, performance, location, classification, or business results.`,
    keyStats: [`Decision: ${x.decision}.`, `Observation unit: ${x.unit}.`, 'Evidence base: five named primary or official sources with URLs and checked dates.'],
    takeaways: [x.boundary, x.test, `Accountable owner: ${x.owner}.`], sources: sourceList, related: x.related,
    body: [x.question, x.decision, x.unit, x.evidence, x.variation, x.boundary, x.test, x.failure],
    serviceHandoff: { heading: 'Use the record in a staffing conversation', href: x.handoff, label: x.label, paragraphs: [`Use the completed record to ${x.label}. Bring the task examples, source records, exceptions, access boundaries, schedule constraints, open questions, and the name of the person who will accept the work.`, 'The buyer retains responsibility for consequential business decisions and should involve qualified advisers for legal, employment, privacy, security, tax, financial, or regulated questions.'] },
    sections: [
      section('Define the decision before collecting convenient numbers', [
        x.question,
        `The decision in scope is ${x.decision}. Write that decision, its owner, and the date it must be made before asking for metrics. This prevents a familiar reversal in which an attractive number appears first and the team invents a question it seems to answer. A provider comparison, pilot score, coverage test, or cost model is useful only when it changes a named choice.`,
        `Use ${x.unit} as the observation unit. Keep the original record beside any category or score. A ticket, spreadsheet row, calendar event, quote, or interview answer is a source; it becomes decision evidence only when its definition, date, scope, provenance, and relationship to the buyer’s question are recorded.`,
        `O*NET lists varied tasks and work contexts for administrative occupations. That breadth is a discovery aid, not a ready-made role for this buyer. The SBA likewise places hiring among wider management, finance, compliance, cybersecurity, and continuity responsibilities. The buyer still has to define the actual lane and its limits.`,
      ], [row('Buyer decision', x.decision, 'Pre-specified local protocol'), row('Observation unit', x.unit, 'Pre-specified local protocol')]),
      section('Assemble evidence that another reviewer can reconstruct', [
        `The minimum evidence set is ${x.evidence}. Use consecutive or otherwise reproducibly selected records from a declared observation window. Retain normal, difficult, cancelled, returned, waiting, and still-open cases when they satisfy the eligibility rule. Record every exclusion with its reason and approver.`,
        `Label where each field came from: system event, signed document, provider response, manager note, participant recollection, or later reconstruction. Preserve unknown values as unknown. Missing review time is not zero; an absent exception note is not proof that no exception occurred; a sales statement is not an implemented control.`,
        `GAO frames data reliability in relation to the intended use. Apply that principle field by field. A rough task count might support early discovery but be inadequate for a staffing schedule. A current quote might be precise but incomplete if it excludes tools, management, or exit work. State which decisions the evidence can and cannot support.`,
      ], [row('Evidence set', x.evidence, 'Local records and authoritative-source review'), row('Reliability rule', 'Assess each field against its intended decision use', 'U.S. GAO data-reliability guidance')]),
      section('Retain variation instead of averaging it away', [
        `Important sources of variation are ${x.variation}. Declare these dimensions before inspecting outcomes. Report counts, ranges, and distributions where the sample supports them; otherwise show the individual cases. An average that hides peaks, exceptions, open work, or unlike tasks can create false confidence.`,
        `Separate arrival, active preparation, waiting, owner review, correction, escalation, acceptance, cancellation, and closure. These states represent different resource demands. Waiting is not active labour. Escalation can be correct performance. A reopened item may reflect new information rather than an earlier defect. Preserve the state history before interpreting it.`,
        `Compare like with like. Hold the task lane, finish condition, observation period, decision rights, and service level constant before comparing options. When those conditions differ, show the difference as part of the result instead of forcing a single rank. Sensitivity cases are more honest than a precise answer built from unstable assumptions.`,
      ], [row('Variation to retain', x.variation, 'Niche-specific study design'), row('Comparison rule', 'Normalize the lane or disclose the material difference', 'Local analysis protocol')]),
      section('Map responsibility and access to the work', [
        `The accountable owner is ${x.owner}. Record who prepares, recommends, approves, acts, verifies, receives an exception, and removes access. One person may hold several roles, but the responsibilities should remain distinct so a tool permission or job title does not silently become approval authority.`,
        `NIST CSF 2.0 treats governance, roles, policy, oversight, and supply-chain risk as parts of risk management. NIST SP 800-53 provides more detailed concepts for account management, least privilege, separation of duties, logging, external services, and contingency. Neither source selects a provider or staffing model; both support explicit and reviewable responsibility.`,
        `Connect each permission to a current task, resource, approved action, business purpose, owner, evidence threshold, review point, and removal trigger. Keep money movement, account ownership changes, legal or regulated judgment, sensitive personnel action, broad data export, and customer commitments on the specifically authorised path.`,
      ], [row('Accountable owner', x.owner, 'Buyer governance record'), row('Access rule', 'Task-specific, least-privilege, approved, logged, reviewed, and removable', 'NIST CSF 2.0 and SP 800-53')]),
      section('Run a bounded test with pre-committed outcomes', [
        `${x.test} Define eligibility, start state, finish condition, review sample, exception route, stop rule, and end point before live work begins. The test should expose uncertainty while limiting consequence; it should not be used to imply a production guarantee.`,
        `Use realistic but safe records. Minimise or mask personal and confidential information when the decision does not require it. Have reviewers apply the declared rule independently where feasible, then retain their original decisions and the reason for disagreement. If the rule cannot be applied consistently, revise the rule before increasing volume or access.`,
        `Pre-commit to proceed, narrow, pause, and stop states. Proceed means only that the tested lane may continue under the tested controls. Narrow when one task class is ready and another is not. Pause when a recoverable dependency has a named owner and review date. Stop when the safe boundary is crossed or reliable evaluation is unavailable.`,
      ], [row('Bounded test', x.test, 'Prospective local protocol'), row('Decision states', 'Proceed, narrow, pause, or stop with evidence and owner', 'Buyer decision record')]),
      section('Separate facts, analysis, inference, and uncertainty', [
        `A central distortion risk is ${x.failure}. Counter it by preserving the eligible population, original records, criteria, exclusions, missing fields, reviewer disagreements, corrections, and changes in operating conditions. Do not improve the apparent result by redefining success after outcomes appear.`,
        `Facts are retained events, documents, and source statements. Analysis applies declared definitions to those facts. Inference proposes why a pattern occurred or what might happen next. Uncertainty includes missing data, ambiguous categories, small samples, changing conditions, conflicts, and plausible alternative explanations. Label each layer where the reader encounters it.`,
        `${x.boundary} The five cited sources supply occupational, small-business, measurement, governance, and control concepts. None evaluates this buyer, provider, candidate, assistant, work lane, cost model, or pilot. Recommendations here are proposed applications of those principles, not observed client results or testimonials.`,
      ], [row('Known distortion', x.failure, 'Niche-specific limitation analysis'), row('Claim boundary', x.boundary, 'Explicit research limitation')]),
      section('Produce a dated decision packet and learning loop', [
        `The decision packet should include the question, owner, scope, eligible population, observation period, source register, field definitions, raw-record references, exclusions, missing-data note, comparisons, exceptions, reviewer decisions, limitations, and next action. Version the packet used for approval and preserve later corrections with a truthful modification date.`,
        `A second reviewer should be able to reconstruct the conclusion without a private conversation. That does not require publishing sensitive material. Use stable internal identifiers, minimise personal information, and disclose only what the decision requires. Route unresolved legal, tax, employment, privacy, security, financial, or regulated issues to qualified owners or advisers.`,
        `The decision-grade conclusion remains bounded: ${x.boundary} The next test is equally specific: ${x.test} Repeat the definitions after any change, retain contrary cases, and compare only equivalent work. This creates an honest learning loop while the buyer retains scope, access, budget, and consequential authority.`,
      ], [row('Packet owner', x.owner, 'Named buyer decision record'), row('Next test', x.test, 'Prospective repeat with stable definitions')]),
    ],
    faqs: [
      { q: `What is the first question for ${x.title.toLowerCase()}?`, a: `${x.question} Name the decision owner and observation unit before choosing a score or comparison.` },
      { q: 'Does this method prove that outsourced assistant support will save money or improve performance?', a: 'No. It structures a local decision from declared evidence and uncertainty. It makes no causal, price, savings, capacity, classification, geographic, or performance promise.' },
      { q: 'Who approves the resulting staffing decision?', a: `The accountable owner is ${x.owner}. Qualified specialists should review matters within their legal, employment, tax, privacy, security, financial, or regulated authority.` },
    ],
  };
}

export const researchBatch20260922Run2: readonly ResearchPost[] = specs.map(x => buildDecisionResearch(x));
