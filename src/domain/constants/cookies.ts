export const COOKIES = {
  USER: {
    NAME: 'publicId',
    MAX_AGE: 60 * 60 * 24 * 365,
    PATH: '/',
    HTTP_ONLY: true,
    SAME_SITE: 'lax',
  },
} as const;
