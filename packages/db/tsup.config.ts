import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  // The Prisma 7 generated client uses `import.meta.url`, which esbuild warns
  // about under CJS (it still works at runtime via the `__dirname` fallback).
  // Silence the benign `empty-import-meta` diagnostic.
  esbuildOptions(options) {
    options.logOverride = {
      'empty-import-meta': 'silent',
    };
  },
});
