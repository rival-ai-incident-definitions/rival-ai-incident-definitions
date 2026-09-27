---
title: Crosswalk
description: Agreement between coders and between taxonomies on the same AI Incident Database incidents.
---

The same incidents, classified by more than one coder or more than one taxonomy.

:::caution[Preliminary]
The tables below are descriptive. They were computed from the AI Incident Database snapshot of 21 September 2026 before the study's registrations were frozen, and they test no registered hypothesis. The registered crosswalk of the four [definitions](/rival-ai-incident-definitions/definitions/) is not yet run.
:::

A "yes" is positive and a "no" is negative. "Maybe", "unclear" and blank codes are dropped from each pair, so *n* varies by field. κ is Cohen's kappa.

## Same field, different coder

CSET's taxonomy was applied to some incidents by more than one annotator. Annotators 1 and 2 share 88 incidents; annotators 1 and 3 share 76.

| CSET field | annotators 1 and 2: n | agreement | κ | annotators 1 and 3: n | agreement | κ |
|---|---|---|---|---|---|---|
| AI System | 78 | 93.6% | 0.80 | 65 | 95.4% | 0.38 |
| Clear link to technology | 76 | 86.8% | 0.31 | 65 | 98.5% | 0.79 |
| Harm Domain | 80 | 68.8% | 0.29 | 64 | 73.4% | 0.34 |
| Impact on Critical Services | 82 | 92.7% | 0.37 | 72 | 93.1% | 0.27 |
| Rights Violation | 77 | 90.9% | 0.55 | 64 | 89.1% | 0.41 |
| Involving Minor | 85 | 98.8% | 0.92 | 73 | 95.9% | 0.00 |
| Detrimental Content | 81 | 95.1% | 0.79 | 71 | 98.6% | 0.93 |
| Protected Characteristic | 82 | 95.1% | 0.90 | 66 | 93.9% | 0.87 |
| Special Interest Intangible Harm | 80 | 93.8% | 0.88 | 64 | 89.1% | 0.78 |
| Harmed Class of Entities | 88 | 78.4% | 0.13 | 76 | 81.6% | 0.19 |
| There is a potentially identifiable specific entity that experienced the harm | 88 | 81.8% | 0.54 | 76 | 77.6% | 0.41 |

## Same concept, different taxonomy

CSET's "Intentional Harm" field and the MIT AI Incident Tracker's "Intent" field, on the 214 incidents both code (190 with a yes or no from both).

| | MIT: intentional | MIT: not intentional |
|---|---|---|
| **CSET: intentional** | 7 | 1 |
| **CSET: not intentional** | 22 | 160 |

Agreement is 87.9% and κ = 0.33. Of the 30 incidents that either taxonomy codes as intentional, the two agree on 7.

Source: `results/aiid_joint_tables.json` in the study repository.
