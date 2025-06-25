import { NextRequest, NextResponse } from 'next/server';
import { generateJWT, verifyJWT } from '@/functions/JWT';
import { ACCESS_TOKEN_EXPIRES, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '@/domain/constants/JWT';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json()

    if (!refreshToken || typeof refreshToken !== 'string')
      return NextResponse.json({ error: 'No refresh token provided' }, { status: 401 })

    const { userId, createdAt } = await verifyJWT(refreshToken, REFRESH_TOKEN_SECRET)

    const accessToken = await generateJWT(
      { userId: userId, createdAt: createdAt },
      ACCESS_TOKEN_SECRET,
      ACCESS_TOKEN_EXPIRES
    )

    return  NextResponse.json({ accessToken })
  } catch(error) {

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
  }
}
