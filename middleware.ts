import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcingassistant.com';

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const host = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
  const needsCanonicalHost = host === `www.${canonicalHost}`;
  const isCanonicalDomain = host === canonicalHost || host === `www.${canonicalHost}`;
  const needsHttps = isCanonicalDomain && forwardedProtocol === 'http';

  if (!needsCanonicalHost && !needsHttps) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = 'https:';
  destination.host = canonicalHost;
  destination.port = '';
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
