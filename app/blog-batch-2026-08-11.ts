import type { BlogPost } from './data';

type Topic = {
  slug: string;
  title: string;
  focus: string;
  outcome: string;
  tasks: string;
  boundary: string;
  published: '2026-08-11';
};

const topics: Topic[] = [
  { slug: 'filipino-virtual-assistant-email-management', title: 'A practical email-management handoff for Filipino virtual assistants', focus: 'email management', outcome: 'a prioritized inbox and dependable follow-up list', tasks: 'sort messages, draft approved replies, and flag decisions', boundary: 'confidential threads and commitments', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-travel-research', title: 'Delegate travel research with a clear Filipino assistant brief', focus: 'travel research', outcome: 'shortlisted options that are easy to compare', tasks: 'gather approved options, record constraints, and prepare a comparison', boundary: 'booking, payment, and changes to traveler preferences', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-proposal-preparation', title: 'A safe proposal-preparation workflow for Filipino assistants', focus: 'proposal preparation', outcome: 'complete drafts ready for owner review', tasks: 'assemble approved details, check required fields, and list open questions', boundary: 'scope, legal language, and commercial promises', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-client-portal-updates', title: 'Keep client portals current with a Filipino assistant checklist', focus: 'client portal updates', outcome: 'accurate status information for customers', tasks: 'enter approved updates, check attachments, and report missing inputs', boundary: 'changing deliverables or exposing another client’s information', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-appointment-intake', title: 'An appointment-intake workflow a Filipino assistant can run', focus: 'appointment intake', outcome: 'complete requests ready for scheduling', tasks: 'capture approved fields, check availability rules, and route exceptions', boundary: 'clinical, legal, or financial advice', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-digital-file-naming', title: 'Create a digital file-naming standard with a Filipino assistant', focus: 'digital file naming', outcome: 'records that teammates can find without guesswork', tasks: 'apply naming rules, identify duplicates, and maintain an index', boundary: 'deleting records or changing retention decisions', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-review-request-tracking', title: 'Track review requests without losing the next action', focus: 'review-request tracking', outcome: 'visible approvals and fewer stalled drafts', tasks: 'log requests, chase agreed deadlines, and summarize blockers', boundary: 'approving work or rewriting an owner’s decision', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-customer-survey-admin', title: 'Customer-survey administration for Filipino virtual assistants', focus: 'customer-survey administration', outcome: 'clean responses and useful follow-up queues', tasks: 'send approved invitations, tag responses, and route urgent themes', boundary: 'altering responses or making research claims from a small sample', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-sales-call-prep', title: 'Prepare better sales calls with a Filipino assistant workflow', focus: 'sales-call preparation', outcome: 'briefs that help the owner start informed', tasks: 'confirm context, gather approved records, and list unanswered questions', boundary: 'qualifying beyond approved criteria or quoting terms', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-calendar-agenda-prep', title: 'A calendar-agenda preparation SOP for Filipino assistants', focus: 'agenda preparation', outcome: 'meetings with clear purpose and materials', tasks: 'collect updates, format agendas, and confirm missing contributions', boundary: 'changing priority meetings or making promises for attendees', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-internal-wiki-updates', title: 'Maintain an internal wiki with a Filipino assistant', focus: 'internal wiki updates', outcome: 'current reference pages for recurring work', tasks: 'compare approved changes, update links, and mark pages for review', boundary: 'inventing policy or publishing unapproved process changes', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-payment-record-prep', title: 'Prepare payment records while keeping approval with the owner', focus: 'payment-record preparation', outcome: 'organized records ready for authorized review', tasks: 'match source documents, flag discrepancies, and assemble evidence', boundary: 'moving money, changing bank details, or approving a payment', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-service-request-routing', title: 'Route service requests with a Filipino assistant playbook', focus: 'service-request routing', outcome: 'requests reaching the right owner quickly', tasks: 'classify requests, check required details, and assign the next queue', boundary: 'promising availability or deciding an exception alone', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-document-intake', title: 'A document-intake checklist for Filipino virtual assistants', focus: 'document intake', outcome: 'complete, traceable packets for review', tasks: 'receive approved files, check naming and completeness, and record gaps', boundary: 'certifying authenticity or interpreting specialist documents', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-newsletter-production-support', title: 'Newsletter production support with clear assistant boundaries', focus: 'newsletter production support', outcome: 'approved editions assembled on time', tasks: 'format approved copy, check links, and prepare a review preview', boundary: 'changing claims or sending without final approval', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-web-research-monitoring', title: 'Set up web-research monitoring for a Filipino assistant', focus: 'web-research monitoring', outcome: 'dated source notes that surface meaningful changes', tasks: 'check named sources, record changes, and separate facts from questions', boundary: 'presenting a source summary as legal, financial, or strategic advice', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-event-follow-up', title: 'An event follow-up workflow for Filipino virtual assistants', focus: 'event follow-up', outcome: 'attendee records and next steps that stay current', tasks: 'update attendance, send approved notes, and route requests', boundary: 'offering concessions or making commitments to attendees', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-subcontractor-records', title: 'Organize subcontractor records with a Filipino assistant', focus: 'subcontractor record management', outcome: 'current records and visible missing documents', tasks: 'index approved files, track expirations, and prepare reminders', boundary: 'deciding compliance or changing contract terms', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-recruiting-pipeline-admin', title: 'Recruiting-pipeline administration for Filipino assistants', focus: 'recruiting pipeline administration', outcome: 'candidates moving through consistent next steps', tasks: 'schedule interviews, update stages, and record approved feedback', boundary: 'making hiring decisions or sharing confidential assessments', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-customer-record-maintenance', title: 'Maintain customer records with a Filipino assistant checklist', focus: 'customer-record maintenance', outcome: 'accurate records without hidden changes', tasks: 'update approved fields, verify required details, and log conflicts', boundary: 'deleting history or guessing at identity and consent', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-recurring-report-assembly', title: 'A recurring-report assembly workflow for Filipino assistants', focus: 'recurring-report assembly', outcome: 'consistent reports ready for interpretation', tasks: 'collect source figures, check period labels, and document missing data', boundary: 'changing figures or presenting an interpretation as a fact', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-operations-calendar', title: 'Build an operations calendar a Filipino assistant can maintain', focus: 'operations calendar maintenance', outcome: 'deadlines and recurring obligations visible in one place', tasks: 'enter approved dates, confirm owners, and flag conflicts', boundary: 'moving deadlines or accepting a new obligation', published: '2026-08-11' },
  { slug: 'filipino-virtual-assistant-knowledge-transfer', title: 'Plan knowledge transfer with a Filipino virtual assistant', focus: 'knowledge transfer', outcome: 'usable handoff notes instead of scattered messages', tasks: 'capture examples, organize references, and list unresolved questions', boundary: 'deciding policy or replacing owner judgment', published: '2026-08-11' }
];

function makePost(topic: Topic): BlogPost {
  return {
    slug: topic.slug,
    title: topic.title,
    published: topic.published,
    excerpt: `A practical Outsourcing Assistant guide to delegating ${topic.focus} to Filipino talent with a clear scope, limited access, and owner review.`,
    minutes: 8,
    takeaway: `Start with a narrow ${topic.focus} lane, define ${topic.outcome}, and keep ${topic.boundary} with the owner or named manager.`,
    sections: [
      { heading: 'Define the finished result', body: `Write down what ${topic.outcome} means before assigning ${topic.focus}. Name the trigger, source of truth, due time, and reviewer so the first sample can be evaluated without guesswork.` },
      { heading: 'Turn the work into visible steps', body: `Break the lane into small actions: ${topic.tasks}. Give each action an input, expected output, and example. A short checklist is easier to teach and improve than a broad instruction to “handle” the work.` },
      { heading: 'Set an approval boundary', body: `Use the smallest permission that supports the task. The assistant should pause when the work touches ${topic.boundary}. Keep irreversible actions with the owner until reviewed samples show that the control works.` },
      { heading: 'Make the handoff easy to review', body: 'Use a queue with ready, in progress, waiting for review, and blocked states. Each handoff should list completed items, open questions, and the next owner. This keeps work moving across Philippine and owner working hours.' },
      { heading: 'Review patterns, not just mistakes', body: `Sample early work for accuracy, completeness, timeliness, tone, and escalation judgment. If the same question appears twice, add an example to the checklist. Do not rely on private memory for a repeatable task.` },
      { heading: 'Expand only after the lane is stable', body: `Once the assistant consistently produces ${topic.outcome}, add one adjacent task or permission at a time. Keep a dated access log and a simple scorecard so the handoff remains deliberate and reversible.` }
    ],
    faqs: [
      { q: `What should an assistant do when ${topic.focus} is unclear?`, a: 'Pause the item, record the missing context, and use the agreed escalation route. Guessing creates hidden rework.' },
      { q: 'How much review is needed at the start?', a: 'Review the first several items closely, then move to sampling only after the error pattern is understood and stable.' },
      { q: 'What belongs in the checklist?', a: 'Include the trigger, tools, exact steps, examples, red lines, definition of done, and escalation route.' }
    ],
    internalLinks: [{ href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist' }, { href: '/services', label: 'Filipino assistant services' }]
  };
}

export const dailyBlogBatch20260811: BlogPost[] = topics.map(makePost);
