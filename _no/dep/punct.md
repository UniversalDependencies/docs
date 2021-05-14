---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---


Tokens with the relation punct always attach to content words (except in cases of ellipsis) and can never have dependents. Since punct is not a normal dependency relation, the usual criteria for determining the head word do not apply. Instead, we use the following principles:
  * A punctuation mark separating coordinated units is attached to the conjunct immediately following it.
  * A punctuation mark preceding or following a subordinated unit is attached to this unit.
  * Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
  * Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
Per , Kari og Ola leker \n Per , Kari and Ola play
punct(Kari,,)
~~~
~~~ sdparse
Hvis Ola synger , ler Kari \n If Ola sings , Kari laughs
punct(synger,,)
~~~
 
<!-- Interlanguage links updated Pá kvě 14 11:09:21 CEST 2021 -->
