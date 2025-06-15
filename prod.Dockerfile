FROM node:22 AS base

FROM base AS builder

WORKDIR /app

#ARG NEXT_PUBLIC_BACKEND_URL
#ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

COPY . .

RUN npm install --loglevel=info

#COPY src ./src
#COPY public ./public
#COPY next.config.ts .
#COPY tsconfig.json .
#COPY prisma ./prisma
#
## RUN npm run db:generate
#
#RUN npm run build
#
#FROM base AS runner
#
#WORKDIR /app
#
#ARG NODE_ENV
#ENV NODE_ENV=$NODE_ENV
#
#RUN addgroup --system --gid 1001 nodejs
#RUN adduser --system --uid 1001 nextjs
#USER nextjs
#
#COPY --from=builder /app/public ./public
#
#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
#
#EXPOSE 3000
#
#CMD ["node", "server.js", "-H", "0.0.0.0", "-p", "3000"]
