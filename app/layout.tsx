import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Outsourcing Assistant | Hire Filipino talent with a clear plan', template: '%s | Outsourcing Assistant' },
  description: 'Plan a well-scoped role for Filipino talent, with clear SOPs, access limits, onboarding steps, and owner review.',
  alternates: { canonical: site.url },
  openGraph: { title: 'Outsourcing Assistant', description: 'Practical role and handoff planning for teams hiring Filipino talent.', url: site.url, siteName: 'Outsourcing Assistant', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brand, url: site.url };
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.brand, url: site.url, publisher: { '@id': `${site.url}/#organization` } };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([org, website]) }} />{children}</body></html>;
}
