# VisualDSA — Roadmap & TODO

High-level roadmap. The full product spec lives in
[`docs/deep-research-report.md`](./docs/deep-research-report.md); the live
curriculum data is in
[`apps/web/src/data/curriculum.ts`](./apps/web/src/data/curriculum.ts).

## Done

- [x] Marketing/site foundation — home (hero + animated demo, differentiators,
      how-it-works), `/curriculum` + a placeholder page for each of the 25
      phases, `/about`, and `/blog` (live Medium feed, ISR)
- [x] Design system — dark-first, Tailwind v4 tokens, Inter + JetBrains Mono,
      emerald accent
- [x] Monorepo (pnpm + Turborepo) with shared packages scaffolded
- [x] Docker Postgres + pgAdmin, PM2 prod flow, Makefile, `dev:stack`
- [x] CI (lint/format/typecheck/build), Changesets, Dependabot, Husky
      pre-push gate
- [x] Community files — LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CODEOWNERS,
      issue/PR templates

## MVP (next)

- [ ] Core visualizer engine (SVG renderers + play/pause/step/speed controls)
- [ ] Algorithm step generators (`@visualdsa/algorithms` → `Step[]`)
- [ ] Python code examples + line-by-line walkthroughs
- [ ] Topic pages (Theory / Visualization / Code / Complexity / Practice)
- [ ] Live Big-O time/space complexity metrics
- [ ] Quiz / practice questions after each topic
- [ ] User accounts (bookmarks, progress, completion)
- [ ] Admin CMS for content

## Curriculum — 25 phases · 5 tracks

### Foundations

- [ ] 00 — Programming Refresher & Iteration (loops, iteration patterns, functions)
- [ ] 01 — Memory & Recursion (call stack, recursion, iteration ↔ recursion)
- [ ] 02 — Analysing Algorithms (Big-O, growth rates, time vs space)

### Data Structures

- [ ] 03 — Arrays & Memory (prefix sums, difference arrays, rotations)
- [ ] 04 — Linked Lists (reverse, cycle detection, merge)
- [ ] 05 — Stacks (balanced parens, next greater, largest rectangle)
- [ ] 06 — Queues & Deques (circular, deque, priority queue, sliding max)
- [ ] 07 — Hash Tables (collisions, load factor, two-sum, rolling hash)
- [ ] 08 — Trees (traversals, BST, balanced trees, LCA)
- [ ] 09 — Heaps & Priority Queues (heapify, heap sort, K-th, merge K)
- [ ] 10 — Tries (insert/search, autocomplete, word search)
- [ ] 11 — Union-Find (union by rank, path compression, connectivity)

### Algorithms

- [ ] 12 — Searching (binary search, bounds, search-on-answer, rotated arrays)
- [ ] 13 — Sorting (bubble → merge/quick, heap, counting/radix)
- [ ] 14 — Strings & Pattern Matching (Rabin-Karp, KMP, Z-algorithm, Manacher)
- [ ] 15 — Greedy (activity selection, fractional knapsack, Huffman)
- [ ] 16 — Divide & Conquer (merge/quick, closest pair, Master Theorem)
- [ ] 17 — Backtracking (permutations, N-Queens, Sudoku, subset sum)
- [ ] 18 — Dynamic Programming (memo/tabulation, knapsack, LCS, LIS, edit distance)
- [ ] 19 — Graphs (BFS, DFS, cycle detection, topological sort, bipartite)
- [ ] 20 — Graph Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall, MST, SCC)

### Techniques & Patterns

- [ ] 21 — Problem-Solving Patterns (two pointers, sliding window, fast/slow, intervals)
- [ ] 22 — Bit Manipulation & Math (bit ops, primes/sieve, GCD, modular arithmetic)

### Advanced

- [ ] 23 — Advanced Data Structures (segment tree, Fenwick, sparse table)
- [ ] 24 — Advanced DP (on grids/trees, digit, bitmask, interval, game theory)

## Platform / DX

- [ ] Framer Motion animations in `@visualdsa/visualizer`
- [ ] MDX lessons in `@visualdsa/content`
- [ ] Shiki syntax highlighting for Python examples
- [ ] Keyboard shortcuts for playback (Space, arrows)
- [ ] Manual light/dark theme toggle
- [ ] i18n (Chinese / Indonesian) — later
- [ ] Lighthouse ≥ 90 (performance / accessibility)

## Tooling

- [x] Monorepo (pnpm + Turborepo)
- [x] Docker Postgres + pgAdmin
- [x] PM2 prod flow, Makefile, `dev:stack`
- [x] CI (lint/format/typecheck/build)
- [x] Changesets (versioning + changelog)
- [ ] Test runner + unit tests on algorithm generators
- [ ] Vercel deployment workflow
