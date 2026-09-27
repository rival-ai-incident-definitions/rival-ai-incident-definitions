---
title: Readings
description: Every way each AI-incident definition can be read, where each reading comes from, and which one results are first reported under.
---

# Readings

A definition can often be read more than one way, so the study applies every defensible reading and reports each result under all of them, and no result depends on a reading chosen after the fact.

## Labels

| Label | Meaning |
|---|---|
| **S** | A source's own text or official commentary supports the reading |
| **J** | The study argues for the reading; no source states it |
| **B** | A bound: the reading brackets the others instead of interpreting the text |

## Headline Reading

Results are first reported at one reading per dimension, the headline, chosen by a rule fixed before any result exists:

| Rule | When it applies | Headline |
|---|---|---|
| (a) | A source's own text or commentary supports a reading | That reading |
| (b) | The source is silent | The most literal reading of the coded field |
| (c) | Nothing decides between two readings | Both, as co-headlines; a result that holds under one and not the other is reported as split |

## Where Definitions Part

| Dimension | Reading | Label | Headline | Basis |
|---|---|---|---|---|
| How close the harm came (CSET tangible harm) | Event only | **S** |  | CSET's definition of a tangible harm event |
|  | Event or near miss | **J** |  | Imminent harm only; argued by the study |
|  | Event, near miss or issue | **S** | Headline | CSET's guide names three imminency levels |
| How CSET's harm is read | CSET's summary fields | **S** | Headline | CSET's guide builds the summary field from the other fields |
|  | The four-part definition, element by element | **S** |  | CSET's tangible and intangible definitions |
|  | The three intangible harm categories | **S** |  | CSET's designated categories |
| OECD rights clause (c) | Narrow: rights violations only | **S** |  | The field as written |
|  | Middle: rights violations and discrimination | **J** |  | Discrimination is a rights harm and content is not; argued by the study |
|  | Broad: also harmful content | **S** | Headline | The OECD's commentary places hate speech and misinformation under (c) |
| OECD infrastructure clause (b) | Left out | **B** |  | A floor: OECD counts can only be higher |
|  | Access to public services | **J** |  | CSET frames this field under civil liberties; argued by the study |
|  | Infrastructure sectors | **S** | Headline | CSET's guide defines when a sector is affected |
| How involved the AI must be | Clear link (at least a but-for cause) | **S** | Headline | CSET's but-for rule |
|  | AI present | **B** |  | A ceiling on "directly or indirectly leads to" |
| Risked intangible harm | An OECD incident | — | Co-headline | No source decides between incident and hazard |
|  | An OECD hazard | — | Co-headline | No source decides between incident and hazard |
|  | Rights harms are incidents, harmful content stays unknown | **J** |  | Argued by the study |
| What an OECD hazard includes | Near miss and issue | **S** | Headline | The OECD includes AI-related risks under hazards |
|  | Near miss only | **J** |  | Argued by the study |

Every combination of these readings is computed, and each result's [verdict](/rival-ai-incident-definitions/framework/verdicts/) says whether it holds across all of them.

## Which Readings Change Which Rule

Each rule is affected only by the readings of the clauses it reads, so two rules can disagree because a reading moves one of them and leaves the other alone.

| Rule | How close the harm came | How CSET's harm is read | OECD rights clause (c) | OECD infrastructure clause (b) | How involved the AI must be | Risked intangible harm: incident or hazard | What an OECD hazard includes |
|---|---|---|---|---|---|---|---|
| CSET: tangible harm | ✓ | ✓ |  |  |  |  |  |
| CSET: intangible harm |  | ✓ |  |  |  |  |  |
| CSET: any harm | ✓ | ✓ |  |  |  |  |  |
| OECD: incident |  |  | ✓ | ✓ | ✓ | ✓ |  |
| OECD: hazard |  |  | ✓ | ✓ | ✓ | ✓ | ✓ |
| OECD: incident or hazard |  |  | ✓ | ✓ | ✓ |  | ✓ |
| EU AI Act: AI-linked death |  |  |  |  | ✓ |  |  |

The OECD incident rule turns on four readings, and the rule for any OECD event does not depend on whether a risked intangible harm is an incident or a hazard, because either answer puts the event inside it. Every reading of every column is listed on [Readings](/rival-ai-incident-definitions/readings/).

## Example: The OECD Rights Clause

The OECD definition counts harm of type (c), "violations of human rights or a breach of obligations under the applicable law intended to protect fundamental, labour and intellectual property rights". Two of its readings:

| Reading | What counts under clause (c) | Basis |
|---|---|---|
| Narrow | Recorded rights violations only | The clause's wording |
| Broad | Rights violations, discrimination, and harmful content such as hate speech and misinformation | The OECD's commentary: "Reputational harm to individuals and intangible harms such as hate speech and mis- and disinformation are included under (c) in relation to a breach of fundamental rights." |

The broad reading is the [headline](/rival-ai-incident-definitions/glossary/#headline) because the OECD's own commentary supports it. The narrow reading is still applied and reported.

