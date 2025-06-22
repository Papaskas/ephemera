export const COOKIES = {
  REFRESH_TOKEN: {
    NAME: 'refresh-token',
    MAX_AGE: 60 * 60 * 24 * 365,
    PATH: '/',
    HTTP_ONLY: false,
    SAME_SITE: 'lax',
    SECURE: process.env.NODE_ENV === "production",
  },

  ACCESS_TOKEN: {
    NAME: 'access-token',
    MAX_AGE: 60 * 15,
    PATH: '/',
    HTTP_ONLY: false,
    SAME_SITE: 'lax',
    SECURE: process.env.NODE_ENV === "production",
  },
} as const;
