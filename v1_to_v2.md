---
layout: base
title:  'UD tools'
udver: '2'
---

# Specification of v1-to-v2 conversion and validation

| Phenomenon | Conversion | Validation |
|------------|------------|------------|
| Word segmentation | -- | Make list of word forms and lemmas containing spaces |
| PoS tags | CONJ → CCONJ | CONJ → CCONJ |
|          | -- | Make list of lemmas of auxiliaries (`AUX`) |
|          | -- | Make list of lemmas of approved particles (`PART`) |
| Features | Rename a number of features/values | Revise inventory according to v2 |
|          | -- | Even some v1 language-specific features are now disallowed because the new universal features should be used |
| Core arguments | dobj → obj | dobj → obj |
|           | nsubjpass → nsubj:pass | nsubjpass → nsubj:pass |
|           | csubjpass → csubj:pass | csubjpass → csubj:pass |
| Nominal modifiers | nmod with non-nominal head → obl | -- |
|           | flag other nmod for manual inspection | -- |
| Copula | -- | Make list of lemmas with cop relation ]
| Functional relations | auxpass → aux:pass | auxpass → aux:pass |

Validation: The set of lists is growing and we should not require that all lists are present for all languages even if empty (as was the practice so far). Furthermore, we should set up a validation procedure for these lists. Sometimes people bypass validation by adding something to the list of allowed labels which should never appear there.

Validation: Selected tests that have been part of the content validation should become part of the format validation. They would be optional when the validator is invoked from the command line, but the on-line overview would turn them on by default. Thus treebanks that contain (for example) right-to-left `fixed` relations would simply be invalid and highlighted in red.
