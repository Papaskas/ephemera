import { NextRequest, NextResponse } from 'next/server';
import { NextConfig } from 'next';
import { COOKIES } from '@/domain/constants/COOKIES';
import { isValidJWT } from '@/functions/JWT';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '@/domain/constants/JWT';
import { apiClient } from '@/lib/axios';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(COOKIES.ACCESS_TOKEN.NAME)?.value;
  const refreshToken = request.cookies.get(COOKIES.REFRESH_TOKEN.NAME)?.value;

  const response = NextResponse.next();

  if (!refreshToken || !await isValidJWT(refreshToken, REFRESH_TOKEN_SECRET)) {
    const apiUrl = `${request.nextUrl.origin}/api/create-user`
    const res = await apiClient.post<{ refreshToken: string, accessToken: string }>(apiUrl)

    response.cookies.set(COOKIES.REFRESH_TOKEN.NAME, res.data.refreshToken, {
      httpOnly: COOKIES.REFRESH_TOKEN.HTTP_ONLY,
      path: COOKIES.REFRESH_TOKEN.PATH,
      sameSite: COOKIES.REFRESH_TOKEN.SAME_SITE,
      secure: COOKIES.REFRESH_TOKEN.SECURE,
      maxAge: COOKIES.REFRESH_TOKEN.MAX_AGE
    })

    response.cookies.set(COOKIES.ACCESS_TOKEN.NAME, res.data.refreshToken, {
      httpOnly: COOKIES.ACCESS_TOKEN.HTTP_ONLY,
      path: COOKIES.ACCESS_TOKEN.PATH,
      sameSite: COOKIES.ACCESS_TOKEN.SAME_SITE,
      secure: COOKIES.ACCESS_TOKEN.SECURE,
      maxAge: COOKIES.ACCESS_TOKEN.MAX_AGE
    })
  } else if(!accessToken || !await isValidJWT(accessToken, ACCESS_TOKEN_SECRET)) {
    const apiUrl = `${request.nextUrl.origin}/api/update-token`;
    const res = await apiClient.post<{ accessToken: string }>(apiUrl, { refreshToken });

    response.cookies.set(COOKIES.ACCESS_TOKEN.NAME, res.data.accessToken, {
      httpOnly: COOKIES.ACCESS_TOKEN.HTTP_ONLY,
      path: COOKIES.ACCESS_TOKEN.PATH,
      sameSite: COOKIES.ACCESS_TOKEN.SAME_SITE,
      secure: COOKIES.ACCESS_TOKEN.SECURE,
      maxAge: COOKIES.ACCESS_TOKEN.MAX_AGE,
    })
  }

  return response
}

export const config: NextConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
