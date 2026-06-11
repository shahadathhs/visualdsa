import type { Step } from '@visualdsa/types';

export type AlgorithmGenerator<TState = Record<string, unknown>> = Generator<
  Step<TState>,
  void,
  void
>;

export type Algorithm<TState = Record<string, unknown>> = (
  ...args: never[]
) => AlgorithmGenerator<TState>;
