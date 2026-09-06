import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const index = JSON.parse(await readFile(resolve(root, 'ideas/index.json'), 'utf8'));
const errors = [];
const seenSlugs = new Set();
const seenTitles = new Set();

for (const idea of index.ideas) {
  for (const key of ['slug', 'title', 'path', 'category', 'difficulty']) {
    if (!idea[key] || typeof idea[key] !== 'string') errors.push(`Missing ${key} in an index entry.`);
  }
  if (seenSlugs.has(idea.slug)) errors.push(`Duplicate slug: ${idea.slug}`);
  if (seenTitles.has(idea.title?.toLowerCase())) errors.push(`Duplicate title: ${idea.title}`);
  seenSlugs.add(idea.slug);
  seenTitles.add(idea.title?.toLowerCase());
  try {
    const content = await readFile(resolve(root, idea.path), 'utf8');
    for (const heading of ['## Problem', '## Current approaches', '## Opportunity', '## Proposed first version', '## Evidence and related work']) {
      if (!content.includes(heading)) errors.push(`${idea.path} is missing ${heading}`);
    }
  } catch {
    errors.push(`Indexed file does not exist: ${idea.path}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validated ${index.ideas.length} idea entries.`);
