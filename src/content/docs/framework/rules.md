---
title: Rules
description: Each published definition written as a test on the coded fields of CSET's annotations, and the clauses no field can compute.
---

# Rules

A definition written in prose cannot be applied to 214 incidents until each of its clauses is tied to fields a coder filled in, so each definition becomes a **rule**: a yes, no or can't-tell test on the Center for Security and Emerging Technology's (CSET) annotation fields, combined with AND, OR and NOT under the [three-state logic](/rival-ai-incident-definitions/framework/three-state/). The rules below are written at the [headline readings](/rival-ai-incident-definitions/readings/); every other reading swaps one part of a rule for its alternative.

## Building Blocks

| Name | Plain meaning | CSET fields |
|---|---|---|
| `link_tan` | The AI was involved and clearly linked to a tangible harm | `AI System` AND `Clear link to technology` |
| `link_int` | The AI was involved and clearly linked to an intangible harm | `AI System.1` AND `Clear link to Technology` |
| `occurred` | Tangible harm definitely occurred | `Tangible Harm` |
| `risk` | A near miss or an issue: harm was imminent or plausible | `Tangible Harm` |
| `rights_broad` | A rights violation, harmful content, or unequal treatment on a protected characteristic | `Rights Violation` OR `Detrimental Content` OR `Protected Characteristic` |
| `rights_narrow` | A rights violation only | `Rights Violation` |

CSET asks about the AI's involvement twice, once for tangible and once for intangible harm, which is why there are two link fields.

## Rules

| Rule | Definition it stands for | Test |
|---|---|---|
| **C-tan** | CSET's AI tangible harm event, near miss or issue | CSET's summary field `AI Harm Level` |
| **C-int** | CSET's special-interest intangible harm | The annotator's AI intangible harm assessment |
| **C-any** | Any CSET AI harm | C-tan OR C-int |
| **O-inc-core** | OECD AI incident: harm occurred | (`occurred` AND `link_tan`) OR (`rights_broad` AND `link_int`) |
| **O-haz** | OECD AI hazard: harm could plausibly occur | NOT O-inc-core AND `risk` AND `link_tan` |
| **O-any** | Any OECD event, incident or hazard | ((`occurred` OR `risk`) AND `link_tan`) OR (`rights_broad` AND `link_int`) |
| **AI-linked fatality** | The death limb of the EU AI Act's serious incident | `Lives Lost` at least 1 AND `link_tan` |

Each rule carries a version, and a changed rule gets a new name, so a result can always be traced to the exact test that produced it.

## Clauses No Field Can Compute

Some clauses of the published definitions have no CSET field behind them, and each is recorded as **not computable** with the reason, instead of being guessed or dropped:

| Clause | Why it cannot be computed |
|---|---|
| OECD (a): psychological and mental-health harm | CSET's guide instructs coders not to record it |
| OECD (c): labour and intellectual-property rights as separate harms | Present only in the incident reports, not in a coded field |
| OECD (d): harm to communities | CSET's guide instructs coders not to record it |
| EU (a): serious harm to health | CSET records injuries of any severity together |
| EU (b): serious and irreversible disruption of critical infrastructure | No field records severity or reversibility |
| EU (d): serious harm to property or the environment | No field records severity |
| EU (c): infringement of Union law protecting fundamental rights | A breach of law is decided by an authority, not a coder |
| EU reporting duty: a high-risk system and its provider | Not coded |
| CSET intangible harm that was only risked, or only realized | CSET's guide pools the two in one field |
