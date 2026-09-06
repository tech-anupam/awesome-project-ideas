# Research process

## Sources

The automated collector uses public APIs rather than HTML scraping:

- [GitHub REST API](https://docs.github.com/en/rest) for public repository metadata.
- [OpenAlex API](https://help.openalex.org/api/) for scholarly-work metadata.

The source list is deliberately small. A new source needs a documented public API or feed, a clear reuse policy, and a useful contribution to problem discovery. Do not bypass a site’s access controls, robots policy, terms, or rate limits.

## What the scheduled workflow does

1. Reads the queries in `research/queries.json`.
2. Requests limited metadata from the approved APIs.
3. Normalizes titles and checks exact and token-overlap matches against `ideas/index.json`.
4. Writes only the candidates that need a human review to `research/inbox/`.
5. Opens a pull request. It never changes the default branch itself.

The collector creates factual records only: title, URL, source, publication date, and query. It does not summarize, rank, invent ideas, or generate prose.

## Reviewing a candidate

For each candidate, confirm the source is relevant, search the repository and the web for similar work, and research the problem independently. A candidate record is a lead, not evidence that an idea belongs in this repository.

## Duplicate decision

The automated check is intentionally conservative. It flags exact normalized titles and high token overlap. Human reviewers must also compare the target user, core workflow, and expected outcome. If the gap is not material, reject the entry.
