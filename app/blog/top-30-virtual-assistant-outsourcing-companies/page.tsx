import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import { EditorialLayout, headingId } from '../../editorial';
import { indexImages } from '../../editorial-images';
import type { TocItem } from '../../site-client';
import styles from './comparison.module.css';

const companies = [
  {
    "name": "Stealth Agents",
    "domain": "StealthAgents.com",
    "url": "https://stealthagents.com/",
    "category": "Managed virtual assistance"
  },
  {
    "name": "Outsourcing Assistant",
    "domain": "OutsourcingAssistant.com",
    "url": "https://outsourcingassistant.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "Overseas Virtual Assistant",
    "domain": "OverseasVirtualAssistant.com",
    "url": "https://overseasvirtualassistant.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "Virtual Assistant Provider",
    "domain": "VirtualAssistantProvider.com",
    "url": "https://virtualassistantprovider.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "Remote Executive Support",
    "domain": "RemoteExecutiveSupport.com",
    "url": "https://remoteexecutivesupport.com/",
    "category": "Executive support"
  },
  {
    "name": "Family Office Assistant",
    "domain": "FamilyOfficeAssistant.com",
    "url": "https://familyofficeassistant.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Assistant Agency",
    "domain": "ExecutiveAssistantAgency.com",
    "url": "https://executiveassistantagency.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Support Staff",
    "domain": "ExecutiveSupportStaff.com",
    "url": "https://executivesupportstaff.com/",
    "category": "Executive support"
  },
  {
    "name": "CEO Executive Assistant",
    "domain": "CEOExecutiveAssistant.com",
    "url": "https://ceoexecutiveassistant.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Assistant Virtual",
    "domain": "ExecutiveAssistantVirtual.com",
    "url": "https://executiveassistantvirtual.com/",
    "category": "Executive support"
  },
  {
    "name": "Operations Executive Assistant",
    "domain": "OperationsExecutiveAssistant.com",
    "url": "https://operationsexecutiveassistant.com/",
    "category": "Operations"
  },
  {
    "name": "Trucking VA",
    "domain": "TruckingVA.net",
    "url": "https://truckingva.net/",
    "category": "Logistics"
  },
  {
    "name": "IT Virtual Assistant",
    "domain": "ITVirtualAssistant.com",
    "url": "https://itvirtualassistant.com/",
    "category": "Technology support"
  },
  {
    "name": "Bookkeeping Staff",
    "domain": "BookkeepingStaff.com",
    "url": "https://bookkeepingstaff.com/",
    "category": "Finance support"
  },
  {
    "name": "Medical Office VA",
    "domain": "MedicalOfficeVA.com",
    "url": "https://medicalofficeva.com/",
    "category": "Medical support"
  },
  {
    "name": "Website Design Outsource",
    "domain": "WebsiteDesignOutsource.com",
    "url": "https://websitedesignoutsource.com/",
    "category": "Design and development"
  },
  {
    "name": "Wealth Management Assistant",
    "domain": "WealthManagementAssistant.com",
    "url": "https://wealthmanagementassistant.com/",
    "category": "Finance support"
  },
  {
    "name": "Real Estates Luxury",
    "domain": "RealEstatesLuxury.com",
    "url": "https://realestatesluxury.com/",
    "category": "Real estate"
  },
  {
    "name": "InsuranceYo",
    "domain": "InsuranceYo.com",
    "url": "https://insuranceyo.com/",
    "category": "Insurance"
  },
  {
    "name": "Recruiting Agencies",
    "domain": "Recruiting-Agencies.com",
    "url": "https://recruiting-agencies.com/",
    "category": "Recruiting"
  },
  {
    "name": "Scheduling Appointment",
    "domain": "SchedulingAppointment.com",
    "url": "https://schedulingappointment.com/",
    "category": "Sales support"
  },
  {
    "name": "Dental Receptionists",
    "domain": "Dental-Receptionists.com",
    "url": "https://dental-receptionists.com/",
    "category": "Dental support"
  },
  {
    "name": "Dental Office VA",
    "domain": "DentalOfficeVA.com",
    "url": "https://dentalofficeva.com/",
    "category": "Dental support"
  },
  {
    "name": "Hire Back Office",
    "domain": "HireBackOffice.com",
    "url": "https://hirebackoffice.com/",
    "category": "Back office"
  },
  {
    "name": "Dispensary VA",
    "domain": "DispensaryVA.com",
    "url": "https://dispensaryva.com/",
    "category": "Retail support"
  },
  {
    "name": "STR Virtual Assistant",
    "domain": "STRVirtualAssistant.com",
    "url": "https://strvirtualassistant.com/",
    "category": "Hospitality"
  },
  {
    "name": "Hire Construction Estimator",
    "domain": "HireConstructionEstimator.com",
    "url": "https://hireconstructionestimator.com/",
    "category": "Construction"
  },
  {
    "name": "Developer Offshore",
    "domain": "DeveloperOffshore.com",
    "url": "https://developeroffshore.com/",
    "category": "Development"
  },
  {
    "name": "Customer Care Staff",
    "domain": "CustomerCareStaff.com",
    "url": "https://customercarestaff.com/",
    "category": "Customer support"
  },
  {
    "name": "Call Center Outsourced",
    "domain": "CallCenterOutsourced.com",
    "url": "https://callcenteroutsourced.com/",
    "category": "Phone support"
  }
] as const;
const articleUrl = 'https://outsourcingassistant.com/blog/top-30-virtual-assistant-outsourcing-companies';
const title = '30 Virtual Assistant Outsourcing Companies to Compare';
const description = 'A non-ranked directory of 30 assistant and outsourced-service websites, plus a practical scope, evidence, access, and review checklist.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: 'article', images: [{ url: indexImages.comparison.url, alt: indexImages.comparison.alt }] },
};

const buyerChecks = [
  { title: 'Write the first work lane', body: 'List the recurring tasks, source records, expected output, due point, and person who owns each exception. A broad title is not a usable scope.' },
  { title: 'Name the reviewer', body: 'Choose one person who can check early work, answer questions, and make decisions the assistant must not make.' },
  { title: 'Run a bounded sample', body: 'Test a small, representative batch with limited access. Compare the result with a finished example before adding volume or authority.' },
  { title: 'Count the operating cost', body: 'Compare fees together with software, training, management time, security controls, replacement terms, and the cost of unresolved exceptions.' },
] as const;

const categoryGuidance: Record<string, string> = {
  'Managed virtual assistance': 'Ask how matching, day-to-day support, escalation, and replacement are handled.',
  'General virtual assistance': 'Confirm which tasks, schedules, tools, and management responsibilities are actually included.',
  'Executive support': 'Clarify calendar, inbox, travel, meeting, confidentiality, and executive approval boundaries.',
  Operations: 'Define the queues, source systems, exception rules, status record, and process owner.',
  Logistics: 'Confirm operating hours, source documents, exception routing, and who may communicate with carriers or customers.',
  'Technology support': 'Separate administrative coordination from technical decisions and privileged system access.',
  'Finance support': 'Keep payment release, account changes, reconciliations, tax, and professional judgment with authorized staff.',
  'Medical support': 'Verify privacy, security, training, and licensed-professional boundaries before sharing regulated information.',
  'Design and development': 'Use a written brief, acceptance criteria, revision process, source-file ownership, and technical review.',
  'Real estate': 'Clarify lead handling, listing data, transaction boundaries, local rules, and broker approval.',
  Insurance: 'Keep advice, binding decisions, policy interpretation, and regulated activity with authorized professionals.',
  Recruiting: 'Define sourcing, screening, candidate communication, records, fairness controls, and hiring authority.',
  'Sales support': 'Approve claims, scripts, contact sources, opt-out handling, CRM fields, and meeting qualification rules.',
  'Dental support': 'Verify privacy controls and keep clinical, billing, and patient decisions with qualified staff.',
  'Back office': 'Document the source record, completion evidence, exception owner, access level, and review sample.',
  'Retail support': 'Set clear limits for inventory, customer data, promotions, refunds, and regulated product questions.',
  Hospitality: 'Document guest communication, platform access, vendor escalation, refund rules, and emergency ownership.',
  Construction: 'Define document sources, estimating assumptions, review responsibility, and licensed-professional boundaries.',
  Development: 'Specify repository access, environments, acceptance tests, security review, and code ownership.',
  'Customer support': 'Approve response guidance, escalation triggers, refund limits, privacy handling, and quality sampling.',
  'Phone support': 'Confirm call sources, scripts, recording and consent rules, escalation, coverage, and QA review.',
};

export default function ComparisonArticle() {
  const tocHeadings: { label: string; level?: 2 | 3 }[] = [
    { label: 'How to use this directory' },
    { label: 'Companies and specialist services to compare' },
    ...companies.map(company => ({ label: company.name, level: 3 as const })),
    { label: 'Four checks before choosing a provider' },
    ...buyerChecks.map(check => ({ label: check.title, level: 3 as const })),
    { label: 'Questions to ask every provider' },
    { label: 'Scope the first assistant lane' },
  ];
  const tocItems: TocItem[] = tocHeadings.map((item, index) => ({ ...item, id: headingId(item.label, index) }));
  const sectionId = (label: string) => tocItems.find(item => item.label === label)?.id;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${articleUrl}#article`, headline: title, description, image: `https://outsourcingassistant.com${indexImages.comparison.url}`, datePublished: '2026-07-28', dateModified: '2026-10-19', mainEntityOfPage: articleUrl, publisher: { '@type': 'Organization', name: 'Outsourcing Assistant', url: 'https://outsourcingassistant.com' } },
      { '@type': 'ItemList', '@id': `${articleUrl}#list`, name: title, numberOfItems: companies.length, itemListOrder: 'https://schema.org/ItemListUnordered', itemListElement: companies.map((company, index) => ({ '@type': 'ListItem', position: index + 1, name: company.name, url: company.url })) },
    ],
  };

  return <>
    <Header />
    <main id="main-content" className={styles.page} data-content-profile="outsourcingassistant-human-v3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <EditorialLayout items={tocItems} family="blog" related={[{ href: '/blog', label: 'More staffing and delegation guides' }, { href: '/services', label: 'Compare assistant service scopes' }, { href: '/resources/assistant-sop-handoff-checklist', label: 'Use the SOP handoff checklist' }]} contentClassName={`${styles.shell} ${styles.body}`}>
        <header className={styles.hero}><div className={styles.heroEditorial}><p className={styles.lead}>Use this directory to build a shortlist, then verify the current offer, operating model, contract, staffing location, pricing, security controls, and references directly with each provider.</p><h1>{title}</h1><img className="article-hero-image" src={indexImages.comparison.url} alt={indexImages.comparison.alt}/><div className={styles.facts}><span><b>30</b> public destinations</span><span><b>{new Set(companies.map(c => c.category)).size}</b> declared service categories</span><span><b>Non-ranked</b> comparison directory</span></div></div></header>

        <section className={`${styles.method} ${styles.methodColumns}`}><header><h2 id={sectionId('How to use this directory')} className="article-section-heading">How to use this directory</h2></header><p>This is a discovery list, not a performance ranking or endorsement. Inclusion reflects the public name and service category shown here; it does not establish quality, availability, price, credentials, location, or fit.</p><p>Open the provider site, request the current scope in writing, and compare every response against the same work sample and control checklist. For regulated or sensitive work, involve your legal, privacy, security, finance, or licensed professional before granting access.</p></section>

        <section className={styles.companySection}><h2 id={sectionId('Companies and specialist services to compare')} className="article-section-heading">Companies and specialist services to compare</h2><p className={styles.intro}>The order is for navigation only. Verify every public statement with the provider before making a decision.</p><ol className={styles.list}>{companies.map(company => <li className={styles.entry} key={company.domain}><div className={styles.heading}><div><h3 id={sectionId(company.name)} className="article-subsection-heading">{company.name}</h3><p>{company.category}</p></div></div><div className={styles.prose}><p>{categoryGuidance[company.category] ?? 'Confirm the exact scope, inputs, access, deliverables, review process, and decision boundaries.'}</p><p><a href={company.url} target="_blank" rel="noopener noreferrer">Visit {company.domain} to verify its current offer</a></p></div></li>)}</ol></section>

        <section className={styles.checklist}><p className={styles.eyebrow}>Decision checklist</p><h2 id={sectionId('Four checks before choosing a provider')} className="article-section-heading">Four checks before choosing a provider</h2><div className={styles.checkGrid}>{buyerChecks.map(check => <article key={check.title}><h3 id={sectionId(check.title)} className="article-subsection-heading">{check.title}</h3><p>{check.body}</p></article>)}</div></section>

        <section className={styles.faq}><h2 id={sectionId('Questions to ask every provider')} className="article-section-heading">Questions to ask every provider</h2><ul><li>Who employs, contracts with, supervises, and replaces the assigned person?</li><li>Which country and time zone will the work come from, and what coverage is actually included?</li><li>What evidence is returned with completed work, and who reviews the first sample?</li><li>How are passwords, personal data, customer records, financial access, and offboarding controlled?</li><li>Which tasks and decisions remain with the client, and how are urgent exceptions escalated?</li><li>What fees, minimum terms, software costs, notice periods, and handover duties apply?</li></ul></section>

        <section className={styles.cta}><p className={styles.eyebrow}>Start with the work</p><h2 id={sectionId('Scope the first assistant lane')} className="article-section-heading">Scope the first assistant lane</h2><p>Bring one recurring queue, a finished example, the tools involved, expected volume, approval rules, and the person who can review the first batch.</p><a href="/contact-us">Discuss a bounded assistant role</a></section>
      </EditorialLayout>
    </main>
    <Footer />
  </>;
}
