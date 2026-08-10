import type { BlogPost } from './data';

type Topic = { slug: string; title: string; focus: string; outcome: string; tasks: string; boundary: string };

const topics: Topic[] = [
  ['virtual-assistant-appointment-reminders', 'A reliable appointment-reminder workflow for Filipino assistants', 'appointment reminders', 'fewer missed appointments', 'confirm approved details, send reminders, and flag changes', 'rescheduling outside approved windows or making service promises'],
  ['virtual-assistant-sales-ops-data-entry', 'Delegate sales-operations data entry with clear controls', 'sales-operations data entry', 'cleaner pipeline records', 'enter approved activity, check required fields, and flag conflicts', 'changing forecast fields or inventing qualification details'],
  ['virtual-assistant-customer-feedback-tagging', 'A customer-feedback tagging SOP for Filipino assistants', 'customer-feedback tagging', 'usable themes for the owner', 'sort approved feedback, apply tags, and link source records', 'editing customer meaning or publishing testimonials'],
  ['virtual-assistant-podcast-guest-coordination', 'Coordinate podcast guests with a Filipino assistant', 'podcast guest coordination', 'organized guest handoffs', 'track outreach, collect approved details, and prepare briefing packets', 'committing the host to dates or changing interview terms'],
  ['virtual-assistant-website-content-qa', 'A website content QA checklist an assistant can run', 'website content QA', 'fewer avoidable publishing errors', 'check links, headings, metadata, and approved copy against a brief', 'changing claims or publishing unapproved revisions'],
  ['virtual-assistant-lead-magnet-delivery', 'Set up lead-magnet delivery with a controlled assistant workflow', 'lead-magnet delivery', 'consistent first-touch delivery', 'check approved files, log requests, and route access problems', 'handling payment data or promising a sales outcome'],
  ['virtual-assistant-refund-request-intake', 'A safe refund-request intake process for assistants', 'refund-request intake', 'complete review-ready refund records', 'capture approved fields, attach evidence, and route exceptions', 'approving refunds or interpreting policy exceptions'],
  ['virtual-assistant-booking-confirmation', 'Build a booking-confirmation routine for Filipino assistants', 'booking confirmations', 'fewer unclear appointments', 'check the source calendar, send approved confirmations, and log replies', 'changing availability or making commitments for the owner'],
  ['virtual-assistant-document-version-control', 'Use a Filipino assistant to maintain document versions', 'document version control', 'one trustworthy working copy', 'apply naming rules, record owners, and archive superseded drafts', 'deleting records or deciding which legal copy controls'],
  ['virtual-assistant-market-research-monitoring', 'A market-research monitoring workflow assistants can maintain', 'market-research monitoring', 'timely source notes for decisions', 'watch approved sources, summarize changes, and mark uncertainty', 'presenting an inference as a verified market fact'],
  ['virtual-assistant-customer-onboarding-emails', 'Delegate customer-onboarding emails with approval lines', 'customer-onboarding emails', 'a consistent first-week experience', 'prepare approved messages, track replies, and list missing setup details', 'changing scope or promising delivery dates'],
  ['virtual-assistant-support-escalation-queue', 'Create a support-escalation queue a Filipino assistant can run', 'support escalation', 'faster owner attention on exceptions', 'classify tickets, capture evidence, and route urgent items', 'making safety, legal, or compensation decisions alone'],
  ['virtual-assistant-social-comment-moderation', 'A social-comment moderation workflow for assistants', 'social-comment moderation', 'a reviewable public conversation', 'apply published rules, hide obvious spam, and escalate sensitive comments', 'arguing with customers or deleting evidence of a complaint'],
  ['virtual-assistant-recruiting-interview-scheduling', 'Delegate interview scheduling without losing candidate context', 'interview scheduling', 'fewer candidate scheduling gaps', 'coordinate approved availability, send logistics, and update the tracker', 'making hiring decisions or changing compensation language'],
  ['virtual-assistant-client-report-assembly', 'Assemble client reports with a Filipino assistant', 'client-report assembly', 'consistent review-ready reports', 'collect approved metrics, format summaries, and flag missing inputs', 'interpreting results beyond the approved brief'],
  ['virtual-assistant-receipt-categorization', 'A receipt-categorization workflow with a clear review boundary', 'receipt categorization', 'organized bookkeeping inputs', 'match receipts to approved categories, log uncertainty, and prepare a queue', 'moving money or making tax determinations'],
  ['virtual-assistant-training-records', 'Maintain training records with a Filipino assistant', 'training-record maintenance', 'current evidence of completed training', 'update approved records, chase missing acknowledgments, and report gaps', 'certifying competence or changing compliance requirements'],
  ['virtual-assistant-event-registration-admin', 'Run event-registration administration with a simple SOP', 'event-registration administration', 'accurate attendee records', 'check registrations, send approved logistics, and route accessibility requests', 'promising accommodations or changing event policy'],
  ['virtual-assistant-returns-status-workflow', 'A returns-status workflow for ecommerce assistants', 'returns-status updates', 'clearer customer updates', 'check approved statuses, draft replies, and flag exceptions', 'approving refunds or changing warehouse records'],
  ['virtual-assistant-knowledge-base-maintenance', 'Maintain a knowledge base with a Filipino assistant', 'knowledge-base maintenance', 'answers that stay aligned with approved policy', 'find stale pages, log proposed edits, and update approved copy', 'creating policy or changing customer-facing claims'],
  ['virtual-assistant-subscription-cancellation-intake', 'Handle subscription-cancellation intake with control', 'subscription-cancellation intake', 'complete, traceable cancellation requests', 'record the request, check approved fields, and route retention questions', 'denying cancellation or making retention offers'],
  ['virtual-assistant-compliance-document-collection', 'Collect compliance documents with a narrow assistant workflow', 'compliance-document collection', 'complete review packets', 'track requested files, check legibility, and report missing items', 'certifying compliance or deciding legal sufficiency'],
  ['virtual-assistant-project-risk-log', 'Keep a project risk log useful for owner decisions', 'project risk logging', 'visible risks and next actions', 'capture risks, assign owners, and follow up on agreed dates', 'accepting risk or changing project scope'],
  ['virtual-assistant-employee-onboarding-admin', 'An employee-onboarding admin checklist for assistants', 'employee-onboarding administration', 'fewer missing first-day details', 'track approved forms, schedule setup steps, and flag blockers', 'making employment decisions or handling unnecessary sensitive data']
].map(([slug, title, focus, outcome, tasks, boundary]) => ({ slug, title, focus, outcome, tasks, boundary }));

const source = { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Authoritative governance and risk-management context for controlled delegation.' };

function makePost(topic: Topic): BlogPost {
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: `A practical Outsourcing Assistant guide to delegating ${topic.focus} to Filipino talent with a clear SOP, limited access, and owner review.`,
    minutes: 8,
    takeaway: `Start with one repeatable ${topic.focus} lane, define finished work, and keep ${topic.boundary} with the owner or named manager.`,
    sections: [
      { heading: 'Define the finish line', body: `Write the result before assigning ${topic.focus}: ${topic.outcome}. Name the trigger, due time, source of truth, expected output, and reviewer so the first sample is easy to evaluate.` },
      { heading: 'Turn the lane into steps', body: `Break the work into small, visible actions. The assistant can ${topic.tasks}. Put the input, tool, expected output, and escalation note beside each step instead of relying on a broad instruction.` },
      { heading: 'Set a narrow access boundary', body: `Use a separate account or delegated role where possible and start with the smallest permission that supports a sample. Keep ${topic.boundary} outside the assistant's authority until the manager has reviewed consistent work.` },
      { heading: 'Make handoffs visible', body: `Use one queue with ready, in progress, waiting for review, and blocked states. An end-of-shift note should list completed items, decisions needed, and the next owner, especially when a Philippines-based shift overlaps only part of the owner's day.` },
      { heading: 'Review before scaling', body: `Sample early work for accuracy, completeness, timeliness, tone, and escalation judgment. When the same question appears twice, improve the SOP with an example rather than solving the gap through private memory.` },
      { heading: 'Expand one adjacent task at a time', body: `After the lane consistently produces ${topic.outcome}, add one related task and repeat the review cycle. Keep a dated access log and weekly scorecard. If an exception becomes common, update the SOP or return the decision to the owner.` }
    ],
    faqs: [
      { q: `What should an assistant do when ${topic.focus} is unclear?`, a: 'Pause the item, record the missing context, and use the agreed escalation route. Guessing creates hidden rework.' },
      { q: 'How much should the owner review at the start?', a: 'Review every item in the first few days, then move to sampling only after the error pattern is understood and stable.' },
      { q: 'What belongs in the SOP?', a: 'Include the trigger, tools, exact steps, examples, red lines, definition of done, and escalation route.' }
    ],
    citations: [source],
    internalLinks: [
      { href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist' },
      { href: '/services', label: 'Filipino assistant services' }
    ],
    cta: { href: '/contact', label: 'Plan the role and handoff' }
  };
}

export const dailyBlogBatch20260810Run2: BlogPost[] = topics.map(makePost);
