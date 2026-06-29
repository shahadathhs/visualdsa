/**
 * PM2: run API + web on the host against Postgres in Docker (`compose.yaml`).
 *
 *   pnpm prod           build + start both (fork mode)
 *   pnpm prod:stop      stop + delete both
 *   pnpm prod:status    list processes
 *
 * PM2_HOME is pinned under the repo root by scripts/repo-pm2.mjs so the
 * daemon is shared across `pnpm prod` / `pnpm prod:stop`.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const root = __dirname;
const node = process.execPath;
/** Real Next.js CLI (avoids `node_modules/.bin/next`: a shell shim PM2 runs under Node). */
const nextCli = path.join(
  root,
  'apps',
  'web',
  'node_modules',
  'next',
  'dist',
  'bin',
  'next',
);

module.exports = {
  apps: [
    {
      name: 'visualdsa-api',
      cwd: path.join(root, 'apps', 'api'),
      script: node,

      node_args: '--max-old-space-size=512',

      // Built by `nest build` -> apps/api/dist/main/main.js
      args: ['--enable-source-maps', './dist/main/main.js'],

      env: { NODE_ENV: 'production', PORT: '4000' },
      exec_mode: 'fork',
      instances: 1,

      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000,

      max_memory_restart: '400M',
    },

    {
      name: 'visualdsa-web',
      cwd: path.join(root, 'apps', 'web'),
      script: nextCli,

      node_args: '--max-old-space-size=512',

      args: ['start', '-p', '3000', '-H', '0.0.0.0'],

      env: { NODE_ENV: 'production' },
      exec_mode: 'fork',
      instances: 1,

      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000,

      max_memory_restart: '400M',
    },
  ],
};
