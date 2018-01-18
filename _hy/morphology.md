---
layout: base
title:  'Morphology'
udver: '2'
---

# Morphology

The Eastern Armenian morphology follows the UD guidelines for POS tagging.

The corpus contains a lemma for each word. These were automatically generated using Eastern Armenian lexicons but systematically hand-verified. For words not found in the lexicons, lemmas have been added manually.

The corpus contains a limited number of morphological features. The set of [universal features](../../u/feat/index.html) was extended with several additional
[features for Eastern Armenian](../hy/feat/index.html). These were developed into the version currently adopted by the UD project. 

The corpus contains the `SpaceAfter=No` annotation after appropriate words in the MISC column, when there is not a space after a token before the next token (for instance *դ՚* when part of *դ՚Արկ*, or *՞* when part of *ինչո՞ւ*, or a word before most punctuation marks).
