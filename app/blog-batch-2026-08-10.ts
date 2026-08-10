import type { BlogPost } from './data';

type Topic = { slug: string; title: string; work: string; result: string; tasks: string; boundary: string };

const topics: Topic[] = [
  ['virtual-assistant-podcast-production-workflow', 'A podcast production workflow for a Filipino virtual assistant', 'podcast production', 'a dependable episode pipeline', 'organize recordings, prepare show-note drafts, and track approvals', 'publishing an episode or changing the host\'s meaning'],
  ['virtual-assistant-blog-content-refresh-workflow', 'How to delegate blog content refreshes to a Filipino assistant', 'content refreshes', 'useful pages that stay accurate', 'audit old sections, gather sources, and prepare revision notes', 'changing claims without source review'],
  ['virtual-assistant-local-seo-citation-workflow', 'A local SEO citation workflow a Filipino assistant can run', 'local citation work', 'consistent business listings', 'compare approved business details, log discrepancies, and prepare update requests', 'inventing business facts or changing ownership details'],
  ['virtual-assistant-webinar-operations-checklist', 'A webinar operations checklist for Filipino virtual assistants', 'webinar operations', 'calm event-day coordination', 'maintain registrations, prepare reminders, and track speaker handoffs', 'making promises to attendees or speakers'],
  ['virtual-assistant-patient-safe-admin-workflow', 'A patient-safe admin workflow for Filipino assistants', 'healthcare administration', 'organized non-clinical support', 'route forms, maintain schedules, and flag missing administrative details', 'giving medical guidance or exposing unnecessary health information'],
  ['virtual-assistant-legal-intake-admin-workflow', 'A safe legal-intake admin workflow for Filipino assistants', 'legal intake administration', 'complete first-touch records', 'collect approved intake fields, organize documents, and route urgent items', 'giving legal advice or deciding whether a matter should be accepted'],
  ['virtual-assistant-home-services-dispatch-workflow', 'A dispatch workflow for home-services assistants', 'home-services dispatch', 'fewer missed appointments', 'confirm job details, prepare technician notes, and flag schedule conflicts', 'quoting work or changing a customer commitment'],
  ['virtual-assistant-membership-community-moderation', 'A community moderation SOP for Filipino virtual assistants', 'community moderation', 'a welcoming and reviewable member space', 'tag posts, apply published rules, and escalate sensitive reports', 'making safety judgments alone or deleting evidence'],
  ['virtual-assistant-course-lesson-publishing', 'Delegate course lesson publishing with a Filipino assistant', 'course publishing', 'accurate learner-facing lessons', 'check files, enter approved copy, and run a pre-publish checklist', 'editing instructional claims without approval'],
  ['virtual-assistant-inventory-reconciliation-workflow', 'An inventory reconciliation workflow for Filipino assistants', 'inventory reconciliation', 'records the operations team can trust', 'compare system counts, log variances, and prepare exception reports', 'silently correcting unexplained differences'],
  ['virtual-assistant-purchase-order-tracking', 'A purchase-order tracking SOP for Filipino assistants', 'purchase-order tracking', 'clearer supplier follow-up', 'update approved order fields, request status, and maintain an exception queue', 'authorizing purchases or changing terms'],
  ['virtual-assistant-referral-partner-management', 'A referral-partner management workflow for Filipino assistants', 'referral-partner management', 'timely partner follow-up', 'maintain partner records, draft approved updates, and track introductions', 'promising commissions or changing partner agreements'],
  ['virtual-assistant-testimonial-collection-workflow', 'Collect customer testimonials with a safe assistant workflow', 'testimonial collection', 'organized customer proof', 'request approved feedback, record permissions, and route drafts for review', 'editing a customer voice or publishing without consent'],
  ['virtual-assistant-competitor-research-briefs', 'A competitor research brief workflow for Filipino assistants', 'competitor research', 'decision-ready comparison notes', 'collect public sources, normalize observations, and mark unknowns', 'presenting assumptions as verified facts'],
  ['virtual-assistant-grant-application-admin', 'Grant-application administration for Filipino assistants', 'grant application administration', 'complete, traceable application packets', 'track requirements, organize source documents, and flag unanswered questions', 'certifying eligibility or inventing narrative claims'],
  ['virtual-assistant-privacy-request-intake', 'A privacy-request intake workflow for Filipino assistants', 'privacy-request intake', 'a consistent first response queue', 'record approved fields, verify routing details, and escalate deadlines', 'making legal determinations or disclosing records'],
  ['virtual-assistant-software-access-review', 'Run a software-access review with a Filipino assistant', 'software-access reviews', 'a current access inventory', 'compare account lists, record owners, and prepare removal recommendations', 'revoking access without the named owner'],
  ['virtual-assistant-customer-onboarding-checklist', 'A customer onboarding checklist for Filipino assistants', 'customer onboarding', 'a clear and consistent first week', 'collect approved setup details, schedule milestones, and flag blockers', 'changing scope or promising an outcome'],
  ['virtual-assistant-quality-assurance-sampling', 'Use sampling to review Filipino assistant work', 'quality assurance sampling', 'specific, fair coaching evidence', 'select work samples, score agreed criteria, and document corrections', 'changing the scorecard after seeing a result'],
  ['virtual-assistant-weekend-coverage-handoff', 'Build a weekend coverage handoff for Filipino assistants', 'weekend coverage', 'continuity without hidden decisions', 'prepare the queue, label urgency, and write the next-shift summary', 'making an unapproved exception while the owner is away']
].map(([slug, title, work, result, tasks, boundary]) => ({ slug, title, work, result, tasks, boundary }));

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'General governance and risk-management context for controlled delegation.' }
];

function makePost(topic: Topic): BlogPost {
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: `A practical Outsourcing Assistant guide to delegating ${topic.work} to Filipino talent with a clear SOP, limited access, and owner review.`,
    minutes: 9,
    takeaway: `Start with one repeatable ${topic.work} lane, define what finished work means, and keep ${topic.boundary} with the owner or named manager.`,
    sections: [
      { heading: 'Define the finish line', body: `Before assigning ${topic.work}, write the result in one sentence: ${topic.result}. Include the trigger, due time, source of truth, and reviewer. A specific finish line makes the first training sample easy to evaluate.` },
      { heading: 'Break the work into a checklist', body: `Turn the workflow into small steps. The assistant can ${topic.tasks}. Put each step beside its input, tool, expected output, and escalation note. Avoid a broad instruction such as “keep this moving” because it hides decisions the owner still needs to make.` },
      { heading: 'Use a narrow access lane', body: `Create a separate account or delegated role where the tool supports it. Start with the smallest permission that lets the assistant complete a sample. Keep ${topic.boundary} outside the assistant\'s authority until the manager has reviewed consistent work.` },
      { heading: 'Make handoffs visible', body: `Use one queue with four states: ready, in progress, waiting for review, and blocked. An end-of-shift note should list completed items, decisions needed, and the next owner. This is especially important when a Philippines-based shift overlaps only part of the owner\'s day.` },
      { heading: 'Review examples before scaling', body: `Sample the first work every day and score accuracy, completeness, timeliness, tone, and escalation judgment. When the same question appears twice, improve the SOP with an example. Do not solve a repeatable process gap through private memory.` },
      { heading: 'Expand one adjacent task at a time', body: `After the lane produces ${topic.result}, add one related task and repeat the review cycle. Keep a dated access log and a short weekly scorecard. If an exception becomes common, either update the SOP or return the decision to the owner.` }
    ],
    faqs: [
      { q: `What should the assistant do when a ${topic.work} item is unclear?`, a: 'Pause the item, record the missing context, and use the agreed escalation route. Guessing creates hidden rework.' },
      { q: 'How much should the owner review at the start?', a: 'Review every item in the first few days, then move to sampling only after the error pattern is understood and stable.' },
      { q: 'What belongs in the SOP?', a: 'Include the trigger, tools, exact steps, examples, red lines, definition of done, and escalation route.' }
    ],
    citations: sources,
    internalLinks: [
      { href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist' },
      { href: '/blog/secure-onboarding-filipino-virtual-assistant', label: 'Secure assistant onboarding' },
      { href: '/services', label: 'Filipino assistant services' }
    ],
    cta: { href: '/contact', label: 'Plan the role and handoff' }
  };
}

export const dailyBlogBatch20260810: BlogPost[] = topics.map(makePost);
