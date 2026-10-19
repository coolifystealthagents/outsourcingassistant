import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';
import './contact.css';
import './image-fix.css';

export const metadata: Metadata = { title: "Contact Us for Filipino Assistant Staffing", description: "Request a consultation to scope reliable Filipino virtual assistant support for your business.", alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true } };

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero" aria-labelledby="contact-title"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Delegation built around your workflow</p><h1 id="contact-title">Build a Filipino assistant role that actually fits.</h1><p className="tc-lead">Tell us which recurring work, tools, hours, and outcomes matter most. We will help scope an outsourced assistant role with clear ownership and manager review.</p><div className="tc-proof-row"><span>Philippines talent specialists</span><span>Clear approval boundaries</span><span>Consultation request</span></div><TestimonialsRail contact/></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-parent-proof" aria-labelledby="stealth-team-title"><div className="container tc-parent-grid">
      <figure><img src="/brand/stealth-agents-team.png" width="600" height="197" alt="Official Stealth Agents talent team in Bacolod"/><figcaption className="official-team-plate"><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="Stealth Agents"/><strong>Official team, Bacolod</strong></figcaption></figure>
      <div><p className="tc-kicker">Managed delivery partner</p><h2 id="stealth-team-title">Supported by the StealthAgents team</h2><p>Stealth Agents supports recruiting, account management, training, and ongoing service operations. Outsourcing Assistant remains your planning guide while the parent team provides the managed operating structure behind a successful assistant engagement.</p><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about Stealth Agents</a></div>
    </div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/illustrations/getillustrations/grain-teamwork/delegation-team-planning.webp" width="1400" height="1400" alt="Filipino virtual assistant and manager planning a documented delegation workflow"/><div><p className="tc-kicker">Why structure matters</p><h2>Every handoff should make ownership clearer.</h2><p>We shape roles around documented inputs, named owners, secure access, useful overlap, and unmistakable escalation points, so capacity grows without creating management fog.</p><a href="#contactPageForm">Scope my outsourced assistant role</a></div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Role clarity comes before recruiting.</h2><p>We map the operating conditions that help a Filipino assistant stay useful, secure, and easy to manage.</p></div><ul><li>Recurring tasks and decision boundaries</li><li>Tools, permissions, and information access</li><li>Manager ownership and review cadence</li><li>Privacy, urgency, and escalation triggers</li><li>Examples, templates, and definition of done</li><li>Coverage hours and first-month scorecard</li></ul></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better role brief</p><h2>Build outsourced support your team can confidently rely on.</h2><p>Share the work, systems, hours, and boundaries. We will help define the role and next steps.</p></div><a href="#contactPageForm">Start the consultation request</a></section>
  </main><Footer/>
</>}
