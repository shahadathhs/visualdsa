export type Track =
  'foundations' | 'data-structures' | 'algorithms' | 'techniques' | 'advanced';

export type Topic = {
  slug: string;
  title: string;
};

export type PhaseStatus = 'ready' | 'in-progress' | 'planned';

export type Phase = {
  slug: string;
  track: Track;
  title: string;
  blurb: string;
  topics: Topic[];
  status: PhaseStatus;
};

export const tracks: { id: Track; label: string; blurb: string }[] = [
  {
    id: 'foundations',
    label: 'Foundations',
    blurb:
      'No CS background needed — start with iteration, recursion & complexity.',
  },
  {
    id: 'data-structures',
    label: 'Data Structures',
    blurb: 'The containers that organize how data lives in memory.',
  },
  {
    id: 'algorithms',
    label: 'Algorithms',
    blurb: 'The step-by-step methods that operate on those structures.',
  },
  {
    id: 'techniques',
    label: 'Techniques & Patterns',
    blurb: 'Reusable problem-solving shapes that show up everywhere.',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    blurb: 'Specialized structures and methods for hard problems.',
  },
];

/**
 * The full VisualDSA curriculum — Data Structures AND Algorithms, in depth,
 * with a beginner on-ramp (iteration, recursion, complexity) so no CS
 * background is required. Hard-coded now; shaped to swap for a CMS/MDX source
 * later without touching the components that consume it. Display order is the
 * array order; the index badge is derived from position (see curriculum.tsx).
 */
export const phases: Phase[] = [
  // ── Foundations (beginner on-ramp) ─────────────────────────────────────
  {
    slug: 'programming-refresher',
    track: 'foundations',
    title: 'Programming Refresher & Iteration',
    blurb:
      'No CS background? Start here — the building blocks every algorithm uses.',
    status: 'ready',
    topics: [
      {
        slug: 'how-programs-run',
        title: 'How programs run: statements & expressions',
      },
      { slug: 'variables-types', title: 'Variables, types & operators' },
      { slug: 'conditionals', title: 'Conditionals & decision making' },
      { slug: 'loops-iteration', title: 'Loops & iteration (for, while)' },
      {
        slug: 'iteration-patterns',
        title: 'Iteration patterns: counting & accumulating',
      },
      { slug: 'nested-loops', title: 'Nested loops' },
      { slug: 'functions', title: 'Functions, parameters & return values' },
      { slug: 'scope-tracing', title: 'Scope & tracing code' },
    ],
  },
  {
    slug: 'memory-and-recursion',
    track: 'foundations',
    title: 'Memory & Recursion',
    blurb: 'See the call stack, and learn to think recursively.',
    status: 'in-progress',
    topics: [
      { slug: 'call-stack', title: 'The call stack, visualized' },
      { slug: 'stack-vs-heap', title: 'Stack vs heap memory' },
      { slug: 'value-vs-reference', title: 'Value vs reference semantics' },
      {
        slug: 'recursion-basics',
        title: 'Recursion: base case & recursive case',
      },
      { slug: 'recursion-stack', title: 'The recursion call stack' },
      { slug: 'iteration-vs-recursion', title: 'Iteration vs recursion' },
      { slug: 'converting', title: 'Converting between iteration & recursion' },
      {
        slug: 'classic-recursion',
        title: 'Classic recursion (factorial, Fibonacci)',
      },
    ],
  },
  {
    slug: 'analysing-algorithms',
    track: 'foundations',
    title: 'Analysing Algorithms',
    blurb: 'How we measure "fast" — Big-O without the math anxiety.',
    status: 'planned',
    topics: [
      { slug: 'why-efficiency', title: 'Why efficiency matters' },
      { slug: 'counting-ops', title: 'Counting operations' },
      { slug: 'big-o', title: 'Big-O notation, gently' },
      { slug: 'growth-rates', title: 'Common growth rates' },
      { slug: 'time-vs-space', title: 'Time vs space complexity' },
      { slug: 'cases', title: 'Best, average & worst case' },
      { slug: 'analysing-code', title: 'Analysing iterative & recursive code' },
    ],
  },

  // ── Data Structures (linear) ───────────────────────────────────────────
  {
    slug: 'arrays',
    track: 'data-structures',
    title: 'Arrays & Memory',
    blurb: 'Contiguous memory, indexing, and the patterns built on top.',
    status: 'in-progress',
    topics: [
      {
        slug: 'array-fundamentals',
        title: 'Array fundamentals & memory layout',
      },
      { slug: 'static-vs-dynamic', title: 'Static vs dynamic arrays' },
      { slug: 'operations', title: 'Indexing, traversal & operations' },
      { slug: 'matrices', title: 'Multidimensional arrays & matrices' },
      { slug: 'prefix-sums', title: 'Prefix sums (1D & 2D)' },
      { slug: 'difference-arrays', title: 'Difference arrays' },
      { slug: 'rotations', title: 'Rotation-based problems' },
    ],
  },
  {
    slug: 'linked-lists',
    track: 'data-structures',
    title: 'Linked Lists',
    blurb: 'Node-based lists and pointer manipulation.',
    status: 'planned',
    topics: [
      { slug: 'singly-linked', title: 'Singly linked list' },
      { slug: 'doubly-circular', title: 'Doubly & circular lists' },
      { slug: 'operations', title: 'Traversal, insertion & deletion' },
      { slug: 'reverse', title: 'Reversing a linked list' },
      { slug: 'cycle-detection', title: 'Cycle detection (Floyd’s)' },
      { slug: 'merge-lists', title: 'Merging two sorted lists' },
      { slug: 'clone-random', title: 'Clone with random pointers' },
    ],
  },
  {
    slug: 'stacks',
    track: 'data-structures',
    title: 'Stacks',
    blurb: 'LIFO behaviour and the patterns it unlocks.',
    status: 'planned',
    topics: [
      { slug: 'lifo', title: 'LIFO principle & implementations' },
      { slug: 'min-max-stack', title: 'Min / Max stack' },
      { slug: 'balanced-parens', title: 'Balanced parentheses' },
      { slug: 'next-greater', title: 'Next greater / smaller element' },
      { slug: 'largest-rectangle', title: 'Largest rectangle in histogram' },
      {
        slug: 'expression-eval',
        title: 'Expression evaluation (infix → postfix)',
      },
      { slug: 'call-stack', title: 'The call stack & recursion' },
    ],
  },
  {
    slug: 'queues',
    track: 'data-structures',
    title: 'Queues & Deques',
    blurb: 'FIFO ordering, deques, and priority queues.',
    status: 'planned',
    topics: [
      { slug: 'fifo', title: 'FIFO principle & queue types' },
      { slug: 'circular-queue', title: 'Circular queue' },
      { slug: 'deque', title: 'Deque (double-ended)' },
      { slug: 'priority-queue', title: 'Priority queue' },
      { slug: 'monotonic-deque', title: 'Monotonic deque' },
      { slug: 'sliding-max', title: 'Sliding window maximum' },
      { slug: 'bfs-foundation', title: 'BFS foundation' },
    ],
  },
  {
    slug: 'hash-tables',
    track: 'data-structures',
    title: 'Hash Tables',
    blurb: 'Constant-time lookup and how collisions are handled.',
    status: 'planned',
    topics: [
      { slug: 'hash-functions', title: 'Hash functions' },
      { slug: 'collisions', title: 'Chaining vs open addressing' },
      { slug: 'load-factor', title: 'Load factor & rehashing' },
      { slug: 'maps-and-sets', title: 'Hash maps & hash sets' },
      { slug: 'frequency-counting', title: 'Frequency counting' },
      { slug: 'complement-pattern', title: 'Two-sum & complement lookup' },
      { slug: 'rolling-hash', title: 'Rolling hash' },
    ],
  },
  {
    slug: 'trees',
    track: 'data-structures',
    title: 'Trees',
    blurb: 'Hierarchical structure, traversals, and search trees.',
    status: 'planned',
    topics: [
      { slug: 'terminology', title: 'Tree terminology & properties' },
      { slug: 'binary-trees', title: 'Binary tree types' },
      { slug: 'traversals', title: 'Traversals (pre/in/post, level-order)' },
      { slug: 'bst', title: 'Binary Search Trees' },
      {
        slug: 'balanced-trees',
        title: 'Self-balancing trees (AVL, Red-Black)',
      },
      { slug: 'lca', title: 'Lowest Common Ancestor' },
      { slug: 'serialize', title: 'Serialize & deserialize' },
    ],
  },
  {
    slug: 'heaps',
    track: 'data-structures',
    title: 'Heaps & Priority Queues',
    blurb: 'Array-based binary heaps and ordering.',
    status: 'planned',
    topics: [
      { slug: 'binary-heap', title: 'Binary heap (min & max)' },
      { slug: 'heapify', title: 'Heapify & building a heap' },
      { slug: 'operations', title: 'Insert & extract' },
      { slug: 'heap-sort', title: 'Heap sort' },
      { slug: 'kth-element', title: 'K-th largest / smallest' },
      { slug: 'merge-k-sorted', title: 'Merge K sorted lists' },
      { slug: 'scheduling', title: 'Priority scheduling' },
    ],
  },
  {
    slug: 'tries',
    track: 'data-structures',
    title: 'Tries',
    blurb: 'Prefix trees for strings and autocomplete.',
    status: 'planned',
    topics: [
      { slug: 'structure', title: 'Trie structure & node design' },
      { slug: 'insert-search', title: 'Insert & search' },
      { slug: 'autocomplete', title: 'Prefix matching & autocomplete' },
      { slug: 'word-search', title: 'Word search in a grid' },
      { slug: 'lcp', title: 'Longest common prefix' },
      { slug: 'suffix-trees', title: 'Suffix trees (overview)' },
    ],
  },
  {
    slug: 'union-find',
    track: 'data-structures',
    title: 'Union-Find',
    blurb: 'Disjoint sets and dynamic connectivity.',
    status: 'planned',
    topics: [
      { slug: 'disjoint-set', title: 'Disjoint-set basics' },
      { slug: 'union-by-rank', title: 'Union by rank / size' },
      { slug: 'path-compression', title: 'Path compression' },
      { slug: 'connectivity', title: 'Connectivity problems' },
      { slug: 'kruskal-dsu', title: 'Kruskal’s MST with DSU' },
      { slug: 'dynamic-connectivity', title: 'Dynamic connectivity' },
    ],
  },

  // ── Algorithms ─────────────────────────────────────────────────────────
  {
    slug: 'searching',
    track: 'algorithms',
    title: 'Searching',
    blurb: 'Binary search and its many powerful variants.',
    status: 'in-progress',
    topics: [
      { slug: 'linear-search', title: 'Linear search' },
      { slug: 'binary-search', title: 'Binary search' },
      { slug: 'bounds', title: 'Lower & upper bound' },
      { slug: 'search-on-answer', title: 'Binary search on the answer' },
      { slug: 'rotated-array', title: 'Search in rotated sorted arrays' },
      { slug: 'search-2d', title: 'Search in a 2D matrix' },
      { slug: 'binary-exp', title: 'Binary exponentiation' },
      { slug: 'ternary-search', title: 'Ternary search' },
    ],
  },
  {
    slug: 'sorting',
    track: 'algorithms',
    title: 'Sorting',
    blurb: 'From quadratic basics to linear-time non-comparison sorts.',
    status: 'planned',
    topics: [
      { slug: 'bubble-sort', title: 'Bubble sort' },
      { slug: 'selection-sort', title: 'Selection sort' },
      { slug: 'insertion-sort', title: 'Insertion sort' },
      { slug: 'merge-sort', title: 'Merge sort' },
      { slug: 'quick-sort', title: 'Quick sort' },
      { slug: 'heap-sort', title: 'Heap sort' },
      { slug: 'non-comparison', title: 'Counting, radix & bucket sort' },
      { slug: 'stability', title: 'Stability & comparator design' },
    ],
  },
  {
    slug: 'strings',
    track: 'algorithms',
    title: 'Strings & Pattern Matching',
    blurb: 'Finding patterns in text efficiently.',
    status: 'planned',
    topics: [
      { slug: 'string-basics', title: 'String representation & operations' },
      { slug: 'naive-match', title: 'Naive pattern matching' },
      { slug: 'rabin-karp', title: 'Rabin-Karp (rolling hash)' },
      { slug: 'kmp', title: 'KMP (LPS / failure function)' },
      { slug: 'z-algorithm', title: 'Z-algorithm' },
      { slug: 'manacher', title: 'Manacher’s (palindromes)' },
      { slug: 'string-hashing', title: 'String hashing' },
    ],
  },
  {
    slug: 'greedy',
    track: 'algorithms',
    title: 'Greedy Algorithms',
    blurb: 'Make the locally optimal choice — when it works.',
    status: 'planned',
    topics: [
      { slug: 'greedy-choice', title: 'Greedy choice property' },
      { slug: 'activity-selection', title: 'Activity selection' },
      { slug: 'fractional-knapsack', title: 'Fractional knapsack' },
      { slug: 'huffman', title: 'Huffman coding' },
      { slug: 'job-sequencing', title: 'Job sequencing' },
      { slug: 'minimum-platforms', title: 'Minimum platforms' },
    ],
  },
  {
    slug: 'divide-and-conquer',
    track: 'algorithms',
    title: 'Divide & Conquer',
    blurb: 'Break it down, solve, and combine.',
    status: 'planned',
    topics: [
      { slug: 'paradigm', title: 'The divide & conquer paradigm' },
      { slug: 'merge-quick', title: 'Merge & quick sort revisited' },
      { slug: 'binary-search-dc', title: 'Binary search revisited' },
      { slug: 'closest-pair', title: 'Closest pair of points' },
      { slug: 'karatsuba', title: 'Karatsuba multiplication' },
      { slug: 'master-theorem', title: 'Master Theorem applied' },
    ],
  },
  {
    slug: 'backtracking',
    track: 'algorithms',
    title: 'Backtracking',
    blurb: 'Explore every possibility, pruning as you go.',
    status: 'planned',
    topics: [
      { slug: 'framework', title: 'The backtracking framework' },
      { slug: 'perms-combs', title: 'Permutations & combinations' },
      { slug: 'n-queens', title: 'N-Queens' },
      { slug: 'sudoku', title: 'Sudoku solver' },
      { slug: 'subset-sum', title: 'Subset sum' },
      { slug: 'word-search', title: 'Word search & maze solving' },
    ],
  },
  {
    slug: 'dynamic-programming',
    track: 'algorithms',
    title: 'Dynamic Programming',
    blurb: 'Overlap, optimal substructure, and not recomputing.',
    status: 'planned',
    topics: [
      {
        slug: 'dp-fundamentals',
        title: 'Overlapping subproblems & optimal substructure',
      },
      { slug: 'memoization', title: 'Memoization (top-down)' },
      { slug: 'tabulation', title: 'Tabulation (bottom-up)' },
      { slug: 'space-optimization', title: 'Space optimization' },
      { slug: 'one-d-dp', title: '1D DP (Fibonacci, house robber)' },
      { slug: 'knapsack-01', title: '0/1 Knapsack' },
      { slug: 'lcs', title: 'Longest Common Subsequence' },
      { slug: 'lis', title: 'Longest Increasing Subsequence' },
      { slug: 'edit-distance', title: 'Edit distance' },
      { slug: 'coin-change', title: 'Coin change' },
    ],
  },
  {
    slug: 'graphs',
    track: 'algorithms',
    title: 'Graphs',
    blurb: 'Representing relationships and traversing them.',
    status: 'planned',
    topics: [
      { slug: 'representations', title: 'Representations (matrix & list)' },
      { slug: 'bfs', title: 'Breadth-First Search' },
      { slug: 'dfs', title: 'Depth-First Search' },
      { slug: 'cycle-detection', title: 'Cycle detection' },
      { slug: 'topological-sort', title: 'Topological sort' },
      { slug: 'components', title: 'Connected components' },
      { slug: 'bipartite', title: 'Bipartite check' },
    ],
  },
  {
    slug: 'graph-algorithms',
    track: 'algorithms',
    title: 'Graph Algorithms',
    blurb: 'Shortest paths, spanning trees, and flows.',
    status: 'planned',
    topics: [
      { slug: 'dijkstra', title: 'Dijkstra’s algorithm' },
      { slug: 'bellman-ford', title: 'Bellman-Ford' },
      { slug: 'floyd-warshall', title: 'Floyd-Warshall (all-pairs)' },
      { slug: 'a-star', title: 'A* search' },
      { slug: 'mst', title: 'Minimum Spanning Tree (Prim’s & Kruskal’s)' },
      { slug: 'scc', title: 'Strongly connected components' },
      { slug: 'max-flow', title: 'Maximum flow (Ford-Fulkerson)' },
    ],
  },

  // ── Techniques & Patterns ──────────────────────────────────────────────
  {
    slug: 'patterns',
    track: 'techniques',
    title: 'Problem-Solving Patterns',
    blurb: 'The reusable shapes behind countless interview problems.',
    status: 'planned',
    topics: [
      { slug: 'two-pointers', title: 'Two pointers' },
      { slug: 'sliding-window', title: 'Sliding window (fixed & variable)' },
      { slug: 'fast-slow', title: 'Fast & slow pointers' },
      { slug: 'merge-intervals', title: 'Merge intervals' },
      { slug: 'in-place-reversal', title: 'In-place reversal' },
      { slug: 'top-k', title: 'Top-K elements' },
      { slug: 'subsets', title: 'Subsets & permutations' },
    ],
  },
  {
    slug: 'bits-and-math',
    track: 'techniques',
    title: 'Bit Manipulation & Math',
    blurb: 'Operating on bits and the number theory that powers it.',
    status: 'planned',
    topics: [
      { slug: 'operators', title: 'Bitwise operators' },
      { slug: 'bit-ops', title: 'Set, unset, toggle & check bits' },
      { slug: 'bit-tricks', title: 'Bit tricks (XOR, x & -x)' },
      { slug: 'count-bits', title: 'Counting & swapping bits' },
      { slug: 'primes-sieve', title: 'Primes & Sieve of Eratosthenes' },
      { slug: 'gcd-modular', title: 'GCD/LCM & modular arithmetic' },
    ],
  },

  // ── Advanced ───────────────────────────────────────────────────────────
  {
    slug: 'advanced-data-structures',
    track: 'advanced',
    title: 'Advanced Data Structures',
    blurb: 'Range queries and structures for heavy workloads.',
    status: 'planned',
    topics: [
      { slug: 'segment-trees', title: 'Segment trees' },
      { slug: 'lazy-propagation', title: 'Lazy propagation' },
      { slug: 'fenwick', title: 'Fenwick tree (BIT)' },
      { slug: 'sparse-table', title: 'Sparse table (RMQ)' },
      { slug: 'b-trees', title: 'B-Trees & skip lists' },
      { slug: 'suffix-arrays', title: 'Suffix arrays' },
    ],
  },
  {
    slug: 'advanced-dp',
    track: 'advanced',
    title: 'Advanced DP',
    blurb: 'Pushing dynamic programming to harder state spaces.',
    status: 'planned',
    topics: [
      { slug: 'dp-on-grids', title: 'DP on grids & paths' },
      { slug: 'dp-on-trees', title: 'DP on trees' },
      { slug: 'digit-dp', title: 'Digit DP' },
      { slug: 'bitmask-dp', title: 'Bitmask DP' },
      { slug: 'interval-dp', title: 'Interval DP (matrix chain)' },
      { slug: 'game-theory', title: 'Game theory & minimax' },
    ],
  },
];
