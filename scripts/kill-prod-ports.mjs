/**
 * Free API (4000) and web (3000) for local dev.
 * Stops PM2 first (unless --ports-only): with autorestart, kill -9 on listeners
 * alone lets PM2 respawn and re-bind before `pnpm dev` runs.
 * Then SIGKILLs listeners in a short retry loop (watchers / dual-stack listeners).
 *
 * Usage:
 *   node scripts/kill-prod-ports.mjs               # pm2 delete + free ports
 *   node scripts/kill-prod-ports.mjs --ports-only   # free ports only (e.g. from dev:stack)
 */
import { execSync, spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const portsOnly = process.argv.includes('--ports-only');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const repoPm2 = path.join(__dirname, 'repo-pm2.mjs');
const ecosystem = path.join(repoRoot, 'ecosystem.config.cjs');

if (!portsOnly) {
  spawnSync(process.execPath, [repoPm2, 'delete', ecosystem], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
}

/** Block ~ms without shell `sleep` (macOS BSD sleep is integer-only). */
function sleepMs(ms) {
  if (ms <= 0) return;
  const buf = new SharedArrayBuffer(4);
  Atomics.wait(new Int32Array(buf), 0, 0, ms);
}

function listListenerPids(port) {
  /** Cover IPv4 / IPv6 / generic TCP forms across macOS and Linux lsof. */
  const commands = [
    `lsof -nP -t -iTCP:${port} -sTCP:LISTEN`,
    `lsof -nP -t -i4TCP:${port} -sTCP:LISTEN`,
    `lsof -nP -t -i6TCP:${port} -sTCP:LISTEN`,
    `lsof -nP -t -i :${port} -sTCP:LISTEN`,
  ];
  const pids = new Set();
  for (const cmd of commands) {
    try {
      const out = execSync(cmd, { encoding: 'utf8' }).trim();
      for (const line of out.split('\n')) {
        const pid = line.trim();
        if (/^\d+$/.test(pid)) pids.add(pid);
      }
    } catch {
      /* lsof exits 1 when no matches or selector unsupported */
    }
  }
  return [...pids];
}

function killPid(pid) {
  try {
    execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
  } catch {
    /* EPERM / not owner — see listenersDetail after retries */
  }
}

function listenersDetail(port) {
  try {
    return execSync(`lsof -nP -i :${port} -sTCP:LISTEN`, {
      encoding: 'utf8',
    }).trim();
  } catch {
    return '';
  }
}

const ports = [4000, 3000];
const maxPasses = 15;
const pauseMs = 100;
let anyPortBlocked = false;

for (const port of ports) {
  let killedAny = false;
  for (let pass = 0; pass < maxPasses; pass++) {
    const pids = listListenerPids(port);
    if (pids.length === 0) break;
    for (const pid of pids) {
      killPid(pid);
    }
    killedAny = true;
    sleepMs(pauseMs);
  }
  const stubborn = listListenerPids(port);
  if (stubborn.length > 0) {
    anyPortBlocked = true;
    console.error(
      `Could not free port ${port} (${stubborn.join(
        ', ',
      )}): not your process or a protected service — SIGKILL did not remove it.`,
    );
    const detail = listenersDetail(port);
    if (detail) console.error(detail);
    if (port === 4000) {
      console.error('Use another API port: set PORT in apps/api/.env.');
    } else if (port === 3000) {
      console.error(
        'For Next.js, set a different port in apps/web dev/start scripts.',
      );
    }
  } else if (killedAny) {
    console.error(`Freed port ${port}`);
  }
}

if (anyPortBlocked) {
  process.exitCode = 1;
}
