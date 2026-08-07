import type { BlogPost } from './data';

const published = '2026-08-07';
const image = { url: '/assistant-collaboration.jpg', alt: 'A team reviewing an organized outsourcing workflow together' };
const sources = [
  { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', note: 'Access and review control context.' },
  { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm', note: 'Administrative task context.' },
];

const topics = [
  ['daily inbox triage', 'Daily Inbox Triage for a Filipino Assistant', 'inbox triage', 'label messages, draft routine replies, and escalate exceptions'],
  ['calendar handoff', 'A Calendar Handoff Checklist for Remote Assistants', 'calendar management', 'protect focus blocks, draft invites, and flag conflicts'],
  ['customer support queue', 'How to Set Up a Customer Support Queue in the Philippines', 'customer support', 'classify tickets, draft answers, and route sensitive cases'],
  ['lead follow-up', 'A Lead Follow-Up Routine That Keeps Every Prospect Visible', 'lead follow-up', 'update the CRM, prepare first replies, and schedule approved next steps'],
  ['vendor follow-up', 'Vendor Follow-Up Controls for a Growing Operations Team', 'vendor follow-up', 'track requests, verify changes, and escalate commitments'],
  ['meeting notes', 'A Reliable Meeting Notes Workflow for Executive Assistants', 'meeting administration', 'capture decisions, assign owners, and track due dates'],
  ['CRM cleanup', 'A Safe CRM Cleanup Plan for an Outsourced Assistant', 'CRM administration', 'deduplicate records, document changes, and protect reporting fields'],
  ['travel planning', 'Travel Planning Tasks to Delegate Without Losing Control', 'travel coordination', 'compare options, prepare itineraries, and hold final approvals'],
  ['SOP handoff', 'How to Hand Off a Recurring SOP to Filipino Talent', 'SOP handoff', 'turn examples into steps, checks, and an exception route'],
  ['weekly scorecard', 'The Weekly Scorecard for a Remote Operations Assistant', 'operations', 'measure volume, accuracy, timeliness, and unresolved blockers'],
  ['file organization', 'A File Organization Routine for Distributed Teams', 'file organization', 'apply naming rules, archive safely, and report missing records'],
  ['research briefing', 'How to Request a Useful Research Briefing', 'research briefing', 'define the question, require citations, and separate facts from inference'],
  ['invoice preparation', 'Invoice Preparation Controls for Bookkeeping Support', 'bookkeeping support', 'match records, prepare drafts, and keep payment approval separate'],
  ['content calendar', 'A Content Calendar Handoff for Daily Article Production', 'content operations', 'manage briefs, sources, links, images, and publication checks'],
  ['quality review', 'A Practical Quality Review for Outsourced Assistant Work', 'quality review', 'sample work against a clear rubric and log corrective actions'],
  ['access review', 'Monthly Access Reviews for Philippines-Based Assistants', 'access management', 'list permissions, confirm business need, and remove stale access'],
  ['handoff notes', 'The End-of-Shift Handoff Note That Prevents Dropped Work', 'handoff notes', 'record completed work, blockers, decisions, and next owners'],
  ['escalation rules', 'Write Escalation Rules Before You Delegate Sensitive Work', 'escalation rules', 'name hard stops, approvers, evidence, and response windows'],
  ['remote schedule', 'Designing a Remote Assistant Schedule Across Time Zones', 'remote scheduling', 'align work windows, review windows, and urgent-case coverage'],
  ['first-week plan', 'A First-Week Plan for a New Filipino Virtual Assistant', 'onboarding', 'start with examples, controlled access, daily review, and a small scorecard'],
] as const;

const paragraph = (topic: string, action: string) => `Start the ${topic} lane with one named owner, a written finish line, and examples of acceptable work. The assistant can ${action}, while the owner keeps approval for money movement, legal commitments, account changes, and sensitive customer decisions. A narrow first batch makes quality visible before the role expands.`;

export const dailyBlogPosts: BlogPost[] = topics.map(([slug, title, topic, action], index) => ({
  slug: `2026-08-07-${slug.replaceAll(' ', '-')}`,
  title,
  excerpt: `A practical ${topic} routine for teams working with Filipino talent, with clear inputs, review rules, and an escalation path.`,
  minutes: 7 + (index % 4),
  takeaway: `Delegate the repeatable ${topic} steps; keep exceptions and final approvals with a named owner.`,
  published,
  image,
  sections: [
    { heading: 'Define the lane before access', body: paragraph(topic, action) },
    { heading: 'Write the daily checklist', body: `The checklist should name the source record, the expected output, the quality check, and the place to leave a handoff note. For ${topic}, use a small queue and require the assistant to mark uncertain items instead of guessing.` },
    { heading: 'Keep exceptions with the owner', body: `Create a hard stop for requests outside the agreed ${topic} scope. The assistant should preserve the evidence, explain what is missing, and route it to the approved reviewer. This is faster and safer than silently making a high-impact decision.` },
    { heading: 'Review and improve the routine', body: `Sample completed work every day during the first week, then move to a weekly scorecard once the pattern is stable. Track accuracy, turnaround time, blocked items, and repeated questions so the SOP improves with the work.` },
  ],
  faqs: [
    { q: `What should the assistant decide in ${topic}?`, a: 'Only decisions explicitly listed in the approved SOP; everything else should be drafted or escalated.' },
    { q: 'How should quality be checked?', a: 'Review a small sample against the finish line and keep a dated correction log.' },
  ],
  citations: sources,
  internalLinks: [{ href: '/resources/assistant-sop-handoff-checklist', label: 'Use the SOP handoff checklist' }, { href: '/services', label: 'Review assistant services' }],
  cta: { href: '/contact', label: 'Plan this assistant workflow' },
}));

export const dailyResearchPosts = Array.from({ length: 10 }, (_, index) => {
  const subjects = ['remote assistant onboarding', 'outsourced operations scorecards', 'delegated inbox controls', 'Filipino staffing schedules', 'research brief quality', 'CRM data hygiene', 'content production routines', 'vendor verification', 'assistant access reviews', 'handoff documentation'];
  const subject = subjects[index];
  return {
    slug: `2026-08-07-${subject.replaceAll(' ', '-')}`,
    title: `Research note: ${subject[0].toUpperCase()}${subject.slice(1)}`,
    excerpt: `A sourced research note on ${subject}, focused on repeatable routines and accountable delegation.`,
    published,
    image,
    body: [
      `This research note examines ${subject} for founders and operators building a Philippines-based support workflow. The practical question is not whether to delegate, but which repeatable steps can be documented and reviewed.`,
      'The evidence points to a simple operating pattern: define the task, limit access to what the task requires, record the output, and give an owner a visible exception path. The source links below provide the baseline guidance; local policies and professional advice may still be required for specific cases.',
      `For implementation, begin with a small ${subject} sample. Record the inputs, expected finish line, review result, and unresolved questions. Expand the lane only after the same quality standard is met across several samples.`,
    ],
    citations: sources,
    internalLinks: [{ href: '/services/research-briefing', label: 'Research briefing service' }, { href: '/contact', label: 'Discuss a research workflow' }],
    cta: { href: '/contact', label: 'Discuss this research workflow' },
  };
});
