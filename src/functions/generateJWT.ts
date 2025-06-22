import { JWTPayload, SignJWT } from 'jose';

/**
 * Generates a JWT using the jose library.
 * @param payload - The payload to include in the token.
 * @param secret - The secret string used for signing.
 * @param expiresIn - Token expiration time (e.g., '1h', '10m')
 * @param alg - The signing algorithm (e.g., 'HS256', 'RS256'). Default is 'HS256'.
 *
 * @returns Promise<string> - The generated JWT as a string.
 */
export async function generateJWT(
  payload: JWTPayload,
  secret: string,
  expiresIn: string,
  alg: string = 'HS256',
): Promise<string> {
  const encoder = new TextEncoder();

  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(encoder.encode(secret));
}
