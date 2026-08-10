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
  chart: { title: string; description: string; method: string; headline?: string; unit?: string; visualId?: string; rows: { label: string; value: number; display: string }[] };
  graphic: { title: string; description: string; headline?: string; footerNote?: string; visualId?: string; steps: { label: string; detail: string }[] };
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
  published?: string;
  image?: { url: string; alt: string };
  citations?: ArticleSource[];
  internalLinks?: { href: string; label: string }[];
  cta?: { href: string; label: string };
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
        { href: '/blog', label: 'Assistant onboarding checklist', note: 'Plan the first week, scorecard, and access checks.' },
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
    slug: 'fraud-report-triage-filipino-customer-support-assistant',
    title: 'Fraud report triage for a Filipino customer support assistant',
    excerpt: 'A Filipino customer support assistant can capture a fraud report, protect the record, and send it to the right manager without trying to solve the case. This guide gives the assistant a narrow intake lane and keeps account, refund, and legal decisions with approved staff.',
    minutes: 14,
    takeaway: 'The assistant should collect the customer\'s own account of what happened, save only the needed facts, and move the case to a named manager. The assistant should not promise recovery, move money, change account ownership, or investigate a person.',
    sections: [
      {
        heading: 'Give the assistant one clear job',
        body: 'Fraud intake is safer when the role is small and easy to explain.',
        paragraphs: [
          'A Filipino customer support assistant can receive a report, record the customer\'s words, protect the ticket, and alert a named manager. That is useful work, but it is not an investigation and it does not give the assistant authority to decide whether fraud occurred.',
          'Write the finish line before the first ticket arrives: a complete intake note, the right risk label, and a manager alert through an approved channel. Refunds, account ownership changes, evidence requests, legal notices, and contact with banks or police stay with the owner or another approved specialist.'
        ]
      },
      {
        heading: 'Define what belongs in the queue',
        body: 'The assistant needs examples that separate a normal support problem from a report that needs quick review.',
        paragraphs: [
          'Useful triggers include an order the customer did not place, a login the customer does not know, a message asking for a new payment destination, or a caller pretending to be company staff. A customer who says an invoice is wrong may have a normal billing question, but a customer who says somebody changed bank details needs the fraud path.',
          'Give the Filipino assistant a short list of labels such as suspicious message, unknown account activity, identity claim, and payment-change request. Labels help route the work, but they must not read like a verdict. The ticket should say "customer reports" rather than stating that a named person committed a crime.'
        ]
      },
      {
        heading: 'Capture facts without collecting everything',
        body: 'A good intake note is short enough for a manager to scan and complete enough for the manager to act.',
        paragraphs: [
          'Record the customer\'s name, safe contact method, account or order reference, time noticed, channel used, and a plain description of the event. Ask what the customer already did, such as changing a password or contacting a card issuer, but do not ask the customer to send a full card number, password, government ID, or secret code in a normal ticket.',
          'Keep the original message or screenshot only in the approved support system, and follow the company\'s retention rule. The FTC tells businesses to keep only personal information they need and to protect what they keep. That is a practical reason to avoid copying sensitive details into chat, email, and several task boards.'
        ]
      },
      {
        heading: 'Stop account and money actions',
        body: 'The assistant needs a hard stop when a report could change access or move funds.',
        paragraphs: [
          'Do not let a new report become a reason to reset every login, change an account owner, send money, approve a refund, or edit bank details. A scammer may use the support queue itself to create urgency. The Filipino assistant should lock the ticket from routine handling and ask the named manager to decide the next action.',
          'The FTC said on March 10, 2025 that consumers reported more than $12.5 billion in fraud loss during 2024. The same release said 38% of people who reported fraud said they lost money, up from 27% in 2023. Those figures describe reports received by the FTC, not the expected result for one company or customer.'
        ]
      },
      {
        heading: 'Verify the channel, not the customer story',
        body: 'The assistant can check whether the report came through a known path without deciding whether every claim is true.',
        paragraphs: [
          'Use a contact method already stored on the account when the manager asks for a second check. Do not use a phone number, link, or email address supplied inside the suspicious message. If no safe contact method exists, the assistant should mark that gap and wait for the manager rather than inventing a workaround.',
          'CISA tells people to resist pressure to act immediately and to use a known address or number when checking a suspicious message. In a support lane, that means the assistant pauses, preserves the request, and switches to the company\'s trusted contact record. The assistant does not call a supposed bank, vendor, or family member found through the message.'
        ]
      },
      {
        heading: 'Plan the Philippine shift handoff',
        body: 'A Philippines-based support shift may receive a serious report while the business owner is offline.',
        paragraphs: [
          'Set one urgent route that works during Philippine Time, such as an on-call manager queue with a backup contact. Give examples of urgent events: active account takeover, a payment-change request due the same day, exposed customer records, or a threat that appears credible. Normal disputes and incomplete reports can wait in the review queue.',
          'The end-of-shift note should list the ticket number, risk label, time received, safe contact status, evidence location, and manager notified. It should not repeat full personal details in a general team chat. The next Filipino assistant can see that the case is already owned without reopening the story or asking the customer to send the same material again.'
        ]
      },
      {
        heading: 'Give the manager a usable record',
        body: 'The manager needs a clean timeline and a clear list of actions already taken.',
        paragraphs: [
          'Put each event in order with a time zone: customer report received, account note checked, safe contact attempted, ticket restricted, and manager alerted. Separate the customer\'s statement from facts visible in company systems. This keeps the note honest and helps the manager see what still needs proof.',
          'NIST published Incident Response Recommendations and Considerations for Cybersecurity Risk Management in April 2025. The guide treats incident response as part of wider risk management, which fits a small support lane: prepare the route, detect a concern, respond through named owners, and learn from the record. A customer support assistant can support those steps without becoming the incident lead.'
        ]
      },
      {
        heading: 'Train with samples and review the lane',
        body: 'Short practice tickets show whether the rules work before a real customer is upset.',
        paragraphs: [
          'Run three samples with the Filipino assistant: an unknown order, a fake payment-change email, and a normal billing correction. Ask the assistant to label each case, write the intake note, choose the safe contact path, and name the manager. Correct the checklist when the assistant has to guess, because that is a process gap.',
          'Review the lane each month using a small sample of closed tickets. Check whether sensitive data was copied, urgent cases reached the right person, ordinary support work was not over-escalated, and managers left a final note. Keep the rule that the assistant reports and routes the concern while approved staff decide what the business does next.'
        ]
      }
    ],
    faqs: [
      { q: 'Can a Filipino customer support assistant decide that fraud occurred?', a: 'No. The assistant records what the customer reported and routes the case under the company\'s labels. A named manager or specialist decides how the business classifies and handles it.' },
      { q: 'What information should the assistant collect first?', a: 'Collect a safe contact method, account or order reference, time noticed, channel, and the customer\'s plain description. Do not request passwords, secret codes, or full card details in an ordinary ticket.' },
      { q: 'Should the assistant promise a refund or recovery?', a: 'No. The assistant can explain that a manager will review the report and give the next approved step. Money decisions and recovery promises stay with approved staff.' },
      { q: 'How should the assistant handle a suspicious link?', a: 'Do not open it from the support message. Preserve the message in the approved system, use a known contact path if instructed, and alert the manager.' },
      { q: 'What belongs in the shift handoff?', a: 'Include the ticket number, risk label, time received, safe contact status, evidence location, and manager notified. Keep full personal details inside the approved support system.' }
    ],
    rich: {
      published: '2026-07-27',
      updated: '2026-07-27',
      marker: 'OA-FRAUD-TRIAGE-2026',
      stats: [
        { value: '$12.5B', label: 'consumer-reported fraud loss', detail: 'FTC total for 2024, released March 10, 2025.', sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024' },
        { value: '38%', label: 'of fraud reporters said they lost money', detail: 'FTC figure for 2024, compared with 27% in 2023.', sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024' },
        { value: '2.6M', label: 'consumer fraud reports', detail: 'Received by the FTC in 2024.', sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024' }
      ],
      table: {
        caption: 'Fraud report intake map for a Filipino customer support assistant',
        headers: ['Report signal', 'Assistant records', 'Assistant avoids', 'Manager receives'],
        rows: [
          ['Unknown order', 'Order reference, time noticed, safe contact', 'Refund promise or card details', 'Ticket and account timeline'],
          ['Suspicious message', 'Sender shown, channel, customer statement', 'Opening links or calling numbers in the message', 'Original message in the approved system'],
          ['Account change', 'Change noticed, last known safe access', 'Resetting ownership without approval', 'Restricted ticket and urgent alert'],
          ['Payment change', 'Request text, time, known vendor record', 'Editing bank details or sending funds', 'Second-channel check request'],
          ['Identity claim', 'Claim in the customer\'s own words', 'Requesting excess identity documents', 'Privacy-safe note and named owner']
        ]
      },
      quote: {
        text: 'The FTC is monitoring those trends closely and working hard to protect the American people from fraud.',
        person: 'Christopher Mufarrige',
        title: 'Director of the FTC’s Bureau of Consumer Protection',
        sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024'
      },
      chart: {
        title: 'Share of FTC fraud reporters who said they lost money',
        description: 'Horizontal bars compare the percentage of FTC fraud reporters who said they lost money in 2023 and 2024.',
        headline: 'Reported loss share rose in 2024',
        unit: 'Unit: percent of people who reported fraud to the FTC',
        visualId: 'fraud-loss-share-chart',
        method: 'Units are percentages of people who reported fraud to the FTC. The FTC published both figures on March 10, 2025; the bars describe submitted reports and do not predict one customer outcome.',
        rows: [
          { label: '2023', value: 27, display: '27% of reporters' },
          { label: '2024', value: 38, display: '38% of reporters' }
        ]
      },
      graphic: {
        title: 'The four-step fraud report route',
        description: 'A separate process graphic showing how a Filipino customer support assistant can move a report to a manager without taking over the decision.',
        headline: 'A narrow support-to-manager path',
        footerNote: 'Manager rule: support records and routes; approved staff decide and act.',
        visualId: 'fraud-report-route',
        steps: [
          { label: '1. Receive', detail: 'Listen, use the customer\'s words, and open one restricted ticket.' },
          { label: '2. Record', detail: 'Save the needed facts and keep sensitive data in the approved system.' },
          { label: '3. Route', detail: 'Apply the risk label and alert the named manager through a trusted channel.' },
          { label: '4. Close the loop', detail: 'Add the manager\'s next step and leave a clean note for the next shift.' }
        ]
      },
      internalLinks: [
        { href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist', note: 'Write the intake fields, hard stops, and manager route on one page.' },
        { href: '/services/inbox-triage', label: 'Inbox triage support', note: 'Set the message labels, draft rules, and owner controls.' },
        { href: '/blog/secure-onboarding-filipino-virtual-assistant', label: 'Secure assistant onboarding', note: 'Set separate access and review rules before the first customer report.' },
        { href: '/contact', label: 'Plan a Filipino support role', note: 'Share the queue, schedule, systems, and approval needs.' }
      ],
      banners: [
        { eyebrow: 'Write the intake lane', title: 'Put the report route on one page', body: 'Use the SOP checklist to name the facts, hard stops, risk labels, and manager. A Filipino assistant can then follow the same path on every shift.', href: '/resources/assistant-sop-handoff-checklist', label: 'Open the SOP checklist' },
        { eyebrow: 'Control the message queue', title: 'Separate routine support from risk reports', body: 'Set labels for suspicious messages and unknown account activity. Keep refunds, ownership changes, and payment actions with approved staff.', href: '/services/inbox-triage', label: 'Review inbox triage' },
        { eyebrow: 'Plan the support role', title: 'Bring the queue and approval map', body: 'A useful role request starts with ticket types, systems, hours, and the manager path. Share those details for a Philippines-focused staffing review.', href: '/contact', label: 'Start the role request' }
      ],
      sources: [
        { name: 'Federal Trade Commission, 2024 fraud data release, March 10, 2025', url: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024', note: 'The three dated figures, year comparison, and exact Christopher Mufarrige quote.' },
        { name: 'Federal Trade Commission, Protecting Personal Information: A Guide for Business', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', note: 'Primary business guidance for collecting only needed information and protecting retained records.' },
        { name: 'CISA, Recognize and Report Phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Primary guidance for resisting urgency, checking through known contact details, and reporting suspicious messages.' },
        { name: 'NIST SP 800-61 Revision 3, April 2025', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final', note: 'Primary incident response guidance used for the prepare, detect, respond, and learn structure.' },
        { name: 'NIST Cybersecurity Framework 2.0, February 26, 2024', url: 'https://www.nist.gov/cyberframework', note: 'Primary risk management context for named owners, governance, and documented response work.' }
      ]
    }
  },
  {
    slug: 'invoice-change-verification-filipino-bookkeeping-assistant',
    title: 'Invoice change verification for a Filipino bookkeeping assistant',
    excerpt: 'A Filipino bookkeeping support assistant can check invoice changes, collect proof, and send a clean review packet to the right manager. This guide keeps vendor approval and every payment decision with authorized staff.',
    minutes: 15,
    takeaway: 'Treat every new bank detail as an unverified request, even when the message looks familiar. The Filipino assistant checks the request through a trusted contact, records the evidence, and waits for an authorized manager to approve or reject the change.',
    sections: [
      {
        heading: 'Give the assistant a narrow finish line',
        body: 'The job is to prepare a safe review, not approve the change.',
        paragraphs: [
          'A Filipino bookkeeping support assistant can receive an invoice, compare it with the vendor record, flag a change, and prepare a review note. The assistant should not decide that new bank details are genuine or release a payment because an email looks normal.',
          'Write the finish line in one sentence: the request is verified through a contact already on file, the evidence is saved, and an authorized manager has a clear approve-or-reject choice. If any part is missing, the item stays on hold instead of moving quietly into the next payment batch.'
        ]
      },
      {
        heading: 'Spot changes before checking totals',
        body: 'A changed instruction matters more than a familiar logo.',
        paragraphs: [
          'Ask the Filipino assistant to compare the new invoice with the last approved vendor record before checking the amount or due date. Look for a different bank name, account number, routing detail, remittance email, legal name, mailing address, contact person, or payment instruction.',
          'A clean-looking PDF does not prove who sent it. The FBI describes business email compromise as a scam that can use compromised business accounts and requests to change payment details, so a familiar sender name should never replace an independent check.'
        ]
      },
      {
        heading: 'Keep one approved vendor record',
        body: 'The assistant needs a trusted starting point that does not come from the new request.',
        paragraphs: [
          'Store the approved vendor name, normal contact, known phone number, usual email domain, and current payment instructions in a restricted vendor record. Give the Filipino assistant view access and a way to suggest a correction, but keep final edits with the manager who owns vendor setup.',
          'Do not copy new contact details into that record before verification. If the request says the old contact has left, the assistant should use a company website, prior contract, or earlier approved statement to find an independent route and then ask the manager how to proceed.'
        ]
      },
      {
        heading: 'Verify through a second channel',
        body: 'The safest check leaves the email thread.',
        paragraphs: [
          'The FBI tells businesses to use secondary channels or two-factor authentication when checking requests to change account information. For a small team, that can mean calling the known vendor number, opening a fresh message to the approved address, or using the vendor portal already saved by the business.',
          'The Filipino assistant should not call a number printed only on the changed invoice or use a reply address supplied in the request. During the check, the assistant can ask the known contact to confirm the exact field that changed and the date the change should begin, then record who answered and how the identity was checked.'
        ]
      },
      {
        heading: 'Build a short evidence packet',
        body: 'The manager should be able to review the change without searching through several systems.',
        paragraphs: [
          'Use one ticket or review note with the vendor name, invoice reference, old instruction, requested instruction, time received, sender, independent contact method, person reached, and result. Attach the original request in the approved system, but keep passwords, full card data, and unrelated personal information out of the packet.',
          'Write facts in plain language and separate them from conclusions. A useful note says, "Known vendor contact confirmed the new remittance account by phone at 10:20 a.m. ET," while an unsafe note says, "The invoice seems fine" without showing who checked it.'
        ]
      },
      {
        heading: 'Plan the Philippine shift handoff',
        body: 'A request may arrive while the business owner is offline.',
        paragraphs: [
          'Set one queue for changed invoices and one urgent route for requests tied to a same-day deadline or suspected account takeover. The Filipino assistant should know the working hours in Philippine Time, the matching manager review window, and the backup person who can place an item on hold.',
          'An end-of-shift note should list the invoice reference, change found, verification status, evidence location, and named manager. It should not repeat bank details in a general chat, and it should never turn an overnight deadline into permission to skip the check.'
        ]
      },
      {
        heading: 'Keep approval and payment separate',
        body: 'Verification gives the manager evidence, not a completed decision.',
        paragraphs: [
          'After the assistant finishes the check, an authorized manager reviews the evidence and decides whether the vendor record may change. A second authorized person should review any payment that uses the new instruction when the company policy calls for separate approval.',
          'The Filipino assistant can prepare the record, enter a proposed update, and mark the item ready for review. The assistant should not release funds, add a new payee, change account ownership, or approve the same work the assistant prepared unless the business has a documented control and authorized role for that action.'
        ]
      },
      {
        heading: 'Practice the rule and sample the work',
        body: 'A short drill shows whether the handoff works before a real request creates pressure.',
        paragraphs: [
          'Give the Filipino assistant three sample requests: a normal invoice with no change, a valid change confirmed through the known contact, and a rushed message that supplies a new callback number. Ask the assistant to identify the change, choose the safe contact route, write the evidence note, and name the manager who decides.',
          'Each month, review a small sample of changed invoices and check whether the second channel came from a trusted record, the evidence was complete, and approval stayed with authorized staff. Fix the checklist when the same question appears twice, because repeated guessing usually points to a weak handoff rather than a careless person.'
        ]
      }
    ],
    faqs: [
      { q: 'Can a Filipino bookkeeping assistant approve new bank details?', a: 'The assistant can collect and verify evidence, but an authorized manager should approve the vendor-record change. Keep the approval rule in the company checklist and access settings.' },
      { q: 'What should happen when an invoice shows different payment instructions?', a: 'Place the invoice on hold and compare it with the approved vendor record. Verify the change through a contact route that existed before the new request arrived.' },
      { q: 'Can the assistant use the phone number on the changed invoice?', a: 'Not as the only check. Use a known number from the approved vendor record, an earlier statement, a contract, or the vendor company website.' },
      { q: 'What belongs in the review note?', a: 'Record the vendor, invoice, field changed, time received, original sender, trusted contact route, person reached, result, and manager. Keep sensitive details inside the approved accounting or ticket system.' },
      { q: 'What if the owner is offline during the Philippine shift?', a: 'The assistant should place the item in the changed-invoice queue and use the named urgent route when the written examples apply. A deadline does not give the assistant permission to release a payment or skip verification.' }
    ],
    rich: {
      published: '2026-07-28',
      updated: '2026-07-28',
      marker: 'OA-INVOICE-VERIFY-2026',
      stats: [
        { value: '305,033', label: 'reported BEC incidents', detail: 'FBI total for October 2013 through December 2023, published September 11, 2024.', sourceUrl: 'https://www.ic3.gov/PSA/2024/PSA240911' },
        { value: '$55.5B', label: 'exposed loss reported to the FBI', detail: 'FBI total for October 2013 through December 2023; rounded from $55,499,915,582.', sourceUrl: 'https://www.ic3.gov/PSA/2024/PSA240911' },
        { value: '9%', label: 'increase in identified exposed loss', detail: 'FBI comparison from December 2022 to December 2023, published September 11, 2024.', sourceUrl: 'https://www.ic3.gov/PSA/2024/PSA240911' }
      ],
      table: {
        caption: 'Invoice change review map for a Filipino bookkeeping support assistant',
        headers: ['Signal', 'Assistant checks', 'Assistant records', 'Manager keeps'],
        rows: [
          ['New bank detail', 'Known vendor contact through a trusted channel', 'Old and requested instructions plus confirmation', 'Vendor-record approval and payment decision'],
          ['New remittance email', 'Approved domain and earlier contact record', 'Sender, reply address, and independent response', 'Contact-record change'],
          ['Urgent deadline', 'Normal approval path and named urgent route', 'Time received and hold status', 'Exception decision'],
          ['New legal name', 'Contract, company site, and known contact', 'Supporting record and person reached', 'Vendor identity update'],
          ['Unexpected attachment', 'Approved storage and safe review route', 'Original message and ticket location', 'Security response if needed']
        ]
      },
      quote: {
        text: 'As important as it is to take a technological belt-and-suspenders approach, your company’s cybersecurity is only as strong as your least vigilant employee.',
        person: 'Andrew Smith',
        title: 'Director, FTC Bureau of Consumer Protection',
        sourceUrl: 'https://www.ftc.gov/business-guidance/blog/2018/12/cybersecurity-small-business-business-email-imposters'
      },
      chart: {
        title: 'Funds addressed by the FBI Financial Fraud Kill Chain in 2024',
        description: 'Horizontal bars compare attempted theft reported through the Financial Fraud Kill Chain with domestic and international funds frozen during 2024.',
        headline: 'Reported attempted theft and frozen funds',
        unit: 'Unit: millions of U.S. dollars',
        visualId: 'invoice-change-fraud-funds-chart',
        method: 'Values come from the FBI 2024 IC3 Annual Report. The frozen total adds $469.1 million in domestic transactions and $92.5 million in international transactions; these complaint-response figures do not predict one company result.',
        rows: [
          { label: 'Attempted theft reported', value: 848.4, display: '$848.4 million' },
          { label: 'Funds frozen', value: 561.6, display: '$561.6 million' }
        ]
      },
      graphic: {
        title: 'The four-stop invoice change route',
        description: 'A separate process graphic showing how a Filipino bookkeeping assistant can prepare a changed invoice for manager review.',
        headline: 'Stop the change until the proof is complete',
        footerNote: 'Control rule: the assistant verifies and records; authorized staff approve and release.',
        visualId: 'invoice-change-review-route',
        steps: [
          { label: '1. Compare and hold', detail: 'Check the approved vendor record and pause any changed item.' },
          { label: '2. Verify', detail: 'Use a known phone number, address, portal, or company site.' },
          { label: '3. Record', detail: 'Save the old detail, requested detail, contact, and result.' },
          { label: '4. Escalate', detail: 'Send the evidence to the authorized manager for a decision.' }
        ]
      },
      internalLinks: [
        { href: '/resources/assistant-sop-handoff-checklist', label: 'Assistant SOP handoff checklist', note: 'Write the comparison fields, hard stops, and manager route on one page.' },
        { href: '/services', label: 'Filipino assistant services', note: 'Review the available support lanes and keep owner controls clear for each role.' },
        { href: '/blog/secure-onboarding-filipino-virtual-assistant', label: 'Secure assistant onboarding', note: 'Create separate access and review rules before invoice work starts.' },
        { href: '/contact', label: 'Plan a Filipino bookkeeping support role', note: 'Share the invoice flow, systems, Philippine schedule, and approval needs.' }
      ],
      banners: [
        { eyebrow: 'Write the review lane', title: 'Put the change check on one page', body: 'Use the SOP checklist to name the trusted vendor record, second channel, evidence fields, and manager. A Filipino assistant can then follow the same safe path for every changed invoice.', href: '/resources/assistant-sop-handoff-checklist', label: 'Open the SOP checklist' },
        { eyebrow: 'Set the role boundary', title: 'Separate bookkeeping prep from approval', body: 'Give the assistant a clear place to compare invoices and prepare evidence. Keep vendor changes and every payment decision with authorized staff.', href: '/services', label: 'Review Filipino assistant services' },
        { eyebrow: 'Plan the role', title: 'Bring the invoice flow and approval map', body: 'A useful role request starts with the systems, vendor records, Philippine work window, and named manager. Share those details for a Philippines-focused staffing review.', href: '/contact', label: 'Start the role request' }
      ],
      sources: [
        { name: 'FBI IC3, Business Email Compromise: The $55 Billion Scam, September 11, 2024', url: 'https://www.ic3.gov/PSA/2024/PSA240911', note: 'The three dated figures and the FBI recommendation to verify account-information changes through a second channel.' },
        { name: 'FBI IC3, 2024 Internet Crime Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Financial Fraud Kill Chain figures used in the labeled chart and its method note.' },
        { name: 'Federal Trade Commission, Cybersecurity for small business: Business email imposters, December 7, 2018', url: 'https://www.ftc.gov/business-guidance/blog/2018/12/cybersecurity-small-business-business-email-imposters', note: 'The exact Andrew Smith quote and staff-training context.' },
        { name: 'Federal Trade Commission, Scams and Your Small Business: A Guide for Business', url: 'https://www.ftc.gov/business-guidance/resources/scams-your-small-business-guide-business', note: 'Primary guidance for checking invoices and making approval procedures clear.' },
        { name: 'NIST, Phishing guidance for small businesses', url: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing', note: 'Primary guidance for checking urgent vendor messages through a known contact route.' },
        { name: 'CISA, Avoiding Social Engineering and Phishing Attacks, February 1, 2021', url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks', note: 'Supplementary government guidance for independent contact using details from prior records.' }
      ]
    }
  },
];

import { dailyBlogBatch } from './blog-batch';
blogPosts.push(...dailyBlogBatch);

export const navPages = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Staffing details' },
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

import { dailyBlogPosts } from './daily-content';
blogPosts.push(...dailyBlogPosts);
import { dailyBlogBatch20260810 } from './blog-batch-2026-08-10';
blogPosts.push(...dailyBlogBatch20260810);
