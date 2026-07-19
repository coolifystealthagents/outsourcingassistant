export const site = {
  domain: 'OutsourcingAssistant.com',
  url: 'https://outsourcingassistant.com',
  slug: 'outsourcingassistant',
  brand: 'Outsourcing Assistant',
  primary: 'outsourcing assistant',
  audience: 'founders and operators outsourcing admin, customer support, sales support, and back-office work',
  angle: 'how to safely outsource assistant work with SOPs, handoffs, and owner review',
  color: '#ea580c',
  accent: '#155e75'
} as const;

export const roles = [
  { name: 'Executive assistant', tasks: 'calendar clean-up, inbox triage, meeting notes, travel research', risk: 'private email and calendar access' },
  { name: 'Customer support assistant', tasks: 'ticket drafts, order updates, refund prep, FAQ replies', risk: 'customer data and tone control' },
  { name: 'Lead follow-up assistant', tasks: 'CRM updates, first replies, appointment setting, no-show follow-up', risk: 'sales promises must stay with the owner' },
  { name: 'Operations assistant', tasks: 'reports, vendor follow-up, checklist work, file cleanup', risk: 'unclear owners create missed steps' },
  { name: 'Bookkeeping support assistant', tasks: 'receipt sorting, invoice prep, report formatting', risk: 'money movement stays with approved staff' },
  { name: 'CRM assistant', tasks: 'data cleanup, pipeline notes, task reminders, list checks', risk: 'bad fields can break reporting' }
] as const;

export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;

export const stats = [
  { label: 'Typical overseas VA range', value: '$6-$18/hr', note: 'Public VA market rates vary by role, country, hours, and management support. Treat this as planning math, not a quote.' },
  { label: 'Common ramp time', value: '7-21 days', note: 'Small roles can start faster when examples, tool access, and review rules are ready before day one.' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'A focused recurring task list is easier to train and measure than a vague “do everything” assistant role.' },
];

export const sourceNotes = [
  { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm', note: 'Baseline context for administrative support work and task categories.' },
  { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', note: 'Useful source for simple access, identity, and review controls.' },
  { name: 'SBA hiring guidance', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'General small-business hiring and management context.' }
] as const;

export const checklistSteps = [
  'Write the outcome in one sentence.',
  'List the exact tools the assistant may use.',
  'Record one example or screen walk-through.',
  'Set red lines: refunds, legal advice, payments, medical data, or customer promises.',
  'Start with three days of daily review, then weekly scorecards.',
  'Keep owner approval for anything risky until trust is proven.'
] as const;

export type BlogSection = { heading: string; body: string; bullets?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  takeaway: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'virtual-assistant-costs',
    title: 'How much does a virtual assistant cost?',
    excerpt: 'A plain guide to hourly, monthly, local, and overseas assistant pricing.',
    minutes: 7,
    takeaway: 'Plan the role before you compare prices. A cheap assistant with no checklist can cost more than a higher-rate assistant with clear work and review rules.',
    sections: [
      { heading: 'The short answer', body: 'Many overseas virtual assistants are priced around $6 to $18 per hour. Local assistants often cost more. Managed services may add a fee because they help with screening, backup, and quality checks. The best number depends on the work, schedule, tools, and risk.' },
      { heading: 'What changes the price', body: 'Simple admin work usually costs less than customer support, sales support, bookkeeping prep, or bilingual coverage. A role that needs night coverage, strong writing, or special software will usually cost more.', bullets: ['Skill level and English writing needs', 'Time zone and weekend coverage', 'Whether a manager reviews the work', 'Tool training and security limits', 'Full-time hours versus a small part-time block'] },
      { heading: 'A safer way to budget', body: 'Start with the number of hours you can truly review. If you only have time to review five tasks a day, do not buy forty hours of open-ended help. Start smaller, prove the handoff, then add more hours.' },
      { heading: 'Questions to ask before you accept a quote', body: 'Ask what is included in the rate. Some quotes include recruiting and backup help. Others only give you the worker. Ask who trains the assistant, who checks quality, how replacement works, and what happens if the task list changes.' }
    ],
    faqs: [
      { q: 'Is a virtual assistant cheaper than an employee?', a: 'Often yes for remote admin support, but price is not the only issue. You still need training, review, and data controls.' },
      { q: 'Should I pay hourly or monthly?', a: 'Hourly is good for testing. Monthly is better when the task list and schedule are stable.' },
      { q: 'What should I not outsource first?', a: 'Do not start with refunds, payments, legal advice, medical decisions, or anything that needs owner judgment.' }
    ]
  },
  {
    slug: 'tasks-to-delegate-first',
    title: 'What tasks should you delegate first?',
    excerpt: 'Start with repeatable admin, follow-up, inbox, CRM, and scheduling work.',
    minutes: 6,
    takeaway: 'The best first tasks are boring, repeatable, and easy to check. Save judgment-heavy work for later.',
    sections: [
      { heading: 'Start with repeat work', body: 'Good first tasks happen every day or every week. The assistant can learn them from examples. You can spot mistakes quickly. That makes training faster and less risky.' },
      { heading: 'Good first assistant tasks', body: 'These tasks are common because they have clear steps and clear proof of completion.', bullets: ['Inbox labels and simple reply drafts', 'Calendar cleanup and appointment reminders', 'CRM updates after calls', 'Lead follow-up using approved scripts', 'Customer support drafts for common questions', 'Research lists with source links'] },
      { heading: 'Tasks to hold back', body: 'Keep sensitive decisions with the owner until the assistant is trained and tested. That includes final refunds, payroll, legal wording, medical details, account permissions, and promises to customers.' },
      { heading: 'Use a one-week pilot', body: 'Pick five to ten tasks. Give examples. Review daily for three days. Then ask what confused the assistant. Fix the SOP before adding more work.' }
    ],
    faqs: [
      { q: 'How many tasks should I delegate first?', a: 'Five to ten recurring tasks is enough for a first pilot.' },
      { q: 'Can a VA handle customer emails?', a: 'Yes, but start with drafts and approved answer examples before letting them send directly.' },
      { q: 'What if I do not have SOPs?', a: 'Record a short screen walk-through and turn it into a checklist after the first review.' }
    ]
  },
  {
    slug: 'virtual-assistant-vs-employee',
    title: 'Virtual assistant vs employee: which is better?',
    excerpt: 'When to hire in-house and when a managed assistant is the safer first step.',
    minutes: 8,
    takeaway: 'Use a virtual assistant for clear remote support. Hire an employee when the job needs local presence, deeper judgment, or long-term internal ownership.',
    sections: [
      { heading: 'When a virtual assistant fits', body: 'A VA is useful when the work can be done online, taught with examples, and checked with a weekly scorecard. Admin, support drafts, scheduling, CRM updates, and research often fit well.' },
      { heading: 'When an employee fits better', body: 'An employee may be better for in-person work, confidential decisions, leadership, deep customer relationships, or work that changes every hour. If the person must own outcomes without close review, do not force it into a low-cost VA role.' },
      { heading: 'Managed service versus direct freelancer', body: 'A freelancer can be flexible and affordable. A managed service can help with screening, backup, and replacement. The right choice depends on how much time you have to train and manage.' },
      { heading: 'Simple decision test', body: 'If the task can be explained in a checklist and reviewed in five minutes, test a VA. If the task needs judgment, money approval, or hard customer calls, keep it with an employee or manager.' }
    ],
    faqs: [
      { q: 'Can a VA replace an employee?', a: 'Sometimes for a narrow support role. For broad ownership, a VA usually supports the team rather than replacing it.' },
      { q: 'Is direct hiring risky?', a: 'It can be if you lack screening, training, backup, and security rules.' },
      { q: 'What is the safest first step?', a: 'Run a small pilot with low-risk tasks and a weekly review scorecard.' }
    ]
  },
  {
    slug: 'assistant-onboarding-checklist',
    title: 'Assistant onboarding checklist',
    excerpt: 'A simple first-week checklist for logins, SOPs, calls, QA, and scorecards.',
    minutes: 9,
    takeaway: 'Good onboarding protects both sides. The assistant needs clear examples, safe access, and fast feedback.',
    sections: [
      { heading: 'Before day one', body: 'Prepare a task list, tool list, sample work, and access rules before the assistant starts. Do not wait until the first call to decide what they will do.' },
      { heading: 'First-week plan', body: 'Keep the first week small. Teach the task, watch the first attempt, review the result, then update the checklist.', bullets: checklistSteps as unknown as string[] },
      { heading: 'Security basics', body: 'Use separate accounts where possible. Share only the access needed for the task. Turn on two-factor login. Keep refunds, payments, and account-owner settings away from the assistant unless there is a formal approval process.' },
      { heading: 'Weekly scorecard', body: 'Track speed, accuracy, communication, questions asked, and missed steps. A simple 1 to 5 score is enough. The goal is to fix the handoff, not blame the assistant.' }
    ],
    faqs: [
      { q: 'How long should onboarding take?', a: 'Many simple assistant roles can start in 7 to 21 days if examples and access are ready.' },
      { q: 'Should I give full tool access?', a: 'No. Start with the least access needed and expand only after review.' },
      { q: 'How often should I review work?', a: 'Daily for the first few days, then weekly once the task is stable.' }
    ]
  }
];

export const navPages = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources/assistant-sop-handoff-checklist', label: 'SOP checklist' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
] as const;
