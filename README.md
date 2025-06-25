# 🚀 Ephemera

> Modern social network built with Next.js, Prisma, and Docker

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start---dev)
- [Database Management](#-database-management)
- [Available Commands](#-available-commands)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `v16+`
- **Docker** & **Docker Compose**
- **yarn** package manager

## ⚡ Quick Start - dev

### Environment Setup

> 📝 Note: Edit the .env file and fill in the required environment variables

```shell
# Install dependencies
yarn install

# Start Docker services (database, redis, etc.)
yarn docker:dev

# Run database migrations
yarn db:migrate

# Start the application
yarn dev
```

> 🎉 That's it! Your application should be running at http://localhost:3000

## 🗄 Database Management

### Prisma Studio

Launch the database GUI to view and edit your data:

```shell
yarn db:studio
```

> 📍 Access: http://localhost:5555

## 📜 Available Commands

```shell
# 🔥 Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint

# 🐳 Docker
yarn docker:dev   # Start development containers
yarn docker:prod  # Start production containers

# 🗃 Database
yarn db:studio    # Open Prisma Studio
yarn db:migrate   # Run migrations
yarn db:generate  # Generate Prisma client
yarn db:seed      # Seed database
yarn db:reset     # Reset database
```

## 🌐 Production Deployment

### Quick Start Production

> 📝 Note: Edit the .env file and fill in the required environment variables

```shell
# Deploy
docker compose -f docker-compose.prod.yml up -d
```
