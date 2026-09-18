import type { ResearchPost, ResearchSection, ResearchSource } from './fleet-content';

const checked = 'Checked September 18, 2026.';
const sources: readonly ResearchSource[] = [
  { name: 'U.S. GAO, Assessing Data Reliability', url: 'https://www.gao.gov/products/gao-20-283g', note: `Primary audit-method guidance on testing whether data is reliable enough for its intended use. ${checked}` },
  { name: 'UK Government Service Manual, Measuring Success', url: 'https://www.gov.uk/service-manual/measuring-success', note: `Official guidance on defining success measures around a service and the decisions they inform. ${checked}` },
  { name: 'NIST/SEMATECH e-Handbook of Statistical Methods, Process Modeling', url: 'https://www.itl.nist.gov/div898/handbook/pri/section1/pri11.htm', note: `Official statistical handbook explaining designed data collection, process inputs, outputs, and uncertainty. ${checked}` },
  { name: 'NIST/SEMATECH e-Handbook, Randomized Block Designs', url: 'https://www.itl.nist.gov/div898/handbook/pri/section3/pri3326.htm', note: `Official experimental-design reference for separating a treatment comparison from known nuisance variation. ${checked}` },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: `Primary framework establishing governance, roles, risk context, and review as part of an operating system. ${checked}` },
];

type Spec = {
  slug: string; title: string; excerpt: string; cluster: string; question: string;
  buyerDecision: string; unit: string; comparison: string; distortion: string;
  record: string; interpretation: string; action: string; related: readonly string[];
};

const specs: readonly Spec[] = [
  {
    slug: 'outsourced-research-pilot-baseline-design',
    title: 'How to set a baseline for an outsourced research pilot',
    excerpt: 'A decision-grade method for comparing a research-assistant pilot with the work that actually happened before it, without inventing a productivity promise.',
    cluster: 'Outsourcing pilot research',
    question: 'What pre-pilot evidence lets a buyer judge whether delegated research preparation improved a real workflow?',
    buyerDecision: 'whether to continue, narrow, or stop a research-assistant pilot after a declared trial period',
    unit: 'one decision-ready research brief, from an accepted request to owner disposition',
    comparison: 'the same brief class under the prior workflow, with topic consequence, requested depth, source volatility, and owner availability retained',
    distortion: 'using a remembered “usual week,” comparing published briefs with every pilot intake, or starting the baseline only after easy work has been selected for delegation',
    record: 'request accepted time, readiness criteria, source requirement, owner review time, return reason, final disposition, active preparation time, and waiting state',
    interpretation: 'A pilot result can describe a local change in readiness, rework, or waiting. It cannot establish that outsourcing caused the change when the work mix, owner capacity, or acceptance rule also changed.',
    action: 'Pre-register one continuation rule and one stop rule, run the comparison on like work, and let the owner inspect exceptions before expanding the queue.',
    related: ['research-briefing-workflow', 'sourced-brief-acceptance', 'assistant-task-intake-design'],
  },
  {
    slug: 'assistant-work-sample-reviewer-agreement-study',
    title: 'Testing reviewer agreement on assistant research work samples',
    excerpt: 'A practical study design for learning whether two reviewers apply the same evidence rubric before a work sample influences a hiring decision.',
    cluster: 'Assistant selection research',
    question: 'Do reviewers reach a consistent, explainable judgment when they score the same assistant research work sample?',
    buyerDecision: 'whether a research work-sample rubric is stable enough to support candidate comparison or needs clarification first',
    unit: 'one independently scored criterion on one de-identified research work sample',
    comparison: 'independent reviewer decisions made before discussion, followed by an adjudication record that preserves the original disagreement',
    distortion: 'letting reviewers calibrate on the scored sample, collapsing distinct criteria into one impression score, or reporting agreement after disagreements have been overwritten',
    record: 'criterion definition, permitted evidence, reviewer rating, confidence note, cited passage, disagreement category, adjudicator decision, and rubric revision',
    interpretation: 'Observed agreement describes these reviewers, samples, criteria, and instructions. It does not prove candidate job performance, remove reviewer bias, or create a universal pass score.',
    action: 'Revise ambiguous criteria, test the revision on a fresh sample, and keep the hiring owner responsible for the final selection decision.',
    related: ['assistant-quality-scorecard', 'sourced-brief-acceptance', 'research-claim-review-queue'],
  },
  {
    slug: 'outsourcing-pilot-cancelled-work-denominator',
    title: 'Counting cancelled and returned work in an outsourcing pilot',
    excerpt: 'A denominator design that keeps cancelled, returned, paused, and out-of-scope requests visible when a buyer evaluates delegated research.',
    cluster: 'Outsourcing measurement research',
    question: 'Which requested items belong in the denominator when a delegated research pilot is evaluated?',
    buyerDecision: 'whether the apparent completion rate reflects usable delegated capacity or only the easiest surviving assignments',
    unit: 'one request that entered the agreed pilot intake, including requests later cancelled, merged, returned, paused, or ruled out of scope',
    comparison: 'intake cohorts tracked to a named disposition rather than a published-only or completed-only list',
    distortion: 'dropping difficult requests after intake, treating owner cancellation as assistant failure, or counting a merged request twice while reporting only successful outputs',
    record: 'intake identifier, eligibility decision, scope class, disposition, disposition reason, decision owner, dates, evidence state, and whether the item consumed preparation or review time',
    interpretation: 'A complete disposition table can reveal selection and workflow loss. It does not make every cancellation a defect or show what would have happened if a cancelled request continued.',
    action: 'Report the full cohort and reasons beside the usable-output count, then change scope only through a dated owner decision.',
    related: ['assistant-task-intake-design', 'research-brief-return-reason-taxonomy', 'research-publishing-checklist'],
  },
  {
    slug: 'delegated-research-before-after-confounder-log',
    title: 'A confounder log for before-and-after delegated research comparisons',
    excerpt: 'How to preserve simultaneous changes in briefs, reviewers, topic mix, tooling, and demand before attributing an operational result to delegation.',
    cluster: 'Research evaluation methods',
    question: 'What else changed when a delegated research workflow appeared to improve or decline?',
    buyerDecision: 'whether a before-and-after result is credible enough to justify a process or staffing change',
    unit: 'one declared workflow change linked to the affected comparison period and eligible brief population',
    comparison: 'before and after periods with identical field definitions plus a dated register of changes to intake, templates, reviewers, tools, source rules, and demand',
    distortion: 'crediting delegation for a new template, blaming it for a harder topic mix, or changing a metric definition between periods without restating the earlier result',
    record: 'change description, effective time, owner, expected pathway, affected records, overlapping changes, detection source, and analysis treatment',
    interpretation: 'The log strengthens an explanation by exposing rival explanations. It does not by itself isolate a causal effect or repair an incomparable historical baseline.',
    action: 'Delay a broad claim, narrow it to the stable subgroup, or run a prospective comparison in which definitions and major process changes are controlled.',
    related: ['manager-feedback-sop-change-thresholds', 'research-publishing-checklist', 'assistant-quality-scorecard'],
  },
  {
    slug: 'research-handoff-tail-latency-percentile-study',
    title: 'Measuring tail latency in delegated research handoffs',
    excerpt: 'A distribution-first way to study slow handoffs, owner review waits, and exceptional briefs without hiding them inside one average.',
    cluster: 'Research operations measurement',
    question: 'How often do otherwise ready research briefs wait much longer than the typical handoff, and why?',
    buyerDecision: 'whether to change review coverage, intake cutoffs, or exception routing rather than promise an unsupported average turnaround',
    unit: 'one eligible brief moving from evidence-ready status to an authorised owner disposition',
    comparison: 'median and stated upper-percentile elapsed times by comparable brief class, accompanied by the underlying count, range, waiting reasons, and exclusions',
    distortion: 'reporting only a mean, mixing active preparation with owner waiting, calculating a percentile from too few cases without warning, or excluding the oldest open items',
    record: 'ready timestamp, disposition timestamp, open-at-cutoff flag, brief class, consequence level, reviewer, waiting reason, interruption, and re-entry event',
    interpretation: 'A tail measure can locate unusually slow observed cases. It does not guarantee a service level, predict the next brief, or identify the responsible person without case evidence.',
    action: 'Review the actual tail cases, route fixes to the observed waiting state, and repeat the same measure before making a capacity claim.',
    related: ['review-window-coverage', 'queue-delay-research-difficulty-separation', 'research-briefing-workflow'],
  },
];

const row = (label: string, value: string, source: string) => ({ label, value, source });
const section = (heading: string, paragraphs: readonly string[], rows: ResearchSection['rows']): ResearchSection => ({ heading, paragraphs, rows });

function make(x: Spec): ResearchPost {
  const scope = `This article addresses ${x.buyerDecision}. The observation unit is ${x.unit}. It is a prospective local evaluation design for a buyer of research-assistant support, not a claim that OutsourcingAssistant.com has measured client outcomes. No productivity rate, cost saving, staffing ratio, hiring guarantee, or location-based advantage is asserted.`;
  return {
    slug: x.slug,
    title: x.title,
    excerpt: x.excerpt,
    published: '2026-09-18',
    updated: '2026-09-18',
    cluster: x.cluster,
    image: { url: '/illustrations/getillustrations/goodle-team/assistant-handoff-collaboration.svg', alt: `Owner and assistant reviewing evidence for ${x.title.toLowerCase()}` },
    headlineStat: 'One declared intake cohort, one observation unit, and zero universal performance promises.',
    methodology: `Research question: ${x.question} ${scope} Method: define eligibility and fields before collection; retain every disposition; compare ${x.comparison}; have the accountable owner review exceptions and interpretation. Evidence basis: five primary or official methodology sources, checked September 18, 2026. Inference boundary: ${x.interpretation}`,
    keyStats: [`Observation unit: ${x.unit}.`, 'Evidence base: five named primary or official methodology sources.', 'Publication standard: report counts, exclusions, missing fields, changes, and uncertainty with the result.'],
    takeaways: [x.interpretation, x.action, `The minimum case record is: ${x.record}.`],
    sources,
    related: x.related,
    body: [x.question, scope, x.comparison, x.distortion, x.interpretation, x.action],
    sections: [
      section('The buyer decision and the claim boundary', [
        x.question,
        scope,
        `The UK Government Service Manual begins measurement with the service outcome and the information needed to improve it. Applied here, that means the buyer should write the decision before selecting a metric. A result that will determine ${x.buyerDecision} needs a population, observation unit, comparison, owner, and decision rule that are visible before anyone sees a favourable or unfavourable number.`,
        `A Philippines-based research assistant may prepare records, apply a declared codebook, and assemble an exception packet. The accountable buyer still decides the scope, judges consequential exceptions, and approves any staffing or process change. Geography is part of the operating context; it is not evidence of quality, speed, or causation.`,
      ], [row('Decision', x.buyerDecision, 'Pre-specified local protocol'), row('Unit', x.unit, 'Pre-specified local protocol')]),
      section('Define the eligible population before observing results', [
        `Eligibility starts when work enters the agreed intake, not when a polished output appears. Define which requests qualify, the start and end of the review period, how reopened or merged work is treated, and which exclusions are permitted. Retain an identifier and final disposition for every eligible item. This prevents the denominator from silently improving as difficult cases disappear.`,
        `The intended comparison is ${x.comparison}. Like-for-like does not mean pretending all briefs are identical. It means retaining the factors that could reasonably alter the result, then reporting where comparison is weak. If a class has only a few observations, publish the count and individual pattern instead of a confident percentage.`,
        `GAO data-reliability guidance asks whether information is sufficiently reliable for its intended purpose. That is a better test than asking whether the records look complete. Missing owner timestamps may be acceptable for a topic inventory but fatal to a review-delay estimate. Reliability must be decided field by field against the buyer decision.`,
      ], [row('Eligible set', 'Every request meeting the declared intake rule', 'GAO data-reliability method'), row('Comparison', x.comparison, 'Local evaluation design')]),
      section('Build a case record that survives handoff', [
        `For each unit, retain ${x.record}. Use system events where they exist and label self-reported times. Preserve the original value when a correction is made, record who made the correction, and explain why. An empty field means unknown; it must not be converted into zero, success, or “not applicable” without evidence.`,
        `A research assistant can prepare this record without deciding its meaning. The assistant should link the supporting event, flag a conflict, and stop when a field requires an owner judgment. That separation makes the packet reviewable and reduces the chance that an operational guess becomes a public claim.`,
        `Use a short codebook. Define status, readiness, return, cancellation, active work, waiting, and approval in observable terms. Include one positive and one negative example for fields likely to be confused. Date each codebook version so a later definition change can be separated from a real workflow change.`,
      ], [row('Minimum record', x.record, 'Proposed case register'), row('Missing data', 'Retained as unknown with a reason when available', 'GAO data-reliability method')]),
      section('Run the comparison without erasing variation', [
        `The NIST statistical handbook distinguishes process inputs from outputs and treats designed collection as a way to learn about their relationship. Here, the output should match the decision: readiness at first handoff, owner rework, elapsed waiting, usable disposition, or another explicitly defined state. Do not combine them into a single quality score merely because one number is easier to present.`,
        `Known nuisance factors should be retained or blocked where practical. Topic consequence, requested depth, source volatility, reviewer availability, new templates, and tool outages can all move the result. NIST's discussion of randomized block designs provides the transferable principle: compare within meaningful groups when a known source of variation would otherwise obscure the question. This article does not claim that a formal experiment is always feasible.`,
        `The most serious distortion for this question is ${x.distortion}. The repair is to show the full flow from eligibility to disposition, preserve the relevant context, and state where records are not comparable. A transparent “cannot determine” is decision-grade when the alternative is false precision.`,
      ], [row('Primary comparison', x.comparison, 'NIST process-modeling principles'), row('Named distortion', x.distortion, 'Niche-specific risk analysis')]),
      section('Separate fact, analysis, inference, and uncertainty', [
        `Facts are retained events and field values: a request arrived, a source was attached, a reviewer returned a brief, or a decision occurred at a recorded time. Analysis applies the declared definitions to those records. Inference is the explanation proposed for a pattern. Uncertainty includes missing events, ambiguous states, reviewer disagreement, small counts, and unmeasured changes. Label all four layers.`,
        `${x.interpretation} This boundary should appear beside the result, not in a detached disclaimer. If the finding changes when one unusual case is removed, show both views and explain why that case belongs or does not belong. If open work has no final time, retain it as open at cutoff rather than treating it as fast, slow, or successful.`,
        `Do not turn association into individual evaluation. A delay can arise from missing source access, owner availability, scope change, or a responsible escalation. A returned brief can reveal a weak intake rule rather than weak preparation. Case evidence determines the operating response; a headline metric does not assign fault.`,
      ], [row('Supported', 'Description of declared records and bounded comparisons', 'Methodological synthesis'), row('Not supported', 'Universal benchmark, causal staffing claim, or individual ranking', 'Explicit inference boundary')]),
      section('Decision rule, escalation, and a bounded next test', [
        `${x.action} Write the rule in advance: who reviews the result, what evidence is sufficient, which exceptions require inspection, and what change is allowed. Avoid a rule that automatically expands access or publication authority. Tool permission and repeated task completion do not transfer accountability.`,
        `An exception packet should contain the case identifier, blocked decision, relevant records, conflicting interpretations, consequence if wrong, proposed options, and the exact owner response needed. The assistant can continue non-consequential preparation while the decision waits if the written boundary permits it. Silence is not approval.`,
        `After the decision, preserve the old method and effective date of the new one. Change one major rule where feasible, collect a fresh eligible cohort, and repeat the same definitions. If several changes are unavoidable, record all of them and narrow the conclusion. This creates a learning loop without pretending a local operational test is a controlled market study.`,
      ], [row('Recommended action', x.action, 'Bounded local test'), row('Owner boundary', 'Accountable owner approves scope, interpretation, and consequential change', 'NIST CSF 2.0 governance')]),
      section('Limitations and evidence-led conclusion', [
        `The cited sources provide general measurement, data-reliability, experimental-design, and governance principles. None evaluates this exact OutsourcingAssistant.com workflow, a specific client, or Philippines-based assistants as a population. Applying those principles to delegated research is analysis, and the transfer may omit factors unique to a buyer's systems, people, or regulated obligations.`,
        `Small operational samples are vulnerable to unstable percentages, incomplete event histories, learning effects, seasonal demand, reviewer adaptation, and changes in task mix. Consequential work may require complete review regardless of the routine sampling plan. Legal, employment, privacy, security, and financial decisions require qualified advice outside this operational research design.`,
        `The evidence-led conclusion is modest: ${x.action} The design makes the buyer's reasoning inspectable. It does not guarantee an outcome, establish a price or staffing ratio, or replace direct review of the work.`,
      ], [row('Conclusion', x.action, 'Evidence-led operating recommendation'), row('Main limitation', 'Official methods are transferred to a local workflow; no client outcome study is claimed', 'Scope statement')]),
      section('Sources and checked dates', [
        `The five sources below were checked on September 18, 2026. They were selected because they are primary or official publications and because each supports a specific part of the method. GAO supports intended-use reliability checks; the UK Service Manual supports decision-linked measures; the NIST handbook supports process modeling and blocking known variation; and CSF 2.0 supports explicit governance.`,
        `Source authority does not make every inference automatic. Readers should open the linked publication, confirm that the relevant guidance remains current, and distinguish the source's own claims from this article's application to outsourcing decisions. If a source changes materially, record the checked date and reassess the affected conclusion before reusing it.`,
      ], sources.map((s) => row(s.name, s.note, s.url))),
    ],
    faqs: [
      { q: 'Does this method prove that outsourcing improved the workflow?', a: 'No. It supports a bounded comparison of declared local records and keeps rival explanations visible.' },
      { q: 'Can an assistant prepare the evaluation?', a: 'Yes. An assistant can maintain the case register and evidence packet; the accountable owner retains interpretation and consequential decisions.' },
      { q: 'Is there a universal target or sample size?', a: 'No. Counts, consequence, missing data, variation, and the intended decision must be reported rather than hidden behind a universal target.' },
    ],
  };
}

export const researchBatch20260918: readonly ResearchPost[] = specs.map(make);
