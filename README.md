![Anupam Builds research library banner](assets/anupam-builds-project-research-banner.png)

# Awesome Project Ideas

**An Anupam Builds research library**

[![Support this project](https://img.shields.io/badge/Support-anupambuilds.store%2Fdonate-ff6b4a?style=for-the-badge)](https://anupambuilds.store/donate)

[![Research workflow](https://github.com/tech-anupam/awesome-project-ideas/actions/workflows/research.yml/badge.svg)](https://github.com/tech-anupam/awesome-project-ideas/actions/workflows/research.yml)
[![Idea checks](https://github.com/tech-anupam/awesome-project-ideas/actions/workflows/validate.yml/badge.svg)](https://github.com/tech-anupam/awesome-project-ideas/actions/workflows/validate.yml)
[![Last commit](https://img.shields.io/github/last-commit/tech-anupam/awesome-project-ideas)](https://github.com/tech-anupam/awesome-project-ideas/commits/main)
[![License: MIT](https://img.shields.io/github/license/tech-anupam/awesome-project-ideas)](LICENSE)
[![Stars](https://img.shields.io/github/stars/tech-anupam/awesome-project-ideas?style=flat)](https://github.com/tech-anupam/awesome-project-ideas/stargazers)

A research-backed collection of software and open-source project ideas for people who want to build something useful. Curated and maintained by [tech-anupam](https://github.com/tech-anupam).

This is not an idea dump. Every entry starts with a documented problem, names the people affected, acknowledges existing work, and identifies a specific gap worth exploring.

## Start here

| Area | What you will find |
| --- | --- |
| [Developer tools](ideas/developer-tools/) | Tools for teams that build and maintain software |
| [Accessibility](ideas/accessibility/) | Projects that reduce barriers to using technology |
| [Climate](ideas/climate/) | Practical tools for measurement, adaptation, and resource use |
| [Research](research/) | Source policy, collection queries, and review records |

## What makes an idea eligible

Each idea must answer these questions with evidence:

1. What problem is happening, and for whom?
2. What do people use today?
3. What is missing or poorly served?
4. What can an initial version do?
5. Which sources support the claims and existing-solution review?

An idea is rejected when it only changes the label of an existing project, has no identified user, or depends on vague claims. Scores are recorded by dimension, not collapsed into a misleading single number.

## Difficulty

- **Beginner**: A focused tool using familiar building blocks.
- **Intermediate**: Multiple components, integrations, or a small service.
- **Advanced**: Significant infrastructure, security, hardware, or algorithmic work.
- **Research**: Requires investigation or experiments before a useful implementation is clear.

## Research and updates

The scheduled workflow collects candidate metadata from the GitHub REST API and OpenAlex. It does not scrape websites and it does not use Groq, an LLM, or automated copywriting. The workflow normalizes titles, checks them against the idea index, and creates a pull request containing an inbox report. A maintainer decides whether any candidate becomes an idea.

See [the research guide](research/README.md) for source rules, duplicate handling, and how to review an update. The data sources are the [GitHub REST API](https://docs.github.com/en/rest) and the [OpenAlex API](https://help.openalex.org/api/). 

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md), use the idea template, and include sources. Pull requests should add one well-researched idea or improve existing evidence. Please do not submit generic prompts, copied descriptions, or unverified claims.

## License

This repository is available under the [MIT License](LICENSE).

## Support

If this library helps you find a worthwhile project, you can support its upkeep through [anupambuilds.store/donate](https://anupambuilds.store/donate). That page can be used for UPI support.

USDC is also accepted on the Ethereum mainnet only.

`0xdf2122B4a567CA6908Bbece014492998795f694D`

Before sending funds, verify the network is **Ethereum mainnet** and the asset is native USDC, whose official Ethereum contract is `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`. Crypto transfers are irreversible. Do not send USDC from another network or a bridged token.
