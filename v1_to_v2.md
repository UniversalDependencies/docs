---
layout: base
title:  'UD tools'
udver: '2'
---

# Specification of v1-to-v2 conversion and validation

| Phenomenon | Conversion | Validation |
|------------|------------|------------|
| Word segmentation | -- | Make list of word forms and lemmas containing spaces |
| PoS tags | CONJ --> CCONJ | CONJ --> CCONJ |
| Features | Rename a number of features/values | Revise inventory according to v2 |
| Core arguments | dobj --> obj | dobj --> obj |
|           | nsubjpass --> nsubj:pass | nsubjpass --> nsubj:pass |
|           | csubjpass --> csubj:pass | csubjpass --> csubj:pass |
| Nominal modifiers | nmod with non-nominal head --> obl | -- |
|           | flag other nmod for manual inspection | -- |
| Copula | -- | Make list of lemmas with cop relation ]
| Functional relations | auxpass --> aux:pass | auxpass --> aux:pass |
