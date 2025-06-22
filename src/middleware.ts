import { NextRequest, NextResponse } from 'next/server';
import { NextConfig } from 'next';
import { COOKIES } from '@/domain/constants/cookies';

type Res = {
  refreshToken: string
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if(!request.cookies.has(COOKIES.REFRESH_TOKEN.NAME)) {
    const apiUrl = `${request.nextUrl.origin}/api/create-user`;
    const apiResponse = await fetch(apiUrl, { method: 'POST' });
    const data = await apiResponse.json() as Res;

    response.cookies.set(COOKIES.REFRESH_TOKEN.NAME, data.refreshToken, {
      httpOnly: COOKIES.REFRESH_TOKEN.HTTP_ONLY,
      path: COOKIES.REFRESH_TOKEN.PATH,
      sameSite: COOKIES.REFRESH_TOKEN.SAME_SITE,
      secure: COOKIES.REFRESH_TOKEN.SECURE,
      maxAge: COOKIES.REFRESH_TOKEN.MAX_AGE
    });
  }

  return response
}

export const config: NextConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
