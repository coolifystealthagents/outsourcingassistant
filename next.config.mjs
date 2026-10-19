/** @type {import("next").NextConfig} */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com",
  "connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
];

const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    // The host condition is evaluated by Next rather than trusting a forwarded-host
    // header. HSTS/CSP upgrade HTTP; the edge proxy remains responsible for its
    // known-client-protocol redirect because that signal cannot be trusted here.
    return [
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/pricing', destination: '/contact-us', permanent: true },
      { source: '/cancellation', destination: '/cancellation-policy', permanent: true },
      { source: '/blog/page/1', destination: '/blog', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.outsourcingassistant.com' }],
        destination: 'https://outsourcingassistant.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
