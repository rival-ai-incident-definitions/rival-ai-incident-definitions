---
title: CSETv1
description: The CSET AI Harm Taxonomy definitions of an AI tangible harm event and a special interest intangible AI harm, quoted from the 2023 annotation guide.
---

# CSETv1

The Center for Security and Emerging Technology (CSET) coded AI Incident Database incidents with its AI Harm Taxonomy (CSETv1). The annotation guide defines two kinds of harm.

## Definitions

> An AI Tangible Harm Event occurs when 1) a potentially identifiable, specific entity 2) experiences an event that causes tangible harm (injury, loss, or damage) which 3) can be directly linked to a consequence of 4) an AI’s behavior.

> A Special Interest Intangible AI Harm occurs when 1) a characterizable class or subgroup of entities 2) experiences or has a risk of experiencing a designated intangible harm that 3) can be directly linked to the consequences of 4) an AI’s behavior. In reference to #2 above, CSET has designated three categories of intangible harm: a) harm to civil liberties, civil rights, human rights, or democratic norms, b) detrimental content (misinformation, hate-speech, etc), and c) differential treatment based upon a protected characteristic.

| Element | Tangible harm event | Special interest intangible harm |
|---|---|---|
| Who is harmed | "a potentially identifiable, specific entity" | "a characterizable class or subgroup of entities" |
| AI involvement | "can be directly linked to a consequence of" | "can be directly linked to the consequences of" |
| Harm that did not occur | Separate levels (below) | Included: "experiences or has a risk of experiencing" |

## Levels of harm

The guide's revision aimed to "better distinguish between tangible harm events, near-misses, issues". For tangible harm, a near miss is harm that "would have occurred had it not been for randomness , luck, or atypical intervention that prevented the harm", and an issue is harm that "could not have nearly occurred but it could plausibly occur in the future". For intangible harm, "CSET is not distinguishing or defining similar levels (event, near-miss, and issue)".

## Causal involvement

"The AI system doesn’t need to be the only factor, or even the major factor, in causing the harm. But it should at least be a “but-for” cause - that is, if the AI system hadn’t acted in the way it did, the specific harm would not have occurred."

## Coding rules

**Uncertain cases.** Annotators "err on the side of classifying the account as an issue or the lowest clearly known level of harm category."

**Discrimination.** "Only mark yes if there is clear evidence discrimination occurred. If there are conflicting accounts, mark unsure. Do not mark that discrimination occurred based on expectation alone."

**The general public.** "the general public is not an identifiable specific entity".

## Source

CSET (2023), *CSET AI Harm Taxonomy for AIID and Annotation Guide*, 25 July 2023. [GitHub](https://github.com/georgetown-cset/CSET-AIID-harm-taxonomy)

CSET's first edition has its own page: [CSETv0](/rival-ai-incident-definitions/definitions/csetv0/).
