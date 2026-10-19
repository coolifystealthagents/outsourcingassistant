import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcingassistant.com';

function cloudflareVisitorProtocol(value: string | null) {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as { scheme?: unknown };
    return parsed.scheme === 'http' || parsed.scheme === 'https' ? parsed.scheme : null;
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const host = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
  const visitorProtocol = cloudflareVisitorProtocol(request.headers.get('cf-visitor')) || forwardedProtocol || request.nextUrl.protocol.replace(':', '');
  const needsCanonicalHost = host === `www.${canonicalHost}`;
  const isCanonicalDomain = host === canonicalHost || host === `www.${canonicalHost}`;
  const needsHttps = isCanonicalDomain && visitorProtocol === 'http';

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
