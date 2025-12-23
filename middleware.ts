import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get('auth_token')?.value === 'true';

  // Protect all /admin routes, except for the login page itself
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If the user is logged in, redirect them away from the login page
  if (pathname.startsWith('/admin/login') && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};
