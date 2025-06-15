# 🚀 Ephemera

> Modern web application built with Next.js, Prisma, and Docker

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Database Management](#-database-management)
- [Available Commands](#-available-commands)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `v16+`
- **Docker** & **Docker Compose**
- **npm** package manager

## ⚡ Quick Start

### Environment Setup

> 📝 Note: Edit the .env file and fill in the required environment variables

```shell
# Install dependencies
npm install

# Start Docker services (database, redis, etc.)
npm run docker:dev

# Run database migrations
npm run db:migrate

# Start the application
npm run dev
```

> 🎉 That's it! Your application should be running at http://localhost:3000

## 🗄 Database Management

### Prisma Studio

Launch the database GUI to view and edit your data:

```shell
npm run db:studio
```

> 📍 Access: http://localhost:5555

## 📜 Available Commands

```shell
# 🔥 Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# 🐳 Docker
npm run docker:dev   # Start development containers
npm run docker:prod  # Start production containers
npm run docker:down  # Stop all containers

# 🗃 Database
npm run db:studio    # Open Prisma Studio
npm run db:migrate   # Run migrations
npm run db:generate  # Generate Prisma client
npm run db:seed      # Seed database
npm run db:reset     # Reset database
```

## 🌐 Production Deployment

### Quick Start Production

> 📝 Note: Edit the .env file and fill in the required environment variables

```shell
# Deploy
docker compose -f docker-compose.prod.yml up -d
```
