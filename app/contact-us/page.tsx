import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";


export const metadata: Metadata = { title: "Contact Us | Outsourcing Assistant Support", description: "Book a free consultation to scope reliable Filipino virtual assistant support for your business.", alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true } };
const services = [
  ["Executive support", "Protect calendars, triage inboxes, prepare meetings, and keep executive follow-up visible."],
  ["Operations coordination", "Maintain trackers, update systems, coordinate vendors, and move routine workflows forward."],
  ["Customer follow-up", "Manage approved follow-up, appointment coordination, CRM notes, and escalation queues."],
  ["Research and reporting", "Collect source-backed information, prepare recurring reports, and flag exceptions for review."],
];
const controls = [
  ["Documented role brief", "Define recurring tasks, examples, systems, priorities, and what a complete handoff looks like."],
  ["Useful working overlap", "Choose coverage hours that support collaboration while keeping response expectations realistic."],
  ["Manager-led review", "Use a named owner, regular check-ins, and a simple scorecard to keep delegated work on track."],
];


export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Delegation built around your workflow</p><h1>Build a Filipino assistant role that actually fits.</h1><p className="tc-lead">Tell us which recurring work, tools, hours, and outcomes matter most. We’ll help scope an outsourced assistant role with clear ownership, useful overlap, and manager review.</p><div className="tc-proof-row"><span>35+ industries</span><span>Philippines talent specialists</span><span>Free consultation</span></div><a className="tc-text-link" href="#assistant-support">Explore the delegation plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Quality review</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="assistant-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where outsourcing can help</p><h2>Delegate recurring work without losing visibility.</h2></div><p>The best outsourced assistant roles have repeatable inputs, documented outputs, and a manager who owns priorities, decisions, and review.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-testimonials"><div className="container"><p className="tc-kicker">A practical operating model</p><h2>Delegation with visible ownership.</h2><div className="tc-quote-grid">{controls.map(([title,body])=><article key={title}><div aria-hidden="true">✓</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Role clarity comes before recruiting.</h2><p>We’ll map the operating conditions that help a Filipino assistant stay useful, secure, and easy to manage.</p></div><ul><li>Recurring tasks and decision boundaries</li><li>Tools, permissions, and information access</li><li>Manager ownership and review cadence</li><li>Privacy, urgency, and escalation triggers</li><li>Examples, templates, and definition of done</li><li>Coverage hours and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/illustrations/getillustrations/grain-teamwork/delegation-team-planning.webp" width="1400" height="1400" alt="Filipino virtual assistant and manager planning a clear delegation workflow"/><div><p className="tc-kicker">Why structure matters</p><h2>Every handoff should make ownership clearer.</h2><p>We shape roles around documented inputs, named owners, secure access, useful overlap, and unmistakable escalation points—so capacity grows without creating management fog.</p><a href="#contactPageForm">Scope my outsourced assistant role →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by StealthAgents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better role brief</p><h2>Build outsourced support your team can confidently rely on.</h2><p>Share the work, systems, hours, and boundaries. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}

