import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import { site } from '../../data';

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};

  const url = `${site.url}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.summary, url, type: 'website' },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${site.url}/services/${service.slug}`;
  const howToId = `${url}#launch-plan`;
  const image = 'image' in service ? service.image : undefined;
  const imageAlt = 'imageAlt' in service ? service.imageAlt : '';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.summary,
        url,
        serviceOutput: 'Assistant talent recruited and hired exclusively from the Philippines',
        hasPart: { '@id': howToId },
      },
      {
        '@type': 'HowTo',
        '@id': howToId,
        name: `How to launch ${service.title.toLowerCase()} support`,
        step: service.launch.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="fleet-main service-detail" data-service-detail={service.slug}>
        <JsonLd data={schema} />
        <section className={`fleet-hero ${image ? 'service-hero-rich' : ''}`}>
          <div className="container service-hero-grid">
            <div>
              <p className="eyebrow">Filipino assistant service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.summary}</p>
              <a className="btn primary" href={`/contact?role=${service.slug}`}>Discuss this service</a>
            </div>
            {image && (
              <figure className="service-hero-image">
                <img src={image} alt={imageAlt} />
                <figcaption>Start with clear calendar rules, then let a Filipino assistant prepare the routine updates.</figcaption>
              </figure>
            )}
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <article><h2>Work this role can support</h2><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h2>Controls to set first</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article id="launch-plan"><h2>Practical launch plan</h2><ol>{service.launch.map((item) => <li key={item}>{item}</li>)}</ol></article>
          </div>
          {service.slug === 'executive-calendar-management' && (
            <div className="container calendar-owner-note">
              <div><span>Owner keeps</span><strong>Priorities, sensitive meetings, and final declines</strong></div>
              <p>The assistant prepares the calendar work. The executive or named manager makes the calls that change priorities or commit someone&apos;s time.</p>
              <a href="/resources/assistant-sop-handoff-checklist">Use the SOP handoff checklist <span aria-hidden="true">↗</span></a>
            </div>
          )}
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
