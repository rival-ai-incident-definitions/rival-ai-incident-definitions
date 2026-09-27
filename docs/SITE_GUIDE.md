# Site guide

How this site is built and what each kind of page holds, so a page can be added without
reading the others. Copied from the Mechanistic Views site; its build, components and
styles are unchanged apart from the accent, which is Starlight's default blue.

## Source of truth

The research repository `rival-ai-incident-definitions-paper` (private) is canonical:
its preregistrations, `claims/` pins and `results/` files. A page states a number only
with the results file it came from, and a quotation only once `citations verify` passes
on it. Content beyond the paper sits under `:::note[Not in the paper]`.

Do not publish the site under a name while a paper built on it is under double-blind
review. Until then it is previewed locally, and shared anonymously if needed.

## Build

```bash
npm run dev       # local preview; runs the backlinks script first
npm run build     # production build into dist/
```

- Astro + Starlight. `site: https://rival-ai-incident-definitions.github.io`, `base: /rival-ai-incident-definitions`.
  Internal links carry the base (`/rival-ai-incident-definitions/views/object/`); relative links
  (`overview/`) also work.
- Math: `remark-math` + `rehype-katex`, configured under both `markdown` and `mdx`.
  KaTeX's stylesheet is an `@import` from a CDN in `src/styles/custom.css`, which sets
  `--sl-font: 'Inter'`.
- `scripts/build-backlinks.mjs` runs on build and dev start, scans
  `src/content/docs/` for `[text](url)` and `[[wiki]]` links, and writes
  `src/data/backlinks.json`, rendered by `src/components/Backlinks.astro`.
- Component overrides in `astro.config.mjs`: `PageFooter.astro` (pagination),
  `PageTitle.astro`, `ThemeSelect.astro`. `Cite.astro` renders `<Cite id="key" />` from
  `src/data/references.json` and fails the build on an unknown key.
- Plugin: `starlight-image-zoom`. Code blocks: Expressive Code, `github-dark` /
  `github-light`.
- Figures are SVG in `public/figures/`, linked as `/rival-ai-incident-definitions/figures/<name>.svg`.
- The sidebar is explicit in `astro.config.mjs`. A page left out is still built and
  reachable by URL.

## Sidebar

Laid out as Mechanistic Validity's: Home → **Overview** (Framework Overview, Glossary,
About) → **Rival AI-Incident Definitions Framework** (Theoretical Foundations,
1. Definitions, 2. Crosswalk, 3. Readings).

## Page types

- **Definition page** (`definitions/<source>.md`): the definition quoted in full, its
  clauses, the official commentary, and the fields a coder must fill to apply it.
- **Reading page** (`readings/<dimension>.md`): the dimension, each reading with its
  support label and quotation, and the result under every reading. The evidence-fixed
  readings template of Views `cases/refusal.md` is the model.
- **Field page** (`foundations/<field>.md`): modelled on Mechanistic Validity's lens pages
  (`lenses/supporting/medical-microbiology.md`) — what the system records, its
  definitions from the primary text, how it handles harm versus near miss versus hazard,
  causal role and uncertain cases, the reading it bears on, and sources marked verified,
  not retrieved, or paywalled.

## Do not

- State a quotation that has not passed `citations verify`.
- Paraphrase a secondary source where the primary text could not be retrieved; say it
  was not retrieved.
