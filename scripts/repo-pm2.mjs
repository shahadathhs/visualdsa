/**
 * Run PM2 with PM2_HOME under the monorepo root (next to ecosystem.config.cjs),
 * regardless of the shell cwd. Matches `pnpm prod` daemon so `pnpm prod:stop` works.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const pm2Home = path.join(repoRoot, '.pm2');
process.env.PM2_HOME = pm2Home;

const args = process.argv.slice(2);
const r = spawnSync('pnpm', ['exec', 'pm2', ...args], {
  cwd: repoRoot,
  stdio: 'inherit',
  env: process.env,
});
process.exit(r.status ?? 1);
