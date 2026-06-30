# @visualdsa/web — Next.js web app

Next.js 16 (App Router, Turbopack dev) + React 19 + Tailwind v4. The marketing
site today; will host the interactive visualizer/curriculum UI. Mostly Server
Components — only what needs interactivity is `'use client'`.

## Layout

- `src/app/` — App Router. `layout.tsx` (root), page routes, and nested dynamic
  SSG routes under `curriculum/[slug]/[topic]/`.
- `src/app/providers.tsx` — client `QueryClientProvider` wrapper + `setBaseUrl`.
  **Currently dormant** — no hook consumers exist yet. It's wired at the root so
  interactive islands (auth forms, visualizer) can use react-query without
  re-scaffolding. Note: wrapping the tree in a client `Providers` does **not**
  make children client — Server Components pass straight through.
- `src/lib/api.ts` — **server-side API access layer**. Calls `setBaseUrl` once
  at module load and re-exports the plain (non-hook) generated functions for
  Server Components. Import server-side API calls from here.
- `src/components/` — `site/` (header/footer/logo), `home/` (landing sections),
  `about/`, `blog/`, and `mdx.tsx` (component map for rendered lessons).
- `src/data/` — typed TS data modules (`curriculum.ts`, `author.ts`, `blog.ts`,
  `features.ts`). Plain constants, no fetching.
- `src/lib/` — `site.ts` (site constants/nav), `api.ts` (server API layer),
  `content.ts` (bridges to `@visualdsa/content`), `medium.ts` (Medium RSS, ISR).

## Data fetching — server-first

**Default to Server Components.** The web app stays almost entirely server-side;
`'use client'` is reserved for genuine interactivity.

- **Default** — Server Components call the **plain generated functions** via
  `@/lib/api`. Pass `{ next: { revalidate } }` to cache (Next patches the global
  `fetch` the mutator uses). Wrap calls that may fail in `try/catch` (errors
  throw `ApiError` from `@visualdsa/api-client`).

  ```tsx
  import { appControllerHealth } from '@/lib/api';

  export async function Status() {
    try {
      await appControllerHealth({ next: { revalidate: 30 } });
      return <span>online</span>;
    } catch {
      return <span>offline</span>;
    }
  }
  ```

- **Only use `'use client'` + a react-query hook when** the component genuinely
  needs: a mutation (auth forms), live/polling data, optimistic updates, or
  direct user-driven interactivity (the visualizer playback controls). Those
  consumers don't exist yet — `Providers` is dormant until then.
- **Never** fetch in a client island what a Server Component could fetch. Push
  the fetch up to the nearest Server Component and pass props down.

## Env

`NEXT_PUBLIC_API_URL` (default `http://localhost:4000`) is the API origin, used
by both `src/lib/api.ts` (server) and `src/app/providers.tsx` (client). Set it
in `apps/web/.env` for deployed environments.

## Conventions

- Path alias `@/*` → `src/*`.
- Tailwind v4 (CSS-first). Semantic tokens (`bg-canvas`, `text-fg`, `text-muted`,
  `border-line`, `bg-surface`, `bg-elevated`) are defined in
  `src/app/globals.css` via `@theme`. Dark-first; light via
  `prefers-color-scheme`. No `tailwind.config.js`.
- Fonts: `next/font` Inter + JetBrains_Mono, exposed as CSS vars.
- Async dynamic-route `params` must be awaited (Next 15+ contract).
- Prefer Server Components; mark client islands with `'use client'`.
- Content lessons are MDX rendered via `next-mdx-remote/rsc` using
  `mdxComponents` from `src/components/mdx.tsx`.

## Build

`next dev --turbopack` (dev), `next build` / `next start` (prod). `transpilePackages`
includes the workspace UI/viz/algo/content packages.
