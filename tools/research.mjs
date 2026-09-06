import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const queries = JSON.parse(await readFile(resolve(root, 'research/queries.json'), 'utf8'));
const index = JSON.parse(await readFile(resolve(root, 'ideas/index.json'), 'utf8'));
const token = process.env.GITHUB_TOKEN;

function normalize(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function secureUrl(value) {
  return typeof value === 'string' ? value.replace(/^http:\/\//i, 'https://') : value;
}

function tokenSet(value) {
  return new Set(normalize(value).split(' ').filter((word) => word.length > 2));
}

function similarity(left, right) {
  const a = tokenSet(left);
  const b = tokenSet(right);
  const shared = [...a].filter((word) => b.has(word)).length;
  return a.size && b.size ? shared / Math.min(a.size, b.size) : 0;
}

const knownTitles = index.ideas.map((idea) => idea.title);
function duplicateOf(title) {
  const normalized = normalize(title);
  for (const known of knownTitles) {
    if (normalized === normalize(known)) return { title: known, method: 'exact-normalized-title' };
    if (similarity(title, known) >= 0.8) return { title: known, method: 'high-token-overlap' };
  }
  return null;
}

async function request(url, headers = {}) {
  const response = await fetch(url, {
    headers: {
      accept: 'application/vnd.github+json',
      'user-agent': 'tech-anupam-awesome-project-ideas-research-bot',
      ...headers
    },
    signal: AbortSignal.timeout(20_000)
  });
  if (!response.ok) throw new Error(`${response.status} from ${url}`);
  return response.json();
}

async function githubCandidates() {
  const headers = token ? { authorization: `Bearer ${token}` } : {};
  const responses = await Promise.all(queries.github.map(async (query) => {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=10`;
    const data = await request(url, headers);
    return data.items.map((item) => ({
      title: item.name,
      url: item.html_url,
      source: 'GitHub REST API',
      sourceQuery: query,
      publishedAt: item.created_at,
      updatedAt: item.updated_at,
      sourceId: `github:${item.full_name}`
    }));
  }));
  return responses.flat();
}

async function openAlexCandidates() {
  const responses = await Promise.all(queries.openalex.map(async (query) => {
    const params = new URLSearchParams({ search: query, per_page: '10', select: 'id,title,publication_date,doi,primary_location' });
    const data = await request(`https://api.openalex.org/works?${params}`);
    return data.results.map((item) => ({
      title: item.title,
      url: item.doi || item.primary_location?.landing_page_url || item.id,
      source: 'OpenAlex API',
      sourceQuery: query,
      publishedAt: item.publication_date,
      sourceId: `openalex:${item.id}`
    }));
  }));
  return responses.flat();
}

const collected = (await Promise.all([githubCandidates(), openAlexCandidates()])).flat();
const unique = new Map();
for (const item of collected) {
  if (item.title && item.url && !unique.has(item.sourceId)) unique.set(item.sourceId, item);
}

const candidates = [...unique.values()].map((item) => ({ ...item, url: secureUrl(item.url), duplicateCheck: duplicateOf(item.title) }));
const report = {
  collectedAt: new Date().toISOString(),
  policy: 'Metadata only. This report is a review inbox, not a list of approved ideas.',
  sourceCount: candidates.length,
  candidates
};

const inbox = resolve(root, 'research/inbox');
await mkdir(inbox, { recursive: true });
const date = new Date().toISOString().slice(0, 10);
await writeFile(resolve(inbox, `${date}.json`), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Wrote ${candidates.length} source records to research/inbox/${date}.json`);
