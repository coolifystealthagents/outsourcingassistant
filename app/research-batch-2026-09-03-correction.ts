import type { ResearchPost } from './fleet-content';

const s = (name: string, url: string, note: string) => ({ name, url, note });
const sec = (heading: string, paragraphs: string[]) => ({ heading, paragraphs, rows: [] });

const common = {
  published: '2026-09-03',
  updated: '2026-09-03',
} as const;

export const researchBatch20260903Correction: readonly ResearchPost[] = [
  {
    ...common,
    slug: 'claim-consequence-retrieval-depth-study',
    title: 'How much source retrieval should an assistant do before a consequential claim is ready for review?',
    excerpt: 'A source-led study of how claim consequence, reversibility, and evidence disagreement should change the depth of delegated article research.',
    cluster: 'Research operations',
    image: { url: '/images/research-2026-09-03/claim-consequence-retrieval-depth-study.png', alt: 'Research assistant comparing source depth for claims with different consequences' },
    headlineStat: 'Retrieval depth should rise with the consequence of being wrong, not with the desired article length.',
    methodology: 'Research question: how much source retrieval should a Philippines-based research assistant complete before a consequential claim is ready for editorial review? This desk review compares the NIST AI Risk Management Framework, the National Academies report on reproducibility and replicability, Google Search Central guidance on helpful content, and the U.S. Government Accountability Office evidence assessment guide. The sources address different domains, so the analysis uses their common principles rather than treating any one document as a content-production standard. No controlled trial of OutsourcingAssistant.com articles was conducted.',
    keyStats: ['Four dimensions guide depth: consequence, reversibility, source agreement, and decision proximity.', 'A long bibliography does not correct a source that fails to support the claim.', 'The editor, not the assistant, accepts a consequential interpretation for publication.'],
    takeaways: ['Classify the claim before opening a search queue.', 'Retrieve the underlying report when a summary carries a material conclusion.', 'Record disagreement and scope limits in the review packet.'],
    sections: [
      sec('The research question starts with consequence', [
        'Daily article routines often specify a word count or a minimum number of links. Neither tells an assistant how far to investigate a claim. A sentence explaining a reversible filing convention does not carry the same consequence as a sentence about privacy duties, hiring compliance, account security, or authority to make a customer commitment. The useful first move is to classify what could happen if the statement is incomplete or wrong. A high-consequence claim deserves the primary document, its scope, its publication date, and a check for later guidance. A low-consequence operational example may need less retrieval, provided it is presented as an example rather than a universal fact.',
        'NIST frames risk management around context, intended use, impacts, and documented responsibility. The National Academies separates reproducibility questions from broader judgments about evidence. GAO likewise asks reviewers to consider relevance and reliability rather than counting citations. Applied to outsourced article research, these sources support a graduated rule: evidence work grows when the claim will influence a harder-to-reverse decision. That is analysis, not a finding that a particular number of sources guarantees accuracy. The delegated assistant can prepare the classification and evidence trail. The editor retains responsibility for deciding whether the claim belongs in public copy.'
      ]),
      sec('A retrieval ladder for daily research', [
        'For a descriptive, low-consequence statement, the assistant can begin with a current authoritative page and verify that the wording matches the page. If the article interprets a statistic, the packet should include the original dataset or report, the population, measurement period, and denominator. If two reputable sources disagree, retrieval should move sideways as well as deeper: find out whether they use different definitions, jurisdictions, populations, or time windows. A consequential claim should not move to drafting while those differences remain hidden. The assistant can label the conflict and give the editor the competing passages without choosing the business response.',
        'The ladder has a stop condition. Retrieval can stop when the evidence is sufficient for the bounded statement actually proposed, the source context is recorded, material disagreement is visible, and the named reviewer has enough information to accept, narrow, or reject the wording. It should not stop because the queue has accumulated three URLs. It also should not continue indefinitely in pursuit of certainty that the evidence cannot provide. A research note that says a question remains unresolved is more useful than a confident paragraph built from adjacent facts. This makes the daily routine predictable while protecting the distinction between preparation and editorial judgment.'
      ]),
      sec('What to measure in an outsourced research lane', [
        'A manager can test this approach without inventing an accuracy score. Sample claims from recent articles and record their consequence class, source type, whether the source directly supports the sentence, whether limitations survived drafting, and why the reviewer requested more retrieval. Correction reasons matter more than raw correction volume. Repeated requests for original reports may show that assistants rely on summaries. Repeated scope corrections may show that briefs fail to name jurisdiction or population. These observations describe the sampled queue; they do not prove that every unsampled claim is sound or that deeper retrieval caused a better business outcome.',
        'The operating boundary is equally important. Assistants may locate documents, extract passages, compare definitions, and prepare a contradiction note. They should not provide legal, medical, financial, or security conclusions, and they should not publish a disputed consequential claim merely because a deadline is near. The manager should define which subjects always require specialist or owner review. This division keeps Philippines-based research support useful: the assistant does the traceable evidence work during the delegated shift, while the person with authority makes the interpretation and publication decision.'
      ]),
      sec('Limitations and evidence-led conclusion', [
        'This review combines risk, audit, scientific-evidence, and search-quality guidance. Those sources were not written to prescribe a universal retrieval quota for outsourced content. The proposed ladder is therefore an operational interpretation. It has not been tested against a controlled set of publishing outcomes, and it cannot establish that a deeper search will find the truth. Source availability, language, paywalls, and changing official guidance can constrain the packet. Teams should document those constraints instead of converting them into silent certainty.',
        'The evidence supports a bounded conclusion: source retrieval should be proportional to a claim\'s consequence and evidentiary difficulty. A daily research assistant can make that proportionality visible by recording source type, scope, disagreement, and stop reason. Fixed link counts remain useful as a floor, but they are a poor finish line. For OutsourcingAssistant.com, the defensible handoff is a claim-level packet that lets an editor see why the evidence is enough for the exact sentence, or why the sentence must be narrowed or withheld.'
      ])
    ],
    faqs: [{ q: 'Does every claim need a primary source?', a: 'No. Primary documents matter most when a claim interprets a rule, statistic, or consequential finding. The packet should explain when only secondary coverage is available.' }, { q: 'Can an assistant decide that evidence is legally sufficient?', a: 'No. The assistant can document retrieval and conflicts; qualified reviewers keep legal and other specialist judgments.' }],
    sources: [
      s('NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework', 'Risk context, impacts, documentation, and accountable oversight.'),
      s('National Academies: Reproducibility and Replicability in Science', 'https://nap.nationalacademies.org/catalog/25303/reproducibility-and-replicability-in-science', 'Evidence scope, uncertainty, and limits on inference.'),
      s('GAO Assessing Data Reliability', 'https://www.gao.gov/products/gao-20-283g', 'Framework for judging relevance and reliability of evidence.'),
      s('Google Search Central: Creating helpful content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', 'First-hand expertise, sourcing, and people-first content questions.')
    ],
    related: ['content-research-source-traceability', 'sourced-brief-acceptance', 'outsourced-research-approval-boundary'], body: []
  },
  {
    ...common,
    slug: 'manager-feedback-sop-change-thresholds',
    title: 'When should manager feedback change an assistant SOP rather than remain a one-off preference?',
    excerpt: 'A research framework for separating repeatable process evidence from personal edits in Philippines-based assistant work.',
    cluster: 'Quality systems',
    image: { url: '/images/research-2026-09-03/manager-feedback-sop-change-thresholds.png', alt: 'Manager and assistant separating recurring process evidence from one-off feedback' },
    headlineStat: 'Feedback becomes a candidate process rule when its trigger, rationale, and ownership can be stated beyond one example.',
    methodology: 'Research question: when should feedback on assistant-prepared work become part of the standing SOP? This qualitative desk review compares ISO quality-management principles, the Institute for Healthcare Improvement Model for Improvement, NIST Cybersecurity Framework governance guidance, and the UK Government Service Manual approach to learning from performance data. The analysis translates common ideas about controlled change, tests, ownership, and measures into a small outsourced assistant lane. It does not certify an ISO system or claim that a specific feedback cadence improves productivity.',
    keyStats: ['A correction, a preference, and a policy change require different records.', 'The smallest safe test protects the current process while a proposed rule is examined.', 'Only a named process owner should approve a standing change.'],
    takeaways: ['Capture the reason for feedback before editing the SOP.', 'Test recurring changes on a bounded work sample.', 'Keep preference, policy, and error labels separate.'],
    sections: [
      sec('Why feedback is weak evidence by itself', [
        'An assistant may receive a comment such as "make this shorter" on Monday and "include more context" on Tuesday. Both comments can be reasonable for their individual tasks. Turning each into a permanent instruction produces a contradictory SOP that grows after every review. The research question is not whether feedback matters. It is whether the feedback identifies a recurring condition with a stable response. A useful change proposal names the trigger, the desired outcome, the person authorised to decide, and the examples to which the rule does and does not apply. Without those elements, the comment should remain attached to the work item.',
        'Quality-management and improvement guidance treats process changes as choices to be tested and controlled, not as automatic reactions to isolated variation. NIST adds the need for clear governance and accountability. The UK Service Manual advises teams to use performance information to understand services and make decisions. Together, those principles suggest that an outsourced assistant should log feedback faithfully but should not silently rewrite operating authority. The manager who owns the process decides whether the observation reflects an error, a local preference, a changed policy, or a possible improvement.'
      ]),
      sec('A classification before a change request', [
        'Four labels are enough for most daily work. An error means the output failed an existing, documented requirement. A preference means more than one acceptable output existed and the reviewer chose one for this case. A policy change alters what the team is permitted or required to do. An improvement hypothesis proposes that a different step may reduce confusion or rework. These labels prevent a style edit from acquiring the force of policy and prevent an actual control change from disappearing inside a casual comment. The assistant can suggest a label, quote the feedback, and link the affected example. The process owner confirms it.',
        'The classification also changes the next action. Correct an error and check whether the original instruction was clear. Keep a one-off preference with the task unless the reviewer identifies a repeatable trigger. Route policy changes to the authorised owner before anyone follows them. Test an improvement hypothesis on a limited sample with a stated observation period and rollback point. None of this requires the assistant to debate the manager. It gives both people a shared record, which is especially helpful when a Philippines-based shift ends before the owner begins a review window.'
      ]),
      sec('Evidence for promoting feedback into the SOP', [
        'A proposed rule is stronger when the same condition appears across several relevant examples, reviewers agree on the expected response, and the response can be observed without reading the reviewer\'s mind. The team should also inspect counterexamples. A rule to shorten every research summary may damage high-consequence work that needs scope and limitations. The proposal must say where it applies, who can override it, and what evidence will show whether it helped. Counts can describe frequency, but a small sample should not be dressed up as a universal pattern.',
        'Managers can review a monthly change log containing the original instruction, linked examples, feedback category, proposed wording, owner decision, effective date, and review date. The log exposes churn. If a rule changes twice in a week, the task definition may be unstable. If assistants repeatedly miss the same requirement, training examples or the interface may be the problem. If reviewers disagree, the owner must settle the standard before scoring the assistant against it. This turns feedback into evidence about the work system, not merely a running judgment of the person doing the work.'
      ]),
      sec('Limitations and evidence-led conclusion', [
        'The cited frameworks cover broad quality, improvement, digital-service, and cybersecurity contexts. None supplies a validated numerical threshold for changing a virtual-assistant SOP. The four labels and bounded-test method are an interpretation for recurring administrative and research work. Team size, regulatory duties, task consequence, and available review time will affect how formal the change record should be. Urgent safety or compliance corrections may require immediate owner action rather than a trial.',
        'The evidence favors controlled learning over automatic rule accumulation. Manager feedback should change an SOP when it identifies a repeatable condition, has a clear rationale, stays within an authorised boundary, and survives a proportionate review or test. Until then, the comment belongs with its example. For OutsourcingAssistant.com readers building Philippines-based support routines, that boundary keeps the SOP usable and keeps management responsibility with the person who owns the process.'
      ])
    ],
    faqs: [{ q: 'How many examples prove that feedback should become a rule?', a: 'No universal count does. Use enough relevant examples to test the trigger and inspect counterexamples, then let the named owner decide.' }, { q: 'Can the assistant update the SOP directly?', a: 'The assistant may draft a change and maintain the log. The process owner should approve changes to standing requirements or authority.' }],
    sources: [
      s('ISO quality management principles', 'https://www.iso.org/quality-management-principles.html', 'Process approach, improvement, and evidence-based decisions.'),
      s('Institute for Healthcare Improvement: Model for Improvement', 'https://www.ihi.org/library/topics/model-for-improvement', 'Small tests of change and learning from measures.'),
      s('NIST Cybersecurity Framework 2.0', 'https://www.nist.gov/cyberframework', 'Governance, roles, and responsibility for controlled outcomes.'),
      s('UK Government Service Manual: Measuring success', 'https://www.gov.uk/service-manual/measuring-success', 'Using performance information to understand and improve services.')
    ],
    related: ['sop-change-management', 'sop-exception-register', 'assistant-quality-scorecard'], body: []
  },
  {
    ...common,
    slug: 'brief-omission-exception-cluster-analysis',
    title: 'Can exception clusters reveal missing fields in a delegated research brief?',
    excerpt: 'A bounded method for using repeated clarification requests to improve daily article briefs without turning every exception into policy.',
    cluster: 'Content operations',
    image: { url: '/images/research-2026-09-03/brief-omission-exception-cluster-analysis.png', alt: 'Content operations team grouping research exceptions around missing brief fields' },
    headlineStat: 'An exception cluster is useful only when cases share a cause, not merely a label.',
    methodology: 'Research question: can repeated exceptions in assistant-prepared research identify omissions in the original brief? This desk review compares the National Institute of Standards and Technology guidance on root-cause analysis, the U.S. Agency for Healthcare Research and Quality discussion of root-cause methods, the UK Government Service Manual on service performance, and ISO quality-management principles. The study maps those concepts to daily article intake. It examines no proprietary queue and makes no causal claim about a particular briefing template.',
    keyStats: ['Group exceptions by missing decision or input, not by superficial wording.', 'A cluster can generate a hypothesis; it does not prove the brief caused every case.', 'High-consequence exceptions deserve review even when they are rare.'],
    takeaways: ['Preserve the original question and the clarification that unblocked it.', 'Compare similar cases for a shared missing field.', 'Add a field only when its value exceeds the burden it creates.'],
    sections: [
      sec('What counts as an exception cluster', [
        'A daily research queue produces many reasons to pause: an audience is unclear, a jurisdiction is missing, a source conflicts with another source, the article could cross into professional advice, or the owner has not chosen the decision the piece should support. Tagging all of these as "needs clarification" hides the useful difference. A cluster exists when multiple cases share a plausible underlying omission and would have been resolved by the same bounded intake field. The cases need not use the same words. They do need comparable work, consequences, and decision context.',
        'Root-cause methods warn against stopping at the visible failure. Service-measurement guidance likewise asks teams to understand what performance data means in context. Applied here, a late article is an outcome, not a diagnosis. The cause may be a missing brief field, an unavailable source, reviewer capacity, or a new legal question outside the assistant\'s role. The assistant can preserve timestamps, questions, and source notes. A manager must decide whether the evidence points to the brief or to another part of the operating system.'
      ]),
      sec('Building a case set without rewriting history', [
        'The review starts with the brief as it existed when work began. For each exception, retain the initial request, the point at which work stopped, the question sent to the owner, the answer, and the next action. Do not overwrite the original field after clarification, because doing so erases evidence of the omission. Add a linked resolution note instead. Then select a stated period and comparable article type. Combining a product comparison with a security explainer and a simple glossary can create a false cluster because each needs different evidence and authority.',
        'A reviewer can code the cases by missing audience, decision, scope, jurisdiction, evidence standard, freshness requirement, prohibited topic, or approval owner. The coding is analysis. It should remain open to revision when a case fits more than one cause. The team should read a sample of uncategorised or smoothly completed briefs as a comparison. If successful briefs also lack the proposed field, the exception may depend on another condition. This modest countercheck prevents the loudest recent problem from automatically expanding the intake form.'
      ]),
      sec('Testing a proposed brief field', [
        'Suppose several research articles stalled because "current" was undefined. A candidate field might ask for the evidence cutoff or the event that triggers a fresh check. Before making it permanent, the owner can add it to a bounded set of similar briefs and observe whether assistants need fewer clarifications, whether reviewers understand the answer, and whether the field changes research decisions. The test should also record the cost. A field that requires a long meeting for every low-risk article may create more delay than it prevents.',
        'Rare exceptions need separate treatment. One request involving regulated advice may never form a numerical cluster, yet it still warrants a hard boundary and named escalation path. Frequency should therefore be read beside consequence. The resulting brief should stay short enough to use. Conditional fields can help: ask for jurisdiction only when the article discusses a rule, or require a primary report when a material statistic drives the conclusion. The owner controls those gates; the assistant follows them and records when a condition is uncertain.'
      ]),
      sec('Limitations and evidence-led conclusion', [
        'Root-cause analysis can imply more certainty than a small content queue supports. Labels depend on reviewer judgment, cases may not be independent, and a visible omission may coexist with training or capacity problems. This review offers no universal sample size and does not show that adding fields improves publication results. It also draws from safety, quality, and digital-service guidance developed outside outsourced content operations. The transfer is conceptual and should be tested locally.',
        'The evidence supports using exception clusters as a disciplined prompt for investigation. They can reveal a missing research-brief field when comparable cases share an underlying information gap and a bounded test shows that the proposed field changes the work. They cannot prove causation by count alone. For a daily OutsourcingAssistant.com routine, the practical result is a preserved exception record, a narrow hypothesis, a comparison set, and an owner-approved change only after the new field earns its place.'
      ])
    ],
    faqs: [{ q: 'Should every repeated question become a brief field?', a: 'No. First test whether the cases share a cause and whether one bounded field would change the work.' }, { q: 'What about rare but serious exceptions?', a: 'Route them through a hard boundary and named escalation path even if they never form a frequent cluster.' }],
    sources: [
      s('NIST: Root Cause Analysis Tool', 'https://www.nist.gov/baldrige/root-cause-analysis-tool', 'Structured investigation beyond visible symptoms.'),
      s('AHRQ Patient Safety Network: Root Cause Analysis', 'https://psnet.ahrq.gov/primer/root-cause-analysis', 'Limits and practical use of root-cause methods.'),
      s('UK Government Service Manual: Measuring success', 'https://www.gov.uk/service-manual/measuring-success', 'Interpreting service performance and user outcomes.'),
      s('ISO quality management principles', 'https://www.iso.org/quality-management-principles.html', 'Process approach and evidence-based decisions.')
    ],
    related: ['assistant-task-intake-design', 'outsourced-article-intake-question-quality', 'sop-exception-register'], body: []
  },
  {
    ...common,
    slug: 'uncertainty-preservation-summary-transfers',
    title: 'How can an outsourced research handoff preserve uncertainty when evidence is summarized?',
    excerpt: 'A study of what gets lost between source, research note, draft, and owner review, with controls for keeping limitations visible.',
    cluster: 'Evidence quality',
    image: { url: '/images/research-2026-09-03/uncertainty-preservation-summary-transfers.png', alt: 'Assistant tracing uncertainty from an original report through a research handoff' },
    headlineStat: 'A summary is reviewable when it carries the claim boundary as well as the finding.',
    methodology: 'Research question: how can a Philippines-based assistant preserve uncertainty while compressing evidence for an editor? This qualitative review compares National Academies guidance on reproducibility, the GAO data-reliability assessment guide, the OECD Recommendation on Enhancing Access to and Sharing of Data, and Google Search Central guidance on helpful content. The analysis follows four transfer points: source to note, note to draft, draft to review, and review to publication. It does not measure reader comprehension or validate a single summary format.',
    keyStats: ['Four transfer points can narrow or erase a limitation.', 'Source confidence and assistant confidence are different fields.', 'A limitation must travel with the claim it qualifies.'],
    takeaways: ['Copy the population, period, and definition beside a material finding.', 'Mark inference explicitly instead of blending it with sourced fact.', 'Reject summaries that preserve the number but lose its boundary.'],
    sections: [
      sec('Why compression changes the evidence', [
        'An original report may devote pages to population, method, missing data, measurement error, and alternative explanations. A research note can compress that into one statistic. A draft can compress it again into a confident sentence, and an editor may retain only the number. Nothing in that chain has to be fabricated for the final wording to mislead. The uncertainty was lost through omission. In outsourced article work, the problem is harder to see because different people may own discovery, drafting, and publication across different hours.',
        'The National Academies discusses transparency, uncertainty, and the conditions needed to assess research claims. GAO asks evaluators to judge data in relation to intended use. OECD principles emphasize responsible data access and reuse. Google asks content creators to consider clear sourcing and whether material adds useful value. These sources do not prescribe an assistant handoff. Their shared lesson is that a finding cannot be evaluated apart from its scope. The operational inference is to treat scope information as part of the claim, not as optional background.'
      ]),
      sec('A claim packet that survives four transfers', [
        'At source-to-note, capture the exact proposition in the assistant\'s own words, the supporting passage or table, publisher, date, population, geography, relevant definition, and stated limitation. Link to the underlying source rather than only a search result or secondary summary. At note-to-draft, label sentences as reported fact, calculation, synthesis, example, or recommendation. A recommendation can be useful, but it should not inherit the authority of a cited report. If the assistant is unsure which label applies, the item stays in the review queue.',
        'At draft-to-review, place the limitation next to the sentence it qualifies. A limitation stored only at the bottom of a long brief is easy to lose during editing. At review-to-publication, compare the final sentence with the evidence card rather than checking only that a hyperlink survived. The editor should ask whether the audience could infer a broader population, stronger causal claim, or more current period than the source supports. This is a judgment task. The assistant prepares the comparison but does not approve the interpretation.'
      ]),
      sec('Signals that uncertainty has been stripped away', [
        'Several signals deserve a pause: words such as "proves" or "will" where the source reports association; a percentage without a denominator; a finding moved from one country or industry to all businesses; a dated survey described in the present tense without a freshness check; and a range replaced by a single clean number. Another signal is unexplained confidence. The note may say the assistant could not access the full report while the article cites it as settled evidence. The honest response is to narrow the claim, locate the full source, or disclose that the evidence is insufficient.',
        'Managers can sample material claims and count which boundary fields survived each transfer. This is a process measure, not an accuracy guarantee. A high survival rate cannot show that the original study was correct, and a low rate does not identify why the information disappeared. Pair the count with correction reasons and short reviewer notes. If population boundaries vanish during drafting, change the draft template. If editors remove limitations for space, the owner must resolve the publishing standard rather than treating the assistant as the only control point.'
      ]),
      sec('Limitations and evidence-led conclusion', [
        'The proposed packet adds time and may be excessive for low-consequence descriptive claims. The four cited sources come from research, audit, data-governance, and search contexts, and none tests this exact workflow. The method also depends on reviewers who understand basic evidence boundaries. It cannot recover limitations that the original source fails to disclose, nor can it replace subject-matter review for regulated or specialist topics.',
        'The evidence supports preserving uncertainty as structured claim context throughout the handoff. A useful outsourced summary carries the finding, population, period, definition, limitation, and the assistant\'s interpretation label. That makes compression visible and reviewable. For OutsourcingAssistant.com, the article should publish only after the named editor confirms that the public wording is no broader or more certain than the evidence packet allows.'
      ])
    ],
    faqs: [{ q: 'Should every sentence carry a limitation?', a: 'No. Attach boundaries to material claims where scope, method, or uncertainty changes what a reader may reasonably infer.' }, { q: 'Is a citation enough to preserve uncertainty?', a: 'No. The public wording and review note must retain the relevant boundary; a link alone does not do that work.' }],
    sources: [
      s('National Academies: Reproducibility and Replicability in Science', 'https://nap.nationalacademies.org/catalog/25303/reproducibility-and-replicability-in-science', 'Transparency, evidence assessment, and uncertainty.'),
      s('GAO Assessing Data Reliability', 'https://www.gao.gov/products/gao-20-283g', 'Fitness of data for the intended use.'),
      s('OECD Recommendation on Enhancing Access to and Sharing of Data', 'https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0463', 'Responsible access, sharing, and reuse of data.'),
      s('Google Search Central: Creating helpful content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', 'Clear sourcing and people-first usefulness.')
    ],
    related: ['claim-scope-provenance', 'research-claim-review-queue', 'content-research-source-traceability'], body: []
  },
  {
    ...common,
    slug: 'queue-delay-research-difficulty-separation',
    title: 'What evidence separates queue delay from genuine research difficulty in assistant-prepared articles?',
    excerpt: 'A measurement model for distinguishing waiting, blocked decisions, source work, and revision in a daily outsourced research queue.',
    cluster: 'Operations research',
    image: { url: '/images/research-2026-09-03/queue-delay-research-difficulty-separation.png', alt: 'Operations analyst separating waiting time from active research work in an article queue' },
    headlineStat: 'Elapsed time is a mixture of work, waiting, review, and rework unless the queue records state changes.',
    methodology: 'Research question: what evidence can distinguish slow queue movement from a genuinely difficult research assignment? This desk review compares Little\'s Law as presented by NIST, the UK Government Service Manual on performance measurement, the ILO report on working from home, and GAO guidance on evidence reliability. The analysis defines observable queue states for a Philippines-based assistant and an owner working across time zones. It does not benchmark worker productivity, prescribe staffing levels, or claim that timestamps reveal cognitive effort.',
    keyStats: ['Five states separate active retrieval, clarification, owner review, revision, and ready work.', 'Elapsed time cannot identify a cause without state evidence.', 'Research difficulty needs claim-level observations, not assumptions about the person or location.'],
    takeaways: ['Record state transitions and the party holding the next action.', 'Measure active evidence tasks separately from waiting.', 'Use cases, not averages alone, to explain difficult work.'],
    sections: [
      sec('Elapsed time answers the wrong question', [
        'An article opened at 9 a.m. Monday and approved at 3 p.m. Tuesday has a thirty-hour span. That number says almost nothing about the work. The assistant may have completed source retrieval in two hours, waited for the owner to define jurisdiction, revised one paragraph after review, and then waited for publication. Calling the whole span research time hides both the constraint and the ownership. It can also lead a manager to conclude that the assistant is slow when the queue is actually waiting on a decision.',
        'Queueing relationships such as Little\'s Law connect average inventory, throughput, and time under stated assumptions, but they do not diagnose why an individual item waited. Government service guidance recommends using performance measures in context. ILO research shows that work organisation matters in remote settings. GAO emphasizes evidence fitness for the intended use. Applied to daily article production, these sources support a basic distinction: use timestamps to describe flow, then use state and case evidence to interpret difficulty. Do not infer effort from elapsed time alone.'
      ]),
      sec('Observable states for a distributed article queue', [
        'A small team can use five states. Active research means the assistant is retrieving, reading, comparing, or recording evidence. Clarification waiting means a missing scope or decision has been sent to a named owner. Owner review means the evidence packet or draft is ready for the authorised reviewer. Revision means specific feedback has returned and work has resumed. Ready means the record has passed its defined gate but has not necessarily been published. Every transition needs a timestamp, next owner, and short reason. The assistant should not manipulate states to improve a metric.',
        'Time-zone separation becomes visible in this model. If an assistant in the Philippines raises a question after the owner\'s review window, the resulting wait belongs to clarification and schedule design, not to active retrieval. That does not mean overlap is always required. It means the team can decide whether better briefs, a scheduled review window, or a safe default would reduce the wait. Consequential questions should still pause. Speed is not a reason to transfer approval authority or let an assistant guess about legal scope, customer promises, sensitive access, or publication.'
      ]),
      sec('Evidence of genuine research difficulty', [
        'Difficulty should be tied to features of the question. Useful observations include the number of materially different definitions, whether primary sources are accessible, whether sources disagree, how many jurisdictions or populations the claim spans, whether a current source supersedes an older one, and whether the proposed conclusion exceeds the available evidence. These are not points in a universal difficulty score. They are case notes that explain why a reviewer needed more retrieval or narrowed the thesis. A dense source list without such observations may simply indicate broad searching.',
        'Managers should compare similar article types and inspect distributions as well as averages. One long case may be a legitimate source conflict; a rising median clarification wait may reveal weak intake; repeated revision time may signal that the evidence packet and draft are poorly connected. Sampling the actual cases prevents the dashboard from becoming a story detached from the work. The aim is not surveillance of every minute. It is enough operational evidence to decide whether to change the brief, review window, source access, training example, or article scope.'
      ]),
      sec('Limitations and evidence-led conclusion', [
        'State timestamps depend on consistent use and can create false precision. People switch tasks, read offline, and sometimes forget to update a queue. Little\'s Law applies to stable systems under assumptions that a small daily content lane may not meet. The cited sources do not validate these five states or establish productivity norms for Philippines-based assistants. The method also cannot observe thought directly, and it should not be used as an individual performance score without broader context.',
        'The evidence supports separating flow delay from research difficulty through a modest event record. State, owner, reason, and claim-level difficulty observations allow a manager to explain where time went without guessing. The resulting decision may concern intake, access, review capacity, or scope rather than assistant speed. For OutsourcingAssistant.com, that is the useful conclusion: measure the work system closely enough to improve the handoff, while keeping consequential editorial decisions with the authorised reviewer.'
      ])
    ],
    faqs: [{ q: 'Can elapsed time measure assistant productivity?', a: 'Not by itself. It combines active work, waiting, review, and revision and must be interpreted with state evidence.' }, { q: 'Should the assistant track every minute?', a: 'No. Record meaningful state transitions, the next owner, and the reason. Avoid intrusive minute-by-minute surveillance.' }],
    sources: [
      s('NIST/SEMATECH e-Handbook: Little\'s Law', 'https://www.itl.nist.gov/div898/handbook/pmc/section4/pmc435.htm', 'Relationship among average inventory, throughput, and flow time.'),
      s('UK Government Service Manual: Measuring success', 'https://www.gov.uk/service-manual/measuring-success', 'Selecting and interpreting service performance measures.'),
      s('ILO: Working from home', 'https://www.ilo.org/publications/working-home-estimating-worldwide-potential', 'Remote-work organisation and limits of broad estimates.'),
      s('GAO Assessing Data Reliability', 'https://www.gao.gov/products/gao-20-283g', 'Evidence suitability for a stated analytical purpose.')
    ],
    related: ['approval-dependency-latency', 'async-queue-aging-analysis', 'philippines-assistant-handoff-window'], body: []
  }
];
