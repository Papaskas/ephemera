import { NextResponse } from 'next/server';
import { createUser } from '@/functions/createUser';
import { generateJWT } from '@/functions/generateJWT';
import { REFRESH_TOKEN_EXPIRES, REFRESH_TOKEN_SECRET } from '@/domain/constants/JWT';
import { randomUUID } from 'node:crypto';

export async function POST() {
  const createdAt = new Date()
  const userId = randomUUID()

  const refreshToken = await generateJWT({ userId, createdAt }, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES)

  await createUser(
    refreshToken,
    createdAt,
    userId
  )

  return NextResponse.json({ refreshToken })
}
