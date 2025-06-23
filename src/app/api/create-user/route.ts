import { NextResponse } from 'next/server';
import { createUser } from '@/functions/createUser';
import { generateJWT } from '@/functions/JWT';
import {
  ACCESS_TOKEN_EXPIRES,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES,
  REFRESH_TOKEN_SECRET
} from '@/domain/constants/JWT';
import { randomUUID } from 'node:crypto';
import { COOKIES } from '@/domain/constants/cookies';

export async function POST() {
  const createdAt = new Date()
  const userId = randomUUID()

  const refreshToken = await generateJWT({ userId, createdAt }, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES)
  const accessToken = await generateJWT({ userId, createdAt }, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES)

  await createUser(
    refreshToken,
    accessToken,
    createdAt,
    userId
  )

  const response = NextResponse.next()

  response.cookies.set(COOKIES.REFRESH_TOKEN.NAME, refreshToken, {
    httpOnly: COOKIES.REFRESH_TOKEN.HTTP_ONLY,
    path: COOKIES.REFRESH_TOKEN.PATH,
    sameSite: COOKIES.REFRESH_TOKEN.SAME_SITE,
    secure: COOKIES.REFRESH_TOKEN.SECURE,
    maxAge: COOKIES.REFRESH_TOKEN.MAX_AGE
  })

  response.cookies.set(COOKIES.ACCESS_TOKEN.NAME, accessToken, {
    httpOnly: COOKIES.ACCESS_TOKEN.HTTP_ONLY,
    path: COOKIES.ACCESS_TOKEN.PATH,
    sameSite: COOKIES.ACCESS_TOKEN.SAME_SITE,
    secure: COOKIES.ACCESS_TOKEN.SECURE,
    maxAge: COOKIES.ACCESS_TOKEN.MAX_AGE
  })

  return response
}
