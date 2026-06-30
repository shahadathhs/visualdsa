# @visualdsa/content — MDX lesson content + registry

Holds MDX lesson files and a generated registry that the web app renders via
`next-mdx-remote/rsc`. Consumed as **raw TypeScript source** (no build artifact —
`package.json` `exports` points at `./src/index.ts`; Next.js compiles it).

## Layout

- `src/lessons/<phase>/<topic>.mdx` — the lesson files. The path
  (`<phase>/<topic>`) is the registry key.
- `src/registry.ts` — **auto-generated** by `scripts/build.mjs`. Never hand-edit.
- `src/index.ts` — public API: `getLessonRaw(phase, topic)`, `hasLesson`,
  `listLessons()`.

## Adding a lesson

1. Create `src/lessons/<phase>/<topic>.mdx` (e.g.
   `programming-refresher/loops-iteration.mdx`). Use Python code blocks — this
   project is Python-first.
2. Run `pnpm --filter @visualdsa/content run build` — `scripts/build.mjs` walks
   `src/lessons/**/*.mdx`, reads each, JSON-encodes the raw source, and rewrites
   `src/registry.ts` with a `lessonRaw: Record<string, string>` keyed by
   `"<phase>/<topic>"`.
3. The web app's `src/lib/content.ts` calls `getLessonRaw` + joins with the
   topic title from `apps/web/src/data/curriculum.ts`. Add a matching
   `Topic`/`Phase` entry there if it's a new topic, and the route
   `/curriculum/<slug>/<topic>` will render it.

## Conventions

- MDX only — keep lessons self-contained (no imports of project components; the
  web app supplies the component map via `mdxComponents`).
- The phase in the path must match a `Phase` slug in
  `apps/web/src/data/curriculum.ts`, or the lesson won't be reachable.

## Status

Only the `programming-refresher` phase (8 lessons) is written today. The DSA
curriculum content (the actual product) is pending — see `TODO.md`.
