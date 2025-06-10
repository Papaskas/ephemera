# Dev

## Quick start dev
1. Fill in the .env file

2. Install deps on host:
```bash
  yarn install 
  npx prisma generate
```

3. Run container:
```bash
  docker compose -f docker-compose.dev.yml up -d
```

# Prod

## Quick start prod
1. Fill in the .env file

2. Run container
```bash
  docker compose -f docker-compose.prod.yml up -d
```