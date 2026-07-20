import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Outsourcing Assistant | Simple virtual assistant hiring guides', template: '%s | Outsourcing Assistant' },
  description: 'Simple, practical guides for staffing details, SOPs, handoffs, onboarding, risk controls, and managing outsourcing assistant support.',
  alternates: { canonical: site.url },
  openGraph: { title: 'Outsourcing Assistant', description: 'Practical virtual assistant hiring guides for busy teams.', url: site.url, siteName: 'Outsourcing Assistant', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brand, url: site.url };
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.brand, url: site.url, publisher: { '@id': `${site.url}/#organization` } };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([org, website]) }} />{children}</body></html>;
}
