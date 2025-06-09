# Dev

## Quick start dev
Install deps on host:
```bash
  yarn install 
  npx prisma generate
```

Run container:
```bash
  docker compose -f docker-compose.dev.yml up -d
```

# Prod

## Quick start prod
Run container
```bash
  docker compose -f docker-compose.prod.yml up -d
```