# VisualDSA — Roadmap & TODO

High-level roadmap. The full product spec lives in
[`docs/deep-research-report.md`](./docs/deep-research-report.md).

## MVP

- [ ] Core visualizer engine (SVG renderers + play/pause/step/speed controls)
- [ ] Algorithm step generators (`@visualdsa/algorithms` → `Step[]`)
- [ ] Python code examples + line-by-line walkthroughs
- [ ] Topic pages (Theory / Visualization / Code / Complexity / Practice)
- [ ] Live Big-O time/space complexity metrics
- [ ] Quiz / practice questions after each topic
- [ ] User accounts (bookmarks, progress, completion)
- [ ] Admin CMS for content

## Curriculum Phases

- [ ] **Phase 0 — Foundations:** what is DSA, Big-O, recursion
- [ ] **Phase 1 — Arrays:** linear/binary search, prefix sum, two pointers, sliding window
- [ ] **Phase 2 — Strings:** KMP, palindrome, Rabin-Karp, trie basics
- [ ] **Phase 3 — Linked Lists:** reverse, cycle detection, merge
- [ ] **Phase 4 — Stack:** balanced parentheses, next greater element
- [ ] **Phase 5 — Queue:** BFS, sliding window max, scheduler
- [ ] **Phase 6 — Hash Tables:** two-sum, frequency counting, anagrams
- [ ] **Phase 7 — Trees & BST:** traversals, insert/search, LCA
- [ ] **Phase 8 — Heaps:** insert/extract, heap sort
- [ ] **Phase 9 — Trie:** insert/search, autocomplete
- [ ] **Phase 10 — Graphs:** DFS/BFS, Dijkstra, topological sort, union-find
- [ ] **Phase 11 — Union-Find:** connectivity, path compression
- [ ] **Phase 12 — Dynamic Programming:** memo vs tabulation, knapsack, LCS

## Platform / DX

- [ ] Framer Motion animations in `@visualdsa/visualizer`
- [ ] MDX lessons in `@visualdsa/content`
- [ ] Shiki syntax highlighting for Python examples
- [ ] Keyboard shortcuts for playback (Space, arrows)
- [ ] Dark mode / theming
- [ ] i18n (Chinese / Indonesian) — later
- [ ] Lighthouse ≥ 90 (performance / accessibility)

## Tooling

- [x] Monorepo (pnpm + Turborepo)
- [x] Docker Postgres + pgAdmin
- [x] PM2 prod flow, Makefile, dev:stack
- [x] CI (lint/format/typecheck/build)
- [x] Changesets (versioning + changelog)
- [ ] Test runner + unit tests on algorithm generators
- [ ] Vercel deployment workflow
