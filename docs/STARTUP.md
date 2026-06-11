# Project start guideline (VisualDSA monorepo)

All paths below are relative to the monorepo root **`visualdsa/`** (this directory).

See also **[../README.md](../README.md)** and **[../AGENTS.md](../AGENTS.md)**.

---

## Prerequisites

| Tool        | Notes                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| **Node.js** | 20+                                                                    |
| **pnpm**    | 11+ (`npm install -g pnpm`)                                            |
| **Docker**  | For local **PostgreSQL** (recommended) via `compose.yaml`              |
| **make**    | Optional — for the convenience targets in `Makefile`                   |
| Optional    | **PostgreSQL 14+** on the host if you do not use Docker                |

---

## 1. Open the monorepo

```bash
cd visualdsa
```

---

## 2. Quick start (recommended)

```bash
make setup      # pnpm install + .env files + Postgres + prisma generate & push
make dev-stack  # API + web (concurrently) against the Docker DB
```

That is the full local stack. Skip to [§5. URLs and ports](#5-urls-and-ports).

---

## 3. Database (Docker — recommended)

Postgres is defined in **`compose.yaml`**. The server listens on host port **`5434`**.

```bash
pnpm db:up      # Postgres only      (or: make db-up)
pnpm docker:up  # Postgres + pgAdmin (or: make docker-up)
```

Apply the Prisma schema from the monorepo:

```bash
pnpm db:generate   # generate the Prisma client (packages/db/prisma/generated)
pnpm db:push       # push schema -> DB, non-interactive (or: pnpm db:migrate)
```

Reset the data volume and start clean:

```bash
pnpm db:reset
```

### pgAdmin

pgAdmin starts with `pnpm docker:up` (not with `pnpm db:up`).

- **URL:** `http://localhost:8123/pgadmin`
- **Email:** `admin@visualdsa.com`
- **Password:** `visualdsa`

When adding a server in pgAdmin, connect over the Docker network:

- **Host:** `postgres` (container name — **not** localhost)
- **Port:** `5432` (container port — **not** 5434)
- **Username / Password / Database:** `visualdsa`

### Schema management

The Prisma schema lives in **`packages/db/prisma/schema/`** (multi-file). Use:

```bash
pnpm db:push        # sync schema (dev)
pnpm db:migrate     # create a migration (dev, interactive)
pnpm db:deploy      # apply migrations (production-like)
pnpm db:studio      # Prisma Studio GUI
```

Create **`packages/db/.env`** from the example (done by `make env`):

```bash
cp packages/db/.env.example packages/db/.env
```

---

## 4. Environment files

`make env` (run by `make setup`) copies these from `*.example` only if missing:

| File                 | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `packages/db/.env`   | `DATABASE_URL` for Prisma CLI                      |
| `apps/api/.env`      | `DATABASE_URL`, `PORT`, `NODE_ENV` for the Nest API|
| `apps/web/.env`      | `NEXT_PUBLIC_API_URL` (optional)                   |

Default `DATABASE_URL`: `postgresql://visualdsa:visualdsa@localhost:5434/visualdsa?schema=public`

---

## 5. URLs and ports

| Service             | Default                       |
| ------------------- | ----------------------------- |
| **Web app**         | `http://localhost:3000/`      |
| **API**             | `http://localhost:4000/`      |
| **Swagger docs**    | `http://localhost:4000/api/docs` |
| **Postgres (host)** | `localhost:5434`             |
| **pgAdmin**         | `http://localhost:8123/pgadmin` |

---

## 6. Run the stack

### Option A — Two terminals

```bash
pnpm dev:api   # Terminal 1
pnpm dev:web   # Terminal 2
```

### Option B — Postgres + API + Web in one

```bash
pnpm dev:stack   # (or: make dev-stack)
```

`dev:stack` brings up Postgres, waits for it, regenerates + pushes the schema,
frees ports 4000/3000, then runs API + web with `concurrently`.

### Option C — Turbo (no DB orchestration)

```bash
pnpm dev        # turbo dev — starts every workspace's dev script
```

---

## 7. Health check

```bash
curl -s http://localhost:4000/health
# {"status":"ok","timestamp":"..."}
```

If `/api/...` 500s, the schema is likely not applied — run `pnpm db:push`.

---

## 8. Production (PM2 on the host)

```bash
pnpm prod          # pnpm build + PM2 start (API + web)
pnpm prod:status   # list processes
pnpm prod:logs     # tail logs (api + web)
pnpm prod:stop     # stop + delete both
```

PM2 runs in fork mode via **`ecosystem.config.cjs`**, with `PM2_HOME` pinned to
the repo's `.pm2/` (see `scripts/repo-pm2.mjs`). Ports: API `4000`, web `3000`.

```bash
pnpm prod:ports       # show what's listening on 4000/3000
pnpm prod:kill-ports  # free 4000/3000 (stops PM2 first)
```

---

## 9. Port conflicts

| Problem              | What to do                                                                  |
| -------------------- | --------------------------------------------------------------------------- |
| **`EADDRINUSE` 4000**| Set another `PORT` in `apps/api/.env`.                                       |
| **`EADDRINUSE` 3000**| Change the port in the web dev/start scripts.                                |
| **5434 in use**      | Change the host port in `compose.yaml` **and** `DATABASE_URL` in the `.env`s.|

---

## 10. Fresh-checkout setup order

Generated code is gitignored, so after `git clone`:

```bash
pnpm install
DATABASE_URL="postgresql://visualdsa:visualdsa@localhost:5434/visualdsa?schema=public" pnpm --filter @visualdsa/db db:generate
pnpm codegen   # build db -> OpenAPI spec -> orval api-client
make setup     # then bring up Postgres + push schema
```

`pnpm typecheck` / `pnpm build` only pass once `db:generate` and `codegen` have
run (see **[../AGENTS.md](../AGENTS.md)** → Setup).
