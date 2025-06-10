# Dev

## Quick start dev
1. Create and fill in the .env file

2. Install deps **on host**
```shell
  yarn install 
  npx prisma generate
```

3. Update /etc/hosts
```hosts
    127.0.0.1 domain.com
    127.0.0.1 www.domain.com
    127.0.0.1 prisma.domain.com
    127.0.0.1 traefik.domain.com
```

4. Run container:
```shell
  docker compose -f docker-compose.dev.yml up -d
```

# Prod

## Quick start prod
1. Fill in the .env file

2. Run container
```shell
  docker compose -f docker-compose.prod.yml up -d
```