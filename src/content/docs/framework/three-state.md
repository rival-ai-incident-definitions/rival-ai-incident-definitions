---
title: Three-State Labels
description: Why every rule answers yes, no or can't tell, and how results are bounded over every way the unknown codes could resolve.
---

# Three-State Labels

Coded incident data often has blanks, "maybe" and "unclear" codes, so every rule answers **yes**, **no** or **can't tell** for each incident, and no incident is dropped for having an unknown code.

## Combining Unknowns

Rules combine fields with AND, OR and NOT, and an unknown field makes the result unknown only when the answer really depends on it: an AND with any "no" is "no", and an OR with any "yes" is "yes", whatever the unknown fields say. This is strong Kleene three-valued logic.

## Assignment Range

An **assignment** sets every unknown code to yes or no, with each unknown field taking one value in every rule that reads it. The **assignment range** of a result is its lowest and highest value over every assignment, computed exactly by enumerating each incident's own unknown fields and combining the incidents; a result that holds across the whole range does not depend on how the unknowns resolve, and one that holds only across part of it is reported that way on the [Verdicts](/rival-ai-incident-definitions/framework/verdicts/) page.

## Two Named Assignments

Every result is also reported under two assignments: **maybe-yes**, where every "maybe" is read as yes, and **maybe-no**, where every "maybe" is read as no.

## A Source's Own Rule

Where a source's text decides what an unknown code means, that decision comes first. CSET's guide says that when the information is not enough to tell whether an AI was present, no AI harm occurred by CSET's definition, so a "maybe" on CSET's AI-presence field is read as no in CSET's own rules under every assignment, and the other definitions' rules, which say nothing about it, keep it unknown.
