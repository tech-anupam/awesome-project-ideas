import { readdir, readFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const ignored = new Set(['.git', 'node_modules', 'research/inbox', 'tools']);
const files = [];

async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const fullPath = resolve(directory, item.name);
    const repoPath = relative(root, fullPath).replaceAll('\\', '/');
    if (ignored.has(repoPath) || item.name === '.git' || item.name === 'node_modules') continue;
    if (item.isDirectory()) await walk(fullPath);
    if (item.isFile() && /\.(md|json|ya?ml|mjs)$/i.test(item.name)) files.push(fullPath);
  }
}

await walk(root);
const rules = [
  { label: 'retired name', pattern: /buildworth/i },
  { label: 'em dash', pattern: /—/u },
  { label: 'emoji', pattern: /[\p{Extended_Pictographic}]/u }
];
const errors = [];

for (const file of files) {
  const content = await readFile(file, 'utf8');
  for (const rule of rules) {
    if (rule.pattern.test(content)) errors.push(`${relative(root, file)} contains ${rule.label}.`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Style check passed for ${files.length} text files.`);
