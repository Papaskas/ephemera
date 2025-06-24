'use server'

import prisma from '@/lib/prisma';
import { randomUUID } from 'node:crypto';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/client';

export async function createUser(
  refreshToken: string,
  accessToken: string,
  createdAt: Date,
  userId: string = randomUUID(),
) {
  try {
    const user = await prisma.user.create({
      data: {
        userId: userId,
        createdAt: createdAt,
        refreshToken: {
          create: [
            { token: refreshToken }
          ]
        },
        accessToken: {
          create: [
            { token: accessToken }
          ]
        }
      },
    })

    return {
      id: user.id,
      userId: user.userId,
      createdAt: user.createdAt,
      refreshToken: refreshToken,
    }
  } catch (error) {
    switch (true) {
      case error instanceof PrismaClientKnownRequestError:
        console.error('Prisma known error: ', error.message);
        throw new Error('Database error: ' + error.message);

      case error instanceof PrismaClientUnknownRequestError:
        console.error('Prisma unknown error: ', error.message);
        throw new Error('Unknown database error: ' + error.message);

      case error instanceof PrismaClientValidationError:
        console.error('Prisma validation error :', error.message);
        throw new Error('Validation error: ' + error.message);

      case error instanceof TypeError:
        console.error('Type error:', error.message);
        throw new Error('Type error: ' + error.message);

      default:
        console.error('Unexpected error: ', error);
        throw error;
    }
  }
}
