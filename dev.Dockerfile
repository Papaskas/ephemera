FROM node:22

WORKDIR /app

COPY . .

CMD ["yarn", "dev"]