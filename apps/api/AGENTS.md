# @visualdsa/api — NestJS API

Serves the VisualDSA backend on port 4000. Swagger UI at `/api/docs`. Drives the
OpenAPI → orval client codegen pipeline via its `@nestjs/swagger` decorators.

## Layout

- `src/main/create-app.ts` — `createApp()` factory (CORS, global `/api` prefix,
  global `ValidationPipe`, Swagger setup). **Side-effect-free** — do not add
  boot-time code here. Imported by both the server entry and the spec generator.
- `src/main/main.ts` — server entry. Calls `bootstrap()` → `app.listen(PORT)`.
  Only run as the entry (`dist/main/main.js`); never `import` it from elsewhere.
- `src/app.module.ts` — `AppModule`. Imports `ConfigModule` (global, honors
  `SKIP_DB`) and `PrismaModule` (global). Registers all controllers directly.
- `src/main/<domain>/` — feature controllers grouped by domain (e.g. `auth/`),
  with `dto/` subdirs. No feature modules today; controllers register in `AppModule`.
- `src/common/` — cross-cutting concerns. `common/prisma/` holds `PrismaService`
  - `@Global() PrismaModule`.
- `scripts/spec.ts` — OpenAPI YAML generator (runs via `tsx`). Reuses
  `createApp({ logger: false })`.

## How to add an endpoint

1. Create a controller under `src/main/<domain>/` and register it in
   `AppModule.controllers`.
2. Add DTOs in a sibling `dto/` dir; decorate every field with `@ApiProperty`.
3. Decorate each handler: `@ApiTags`, `@ApiOperation`, `@ApiResponse`. For
   response schemas, **prefer inline `@ApiResponse({ schema: {...} })`** over
   `type: SomeDto` — nested DTO type introspection breaks under `tsx`/esbuild
   (no decorator metadata). See root AGENTS.md gotcha.
4. Inject `PrismaService` directly (it's `@Global()`); use `prisma.client.*`.
5. Run `pnpm codegen` (from repo root) to regenerate `openapi.yaml` + the
   `@visualdsa/api-client` hooks.

## Critical rules

- **DI must use explicit `@Inject(Token)`** — `tsx`/esbuild (spec gen) does not
  emit `design:paramtypes`, so reflection-only constructor injection fails.
- **`PrismaService` honors `SKIP_DB=true`** — never add ungated DB access in
  `onModuleInit` or at construction; gate it on `SKIP_DB`.
- **Global `/api` prefix** is set in `createApp()`. The orval `baseUrl` is empty;
  the prefix lives in the OpenAPI paths. Don't double it.
- DTO validation runs via the global `ValidationPipe` (`whitelist`, `transform`,
  `forbidNonWhitelisted`).

## Env (`apps/api/.env`, copied from `.env.example`)

- `DATABASE_URL` — PostgreSQL connection string (required unless `SKIP_DB=true`)
- `PORT` — API port (default 4000)
- `SKIP_DB=true` — boot without a DB (spec gen, CI); set automatically by
  `scripts/spec.ts`
