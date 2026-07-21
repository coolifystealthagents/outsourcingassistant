import { blogPosts, roles, site, staffingOffer, staffingProcess } from './data';
import { Footer, Header, JsonLd } from './components';

const roleIcons = ['↗', '⌁', '◎', '▦', '≋', '◇'];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    name: 'Outsourcing assistant staffing and handoff planning',
    description: 'Plan a clear assistant role, safe handoff, access rules, and first-week review before you hire.',
    url: site.url,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` },
  };

  return (
    <>
      <Header />
      <main className="oa-home" data-design="delegation-desk-2026">
        <JsonLd data={schema} />

        <section className="oa-hero">
          <div className="oa-orbit oa-orbit-one" />
          <div className="oa-orbit oa-orbit-two" />
          <div className="container oa-hero-grid">
            <div className="oa-hero-copy">
              <p className="oa-kicker"><span /> Filipino talent, with an owner&apos;s eye</p>
              <h1>Get the work off your plate. Keep control of the outcome.</h1>
              <p className="oa-hero-lead">Tell us what keeps landing back on your desk. We&apos;ll turn it into a clear role for Filipino talent, with a practical handoff, firm access rules, and close review during the first few weeks.</p>
              <div className="oa-actions">
                <a className="oa-button oa-button-coral" href="/contact">Request staffing plan <span>↗</span></a>
                <a className="oa-text-link" href="#role-board">See what to delegate <span>↓</span></a>
              </div>
              <p className="oa-routing-note">Requests are limited to Filipino talent and may be handled by a Philippines-focused staffing partner.</p>
              <div className="oa-hero-notes" aria-label="Staffing approach">
                <div><strong>Scope before search</strong><span>Start with the work, not a generic job title.</span></div>
                <div><strong>Guardrails from day one</strong><span>Decide who can approve, send, refund, or change access.</span></div>
              </div>
            </div>

            <div className="oa-visual" aria-label="Assistant handoff planning example">
              <div className="oa-image-frame">
                <img src="/assistant-collaboration.jpg" alt="A small business team reviewing work together at a table" />
                <span className="oa-image-label">A role built around your week</span>
              </div>
              <div className="oa-desk-card">
                <div className="oa-desk-head">
                  <div><span className="oa-status-dot" /> Handoff board</div>
                  <b>Week 01</b>
                </div>
                <div className="oa-desk-row"><span className="oa-check">✓</span><p><b>Inbox triage</b><small>Draft first. Owner sends.</small></p><em>Daily</em></div>
                <div className="oa-desk-row"><span className="oa-check">✓</span><p><b>CRM follow-up</b><small>Use approved notes and fields.</small></p><em>3× wk</em></div>
                <div className="oa-desk-row"><span className="oa-lock">⌁</span><p><b>Refund requests</b><small>Prepare details. Manager approves.</small></p><em>Review</em></div>
                <div className="oa-desk-foot"><span>5 tasks scoped</span><span>15 min review block</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="oa-signal-strip" aria-label="Planning guidance">
          <div className="container oa-signal-grid">
            <p><span>Planning guidance</span> A sensible first handoff is small enough to review.</p>
            <div><strong>5–10</strong><span>recurring tasks</span></div>
            <div><strong>7–21</strong><span>days to ramp*</span></div>
            <div><strong>1</strong><span>named reviewer</span></div>
          </div>
          <p className="oa-guidance-note container">*A planning range, not a promised result. Timing depends on scope, tools, access, and how ready the examples are.</p>
        </section>

        <section className="container oa-section" id="role-board">
          <div className="oa-section-intro">
            <p className="oa-kicker oa-kicker-dark"><span /> The role board</p>
            <h2>The work is real. The role should be too.</h2>
            <p>"Help with admin" is where messy hires begin. Name the queue, the tools, and the decisions that stay with you.</p>
          </div>
          <div className="oa-role-grid">
            {roles.map((role, index) => (
              <a className="oa-role-card" href={`/contact?role=${slugify(role.name)}`} key={role.name}>
                <span className="oa-role-icon">{roleIcons[index]}</span>
                <span className="oa-role-num">0{index + 1}</span>
                <h3>{role.name}</h3>
                <p>{role.tasks}.</p>
                <div><small>Keep an eye on</small><strong>{role.risk}</strong></div>
                <b className="oa-card-link">Open role guide ↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="oa-control-section">
          <div className="container oa-control-grid">
            <div className="oa-control-copy">
              <p className="oa-kicker"><span /> The delegation desk</p>
              <h2>A handoff you can check at a glance.</h2>
              <p>Good delegation is pleasantly boring. The task has an owner, the assistant knows the limit, and someone reviews the first attempts before the work runs on its own.</p>
              <a className="oa-button oa-button-lime" href="/resources/assistant-sop-handoff-checklist">Use the handoff checklist <span>↗</span></a>
            </div>
            <div className="oa-control-board">
              <div className="oa-control-top"><b>Operations / assistant lane</b><span>Owner review: Fridays</span></div>
              <div className="oa-lane-labels"><span>Work queue</span><span>Access</span><span>Done when</span></div>
              <div className="oa-control-row"><p><b>Customer replies</b><small>Use saved answers for common questions</small></p><span className="oa-pill">Draft only</span><em>Inbox at zero</em></div>
              <div className="oa-control-row"><p><b>Lead follow-up</b><small>Update status after each approved message</small></p><span className="oa-pill oa-pill-green">CRM edit</span><em>Next step set</em></div>
              <div className="oa-control-row"><p><b>Weekly report</b><small>Flag missing numbers instead of filling gaps</small></p><span className="oa-pill">View only</span><em>Sources linked</em></div>
              <div className="oa-control-bottom"><span><i /> Clear to run</span><span><i /> Needs approval</span><span><i /> Owner only</span></div>
            </div>
          </div>
        </section>

        <section className="container oa-section oa-process-section">
          <div className="oa-section-intro oa-process-intro">
            <p className="oa-kicker oa-kicker-dark"><span /> How the plan comes together</p>
            <h2>Start narrow. Learn fast. Add the next queue.</h2>
          </div>
          <div className="oa-process-grid">
            {staffingProcess.map((item, index) => (
              <article key={item.step}>
                <div><span>{item.step.padStart(2, '0')}</span>{index < staffingProcess.length - 1 && <i />}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="oa-fit-section">
          <div className="container oa-fit-grid">
            <div className="oa-fit-title">
              <p className="oa-kicker"><span /> A quick fit check</p>
              <h2>Managed support makes sense when the work repeats, but management time is tight.</h2>
            </div>
            <div className="oa-fit-cards">
              <article className="oa-fit-card oa-fit-yes">
                <span>Likely a fit</span>
                <ul>
                  {staffingOffer.fit.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="oa-fit-card oa-fit-wait">
                <span>Keep it with your team for now</span>
                <ul>
                  <li>The work changes every hour and nobody can explain the decision rules.</li>
                  <li>The role owns payments, legal advice, medical decisions, or final customer promises.</li>
                  <li>You need a local employee, team leader, or in-person operator.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="container oa-section oa-guides">
          <div className="oa-guides-head">
            <div>
              <p className="oa-kicker oa-kicker-dark"><span /> Field notes</p>
              <h2>Read these before you hand over a login.</h2>
            </div>
            <a href="/blog">Browse all guides ↗</a>
          </div>
          <div className="oa-guide-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <a href={`/blog/${post.slug}`} key={post.slug}>
                <span>{String(index + 1).padStart(2, '0')} / {post.minutes} min</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <b>Read guide ↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="container oa-closing">
          <div>
            <p className="oa-kicker"><span /> Your next move</p>
            <h2>Bring the messy task list. Leave with a role someone can actually own.</h2>
          </div>
          <div>
            <p>Share the work, schedule, tools, and sticking points. A Philippines-focused staffing partner can turn it into a practical scope for Filipino talent.</p>
            <a className="oa-button oa-button-coral" href="/contact">Request staffing plan <span>↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
