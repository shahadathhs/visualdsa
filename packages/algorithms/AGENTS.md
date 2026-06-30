# @visualdsa/algorithms — algorithm step generators

**Stub.** Will yield `Step` objects for the visualizer. The type contracts are
defined; implementations are pending (see `docs/deep-research-report.md` and
`TODO.md`).

## Contract

An algorithm is a function that returns a `Generator<Step<TState>, void, void>`:

```ts
import type { Algorithm, AlgorithmGenerator } from '@visualdsa/algorithms';
import type { Step } from '@visualdsa/types';

interface ArrayState {
  array: number[];
}

// Example shape — implement as a generator that yields one Step per visual step.
export function* bubbleSort(input: number[]): AlgorithmGenerator<ArrayState> {
  const array = [...input];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // yield a Step: { state, highlights?, message }
      yield {
        state: { array: [...array] },
        highlights: [String(j), String(j + 1)],
        message: `Comparing ${array[j]} and ${array[j + 1]}`,
      };
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        yield {
          state: { array: [...array] },
          highlights: [String(j), String(j + 1)],
          message: `Swapped`,
        };
      }
    }
  }
}
```

## Conventions

- `Step<TState>` comes from `@visualdsa/types` — shape is
  `{ state: TState; highlights?: string[]; message: string }`.
- `state` must be **immutable per yield** — the visualizer snapshots it; never
  mutate and re-yield the same object reference. Spread/copy first.
- `highlights` holds string IDs the visualizer maps to SVG elements.
- `message` is the human-readable explanation shown in the playback panel.
- Generators should be pure (no I/O, no globals) so they're deterministic and
  testable.

## When implementing

Add each algorithm to `src/index.ts` exports. Coordinate the `TState` shape with
the renderer in `@visualdsa/visualizer` (which consumes these steps).
