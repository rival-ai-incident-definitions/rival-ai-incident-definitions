---
title: PAGCF
description: The Post-Deployment Accountability coding of 480 AI Incident Database incidents against EU AI Act, NIST and GDPR provisions, quoted from the paper.
---

# PAGCF

Mumtaz, Noor and Mumtaz (2026) coded 480 incidents from the [AI Incident Database](/rival-ai-incident-definitions/definitions/aiid/) against post-deployment provisions of the EU AI Act, the NIST AI Risk Management Framework and the GDPR, and released the coding as the PAGCF dataset.

## Method

> We operationalise compliance indicators for nine post-deployment provisions across the three frameworks using automated content analysis over incident report texts and structured metadata.

> For each provision an incident is assigned to one of four categories: compliant, partially compliant, non-compliant, or insufficient evidence.

The authors "interpret “insufficient evidence” separately from non-compliance because missing public documentation can reflect either an actual governance failure or a reporting limitation", and for harm types the coding "links to complementary taxonomies from CSET, the MIT AI Risk Repository, and the Global Monitoring Framework (GMF)" instead of defining its own.

| Element | Text |
|---|---|
| Who codes | Automated content analysis of the incident reports |
| What is coded | Compliance with nine post-deployment provisions, per incident |
| AI involvement | Not stated; the incidents are those the AI Incident Database admitted |
| Seriousness | A split between serious and non-serious incidents |
| Uncertain cases | A fourth category, "insufficient evidence", kept apart from non-compliance |

## Role in the Study

The study checks whether the authors' released case-level coding reproduces the joint table implied by the figures printed in their paper; see the [Study Overview](/rival-ai-incident-definitions/study/).

## Source

Mumtaz, U., Noor, R. and Mumtaz, S. (2026), *Post-Deployment Accountability in AI Governance: A Cross-Regulatory Empirical Analysis of AI Incidents*. [arXiv:2605.16281](https://arxiv.org/abs/2605.16281)
