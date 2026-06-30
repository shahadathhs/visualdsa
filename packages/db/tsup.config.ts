import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  esbuildOptions(options, ctx) {
    // The Prisma 7 generated client references `import.meta.url` at module
    // top level (to set `globalThis['__dirname']`). esbuild stubs
    // `import.meta` to `{}` under CJS, so `fileURLToPath(undefined)` throws
    // the moment `PrismaModule` is imported. Provide a real CJS shim so the
    // import succeeds; ESM has `import.meta.url` natively and needs none.
    if (ctx.format === 'cjs') {
      options.banner = {
        js: `var __import_meta_url = require('url').pathToFileURL(__filename).href;`,
      };
      options.define = {
        'import.meta.url': '__import_meta_url',
      };
    }
    options.logOverride = {
      'empty-import-meta': 'silent',
    };
  },
});
