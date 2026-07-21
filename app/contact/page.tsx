import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request a managed staffing plan for Filipino talent. Share the role, tasks, tools, schedule, and quality needs.',
};

export default function Contact() {
  const siteUrl = site.url;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <div className="container two">
          <div>
            <p className="eyebrow">Staffing intake</p>
            <h1>Request a managed staffing plan</h1>
            <p className="lead">Tell us what you want handled. We&apos;ll use the details to shape a practical role for Filipino talent, including the tools, schedule, access limits, and review plan.</p>
            <div className="card">
              <h2>What a Philippines-focused staffing partner can map</h2>
              <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Questions worth answering first</h2>
              <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>
            <p className="callout"><b>Custom staffing fit:</b> {staffingFitNote}</p>
          </div>
          <form className="card" action="/thank-you">
            <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>What role or work do you want staffed?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>What matters most?<br />
              <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
                <option>Finding the right Filipino talent</option>
                <option>Quality control and reporting</option>
                <option>Coverage, schedule, and time zone</option>
                <option>Tool access and data safety</option>
                <option>Adding another role</option>
              </select>
            </label>
            <p className="form-disclosure">Outsourcing Assistant is an independent informational site. We only accept requests for Filipino talent and may route your inquiry to a Philippines-focused staffing partner.</p>
            <button className="btn" type="submit">Request staffing plan</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
