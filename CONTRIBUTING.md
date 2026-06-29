# Contributing to VisualDSA

Thanks for your interest in contributing to VisualDSA — the interactive classroom for
data structures and algorithms. This is a pnpm + Turborepo monorepo: a Next.js web
app, a NestJS API, Prisma (PostgreSQL), and shared packages.

## Development Environment Setup

### Prerequisites

- **Node.js**: v22+
- **pnpm**: v11+ (`npm install -g pnpm`)
- **Docker**: for local PostgreSQL (+ pgAdmin) via `compose.yaml`
- **Make**: optional, for convenience targets in `Makefile`

### Initial Setup

```bash
pnpm install
make setup      # creates .env files, starts Postgres, generates Prisma client, pushes schema
```

Verify everything builds:

```bash
pnpm build
```

See [`docs/STARTUP.md`](./docs/STARTUP.md) for the full runbook.

## Development Workflow

### Running the stack

```bash
make dev-stack      # Postgres + schema + API + web (concurrently)
# or separately:
pnpm dev:api        # NestJS API on :4000
pnpm dev:web        # Next.js web on :3000
pnpm prod           # build + run API + web under PM2
```

### Database

Prisma schema lives in `packages/db/prisma/schema/` (multi-file). Sync it with:

```bash
pnpm db:push        # schema -> DB (dev, non-interactive)
pnpm db:migrate     # create a migration (dev, interactive)
pnpm db:studio      # Prisma Studio GUI
```

### Packages

All packages use the `@visualdsa/` scope and `workspace:*` references.

| Area         | Packages                                                       |
| ------------ | -------------------------------------------------------------- |
| Apps         | `apps/web` (Next.js), `apps/api` (NestJS)                      |
| Core         | `types`, `utils`, `config`, `db` (Prisma)                      |
| API pipeline | `api-spec`, `api-client` (orval-generated)                     |
| VisualDSA    | `ui`, `visualizer`, `algorithms`, `content`, `python-examples` |

After changing API endpoints, regenerate the client:

```bash
pnpm codegen       # build db -> OpenAPI spec -> orval api-client
```

### Quality checks

```bash
pnpm lint          # ESLint across all workspaces
pnpm format        # Prettier check across all workspaces
pnpm typecheck     # TypeScript check across all workspaces
pnpm build         # Build all packages and apps
pnpm ci:check      # lint + format (what CI enforces)
```

> Note: `typecheck`/`build` require generated code. On a fresh checkout run
> `pnpm --filter @visualdsa/db db:generate` then `pnpm codegen` first (see
> `docs/STARTUP.md` → Fresh-checkout setup order).

## Commit Message Guidelines

We use **Conventional Commits** (enforced by commitlint + commitizen):

```bash
pnpm commit       # interactive conventional commit
```

Format: `<type>(<scope>): <subject>`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`,
`chore`, `revert`, `wip`, `release`

**Example:** `feat(visualizer): add binary search step generator`

## Versioning

We use [Changesets](https://github.com/changesets/changesets) to track changes and
generate changelogs. To record a change:

```bash
pnpm changelog     # add a changeset (describes the change + semver impact)
pnpm version       # consume changesets, bump versions, update CHANGELOG.md
```

A "Version Packages" pull request is opened automatically by CI when changesets are
merged to `main`.

## Pull Request Process

1. Create a branch from `main`.
2. Ensure all checks pass: `pnpm ci:check`, `pnpm typecheck`, `pnpm build`.
3. Add a changeset (`pnpm changelog`) if your change is user-facing.
4. Open a Pull Request using the provided template.
5. Once approved and merged, CI runs the full quality pipeline.

## License

By contributing to VisualDSA, you agree that your contributions will be licensed
under its [MIT License](./LICENSE).
