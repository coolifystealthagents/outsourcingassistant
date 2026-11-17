type ServiceStory = {
  title: string;
  request: string;
  preparation: string;
  handoff: string;
  launch: readonly [string, string, string];
};

export const serviceStories: Record<string, ServiceStory> = {
  'executive-calendar-management': {
    title: 'Two meeting requests, one protected afternoon',
    request: 'A client asks for a call during a focus block while an internal meeting runs close to a flight departure.',
    preparation: 'The assistant checks the calendar rules, travel buffer and time zones, then prepares available options and complete draft invitations.',
    handoff: 'The executive chooses what moves. The assistant sends only the approved updates and records the remaining conflict.',
    launch: ['Set working hours, focus blocks and meeting types that need approval.', 'Prepare one week of requests and conflicts without moving priority meetings.', 'Check invitations, travel buffers and open decisions together before expanding access.'],
  },
  'inbox-triage': {
    title: 'A crowded inbox after a busy morning',
    request: 'Routine receipts sit beside a customer complaint and a partner asking for a commitment.',
    preparation: 'The assistant labels the queue, drafts approved routine replies and flags the two messages that need an owner.',
    handoff: 'The sender reviews consequential replies; the queue records who owns each unresolved thread.',
    launch: ['Agree priority signals, reply examples and messages that require the owner.', 'Start with classification and draft-only handling of a small inbox batch.', 'Review missed priorities, routing and reopened threads before permitting routine sends.'],
  },
  'travel-coordination': {
    title: 'A trip with a tight connection',
    request: 'A traveller needs a return trip that fits two meetings, a budget and a reliable transfer.',
    preparation: 'The assistant compares current options, local times, fare conditions and transfer buffers in one dated sheet.',
    handoff: 'The traveller selects and purchases. Approved confirmations become a checked itinerary with open questions visible.',
    launch: ['Document traveller preferences, policy limits and the person who can purchase.', 'Compare options for one trip without placing an order.', 'Recheck names, times and confirmations with the traveller before taking on more travel.'],
  },
  'meeting-administration': {
    title: 'A decision that needs to survive the meeting',
    request: 'A weekly operating meeting ends with several actions but no agreed owners or due dates.',
    preparation: 'The assistant assembles the agenda and drafts an action register from approved notes.',
    handoff: 'The chair confirms decisions and assignments before the register and follow-ups are circulated.',
    launch: ['Choose one meeting, its agenda format and rules for confidential notes.', 'Prepare the agenda and draft actions for that meeting.', 'Have the chair verify decisions, owners and due points before distribution.'],
  },
  'crm-administration': {
    title: 'Two records appear to describe one lead',
    request: 'A sales record has missing fields and a likely duplicate with a different owner.',
    preparation: 'The assistant checks approved sources, records the conflict and prepares a correction for review.',
    handoff: 'The CRM owner decides whether to merge or change ownership; the original history stays intact.',
    launch: ['Define required fields, trusted sources and who approves merges.', 'Prepare corrections for one small segment without bulk edits.', 'Audit a sample for accuracy, source notes and preserved history.'],
  },
  'research-briefing': {
    title: 'A brief for one decision, with sources attached',
    request: 'A leader needs a bounded view of a market question before a planning meeting.',
    preparation: 'The assistant collects dated sources, separates findings from interpretation and marks disagreements or gaps.',
    handoff: 'The subject owner checks material claims and approves any recommendation or publication.',
    launch: ['Set the decision question, date range, source rules and reviewer.', 'Build a small source register and evidence brief for that question.', 'Open the links together and revise unsupported or out-of-scope claims.'],
  },
  'document-production': {
    title: 'A proposal assembled from approved material',
    request: 'A team has signed-off copy and figures, but the client document is still in several files.',
    preparation: 'The assistant formats the approved material, tracks versions and flags missing sections or conflicting numbers.',
    handoff: 'The content owner resolves open points and approves the final document before it is shared.',
    launch: ['Identify the approved source, template and final reviewer.', 'Format one draft while leaving missing facts clearly marked.', 'Compare headings, figures, links and versions before owner approval.'],
  },
  'vendor-follow-up': {
    title: 'An unanswered supplier request',
    request: 'A vendor has not acknowledged an approved purchase order and the team needs a status update.',
    preparation: 'The assistant checks the verified contact, follows the approved message and records the response or delay.',
    handoff: 'Any change to price, terms, dates or payment goes to the procurement owner.',
    launch: ['Confirm vendor contacts, approved messages and commercial boundaries.', 'Follow up on a small set of already-approved requests.', 'Review overdue items and escalations against the original documents.'],
  },
  'project-administration': {
    title: 'A dependency hidden in a status update',
    request: 'A project task is marked complete, but another team is still waiting for an input.',
    preparation: 'The assistant reconciles the task record, checks the source update and flags the blocked dependency.',
    handoff: 'The project lead decides priorities and scope; the register shows the next owner and due point.',
    launch: ['Agree status definitions, source records and the project lead who decides changes.', 'Maintain one register from approved team updates.', 'Review blocked, stale and ownerless items before adding more projects.'],
  },
  'personal-executive-support': {
    title: 'A reservation prepared without a purchase',
    request: 'An executive needs options for a routine reservation that fits a fixed schedule.',
    preparation: 'The assistant checks approved preferences and prepares options with dates, location and costs.',
    handoff: 'The executive chooses and authorizes any purchase or personal commitment.',
    launch: ['Start with one narrow task and separate delegated access.', 'Prepare options and reminders without spending or impersonating the executive.', 'Review privacy, approvals and retained records before broadening the task list.'],
  },
};
