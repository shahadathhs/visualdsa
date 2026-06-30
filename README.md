# VisualDSA

[![CI](https://github.com/shahadathhs/visualdsa/actions/workflows/ci.yml/badge.svg)](https://github.com/shahadathhs/visualdsa/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> _To make DSA intuitive, not intimidating._

VisualDSA is an open-source, interactive platform for learning data structures
and algorithms. It combines step-by-step SVG visualizations, Python-first code
examples, explanatory walkthroughs, and practice exercises into a structured
curriculum — so learners understand _why_ an algorithm works, not just _what_
it does.

See [`docs/deep-research-report.md`](./docs/deep-research-report.md) for the full
product vision, competitor audit, curriculum, and technical architecture.

## Tech Stack

- **Monorepo:** pnpm workspaces + Turborepo
- **Frontend:** Next.js (App Router, Turbopack) + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Backend:** NestJS + Prisma 7 (PostgreSQL)
- **Tooling:** ESLint, Prettier, Husky, Commitizen (conventional commits)

## Structure

```
visualdsa/
├── apps/
│   ├── web/                # Next.js app (port 3000)
│   └── api/                # NestJS API (port 4000, Swagger at /api/docs)
├── packages/
│   ├── types/              # Shared TypeScript types (incl. Step schema)
│   ├── utils/              # Shared utility functions
│   ├── config/             # Shared app constants
│   ├── db/                 # Prisma client (PostgreSQL)
│   ├── api-spec/           # OpenAPI spec (orval source)
│   ├── api-client/         # Auto-generated API client (react-query)
│   ├── ui/                 # Reusable React UI components
│   ├── visualizer/         # SVG visualization engine + playback controls
│   ├── algorithms/         # Algorithm step generators (yield Step objects)
│   ├── content/            # MDX lesson content + lesson registry
│   └── python-examples/    # Static Python code examples per topic
├── configs/
│   ├── eslint/             # Shared ESLint flat configs
│   └── typescript/         # Shared tsconfigs
├── docs/                   # Research report, executive summary
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Getting Started

```bash
make setup      # pnpm install + .env files + Postgres + prisma generate & push
make dev-stack  # API + web (concurrently) — web :3000, API :4000
```

Production on the host via PM2:

```bash
pnpm prod       # build + run API + web under PM2
pnpm prod:stop
```

Requires Docker (for Postgres) and `make`. See [`docs/STARTUP.md`](./docs/STARTUP.md)
for the full runbook.

## Commands

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `make setup`      | One-shot: install + env + Postgres + schema |
| `pnpm dev:stack`  | Postgres + schema + API + web (concurrent)  |
| `pnpm dev`        | Start all apps in dev mode                  |
| `pnpm build`      | Build all apps and packages                 |
| `pnpm start`      | Start production builds                     |
| `pnpm lint`       | Lint all apps and packages                  |
| `pnpm lint:fix`   | Fix lint issues                             |
| `pnpm format`     | Check formatting                            |
| `pnpm format:fix` | Fix formatting                              |
| `pnpm typecheck`  | Type-check all apps and packages            |
| `pnpm prod`       | Build + run API + web under PM2             |
| `pnpm prod:stop`  | Stop + delete PM2 processes                 |
| `pnpm db:up`      | Start Postgres (docker compose)             |
| `pnpm db:push`    | Prisma: push schema to DB                   |
| `pnpm codegen`    | Full API pipeline (db → spec → api-client)  |
| `pnpm clean`      | Remove all build artifacts                  |

## Status

The site foundation is built — home, `/curriculum` (with a placeholder page for
each of the 25 phases), `/about`, and `/blog` (live Medium feed). The
interactive learning packages — `ui`, `visualizer`, `algorithms`, `content`,
`python-examples` — are scaffolded and await implementation. See
[**TODO.md**](./TODO.md) for the roadmap.

## Contributing

Contributions are welcome! Please read
[**CONTRIBUTING.md**](./CONTRIBUTING.md) and our
[**Code of Conduct**](./CODE_OF_CONDUCT.md). Roadmap: [**TODO.md**](./TODO.md).

This project is licensed under the [MIT License](./LICENSE).
