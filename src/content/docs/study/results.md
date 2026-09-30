---
title: Results
description: The registered results of EXPT01 to EXPT04, run once on the pinned AI Incident Database snapshot.
---

# Results

The registered analyses ran once, on 30 September 2026, on the pinned AI Incident Database snapshot of 214 incidents coded by CSET's annotators.

## Which Incidents the Definitions Split On

The OECD's [definition of an AI incident](https://www.oecd.org/en/publications/defining-ai-incidents-and-related-terms_d1a8d965-en.html) lists, as clause (c), the harm:

> (c) violations of human rights or a breach of obligations under the applicable law intended to protect fundamental, labour and intellectual property rights;

In the [same report](https://www.oecd.org/en/publications/defining-ai-incidents-and-related-terms_d1a8d965-en.html), an explanatory note under the definition clarifies:

> Reputational harm to individuals and intangible harms such as hate speech and mis- and disinformation are included under (c) in relation to a breach of fundamental rights.

CSET's annotators code discrimination and harmful content in their own fields, separate from a rights violation, so the clause can be read three ways over CSET's fields.

| OECD rights clause read as | Both | CSET only | OECD only | Neither | Classified by both |
|---|---|---|---|---|---|
| Original wording plus explanatory note: rights violations, discrimination or harmful content | 127 | 0 | 8 | 48 | 183 |
| Rights violations or discrimination | 111 | 16 | 6 | 51 | 184 |
| Original wording only: rights violations | 80 | 45 | 4 | 53 | 182 |

With the OECD's explanatory note, CSET's definition is a subset of the OECD's, with no exception among the 183 incidents both definitions can classify. With the original wording alone, **45** incidents that CSET counts fall outside the OECD's definition, every one of them coded by CSET as discrimination or harmful content.

## Which AI Systems Those Incidents Involve

The 45 incidents that count only with the OECD's explanatory note involve language systems nearly three times as often as the other incidents CSET counts, and driving or navigation systems not at all. An incident can involve more than one kind of system; kinds are matched on CSET's `AI Task` and `AI tools and methods` fields. This comparison was not registered.

| AI system | Count only with the OECD's explanatory note (45) | Other incidents CSET counts (83) |
|---|---|---|
| Language: chatbots, assistants, language models | 16 (36%) | 11 (13%) |
| Search and recommendation | 9 (20%) | 8 (10%) |
| Content moderation | 5 (11%) | 2 (2%) |
| Image or media generation | 4 (9%) | 3 (4%) |
| Facial recognition | 5 (11%) | 10 (12%) |
| Other computer vision | 1 (2%) | 21 (25%) |
| Driving and navigation | 0 | 17 (20%) |
| None of these | 8 (18%) | 31 (37%) |

Every registered hypothesis, the comparison with CSET's annotators, CSET's own harm categories and the trend over time are in the run outputs in the [study repository](https://github.com/rival-ai-incident-definitions/rival-ai-incident-definitions-paper).
