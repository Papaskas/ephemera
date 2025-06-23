import { jwtVerify, SignJWT } from 'jose'
import { TokenPayload } from '@/types/token-payload'

/**
 * Generates a JWT using the jose library
 *
 * @param payload - The payload to include in the token.
 * @param secret - The secret string used for signing.
 * @param expiresIn - Token expiration time (e.g., '1h', '10m')
 * @param alg - The signing algorithm (e.g., 'HS256', 'RS256'). Default is 'HS256'.
 *
 * @returns Promise<string> - The generated generateJWT as a string.
 */
export const generateJWT = async (
  payload: TokenPayload,
  secret: string,
  expiresIn: string,
  alg: string = 'HS256',
): Promise<string> => {
  const encoder = new TextEncoder()

  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(encoder.encode(secret))
}

export const verifyJWT = async (
  token: string,
  tokenSecret: string,
): Promise<TokenPayload> => {
  const encoder = new TextEncoder()
  const { payload } = await jwtVerify(token, encoder.encode(tokenSecret))

  if (!payload.userId || !payload.createdAt)
    throw new Error('Invalid token payload')

  return {
    userId: String(payload.userId),
    createdAt: new Date(payload.createdAt as string | number),
  }
}
