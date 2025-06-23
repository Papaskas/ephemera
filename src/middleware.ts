import { NextRequest, NextResponse } from 'next/server';
import { NextConfig } from 'next';
import { COOKIES } from '@/domain/constants/cookies';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if(!request.cookies.has(COOKIES.REFRESH_TOKEN.NAME)) {
    const apiUrl = `${request.nextUrl.origin}/api/create-user`
    await fetch(apiUrl, { method: 'POST' })
  }

  return response
}

export const config: NextConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
