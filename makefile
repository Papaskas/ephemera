dev:
	docker compose -f docker-compose.dev.yml up -d

prisma-studio:
	npx prisma studio --port 5555

prod:
	docker compose -f docker-compose.prod.yml up -d