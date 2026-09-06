import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const inbox = resolve(import.meta.dirname, '..', 'research', 'inbox');
const errors = [];
const sourceNames = new Set(['GitHub REST API', 'OpenAlex API']);
const files = (await readdir(inbox)).filter((file) => file.endsWith('.json'));

for (const file of files) {
  let report;
  try {
    report = JSON.parse(await readFile(resolve(inbox, file), 'utf8'));
  } catch {
    errors.push(`${file} is not valid JSON.`);
    continue;
  }
  if (!Array.isArray(report.candidates)) {
    errors.push(`${file} is missing candidates.`);
    continue;
  }
  for (const [position, candidate] of report.candidates.entries()) {
    const label = `${file} candidate ${position + 1}`;
    if (!candidate.title || !candidate.sourceId || !candidate.sourceQuery) errors.push(`${label} is missing metadata.`);
    if (!sourceNames.has(candidate.source)) errors.push(`${label} uses an unapproved source: ${candidate.source}`);
    try {
      const url = new URL(candidate.url);
      if (url.protocol !== 'https:') errors.push(`${label} does not use HTTPS.`);
    } catch {
      errors.push(`${label} has an invalid URL.`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validated ${files.length} research inbox report(s).`);
