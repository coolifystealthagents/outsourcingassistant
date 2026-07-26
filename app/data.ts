export const site = {
  domain: 'OutsourcingAssistant.com',
  url: 'https://outsourcingassistant.com',
  slug: 'outsourcingassistant',
  brand: 'Outsourcing Assistant',
  primary: 'outsourcing assistant',
  audience: 'founders and operators hiring Filipino talent for admin, customer support, sales support, and back-office work',
  angle: 'how to hand off assistant work to Filipino talent with clear SOPs, access limits, and owner review',
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
  { label: 'Role clarity', value: 'Scope first', note: 'the right plan depends on tasks, schedule, skill, tools, and management needs' },
  { label: 'Common ramp time', value: '7-21 days', note: 'Small roles can start faster when examples, tool access, and review rules are ready before day one.' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'A focused recurring task list is easier to train and measure than a vague "do everything" assistant role.' },
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

export type BlogSection = { heading: string; body: string; paragraphs?: string[]; bullets?: string[] };
export type ArticleSource = { name: string; url: string; note: string };
export type ArticleBanner = { eyebrow: string; title: string; body: string; href: string; label: string };
export type RichArticle = {
  published: string;
  updated: string;
  marker: string;
  stats: { value: string; label: string; detail: string; sourceUrl: string }[];
  table: { caption: string; headers: string[]; rows: string[][] };
  quote: { text: string; person: string; title: string; sourceUrl: string };
  chart: { title: string; description: string; method: string; rows: { label: string; value: number; display: string }[] };
  graphic: { title: string; description: string; steps: { label: string; detail: string }[] };
  internalLinks: { href: string; label: string; note: string }[];
  banners: ArticleBanner[];
  sources: ArticleSource[];
};
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  takeaway: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  rich?: RichArticle;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'secure-onboarding-filipino-virtual-assistant',
    title: 'Secure onboarding for a Filipino virtual assistant',
    excerpt: 'A practical plan for giving a Filipino virtual assistant the access needed to work without handing over every account on day one. It covers task scope, login rules, approval lines, review, and a clean exit plan.',
    minutes: 13,
    takeaway: 'A secure handoff is not a pile of passwords. Give the assistant a narrow work lane, a separate account, clear approval rules, and a short review cycle before you expand access.',
    sections: [
      {
        heading: 'Start before the first login',
        body: 'Secure onboarding starts with the job, not the software.',
        paragraphs: [
          'Write down what the Filipino virtual assistant will do during the first ten business days. Name the inboxes, calendars, folders, customer records, and reports involved, then mark which actions need approval. This stops a common mistake: giving broad access because the task list is still vague.',
          'The location of the assistant does not change the owner\'s duty to control business data. A Philippines-based assistant may work while the owner sleeps, so the handoff must say who can answer an urgent question and what must wait. If nobody is available, the safe default is to save a draft and leave a note for review.'
        ]
      },
      {
        heading: 'Map the work and the data',
        body: 'A task map shows what the assistant needs to see and what should stay hidden.',
        paragraphs: [
          'Take one recurring task, such as inbox triage, and trace it from start to finish. The assistant may need to read new messages, apply labels, draft routine replies, and list items that need the owner. That does not mean the assistant needs access to private legal threads, banking notices, password resets, or every old message in the account.',
          'Use four labels for each step: view, draft, send, and approve. Most new assistant work should begin in the first two labels. The owner or a named manager keeps the last two for refunds, contract language, changes to account ownership, money movement, and promises that could bind the business.'
        ]
      },
      {
        heading: 'Use a simple access ladder',
        body: 'Access should grow after clean work, not before it.',
        paragraphs: [
          'Create a separate user account whenever the tool allows it. Turn on multi-factor authentication, keep recovery methods with the business, and grant only the folder, queue, or calendar the assistant needs. Shared owner passwords make it hard to see who changed a record and hard to remove access later.',
          'Start with read-only or draft access, then review a real sample. Expand one permission at a time after the assistant follows the checklist and asks about exceptions instead of guessing. Record every change in a small access log with the tool, permission, approver, date granted, and date to review.'
        ]
      },
      {
        heading: 'Protect inbox and message work',
        body: 'Email work deserves extra care because a normal-looking message can carry a bad request.',
        paragraphs: [
          'The FBI\'s 2024 Internet Crime Report recorded 193,407 phishing or spoofing complaints. It also recorded 21,442 business email compromise complaints and $2,770,151,146 in reported losses tied to that crime type. These are complaint figures, not a prediction of what will happen to one business, but they show why an assistant needs a written rule for payment changes and urgent requests.',
          'Tell the assistant to verify any request that changes bank details, login methods, account owners, or delivery instructions through a second channel already on file. A reply to the same email thread is not a second check. The assistant should pause the task, capture the request, and contact the named owner through the approved chat, phone number, or ticket queue.'
        ]
      },
      {
        heading: 'Write rules for a Philippines-based schedule',
        body: 'A time-zone handoff needs an answer for the hours when the owner is offline.',
        paragraphs: [
          'Set a clear work window in Philippine Time and write the matching owner-review window beside it. Do not make the assistant guess whether a late-night message is urgent. Define urgency with examples, such as a locked customer account or a same-day calendar conflict, and give one escalation route for those cases.',
          'Keep normal work in a queue that the next person can read. A short end-of-shift note should list completed items, drafts waiting for approval, blocked work, and unusual requests. This gives the owner a useful morning review and gives the assistant a clean place to continue during the next Philippine shift.'
        ]
      },
      {
        heading: 'Run a ten-day launch',
        body: 'The first ten business days should test the handoff before the role gets wider.',
        paragraphs: [
          'On days one and two, show the assistant the task and let the assistant watch a real example. On days three through five, the assistant completes a small batch in draft mode while the manager checks each result. Fix the checklist when the same question appears twice, because the missing detail belongs in the process rather than in somebody\'s memory.',
          'During the second week, sample the work instead of checking every simple item. Keep full review for exceptions, sensitive messages, new contacts, and account changes. At the end of day ten, decide which permission can stay, which can grow, and which should be removed because the task never needed it.'
        ]
      },
      {
        heading: 'Review the lane, not just the person',
        body: 'A good review checks the handoff as well as the assistant\'s output.',
        paragraphs: [
          'Track a few facts that the manager can verify: work completed, items returned for correction, exceptions raised, and approvals requested before action. A mistake may point to weak training, a missing example, or access that is too broad. Fix the source of the problem before blaming speed or effort.',
          'NIST released Cybersecurity Framework 2.0 on February 26, 2024, with a new focus on governance for organizations of every size. That fits a small assistant lane well: the owner names the rules, the assistant follows them, and both sides know how a concern gets reported. The framework does not replace legal advice, but it gives a useful structure for deciding who owns each risk.'
        ]
      },
      {
        heading: 'Plan the exit on day one',
        body: 'A clean offboarding plan is part of onboarding.',
        paragraphs: [
          'Keep a list of every account, shared folder, forwarding rule, API token, device, and group the assistant can use. When the role ends or changes, disable the separate account, revoke active sessions, rotate any secret that had to be shared, and transfer open work to the named manager. Do this promptly rather than waiting for the next monthly review.',
          'Check mailbox rules, recovery contacts, shared links, and calendar delegates after access is removed. Save the final handoff note with unfinished work and the owner for each item. A calm exit is easier when the access log and task queue were kept current from the first week.'
        ]
      }
    ],
    faqs: [
      { q: 'Should a Filipino virtual assistant use the owner password?', a: 'No. Create a separate user or delegated account when the tool supports it. The business should keep recovery methods and owner-level settings.' },
      { q: 'What access should the assistant get first?', a: 'Begin with the smallest view or draft permission that supports one real task. Expand access only after the first work sample passes review.' },
      { q: 'Can the assistant send email on day one?', a: 'Start with drafts for routine replies and a clear exception list. Direct sending can come later for approved message types after the manager has checked the work.' },
      { q: 'How should the team handle time-zone gaps?', a: 'Use one written escalation route and an end-of-shift note. Anything outside the urgent examples should wait in the approval queue.' },
      { q: 'What should happen when the role ends?', a: 'Disable the separate account, revoke sessions, check forwarding and recovery settings, rotate shared secrets, and transfer open tasks to a named owner. Record each action in the access log.' }
    ],
    rich: {
      published: '2026-07-25',
      updated: '2026-07-25',
      marker: 'OA-SECURE-ONBOARDING-2026',
      stats: [
        { value: '193,407', label: 'phishing or spoofing complaints', detail: 'Reported to FBI IC3 in 2024.', sourceUrl: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
        { value: '21,442', label: 'business email compromise complaints', detail: 'Reported to FBI IC3 in 2024.', sourceUrl: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
        { value: '$2.77B', label: 'reported business email compromise losses', detail: 'FBI IC3 total for 2024; rounded here from $2,770,151,146.', sourceUrl: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' }
      ],
      table: {
        caption: 'First-access map for a new Filipino virtual assistant',
        headers: ['Work area', 'Good starting access', 'Owner keeps', 'Proof to review'],
        rows: [
          ['Inbox', 'Labels and reply drafts', 'Sensitive threads, final sends, forwarding rules', 'Draft sample and exception log'],
          ['Calendar', 'View and draft invites', 'Priority moves and private events', 'Conflict list before changes'],
          ['CRM', 'Assigned records and notes', 'Exports, deletions, field rules', 'Changed-record report'],
          ['Cloud files', 'One work folder', 'Billing, legal, payroll, and master folders', 'Shared-link and activity check'],
          ['Support desk', 'Routine draft queue', 'Refunds, credits, and policy exceptions', 'Ticket sample with manager notes']
        ]
      },
      quote: {
        text: 'The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats.',
        person: 'Laurie E. Locascio',
        title: 'Under Secretary of Commerce for Standards and Technology and NIST Director',
        sourceUrl: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework'
      },
      chart: {
        title: 'Two email-linked complaint categories in the 2024 IC3 report',
        description: 'Horizontal bars compare complaint counts for phishing or spoofing and business email compromise.',
        method: 'Units are complaints received by FBI IC3 in 2024. The bars use the larger category as 100%; these are reported crime categories, not a risk forecast for one company.',
        rows: [
          { label: 'Phishing / spoofing', value: 193407, display: '193,407 complaints' },
          { label: 'Business email compromise', value: 21442, display: '21,442 complaints' }
        ]
      },
      graphic: {
        title: 'The four-step access ladder',
        description: 'A separate process graphic showing how a manager can expand access after review.',
        steps: [
          { label: '1. View', detail: 'See only the records needed for one task.' },
          { label: '2. Draft', detail: 'Prepare work without sending or changing ownership.' },
          { label: '3. Act', detail: 'Complete approved routine actions after review.' },
          { label: '4. Review', detail: 'Keep, narrow, or remove access using real work evidence.' }
        ]
      },
      internalLinks: [
        { href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist', note: 'Turn the task into a short training and review sheet.' },
        { href: '/blog/assistant-onboarding-checklist', label: 'Assistant onboarding checklist', note: 'Plan the first week, scorecard, and access checks.' },
        { href: '/services/inbox-triage', label: 'Inbox triage support', note: 'See the owner-control line for message work.' },
        { href: '/contact', label: 'Plan a Philippines staffing request', note: 'Share the role, tools, schedule, and approval needs.' }
      ],
      banners: [
        { eyebrow: 'Build the handoff', title: 'Put the task on one page', body: 'Use the SOP checklist to name the input, finish line, exception rule, and reviewer. It gives the Filipino assistant one clear place to start.', href: '/resources/assistant-sop-handoff-checklist', label: 'Open the SOP checklist' },
        { eyebrow: 'Check the work lane', title: 'Set inbox limits before access', body: 'Decide which messages can be labeled, drafted, sent, or escalated. The inbox service page shows a simple owner-control model.', href: '/services/inbox-triage', label: 'Review inbox triage' },
        { eyebrow: 'Plan the role', title: 'Bring the task list and tool list', body: 'A useful staffing request starts with the work and the approval line. Share those details for a Philippines-focused role review.', href: '/contact', label: 'Start the role request' }
      ],
      sources: [
        { name: 'FBI Internet Crime Complaint Center, 2024 IC3 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Complaint counts and reported loss figures used in the data cards and chart.' },
        { name: 'NIST, Cybersecurity Framework 2.0 release, February 26, 2024', url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework', note: 'Governance context and the exact Laurie E. Locascio quote.' },
        { name: 'NIST SP 800-53 Revision 5, Update 1', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Primary guidance for access control, account management, and security review.' },
        { name: 'CISA Secure Our World: Use Strong Passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'Plain guidance for unique passwords, password managers, and safer account setup.' },
        { name: 'IT and Business Process Association of the Philippines', url: 'https://ibpap.org/', note: 'Philippine IT-BPM industry context; the site reports a 1.9 million talent workforce and $40 billion in revenue.' }
      ]
    }
  },
  {
    slug: 'virtual-assistant-planning',
    title: 'How should you plan a virtual assistant role?',
    excerpt: 'A plain guide to scoping a role for Filipino talent and preparing the handoff.',
    minutes: 7,
    takeaway: 'Plan the role before you compare staffing choices. An assistant without a clear checklist can create more work, even when the task list looks simple.',
    sections: [
      { heading: 'Start with the work', body: 'A useful staffing plan names the tasks, schedule, tools, and decisions that stay with the owner. Filipino talent can support many kinds of desk-based work, but a narrow role is easier to teach and review than a catch-all job description.' },
      { heading: 'What changes the plan', body: 'Simple admin work needs a different handoff from customer support, sales support, or bookkeeping prep. Writing standards, schedule coverage, software, and manager availability all shape the role.', bullets: ['Required skills and writing standards', 'Schedule and weekend coverage', 'Who reviews early work', 'Tool training and access limits', 'A full schedule or a smaller block of recurring work'] },
      { heading: 'Match scope to review time', body: 'Start with the amount of work you can honestly review. If you can check five tasks a day, do not hand over a sprawling queue on day one. Prove the handoff first, then add more.' },
      { heading: 'Questions for a staffing partner', body: 'Ask who screens the Filipino talent, who helps with onboarding, and how quality concerns are handled. You should also know what happens if the task list changes or the first match does not work out.' }
    ],
    faqs: [
      { q: 'Is a virtual assistant the same as an employee?', a: 'No. The working arrangement, responsibilities, and management model can differ. Ask the staffing partner to explain the setup before you proceed.' },
      { q: 'Should the role start small?', a: 'Usually. A short list of recurring tasks gives you time to test the handoff, access rules, and review process.' },
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
      { heading: 'When an employee fits better', body: 'An employee may be better for in-person work, confidential decisions, leadership, deep customer relationships, or work that changes every hour. If the person must own outcomes without close review, do not squeeze the job into a narrow assistant role.' },
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
  { href: '/blog/virtual-assistant-planning', label: 'Staffing details' },
  { href: '/resources/assistant-sop-handoff-checklist', label: 'SOP checklist' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
] as const;

export const staffingOffer = {
  partner: 'a Philippines-focused staffing partner',
  promise: 'Get a managed staffing plan for Filipino talent, built around the work you need removed from your plate.',
  fit: [
    'business owners who want Filipino talent but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Your inquiry starts with one clear role: outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'A Philippines-focused staffing partner can match Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the details and a Philippines-focused staffing partner can review the fit.';
