FROM node:22 AS base

FROM base AS builder

WORKDIR /app

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

COPY .yarnrc.yml yarn.lock package.json ./

RUN corepack enable

RUN yarn install --immutable

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .
COPY prisma ./prisma

RUN yarn db:generate

RUN yarn build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

ARG PORT
ENV PORT=$PORT

ARG HOSTNAME
ENV HOSTNAME=$HOSTNAME

CMD ["node", "server.js"]
