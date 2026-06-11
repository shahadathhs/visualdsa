import { baseConfig } from '@visualdsa/eslint/base.js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      'prisma/generated/**',
      'generated/**',
    ],
  },
  ...baseConfig,
];
