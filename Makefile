# VisualDSA — run from monorepo root (see README.md, docs/STARTUP.md)
PNPM ?= pnpm

.DEFAULT_GOAL := help

.PHONY: help install env \
	db-up db-down db-reset db-wait db-generate db-push db-migrate \
	docker-up setup dev-api dev-web dev-stack prod prod-stop prod-logs \
	changeset version

help:
	@echo "VisualDSA — common targets"
	@echo ""
	@echo "  make setup          Full DB + repo prep: pnpm install, .env files, Postgres, prisma generate + push"
	@echo "  make dev-stack      ensure Postgres + schema, then API + web (concurrently)"
	@echo "  pnpm prod           build + run API + web under PM2 (Postgres must be up)"
	@echo ""
	@echo "  make install         pnpm install"
	@echo "  make env             create packages/db, apps/api, apps/web .env from *.example (if missing)"
	@echo "  make db-up           docker compose up -d postgres"
	@echo "  make docker-up       docker compose up -d (Postgres + pgAdmin)"
	@echo "  make db-down         docker compose down"
	@echo "  make db-reset        docker compose down -v && db-up (wipe volume)"
	@echo "  make db-wait         block until Postgres accepts connections"
	@echo "  make db-generate     prisma generate"
	@echo "  make db-push         prisma db push (schema -> DB, non-interactive)"
	@echo "  make db-migrate      prisma migrate dev (interactive)"
	@echo "  make dev-api | dev-web   single app dev servers"
	@echo "  make prod | prod-stop | prod-logs   PM2 process management"
	@echo ""
	@echo "  Versioning (Changesets):"
	@echo "  make changeset       Add a changeset (record a user-facing change)"
	@echo "  make version         Consume changesets -> bump versions + CHANGELOG.md"

install:
	$(PNPM) install

# Copy .env from examples when missing (never overwrites existing files)
env:
	@test -f packages/db/.env  || cp packages/db/.env.example  packages/db/.env
	@test -f apps/api/.env     || cp apps/api/.env.example     apps/api/.env
	@test -f apps/web/.env     || cp apps/web/.env.example     apps/web/.env

db-up:
	docker compose up -d postgres

docker-up:
	docker compose up -d

db-down:
	docker compose down

db-reset:
	docker compose down -v && docker compose up -d postgres

db-wait:
	sh -c 'until docker compose exec -T postgres pg_isready -U visualdsa -d visualdsa 2>/dev/null; do sleep 1; done'

db-generate:
	$(PNPM) run db:generate

db-push: env
	$(PNPM) run db:push

db-migrate: env
	$(PNPM) run db:migrate

db-deploy: env
	$(PNPM) run db:deploy

# One-shot: dependencies, env, Postgres, schema — then use make dev-stack
setup: install env db-up db-wait db-generate db-deploy
	@echo ""
	@echo "Setup complete. DATABASE_URL defaults: localhost:5434 (see packages/db/.env)."
	@echo "Start API + web:  make dev-stack"
	@echo "Or separately:    make dev-api    make dev-web"
	@echo "Production:       pnpm prod   (build + PM2)"

dev-api:
	$(PNPM) run dev:api

dev-web:
	$(PNPM) run dev:web

dev-stack: env
	$(PNPM) run dev:stack

prod:
	$(PNPM) run prod

prod-stop:
	$(PNPM) run prod:stop

prod-logs:
	$(PNPM) run prod:logs

# --- Versioning (Changesets) ---
# Record a user-facing change, then CI opens a "Version Packages" PR on main.
changeset:
	$(PNPM) run changelog

# Consume pending changesets: bump versions and update CHANGELOG.md (local).
version:
	$(PNPM) run version
