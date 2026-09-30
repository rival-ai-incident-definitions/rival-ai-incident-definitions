---
title: Preregistration
description: What the study registers before any rule is run, what is recorded alongside it, and how departures are handled.
---

# Preregistration

Everything that could be chosen after seeing results is written down and frozen first: each rule, every reading of each clause and its label, the headline rule, the thresholds each hypothesis must meet, and the rules that turn results into [verdicts](/rival-ai-incident-definitions/framework/verdicts/). There are five registrations, one for each experiment above and one for the literature search that sources the readings, and they share one document of common definitions, data hashes and the [three-state logic](/rival-ai-incident-definitions/framework/three-state/).

| What is recorded | How it is kept |
|---|---|
| The five registrations and their shared definitions | Registered on [OSF](https://osf.io/), with a timestamp and a hash, before any registered rule is run, and archived on Zenodo with each release of the study repository |
| Every earlier draft of each registration | Kept alongside the frozen version |
| Each design decision, the options considered and who decided | A decisions record: one person, the author, made every decision |
| Each outside review of the registrations, its prompt and the reply | A review log |
| What was seen in the data before the freeze, such as column names and a few counts | The foreknowledge section of each registration |

A departure from a frozen registration is logged as a deviation, with its date and what it changed, and reported beside the result it affects.

## Registrations

All five were frozen on 29 September 2026 and registered on OSF the same day. Each OSF record carries the registration's full text and two attached files: the shared definitions (`CONTEXT.md`) and the rule dictionary (`RULES.yaml`).

| Registration | Question | OSF | Hash of the frozen text |
|---|---|---|---|
| Source search | Which published sources ground each reading of the definitions? | [osf.io/t6ns4](https://osf.io/t6ns4/) | `94a779ee8bf8` |
| Definition crosswalk | How do published AI-incident definitions reclassify the same coded incidents? | [osf.io/qyfzc](https://osf.io/qyfzc/) | `d9fafae7a072` |
| Revision | What changes when one taxonomy is revised and the same incidents are recoded? | [osf.io/98p3c](https://osf.io/98p3c/) | `2813abd829d8` |
| Human and language-model coding | Do a human-coded and an LLM-coded taxonomy sort the same incidents the same way? | [osf.io/gqd65](https://osf.io/gqd65/) | `2a9cff9d097d` |
| Author-supplied coding | Does an author-supplied case-level coding match the joint table recovered from its printed summaries? | [osf.io/478ny](https://osf.io/478ny/) | `815b2c17aa32` |

## Hypotheses

Each hypothesis in plain words; the exact registered wording is on its OSF record. Primary hypotheses are in bold. The outcome of each is in the run outputs in the [study repository](https://github.com/rival-ai-incident-definitions/rival-ai-incident-definitions-paper).

| Hypothesis | Registered prediction |
|---|---|
| **Crosswalk H1** | How the OECD's rights clause is read changes how the OECD and CSET definitions relate: the OECD's class is wider under the broad reading, and the two classes each hold many incidents the other lacks under the literal one |
| Crosswalk H2 | CSET's tangible and intangible harm classes each hold many incidents the other lacks |
| **Crosswalk H3** | Under the literal reading, the two definitions count similar numbers of incidents while classifying at least 10% of incidents differently |
| **Crosswalk H4** | The two definitions disagree more than two CSET annotators applying one definition do |
| Crosswalk H5 | Requiring a clear AI link, rather than any AI involvement, changes the OECD class by at least 11 incidents |
| Crosswalk H6 | Pairs of rules of the same formal type leave fewer incidents unclassified, and disagree in one direction, compared with mixed pairs |
| Revision H1 | CSET's revision moved incidents between classes more than it changed the total in each class |
| Revision H2 | The revision gave a definite status to at least half of the incidents the first edition left unclear |
| Revision H3 | First-edition near misses map to the second edition's near-miss value more often than to realized harm |
| Coding H1 | MIT's discrimination class sits inside CSET's, and CSET's is materially wider |
| Coding H2 | MIT's harmful-content class sits inside CSET's, and CSET's is materially wider |
| Coding H3 | Incidents CSET flags but MIT files elsewhere go most often to MIT's misuse domain |
| Author-supplied H1 | The authors' own coding gives the table recovered from their printed figures, 8 / 362 / 1 / 109 |
| Author-supplied H2 | GDPR non-compliance sits inside EU AI Act non-compliance, with at most one exception |

The source search registers no hypothesis: it fixes how sources are found and how a quotation changes the label of a reading.
