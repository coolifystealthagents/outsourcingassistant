import type { BlogPost } from './data';

type BatchTopic = {
  slug: string;
  title: string;
  focus: string;
  outcome: string;
  tasks: string;
  risk: string;
};

const topics: BatchTopic[] = [
  { slug: 'filipino-virtual-assistant-inbox-triage', title: 'How to hand off inbox triage to a Filipino virtual assistant', focus: 'inbox triage', outcome: 'a calm, reviewable inbox', tasks: 'label messages, draft routine replies, and maintain a follow-up queue', risk: 'private threads and messages that create commitments' },
  { slug: 'filipino-virtual-assistant-calendar-management', title: 'A practical calendar-management SOP for Filipino assistants', focus: 'calendar management', outcome: 'fewer scheduling conflicts', tasks: 'coordinate availability, prepare agendas, and confirm routine meetings', risk: 'external promises and changes to priority meetings' },
  { slug: 'filipino-customer-support-assistant-sop', title: 'Build a customer-support SOP for a Filipino assistant', focus: 'customer support', outcome: 'consistent first responses', tasks: 'classify tickets, draft approved answers, and flag exceptions', risk: 'refunds, complaints, and sensitive customer data' },
  { slug: 'filipino-virtual-assistant-lead-follow-up', title: 'A safe lead follow-up workflow for Filipino virtual assistants', focus: 'lead follow-up', outcome: 'fewer warm leads left waiting', tasks: 'update CRM records, send approved follow-ups, and schedule calls', risk: 'pricing promises and qualification decisions' },
  { slug: 'filipino-virtual-assistant-crm-cleanup', title: 'How to delegate CRM cleanup without damaging reports', focus: 'CRM cleanup', outcome: 'reliable pipeline data', tasks: 'merge obvious duplicates, normalize fields, and log missing information', risk: 'deleting history or changing forecast-critical fields' },
  { slug: 'filipino-virtual-assistant-research-briefs', title: 'A repeatable research-brief workflow for Filipino assistants', focus: 'research briefs', outcome: 'decision-ready source notes', tasks: 'find authoritative sources, summarize evidence, and record open questions', risk: 'unverified claims presented as facts' },
  { slug: 'filipino-virtual-assistant-content-calendar', title: 'Use a Filipino assistant to maintain a content calendar', focus: 'content calendar management', outcome: 'a dependable publishing rhythm', tasks: 'track briefs, deadlines, approvals, and internal links', risk: 'publishing unapproved claims or duplicate topics' },
  { slug: 'filipino-virtual-assistant-invoice-prep', title: 'Delegate invoice preparation while keeping payment control', focus: 'invoice preparation', outcome: 'clean payment-ready records', tasks: 'match invoices to approved work, flag differences, and prepare a review packet', risk: 'bank-detail changes and payment authorization' },
  { slug: 'filipino-virtual-assistant-vendor-follow-up', title: 'A vendor follow-up playbook for Filipino operations assistants', focus: 'vendor follow-up', outcome: 'fewer open vendor requests', tasks: 'send status checks, update records, and escalate missed commitments', risk: 'contract changes and unauthorized commitments' },
  { slug: 'filipino-virtual-assistant-meeting-notes', title: 'Turn meeting notes into useful action tracking', focus: 'meeting notes', outcome: 'clear ownership after meetings', tasks: 'capture decisions, assign actions, and send approved summaries', risk: 'misstating decisions or sharing confidential discussion' },
  { slug: 'filipino-virtual-assistant-file-organization', title: 'A file-organization system a Filipino assistant can run', focus: 'file organization', outcome: 'faster retrieval and safer sharing', tasks: 'apply naming rules, archive stale files, and maintain an index', risk: 'moving records without an audit trail' },
  { slug: 'filipino-virtual-assistant-ecommerce-order-support', title: 'Delegate ecommerce order support with clear approval lines', focus: 'ecommerce order support', outcome: 'faster routine order answers', tasks: 'check order status, draft updates, and route exceptions', risk: 'refunds, chargebacks, and address changes' },
  { slug: 'filipino-virtual-assistant-real-estate-admin', title: 'A real-estate admin handoff plan for Filipino assistants', focus: 'real-estate administration', outcome: 'more reliable listing administration', tasks: 'organize documents, track deadlines, and prepare status updates', risk: 'legal advice and client promises' },
  { slug: 'filipino-virtual-assistant-coach-admin', title: 'Admin support routines for coaches and agencies', focus: 'coach and agency administration', outcome: 'more time for client work', tasks: 'manage scheduling, prepare files, and keep delivery checklists current', risk: 'client advice and scope changes' },
  { slug: 'filipino-virtual-assistant-call-qualification', title: 'Set up a call-qualification workflow for Filipino assistants', focus: 'call qualification', outcome: 'better prepared sales calls', tasks: 'ask approved questions, record answers, and route qualified calls', risk: 'making claims about fit, pricing, or outcomes' },
  { slug: 'filipino-virtual-assistant-weekly-operations-report', title: 'Design a weekly operations report your assistant can maintain', focus: 'weekly operations reporting', outcome: 'visible work and blockers', tasks: 'collect status data, compare targets, and write concise exceptions', risk: 'invented numbers or unreviewed interpretations' },
  { slug: 'filipino-virtual-assistant-sop-documentation', title: 'How to document SOPs with a Filipino virtual assistant', focus: 'SOP documentation', outcome: 'repeatable work that survives handoffs', tasks: 'record triggers, steps, examples, and exception paths', risk: 'hiding unclear ownership behind a long document' },
  { slug: 'filipino-virtual-assistant-quality-scorecard', title: 'Create a fair quality scorecard for Filipino assistants', focus: 'quality scorecards', outcome: 'specific coaching conversations', tasks: 'sample work, score agreed criteria, and log coaching actions', risk: 'subjective scoring or changing standards midweek' },
  { slug: 'filipino-virtual-assistant-time-zone-handoff', title: 'Make a Philippines time-zone handoff work smoothly', focus: 'time-zone handoffs', outcome: 'continuity across working hours', tasks: 'write end-of-shift notes, mark urgency, and route blockers', risk: 'assuming someone is available for urgent decisions' },
  { slug: 'filipino-virtual-assistant-offboarding-checklist', title: 'A clean offboarding checklist for a Filipino virtual assistant', focus: 'offboarding', outcome: 'closed access and preserved work', tasks: 'revoke accounts, transfer files, review open work, and archive evidence', risk: 'leaving shared credentials or unresolved customer tasks' },
  { slug: 'filipino-virtual-assistant-project-coordination', title: 'Delegate project coordination with a clear Filipino assistant workflow', focus: 'project coordination', outcome: 'visible deadlines and owners', tasks: 'maintain the task board, chase updates, and prepare exception notes', risk: 'changing scope or promising delivery dates' },
  { slug: 'filipino-virtual-assistant-social-media-scheduling', title: 'A controlled social-media scheduling workflow for assistants', focus: 'social-media scheduling', outcome: 'consistent approved publishing', tasks: 'load approved copy, check links, and report comments needing review', risk: 'publishing unapproved claims or responding to sensitive issues' },
  { slug: 'filipino-virtual-assistant-data-entry-quality', title: 'Improve data-entry quality with a Filipino assistant scorecard', focus: 'data-entry quality', outcome: 'clean records others can trust', tasks: 'enter source data, verify required fields, and flag conflicting records', risk: 'silently guessing at missing information' },
  { slug: 'filipino-virtual-assistant-client-onboarding', title: 'A client-onboarding checklist a Filipino assistant can maintain', focus: 'client onboarding', outcome: 'a consistent first-week experience', tasks: 'collect approved details, schedule setup steps, and track outstanding items', risk: 'handling sensitive data or making service promises' }
];

function makePost(topic: BatchTopic): BlogPost {
  const internal = [`/blog/${topic.slug}`, '/resources/assistant-sop-handoff-checklist'];
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: `A practical Outsourcing Assistant guide to delegating ${topic.focus} with Filipino talent, clear SOPs, limited access, and owner review.`,
    minutes: 8,
    takeaway: `Start with a narrow ${topic.focus} workflow, define the ${topic.risk}, and measure whether the handoff produces ${topic.outcome}.`,
    sections: [
      { heading: 'Define the result first', body: `Write the outcome before assigning ${topic.focus}. A useful brief names what finished work looks like, when it is due, and where the owner reviews it. The goal is ${topic.outcome}, not activity for its own sake.` },
      { heading: 'List the recurring tasks', body: `Break the workflow into small steps: ${topic.tasks}. Give each step an owner, a source of truth, and an example of acceptable work. This makes training observable and gives the assistant a clear starting lane.` },
      { heading: 'Set access and approval rules', body: `Use a separate account where possible and begin with the smallest permission that supports the task. The assistant should pause and escalate ${topic.risk}. Keep irreversible actions with the owner until clean samples show that the control works.` },
      { heading: 'Build the daily handoff', body: `Use one queue for completed work, drafts waiting for review, blocked items, and unusual requests. A short end-of-shift note is especially useful when the assistant works in Philippine Time and the owner reviews work later.` },
      { heading: 'Review quality with examples', body: `Sample the first several work items every day. Score accuracy, completeness, tone, timeliness, and escalation judgment. Correct the SOP when the same question appears twice, rather than relying on memory or informal messages.` },
      { heading: 'Scale only after the lane is stable', body: `Once the assistant consistently produces ${topic.outcome}, add adjacent tasks one permission at a time. Keep a dated access log and a weekly scorecard so growth remains deliberate and reversible.` }
    ],
    faqs: [
      { q: `What should a Filipino assistant do when a ${topic.focus} task is unclear?`, a: 'Pause the item, record the missing context, and ask through the agreed escalation channel. Guessing creates hidden rework.' },
      { q: 'How quickly should the owner review the first work?', a: 'Daily review is a practical starting point for the first week. Move to a weekly sample only after the error pattern is understood and stable.' },
      { q: 'What belongs in the SOP?', a: 'Include the trigger, exact steps, tools, examples, red lines, escalation route, and definition of done.' }
    ]
  };
}

export const dailyBlogBatch: BlogPost[] = topics.map(makePost);
