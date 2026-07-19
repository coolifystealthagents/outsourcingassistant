import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcingassistant.com'),
  title: { default: 'Outsourcing Assistant | Simple virtual assistant hiring guides', template: '%s | Outsourcing Assistant' },
  description: 'Simple, practical guides for hiring, pricing, onboarding, and managing outsourcing assistant support.',
  openGraph: { title: 'Outsourcing Assistant', description: 'Practical virtual assistant hiring guides for busy teams.', url: 'https://outsourcingassistant.com', siteName: 'Outsourcing Assistant', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
