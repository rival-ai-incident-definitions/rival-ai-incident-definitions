---
title: Study Overview
description: What the study applies the framework to, the four experiments it runs, and where its results will appear.
---

# Study Overview

The study applies the [framework](/rival-ai-incident-definitions/framework/) to four published AI-incident definitions, from the [OECD](/rival-ai-incident-definitions/definitions/oecd/), the [EU AI Act](/rival-ai-incident-definitions/definitions/eu-ai-act/), the [Center for Security and Emerging Technology (CSET)](/rival-ai-incident-definitions/definitions/cset/) and the [AI Incident Database](/rival-ai-incident-definitions/definitions/aiid/), and asks how differently they classify the same incidents.

Regulators, incident databases and AI-safety researchers each count AI incidents under their own definition. This design analyzes a single set of AI incidents across multiple definitions, modeled after clinical epidemiology, where rival diagnostic criteria are applied to the same patients.

## Standards

The study is [preregistered](/rival-ai-incident-definitions/study/preregistration/) on the [Open Science Framework (OSF)](https://osf.io/): every rule, reading and threshold is registered before any rule is run, with deviations logged by the [`prereg`](https://github.com/elliottower/reproducible-science) tool, so no result can be tuned after the data are seen, and the study also applies the following standards for methodological rigor.

| Practice | What it guards against |
|---|---|
| Quotations on the site and in the study checked against a hashed copy of their source, using the [`citations`](https://github.com/elliottower/reproducible-science) tool, with the records in a [provenance folder](https://github.com/rival-ai-incident-definitions/rival-ai-incident-definitions/tree/main/provenance) | Misquoted or paraphrased definitions, and hallucinated quotations |
| Data pinned to a dated snapshot by its hash, and each reported number written to a results file bound to the run that produced it, using the [`results`](https://github.com/elliottower/reproducible-science) tool, with the files in a [results folder](https://github.com/rival-ai-incident-definitions/rival-ai-incident-definitions/tree/main/provenance/results) | A result changing because the data changed, or a number with no run behind it |
| Decisions, drafts and outside reviews recorded | Unrecorded or post hoc changes to the design |
| Each version of the study and the site deposited on [Zenodo](https://zenodo.org/) with its own DOI | The record changing or disappearing after publication |
| Every defensible reading of each definition computed and reported, as in a multiverse analysis ([Steegen et al. 2016](https://journals.sagepub.com/doi/full/10.1177/1745691616658637)) | Reporting only the reading that supports a result |
| Every possible assignment of blank and "maybe" codes enumerated, giving exact bounds on each result | Dropping incidents with unknown codes, or filling them in by guess |
| Literature search reported to the PRISMA-S standard, one fresh search per question | Unrecorded choices about which sources were looked for |

## Data

The incidents are the 214 in the AI Incident Database that CSET's annotators coded field by field, taken from the database's snapshot of 21 September 2026. Every incident comes from the AI Incident Database, so its admission rule counts all 214 by construction and serves as the frame the other definitions are applied within.

## Experiments

| Experiment | Question | What is compared | Incidents |
|---|---|---|---|
| Definition crosswalk | How do published AI-incident definitions reclassify the same coded incidents? | [CSET](/rival-ai-incident-definitions/definitions/cset/)'s harm definitions against the [OECD](/rival-ai-incident-definitions/definitions/oecd/)'s incident and hazard definitions, and the [EU AI Act](/rival-ai-incident-definitions/definitions/eu-ai-act/)'s death limb, under every reading | 214 |
| Revision | What changes when one taxonomy is revised and the same incidents are recoded? | [CSET](/rival-ai-incident-definitions/definitions/cset/)'s first edition against its second on the incidents coded under both | 100 |
| Human and language-model coding | Do a human-coded and an LLM-coded taxonomy sort the same incidents the same way? | [CSET](/rival-ai-incident-definitions/definitions/cset/)'s human annotations against the [MIT AI Incident Tracker](https://airisk.mit.edu/ai-incident-tracker)'s language-model classifications | 214 |
| Author-supplied coding | Does an author-supplied case-level coding match the joint table recovered from its printed summaries? | The [PAGCF](https://arxiv.org/abs/2605.16281) coding's [EU AI Act](/rival-ai-incident-definitions/definitions/eu-ai-act/) and GDPR flags, as released by its authors, against the table implied by their published figures | 480 |

## Status

The registrations are being finalized, and they will be published with the records above when they are frozen, before any registered rule is run on the data. Until then the [Crosswalk](/rival-ai-incident-definitions/crosswalk/) page shows only descriptive tables computed earlier, which test no hypothesis. Results will appear on the [Crosswalk](/rival-ai-incident-definitions/crosswalk/) and [Verdicts](/rival-ai-incident-definitions/framework/verdicts/) pages once the registered rules are run.
