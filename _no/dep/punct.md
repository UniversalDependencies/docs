---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---


Tokens with the relation punct always attach to content words (except in cases of ellipsis) and can never have dependents. Since punct is not a normal dependency relation, the usual criteria for determining the head word do not apply. Instead, we use the following principles:

  * A punctuation mark separating coordinated units is attached to the first conjunct.
  * A punctuation mark preceding or following a subordinated unit is attached to this unit.
  * Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
  * Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<!-- Interlanguage links updated Út zář 29 18:41:35 CEST 2020 -->
