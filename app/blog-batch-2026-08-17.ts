import type { BlogPost } from './data';

type RecordSpec = {
  slug: string;
  title: string;
  audience: string;
  problem: string;
  workflow: string;
  evidence: string;
  boundary: string;
  published: '2026-08-17';
};

const records: RecordSpec[] = [
  { slug: 'philippines-virtual-assistant-inbox-escalation-map', title: 'Build an inbox escalation map for a Philippines-based virtual assistant', audience: 'a founder whose customer and vendor messages arrive in one crowded inbox', problem: 'deciding which messages can wait and which need an owner today', workflow: 'label the sender, consequence, promised response, and next owner before drafting', evidence: 'an escalation note includes the original thread, reason, and due window', boundary: 'payment changes, legal threats, account recovery, and final commitments', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-crm-status-hygiene', title: 'Keep CRM status fields reliable with a Philippines-based assistant', audience: 'a small sales team whose pipeline reports no longer match the conversations', problem: 'separating a real next step from an optimistic or stale status', workflow: 'compare the latest approved interaction with the allowed status definitions', evidence: 'every changed record has a dated source note and a named next action', boundary: 'inventing qualification, changing forecast judgment, or promising fit', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-support-macro-review', title: 'Review support macros with a Philippines-based assistant', audience: 'a support lead maintaining saved replies for recurring customer questions', problem: 'finding answers that have drifted from the current approved policy', workflow: 'sample real tickets, compare each macro with its source, and mark uncertain language', evidence: 'a macro is linked to an owner, review date, and example ticket', boundary: 'creating policy, granting exceptions, or giving regulated advice', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-recruiting-brief-intake', title: 'Turn a hiring request into a usable brief with a Philippines-based assistant', audience: 'an operator who receives hiring requests in scattered messages and documents', problem: 'capturing the work, schedule, tools, and decision rights before search begins', workflow: 'normalize the request into tasks, required experience, examples, and open questions', evidence: 'the brief distinguishes must-have work from preferences and unknowns', boundary: 'making employment decisions, inventing credentials, or promising availability', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-candidate-interview-notes', title: 'Organize candidate interview notes with a Philippines-based assistant', audience: 'a founder comparing several candidates for a remote assistant lane', problem: 'keeping evidence separate from impressions during a hiring decision', workflow: 'transcribe approved notes into the same question-and-evidence format for each candidate', evidence: 'each comparison points to a recorded answer rather than a vague score', boundary: 'ranking protected characteristics, making the hire, or fabricating references', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-sop-version-control', title: 'Give a Philippines-based assistant a usable SOP version-control routine', audience: 'a distributed team whose operating instructions change as exceptions are resolved', problem: 'ensuring the active checklist is the one people actually use', workflow: 'compare proposed edits with the approved source, record the change, and flag conflicts', evidence: 'the live SOP shows owner, revision date, and reason for the change', boundary: 'approving policy, deleting history, or silently changing a control', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-weekly-operations-report', title: 'Design a weekly operations report for a Philippines-based assistant', audience: 'an owner who needs visibility into recurring back-office work without more meetings', problem: 'reporting completed work and blockers without disguising missing data', workflow: 'count finished items, corrections, exceptions, and waiting decisions from source queues', evidence: 'each number links to a queue or record and unknowns remain visible', boundary: 'editing results, setting company targets, or interpreting financial performance', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-vendor-onboarding-checklist', title: 'Run a vendor onboarding checklist with a Philippines-based assistant', audience: 'an operations team adding suppliers while trying to keep records consistent', problem: 'checking that required documents and contacts are present before a vendor is active', workflow: 'collect approved fields, match them to source documents, and route gaps to the owner', evidence: 'the checklist shows received, verified, and waiting states separately', boundary: 'approving suppliers, changing bank details, or accepting contractual terms', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-ecommerce-catalog-audit', title: 'Audit an ecommerce catalog with a Philippines-based assistant', audience: 'an online store with product records maintained across a spreadsheet and storefront', problem: 'finding mismatched titles, attributes, images, and availability without inventing facts', workflow: 'compare each field with the approved product source and log the exact discrepancy', evidence: 'a reviewer can trace every proposed edit to a source record', boundary: 'creating product claims, changing safety information, or publishing unapproved edits', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-order-exception-queue', title: 'Create an order-exception queue for a Philippines-based support assistant', audience: 'a commerce team handling late, damaged, or incomplete orders', problem: 'giving unusual orders enough context without letting routine support guess a remedy', workflow: 'capture order facts, customer request, carrier evidence, and the policy path for review', evidence: 'each case names the missing decision and its authorized owner', boundary: 'promising refunds, changing delivery instructions, or contacting a carrier outside policy', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-real-estate-lead-intake', title: 'Structure real-estate lead intake for a Philippines-based assistant', audience: 'a real-estate operator receiving inquiries through portals, email, and phone notes', problem: 'recording useful preferences without turning an assistant into an advisor', workflow: 'capture the prospect’s stated criteria, source, timing, and requested follow-up', evidence: 'unknown budget, availability, and property details stay marked unknown', boundary: 'offering property advice, screening protected traits, or negotiating terms', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-agency-client-reporting', title: 'Prepare agency client reporting with a Philippines-based assistant', audience: 'an agency owner assembling recurring status updates from several delivery tools', problem: 'turning scattered activity into a factual client-ready draft', workflow: 'collect approved metrics, link deliverables, and list decisions still needed', evidence: 'the draft separates activity, outcome, explanation, and next action', boundary: 'inflating performance, changing attribution, or making a client promise', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-coach-session-followup', title: 'Handle coach session follow-up with a Philippines-based assistant', audience: 'a coach who needs consistent administrative follow-up after scheduled sessions', problem: 'keeping reminders and resources orderly without crossing into coaching', workflow: 'match the approved session record to the next administrative message and due date', evidence: 'the follow-up identifies the source session and uses only approved resources', boundary: 'giving advice, interpreting a client’s situation, or changing a care plan', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-home-service-job-board', title: 'Maintain a home-service job board with a Philippines-based assistant', audience: 'a home-service operator coordinating inquiries, visits, and technician notes', problem: 'showing which jobs are ready, waiting, or blocked before the next dispatch decision', workflow: 'reconcile customer details, address, requested work, appointment state, and technician update', evidence: 'each job has a current source and an explicit next owner', boundary: 'diagnosing work, quoting unapproved terms, or guaranteeing arrival', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-healthcare-office-intake-admin', title: 'Set safe administrative intake boundaries for a Philippines-based assistant', audience: 'a healthcare office separating clerical intake from professional decisions', problem: 'collecting complete administrative details while protecting sensitive information', workflow: 'use the office-approved fields, confirm the preferred contact path, and flag missing consent', evidence: 'the record shows what was provided without adding an interpretation', boundary: 'triage, diagnosis, treatment guidance, or disclosure decisions', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-legal-intake-packet', title: 'Prepare a legal intake packet with a Philippines-based assistant', audience: 'a legal team organizing prospective-client information before attorney review', problem: 'making an intake packet complete without implying a legal conclusion', workflow: 'sort the submitted facts, dates, documents, and questions into the firm’s approved fields', evidence: 'missing facts and unverified statements remain clearly labeled', boundary: 'legal advice, conflict decisions, eligibility judgments, or promises', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-finance-document-index', title: 'Build a finance document index with a Philippines-based assistant', audience: 'a small business gathering receipts and statements for authorized review', problem: 'making source documents findable without turning indexing into accounting judgment', workflow: 'name, date, source, period, and document type each item using the approved convention', evidence: 'every index row opens the original file and exposes missing periods', boundary: 'categorizing uncertain transactions, approving payments, or giving tax advice', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-access-review-calendar', title: 'Run an access-review calendar with a Philippines-based assistant', audience: 'a growing team that needs regular checks on remote-worker permissions', problem: 'making stale access visible before a role or project changes', workflow: 'list the user, system, permission, business purpose, reviewer, and review date', evidence: 'the reviewer records keep, narrow, remove, or investigate for each entry', boundary: 'granting exceptions, handling secrets, or deciding security policy', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-customer-renewal-prep', title: 'Prepare customer renewal work with a Philippines-based assistant', audience: 'a service owner tracking upcoming agreement decisions across accounts', problem: 'starting renewal conversations from the correct record and date', workflow: 'match the current agreement, notice window, contact, and open service items', evidence: 'each draft cites the governing record and flags conflicting dates', boundary: 'changing terms, negotiating, or representing a renewal as agreed', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-local-seo-listing-audit', title: 'Audit local-search listings with a Philippines-based assistant', audience: 'a local operator whose business details appear in several public directories', problem: 'finding inconsistent public facts without publishing an unapproved correction', workflow: 'compare name, contact details, hours, and service description against one approved source', evidence: 'each discrepancy records the directory, observed text, and recommended owner action', boundary: 'inventing local claims, responding to reviews as the owner, or changing legal details', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-content-brief-research', title: 'Prepare a niche content brief with a Philippines-based assistant', audience: 'a site owner who wants useful articles grounded in real customer questions', problem: 'turning a topic idea into a brief with a clear audience, evidence, and editorial limit', workflow: 'define the question, inspect approved source material, list claims to verify, and map the reader decision', evidence: 'the brief separates sourced facts, examples, and questions requiring owner review', boundary: 'publishing unsupported claims, copying another article, or making professional promises', published: '2026-08-17' },
  { slug: 'philippines-virtual-assistant-remote-team-handoff', title: 'Make a remote-team handoff readable across Philippines time', audience: 'an owner and Philippines-based assistant working in different review windows', problem: 'preventing unfinished work from disappearing between shifts', workflow: 'record completed items, drafts, blockers, decisions needed, and the next review window', evidence: 'a new reader can resume from the note without searching private messages', boundary: 'declaring blocked work complete, changing priorities, or bypassing the owner', published: '2026-08-17' }
];

const articleSections: Record<string, BlogPost['sections']> = {
  'philippines-virtual-assistant-inbox-escalation-map': [
    { heading: 'Separate urgency from authority', body: 'An inbox map should classify consequence before response speed. Put scheduling, routine status requests, and requests for existing documents in a preparation lane; put payment changes, threats, account recovery, and new commitments in an owner-review lane.' },
    { heading: 'Build the escalation record', body: 'For each message, capture sender, customer or vendor context, requested outcome, promised date, and the exact reason it cannot be answered. The assistant can draft a concise summary, but the original thread remains attached so the reviewer can verify tone and facts.' },
    { heading: 'Review the boundary in practice', body: 'Sample both easy and ambiguous messages for the first week. Measure whether the handoff identifies the missing decision, rather than rewarding a fast reply that quietly changes an obligation.' },
    { heading: 'Make the map maintainable', body: 'Add examples whenever the owner corrects a classification. Retire examples that no longer match policy and keep a named reviewer responsible for exceptions.' }
  ],
  'philippines-virtual-assistant-crm-status-hygiene': [
    { heading: 'Define each status with evidence', body: 'A CRM status is useful only when another person can tell why it is true. Write the qualifying event, the required source note, and the next action for every allowed status before asking an assistant to clean records.' },
    { heading: 'Correct records without rewriting history', body: 'Compare the latest approved interaction with the current field. Record the source and date of a proposed change, leave conflicting evidence visible, and route forecast or qualification judgment to the sales owner.' },
    { heading: 'Use a bounded sample', body: 'Start with one pipeline segment and inspect changed, unchanged, and ambiguous records. Reopened corrections reveal whether the definition or the source data is the actual problem.' },
    { heading: 'Protect reporting meaning', body: 'Never improve a dashboard by deleting uncertainty. A clean CRM preserves stale, missing, and disputed values until an accountable owner resolves them.' }
  ],
  'philippines-virtual-assistant-support-macro-review': [
    { heading: 'Tie every macro to a policy source', body: 'Saved replies drift when no one can identify the approved rule behind them. Pair each macro with its source, owner, review date, and the customer question it is intended to answer.' },
    { heading: 'Test against real tickets', body: 'Have the assistant compare a sample of recent tickets with the macro and mark outdated promises, missing conditions, or language that implies an exception. The task is comparison, not policy creation.' },
    { heading: 'Escalate consequential wording', body: 'Refunds, delivery guarantees, regulated advice, and admissions require the support owner. Preserve the ticket context and explain the exact sentence that needs approval.' },
    { heading: 'Keep the library usable', body: 'Remove duplicates only after confirming which owner and source remain authoritative. A small review log prevents the same outdated reply from returning under a new label.' }
  ],
  'philippines-virtual-assistant-recruiting-brief-intake': [
    { heading: 'Turn a request into work', body: 'A hiring request becomes useful when it names recurring outcomes, examples of acceptable work, schedule, tools, and decision rights. Separate required tasks from preferences so the search does not optimize for an undefined person.' },
    { heading: 'Expose unknowns early', body: 'Ask who supplies source material, who reviews output, what must remain confidential, and what happens when a request is incomplete. Mark unanswered fields as open questions rather than filling them with assumptions.' },
    { heading: 'Make the brief testable', body: 'For each task, state the input, finished artifact, review evidence, and escalation trigger. This gives an owner a fair way to compare candidates against the work itself.' },
    { heading: 'Keep selection human-owned', body: 'An assistant may organize notes and examples, but the owner retains employment decisions, reference checks, and judgments about suitability.' }
  ],
  'philippines-virtual-assistant-candidate-interview-notes': [
    { heading: 'Use the same questions', body: 'Interview notes become comparable when each candidate is asked about the same work scenario and the notes preserve the answer, not just an impression. Record the task, tools used, reasoning described, and follow-up needed.' },
    { heading: 'Separate evidence from ratings', body: 'If an owner uses a score, keep the source answer beside it and explain the criterion. Never infer reliability, background, or protected characteristics from accent, location, or a vague comment.' },
    { heading: 'Resolve missing evidence', body: 'Mark an unanswered question and schedule an owner-led follow-up. A neat summary is not evidence that a candidate demonstrated the skill.' },
    { heading: 'Store a decision trail', body: 'Keep the approved notes, criteria, and final owner decision together. This reduces accidental favoritism and makes later onboarding reflect the work that was actually discussed.' }
  ],
  'philippines-virtual-assistant-sop-version-control': [
    { heading: 'Name the active instruction', body: 'A remote assistant needs one clearly identified SOP, not several files with similar names. Show owner, revision date, effective state, and the reason for each approved change.' },
    { heading: 'Compare before editing', body: 'Review a proposed change against the current source and note conflicts, missing examples, and affected tasks. Preserve the prior version so the owner can understand what changed.' },
    { heading: 'Test the changed step', body: 'Use one ordinary case and one exception to check whether the new instruction is executable. Route policy questions back to the owner rather than silently resolving them in the checklist.' },
    { heading: 'Make handoffs durable', body: 'Link the assistant’s work queue to the active version and record when the change was acknowledged. Version control fails when the document changes but the team’s working copy does not.' }
  ],
  'philippines-virtual-assistant-weekly-operations-report': [
    { heading: 'Report work, not impressions', body: 'A weekly operations report should distinguish finished items, returned items, exceptions, and work waiting on an owner. Each count needs a queue or record that another reviewer can inspect.' },
    { heading: 'Keep unknowns visible', body: 'Do not turn missing source data into zero or a success claim. Label the gap, its effect on the report, and the person who can resolve it.' },
    { heading: 'Use a stable period', body: 'Choose a reporting window and apply it consistently across queues. Explain late arrivals and reopened work instead of moving them between periods to make the totals look cleaner.' },
    { heading: 'Turn patterns into decisions', body: 'The assistant can highlight repeated blockers and corrections. The owner decides targets, staffing changes, and whether a process should be redesigned.' }
  ],
  'philippines-virtual-assistant-vendor-onboarding-checklist': [
    { heading: 'Define “ready” before collecting', body: 'A vendor checklist should list required contacts, documents, identifiers, and approval states before the assistant begins. “Received” and “verified” are different fields.' },
    { heading: 'Match fields to sources', body: 'The assistant can compare submitted information with the approved record and flag gaps or conflicts. Bank details, contractual terms, and supplier approval remain with the authorized owner.' },
    { heading: 'Route exceptions with context', body: 'An exception packet should show the missing field, source checked, date, and decision needed. This lets procurement review a case without repeating the collection work.' },
    { heading: 'Audit the handoff', body: 'Keep a small record of who verified each required item and when. Do not activate a vendor merely because the checklist is visually complete.' }
  ],
  'philippines-virtual-assistant-ecommerce-catalog-audit': [
    { heading: 'Choose the approved product source', body: 'Catalog auditing starts by naming which source governs title, attributes, images, availability, and safety information. A storefront should not become its own evidence for correcting the source.' },
    { heading: 'Log exact discrepancies', body: 'Have the assistant record the field, observed value, source value, and proposed owner action. This makes a correction reviewable without asking the assistant to invent product claims.' },
    { heading: 'Separate facts from merchandising', body: 'Formatting cleanup can be proposed; claims about performance, safety, or suitability require the product owner. Keep unverified fields marked rather than polishing them into certainty.' },
    { heading: 'Release edits deliberately', body: 'Review a sample of proposed changes across product types before publishing. Preserve the original record and a reason for each approved edit.' }
  ],
  'philippines-virtual-assistant-order-exception-queue': [
    { heading: 'Capture the whole exception', body: 'A useful order case includes order facts, customer request, carrier evidence, current status, and the policy path being considered. Missing facts should be explicit.' },
    { heading: 'Do not let routine support guess', body: 'Late, damaged, or incomplete orders often require a refund, replacement, or delivery decision. The assistant can organize the case and draft options; an owner approves the remedy.' },
    { heading: 'Make the queue actionable', body: 'Use states such as waiting for evidence, ready for owner decision, and approved for follow-up. Every waiting state needs an owner and next review date.' },
    { heading: 'Learn from repeat causes', body: 'Review exception categories monthly and fix the upstream field or policy reference that caused repeat escalations. Do not hide volume by closing unresolved cases.' }
  ],
  'philippines-virtual-assistant-real-estate-lead-intake': [
    { heading: 'Record the prospect’s words', body: 'Real-estate intake should capture stated property criteria, timing, source, and requested follow-up without converting preferences into advice or a qualification judgment.' },
    { heading: 'Keep sensitive decisions out', body: 'The assistant should not screen protected traits, recommend a property, negotiate terms, or infer affordability. Unknown budget and availability stay unknown until the prospect or licensed owner provides them.' },
    { heading: 'Make the next action specific', body: 'A good record identifies the requested contact path, missing detail, and responsible agent. Avoid a generic “follow up” that gives no evidence or timing.' },
    { heading: 'Review the intake boundary', body: 'Sample inquiries from each channel and check that the same fields and escalation rules apply. The owner controls advice, representation, and negotiation.' }
  ],
  'philippines-virtual-assistant-agency-client-reporting': [
    { heading: 'Start from deliverables', body: 'Agency reporting is credible when each update connects an approved metric to a deliverable, period, and source. Activity alone is not an outcome.' },
    { heading: 'Separate explanation from spin', body: 'The assistant can assemble approved numbers and list open decisions. The account owner explains attribution, performance, and commitments.' },
    { heading: 'Keep missing data visible', body: 'If a platform or source is unavailable, state the gap and its effect. Never backfill a client result from a nearby metric.' },
    { heading: 'Create a reviewable draft', body: 'Use a consistent client structure while keeping the analysis specific to that account’s work. Attach links and identify every sentence that needs owner confirmation.' }
  ],
  'philippines-virtual-assistant-coach-session-followup': [
    { heading: 'Stay administrative', body: 'Session follow-up can organize approved reminders, resources, attendance, and scheduling details. It must not interpret a client’s situation or provide coaching.' },
    { heading: 'Anchor every message', body: 'Match the follow-up to the dated session record and use only resources the coach has approved. If the record is incomplete, pause rather than improvising.' },
    { heading: 'Protect the handoff', body: 'Show the coach which message is ready, which detail is missing, and when the next review is needed. Sensitive content should remain within the approved system and access scope.' },
    { heading: 'Review exceptions', body: 'A coach owns changes to a care or coaching plan, urgent concerns, and advice. The assistant’s role is to surface the issue clearly and route it.' }
  ],
  'philippines-virtual-assistant-home-service-job-board': [
    { heading: 'Make job state factual', body: 'A home-service board should reconcile customer request, address, appointment state, and technician note. “Ready” means the required source details are present, not that the job is guaranteed.' },
    { heading: 'Keep dispatch authority clear', body: 'The assistant can expose missing details and prepare a scheduling note. Diagnosis, unapproved quotes, guarantees, and dispatch decisions belong to the operator.' },
    { heading: 'Handle changes explicitly', body: 'Record who changed an appointment, what source supported it, and what the customer was told. Conflicting notes stay visible until the owner resolves them.' },
    { heading: 'Use the board for handoff', body: 'Every job needs a current state, next owner, and review window. A quiet row is not complete unless its evidence says why.' }
  ],
  'philippines-virtual-assistant-healthcare-office-intake-admin': [
    { heading: 'Limit the fields', body: 'Administrative intake should use the office-approved fields and contact path. Collect what the office needs to schedule or route a request, not whatever might be interesting.' },
    { heading: 'Separate data from interpretation', body: 'Record what the person provided and mark missing consent or contact details. Do not triage, diagnose, recommend treatment, or decide disclosure.' },
    { heading: 'Route urgent uncertainty', body: 'If a message suggests a clinical or safety concern, preserve it and use the office’s approved escalation path. The assistant should not answer from personal judgment.' },
    { heading: 'Review access and retention', body: 'The office owner decides who may view sensitive records and how long they are retained. A tidy intake queue does not replace those controls.' }
  ],
  'philippines-virtual-assistant-legal-intake-packet': [
    { heading: 'Organize submitted facts', body: 'A legal intake packet can sort dates, documents, parties, and questions into approved fields. Clearly label statements that have not been verified.' },
    { heading: 'Preserve uncertainty', body: 'The assistant should not infer a claim, conflict result, eligibility, or legal conclusion from incomplete material. Missing facts become questions for attorney review.' },
    { heading: 'Make the packet traceable', body: 'Link each item to the submitted source and note when it was received. This prevents a summary from becoming detached from the document that supports it.' },
    { heading: 'Keep advice with counsel', body: 'Attorney decisions, legal advice, conflicts, and promises remain outside the assistant’s lane. The handoff should state exactly what counsel must decide.' }
  ],
  'philippines-virtual-assistant-finance-document-index': [
    { heading: 'Index, do not judge', body: 'A finance document index makes receipts and statements findable by source, date, period, type, and filename. It does not decide how an uncertain transaction should be categorized.' },
    { heading: 'Match every row to a file', body: 'The assistant should open the original, capture its identifying fields, and flag duplicates or missing periods. A row without a source link is not complete.' },
    { heading: 'Protect approval boundaries', body: 'Payment approval, tax advice, account changes, and accounting judgment remain with authorized staff. Route ambiguous documents with the evidence already gathered.' },
    { heading: 'Make close review easier', body: 'Use a stable naming convention and record corrections rather than overwriting them. The owner can then inspect gaps without reconstructing the assistant’s work.' }
  ],
  'philippines-virtual-assistant-access-review-calendar': [
    { heading: 'Tie access to work', body: 'An access review should list user, system, permission, business purpose, reviewer, and review date. A role label alone is too vague to justify continued access.' },
    { heading: 'Review changes and stale grants', body: 'Compare current permissions with the assistant’s active tasks and note moves, completed projects, and unused access. The assistant can prepare the inventory; the owner decides keep, narrow, or remove.' },
    { heading: 'Handle secrets carefully', body: 'Do not paste credentials into a review note or grant an exception to finish the inventory. Route security incidents and policy questions to the responsible owner.' },
    { heading: 'Close the loop', body: 'Record the decision, reviewer, date, and follow-up action. A reminder without an outcome is not an access review.' }
  ],
  'philippines-virtual-assistant-customer-renewal-prep': [
    { heading: 'Start with the governing record', body: 'Renewal preparation should match the current agreement, notice window, account contact, and open service items. Conflicting dates need an owner’s review before a message is drafted.' },
    { heading: 'Prepare, do not negotiate', body: 'The assistant can assemble facts and a neutral checklist. Terms, concessions, commitments, and a statement that renewal is agreed remain with the authorized owner.' },
    { heading: 'Expose the decision queue', body: 'List missing approvals, unresolved service issues, and the date by which a decision is needed. This gives the owner time to act without turning preparation into representation.' },
    { heading: 'Keep evidence current', body: 'Refresh the packet from approved sources and record what changed. A renewal draft should never rely on an old conversation when the agreement says otherwise.' }
  ],
  'philippines-virtual-assistant-local-seo-listing-audit': [
    { heading: 'Choose one approved business source', body: 'A listing audit needs a source of truth for name, contact details, hours, and service description. Public directory text is an observation, not permission to invent a correction.' },
    { heading: 'Record discrepancies precisely', body: 'Capture directory, URL, observed wording, date checked, approved value, and recommended owner action. Keep legal details and local claims with the business owner.' },
    { heading: 'Separate auditing from publishing', body: 'The assistant can prepare a correction queue and draft a response for review. It should not respond to reviews as the owner or publish an unsupported claim.' },
    { heading: 'Review consistency', body: 'Sample the highest-impact listings and confirm that corrections are approved before release. A clean audit is a list of verified observations, not a promise of search performance.' }
  ],
  'philippines-virtual-assistant-content-brief-research': [
    { heading: 'Begin with a reader decision', body: 'A useful niche brief names the question, audience, decision, and evidence needed before drafting. “Write about outsourcing” is not specific enough to guide research or examples.' },
    { heading: 'Separate source types', body: 'Mark sourced facts, bounded examples, and claims still needing verification. An assistant can collect and organize evidence, but publication approval belongs to the owner.' },
    { heading: 'Set the editorial limit', body: 'State what the article will not claim, especially around professional advice, results, and guarantees. This keeps a practical guide honest when the source material is thinner than the topic idea.' },
    { heading: 'Make the brief executable', body: 'Finish with outline, source links, open questions, internal audience context, and a review checklist. The next writer should understand the reader’s decision without reading private messages.' }
  ],
  'philippines-virtual-assistant-remote-team-handoff': [
    { heading: 'Write for the next review window', body: 'A cross-time-zone handoff should let a new reader resume without searching private messages. List completed items, drafts, blockers, decisions needed, and the next review window.' },
    { heading: 'Make state evidence-based', body: 'Link each completed item to its source and distinguish waiting from blocked. Do not mark work done because the queue was quiet while the owner was offline.' },
    { heading: 'Name the decision owner', body: 'For every exception, state the question, consequence, and person who must decide. The Philippines-based assistant can prepare context and continue safe work while the decision waits.' },
    { heading: 'Improve the handoff itself', body: 'Review missed items and repeated clarifications after each cycle. Change the note structure only when the correction makes the next transition easier to verify.' }
  ]
};

function makePost(record: RecordSpec): BlogPost {
  const sections = articleSections[record.slug];
  if (!sections) throw new Error(`Missing independent article body: ${record.slug}`);
  return {
    slug: record.slug,
    title: record.title,
    published: record.published,
    minutes: 9,
    excerpt: `A topic-specific guide for ${record.audience}, focused on ${record.problem}.`,
    takeaway: `Keep ${record.boundary} with the named owner while the assistant handles preparation and evidence.`,
    sections,
    faqs: [],
    internalLinks: [{ href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist' }, { href: '/services', label: 'Philippines assistant staffing services' }]
  };
}

export const dailyBlogBatch20260817: BlogPost[] = records.map(makePost);
