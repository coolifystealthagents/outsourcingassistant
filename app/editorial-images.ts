type EditorialImage = { url: string; alt: string };
type ImageCandidate = EditorialImage & { keywords: readonly string[] };

const BLOG_IMAGES: readonly ImageCandidate[] = [
  { url: '/images/blog-2026-08-20/least-privilege-tool-onboarding-assistant.png', alt: 'A structured access checklist for onboarding an assistant', keywords: ['access', 'permission', 'security', 'password', 'onboarding', 'offboarding'] },
  { url: '/aug19-heroes/virtual-assistant-access-recertification-review.webp', alt: 'An assistant access review in progress', keywords: ['access', 'permission', 'audit', 'security', 'recertification'] },
  { url: '/images/blog-2026-08-21/filipino-virtual-assistant-calendar-timezone-rules.png', alt: 'A calendar workflow prepared for work across time zones', keywords: ['calendar', 'schedule', 'timezone', 'travel', 'meeting'] },
  { url: '/images/blog-2026-08-20/remote-meeting-preparation-brief.png', alt: 'A remote meeting preparation brief with agenda and action notes', keywords: ['meeting', 'agenda', 'brief', 'executive', 'decision'] },
  { url: '/images/blog-2026-08-20/outsourced-vendor-research-evidence-map.png', alt: 'A vendor research evidence map prepared for review', keywords: ['vendor', 'supplier', 'research', 'source', 'evidence'] },
  { url: '/aug19-heroes/virtual-assistant-source-of-truth-map.webp', alt: 'A source-of-truth map for delegated work', keywords: ['source', 'record', 'truth', 'file', 'document', 'knowledge'] },
  { url: '/images/blog-2026-08-21/outsourced-assistant-quality-sample-plan.png', alt: 'A quality sampling plan for assistant work', keywords: ['quality', 'review', 'sample', 'scorecard', 'acceptance'] },
  { url: '/aug19-heroes/virtual-assistant-exception-queue-triage.webp', alt: 'An exception queue arranged for triage and owner review', keywords: ['exception', 'queue', 'triage', 'support', 'inbox', 'refund'] },
  { url: '/images/blog-2026-08-21/remote-assistant-shift-handoff.png', alt: 'A documented handoff between remote work shifts', keywords: ['handoff', 'async', 'shift', 'timezone', 'remote'] },
  { url: '/images/blog-2026-08-20/remote-project-dependency-register.png', alt: 'A project dependency register for distributed work', keywords: ['project', 'dependency', 'operations', 'workflow', 'task'] },
  { url: '/images/blog-2026-08-20/delegated-invoice-exception-notes.png', alt: 'Invoice exception notes prepared for an owner decision', keywords: ['invoice', 'bookkeeping', 'finance', 'payment', 'billing'] },
  { url: '/images/blog-2026-08-20/filipino-assistant-service-recovery-routing.png', alt: 'A service recovery route for customer support work', keywords: ['customer', 'service', 'recovery', 'support', 'escalation'] },
  { url: '/images/blog-2026-08-21/filipino-assistant-data-cleanup-scope.png', alt: 'A bounded data cleanup scope for assistant work', keywords: ['crm', 'data', 'cleanup', 'record', 'database'] },
  { url: '/illustrations/getillustrations/grain-teamwork/delegation-team-planning.webp', alt: 'A manager and assistant planning a clear delegation workflow', keywords: ['delegate', 'delegation', 'assistant', 'role', 'hire', 'outsourcing'] },
];

const RESEARCH_IMAGES: readonly ImageCandidate[] = [
  { url: '/images/research-2026-08-20/assistant-source-chain-for-daily-articles.png', alt: 'A source chain used to trace evidence in research work', keywords: ['source', 'evidence', 'claim', 'content', 'research'] },
  { url: '/images/research-2026-08-23/source-diversity-outsourced-research-claims.png', alt: 'A source diversity review for outsourced research claims', keywords: ['source', 'diversity', 'claim', 'research'] },
  { url: '/images/research-2026-09-03/claim-consequence-retrieval-depth-study.png', alt: 'A study connecting claim consequence with evidence depth', keywords: ['claim', 'evidence', 'consequence', 'research'] },
  { url: '/images/research-2026-08-20/daily-article-review-queue-design.png', alt: 'A review queue designed for evidence-led articles', keywords: ['queue', 'review', 'content', 'article', 'publishing'] },
  { url: '/images/research-2026-09-03/queue-delay-research-difficulty-separation.png', alt: 'A research view separating queue delay from work difficulty', keywords: ['queue', 'delay', 'capacity', 'latency', 'aging'] },
  { url: '/aug19-heroes/virtual-assistant-access-governance-research.webp', alt: 'A governance review of assistant access controls', keywords: ['access', 'permission', 'security', 'governance', 'offboarding'] },
  { url: '/images/research-2026-08-20/owner-review-capacity-for-daily-research.png', alt: 'An owner review capacity model for distributed research', keywords: ['owner', 'capacity', 'review', 'approval'] },
  { url: '/aug19-heroes/virtual-assistant-handoff-reliability-research.webp', alt: 'A reliability review of a remote assistant handoff', keywords: ['handoff', 'async', 'timezone', 'distributed', 'transition'] },
  { url: '/images/research-2026-08-21/article-quality-sampling-for-outsourced-routines.png', alt: 'A quality sampling model for outsourced routines', keywords: ['quality', 'sample', 'scorecard', 'acceptance', 'defect'] },
  { url: '/images/research-2026-08-21/outsourced-article-intake-question-quality.png', alt: 'An intake quality review for outsourced work', keywords: ['intake', 'input', 'question', 'completeness', 'scope'] },
  { url: '/images/research-2026-08-21/philippines-assistant-article-handoff-window.png', alt: 'A handoff window for a Philippines-based assistant workflow', keywords: ['window', 'schedule', 'philippines', 'timezone', 'calendar'] },
  { url: '/images/research-2026-09-03/manager-feedback-sop-change-thresholds.png', alt: 'Manager feedback mapped to controlled SOP changes', keywords: ['sop', 'exception', 'change', 'manager', 'workflow'] },
  { url: '/images/research-2026-08-20/article-correction-loop-for-outsourced-research.png', alt: 'A correction loop for outsourced research work', keywords: ['crm', 'record', 'correction', 'data', 'accuracy'] },
];

function stableIndex(value: string, size: number) {
  let hash = 0;
  for (const character of value) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return hash % size;
}

function selectImage(title: string, slug: string, candidates: readonly ImageCandidate[]): EditorialImage {
  const text = `${title} ${slug}`.toLowerCase();
  const scored = candidates.map((candidate) => ({ candidate, score: candidate.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0) }));
  const bestScore = Math.max(...scored.map(item => item.score));
  const pool = bestScore > 0 ? scored.filter(item => item.score === bestScore).map(item => item.candidate) : candidates;
  return pool[stableIndex(slug, pool.length)];
}

export function resolveBlogImage(post: { title: string; slug: string; image?: EditorialImage }): EditorialImage {
  const supplied = post.image;
  // One legacy record used its single-letter title as a filename even though no
  // matching asset was published. Route it through the topic-aware library.
  return supplied?.url === '/images/blog-2026-08-21/T.png'
    ? selectImage(post.title, post.slug, BLOG_IMAGES)
    : supplied ?? selectImage(post.title, post.slug, BLOG_IMAGES);
}

export function resolveResearchImage(post: { title: string; slug: string; image?: EditorialImage }): EditorialImage {
  const supplied = post.image;
  // These five editorial assets were published in the August 23 collection;
  // several imported records retained an August 24 directory that never existed.
  const normalized = supplied?.url.replace('/images/research-2026-08-24/', '/images/research-2026-08-23/');
  return supplied && normalized ? { ...supplied, url: normalized } : selectImage(post.title, post.slug, RESEARCH_IMAGES);
}

export const indexImages = {
  blog: BLOG_IMAGES[13],
  research: RESEARCH_IMAGES[0],
  alternatives: { url: '/images/blog-2026-08-21/outsourced-assistant-role-reset.png', alt: 'A team comparing assistant role and delivery options' },
  comparison: { url: '/illustrations/getillustrations/grain-teamwork/delegation-team-planning.webp', alt: 'A manager comparing virtual assistant outsourcing options' },
  resource: { url: '/images/blog-2026-08-20/assistant-training-sample-review.png', alt: 'A manager reviewing a documented assistant handoff checklist' },
} as const;
