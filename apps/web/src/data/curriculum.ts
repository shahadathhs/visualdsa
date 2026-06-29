export type Topic = {
  slug: string;
  title: string;
};

export type PhaseStatus = 'ready' | 'in-progress' | 'planned';

export type Phase = {
  index: number;
  slug: string;
  title: string;
  blurb: string;
  topics: Topic[];
  status: PhaseStatus;
};

/**
 * Curriculum roadmap (Phases 0–12).
 * Hard-coded now; shaped to swap for a CMS/MDX source later without touching
 * the components that consume it.
 */
export const phases: Phase[] = [
  {
    index: 0,
    slug: 'foundations',
    title: 'Foundations',
    blurb: 'What DSA is, why it matters, Big-O notation, and recursion basics.',
    status: 'in-progress',
    topics: [
      { slug: 'what-is-dsa', title: 'What is DSA?' },
      { slug: 'big-o', title: 'Big-O notation' },
      { slug: 'recursion', title: 'Recursion vs iteration' },
    ],
  },
  {
    index: 1,
    slug: 'arrays',
    title: 'Arrays',
    blurb: 'Contiguous memory, indexing, search, and two-pointer patterns.',
    status: 'in-progress',
    topics: [
      { slug: 'linear-search', title: 'Linear search' },
      { slug: 'binary-search', title: 'Binary search' },
      { slug: 'prefix-sum', title: 'Prefix sum' },
      { slug: 'two-pointers', title: 'Two pointers' },
      { slug: 'sliding-window', title: 'Sliding window' },
    ],
  },
  {
    index: 2,
    slug: 'strings',
    title: 'Strings',
    blurb: 'Characters as arrays and pattern-matching algorithms.',
    status: 'planned',
    topics: [
      { slug: 'kmp', title: 'KMP search' },
      { slug: 'palindrome', title: 'Palindrome check' },
      { slug: 'rabin-karp', title: 'Rabin-Karp' },
    ],
  },
  {
    index: 3,
    slug: 'linked-lists',
    title: 'Linked Lists',
    blurb: 'Node-based lists and pointer manipulation.',
    status: 'planned',
    topics: [
      { slug: 'reverse', title: 'Reverse a list' },
      { slug: 'cycle', title: 'Cycle detection' },
      { slug: 'merge', title: 'Merge two lists' },
    ],
  },
  {
    index: 4,
    slug: 'stacks',
    title: 'Stacks',
    blurb: 'LIFO behaviour and its applications.',
    status: 'planned',
    topics: [
      { slug: 'balanced-parens', title: 'Balanced parentheses' },
      { slug: 'next-greater', title: 'Next greater element' },
    ],
  },
  {
    index: 5,
    slug: 'queues',
    title: 'Queues',
    blurb: 'FIFO behaviour, deques, and BFS foundations.',
    status: 'planned',
    topics: [
      { slug: 'bfs', title: 'BFS traversal' },
      { slug: 'sliding-max', title: 'Sliding window max' },
    ],
  },
  {
    index: 6,
    slug: 'hash-tables',
    title: 'Hash Tables',
    blurb: 'Key-value lookup and collision handling.',
    status: 'planned',
    topics: [
      { slug: 'two-sum', title: 'Two-sum' },
      { slug: 'frequency', title: 'Frequency counting' },
      { slug: 'anagrams', title: 'Anagrams' },
    ],
  },
  {
    index: 7,
    slug: 'trees',
    title: 'Trees & BSTs',
    blurb: 'Hierarchical structure, traversals, and search trees.',
    status: 'planned',
    topics: [
      { slug: 'traversals', title: 'DFS / BFS traversals' },
      { slug: 'bst', title: 'BST insert & search' },
      { slug: 'lca', title: 'Lowest common ancestor' },
    ],
  },
  {
    index: 8,
    slug: 'heaps',
    title: 'Heaps',
    blurb: 'Array-based binary heaps and priority queues.',
    status: 'planned',
    topics: [
      { slug: 'insert', title: 'Insert / extract' },
      { slug: 'heap-sort', title: 'Heap sort' },
    ],
  },
  {
    index: 9,
    slug: 'tries',
    title: 'Tries',
    blurb: 'Prefix trees for strings and autocomplete.',
    status: 'planned',
    topics: [
      { slug: 'insert-search', title: 'Insert & search' },
      { slug: 'autocomplete', title: 'Autocomplete' },
    ],
  },
  {
    index: 10,
    slug: 'graphs',
    title: 'Graphs',
    blurb: 'Representations and the core graph algorithms.',
    status: 'planned',
    topics: [
      { slug: 'dfs-bfs', title: 'DFS / BFS' },
      { slug: 'dijkstra', title: "Dijkstra's" },
      { slug: 'topo-sort', title: 'Topological sort' },
    ],
  },
  {
    index: 11,
    slug: 'union-find',
    title: 'Union-Find',
    blurb: 'Disjoint sets and connectivity with path compression.',
    status: 'planned',
    topics: [
      { slug: 'connectivity', title: 'Connectivity' },
      { slug: 'path-compression', title: 'Path compression' },
    ],
  },
  {
    index: 12,
    slug: 'dynamic-programming',
    title: 'Dynamic Programming',
    blurb: 'Overlapping subproblems: memoization vs tabulation.',
    status: 'planned',
    topics: [
      { slug: 'fibonacci', title: 'Fibonacci (memo)' },
      { slug: 'knapsack', title: '0/1 Knapsack' },
      { slug: 'lcs', title: 'Longest common subsequence' },
    ],
  },
];
