---
title: Verdicts
description: How the study decides whether a result holds across every reading of the definitions and every way the unknown codes could resolve.
---

# Verdicts

Each registered hypothesis is checked at every combination of [readings](/rival-ai-incident-definitions/readings/), called a leaf, and each leaf is checked across every way the incidents' unknown codes could resolve, called the [assignment range](/rival-ai-incident-definitions/framework/three-state/). The verdict summarizes both into one statement about whether the result depends on how the definitions are read.

## Verdict at One Leaf

| Code | Meaning |
|---|---|
| **M** | Met at every assignment of the unknown codes |
| **m** | Met on the incidents every rule can classify, but not at every assignment |
| **f** | Not met on the classifiable incidents, but met at some assignment |
| **F** | Not met at any assignment |
| **V** | Void: a condition registered in advance for the test to run was not met, such as too few incidents that every rule can classify |
| **NC** | Not computable: the coded fields cannot decide it |
| **UD** | Undefined: a statistic the criterion needs has a zero denominator |

## Verdict Across All Leaves

| Verdict | Meaning |
|---|---|
| **Survives every reading** | M at every leaf |
| **Survives every reading on resolved cases** | M or m at every leaf, with the number of M leaves given |
| **Holds on a named region** | Met exactly at the leaves where a stated condition on the readings is true, such as "under the broad rights clause" |
| **Fails at every reading** | f or F at every leaf |
| **Not computable** | NC at every leaf |

A dimension is **pivotal** for a hypothesis when changing only that reading turns a met leaf into a failed one, and the pivotal dimensions are reported with the verdict, as in "flips on the rights clause".

## Co-Headlines

Where the headline rule leaves two readings of one dimension, the hypothesis has two headline leaves, and its headline verdict is **met** only if it is met at both, **not met** only if it is not met at both, and **splits on** that dimension otherwise, with the verdict at each reported beside it.

## Layers

Leaves are reported in three layers: the headline leaf; the **source-backed** layer, whose readings are all labeled S; and the **extended** layer, which includes at least one reading labeled J or B. The share of leaves that support a result is never treated as evidence for it, because the number of readings on each dimension is a choice.
