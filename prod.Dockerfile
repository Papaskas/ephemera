FROM node:22 AS base

FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .

RUN yarn build

FROM base AS runner

WORKDIR /app

RUN npx prisma generate

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
