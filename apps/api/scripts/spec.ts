process.env.SKIP_DB = 'true';
process.env.DATABASE_URL =
  'postgresql://placeholder:placeholder@localhost:5432/placeholder';

import yaml from 'js-yaml';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from '../src/main/create-app';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function generateSpec() {
  const { app, document } = await createApp({ logger: false });

  const outputPath = resolve(root, '../../packages/api-spec/openapi.yaml');
  const yamlContent = yaml.dump(document, { noRefs: true });
  writeFileSync(outputPath, yamlContent, 'utf-8');

  console.info(`OpenAPI spec generated at ${outputPath}`);
  await app.close();
}

generateSpec().catch((err) => {
  console.error(err);
  process.exit(1);
});
