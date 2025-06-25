import { JWTPayload } from "jose"

export type TokenPayload = JWTPayload & {
  userId: string,
  createdAt: Date,
}
