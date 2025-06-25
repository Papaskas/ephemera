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

  return NextResponse.json({ refreshToken, accessToken })
}
