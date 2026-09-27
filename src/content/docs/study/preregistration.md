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

| Registration | Question | Status | OSF | Hash |
|---|---|---|---|---|
| Shared definitions | Data, three-state logic, readings rules and verdicts common to all five | Draft 5, not frozen | Not yet registered | — |
| Source search | Which published sources ground each reading of the definitions? | Draft, not frozen | Not yet registered | — |
| Definition crosswalk | How do published AI-incident definitions reclassify the same coded incidents? | Draft 5, not frozen | Not yet registered | — |
| Revision | What changes when one taxonomy is revised and the same incidents are recoded? | Draft 5, not frozen | Not yet registered | — |
| Human and language-model coding | Do a human-coded and an LLM-coded taxonomy sort the same incidents the same way? | Draft 5, not frozen | Not yet registered | — |
| Author-supplied coding | Does an author-supplied case-level coding match the joint table recovered from its printed summaries? | Draft 5, not frozen | Not yet registered | — |

When a registration is frozen, its row gets the OSF link, the freeze date and the hash of the frozen text.
