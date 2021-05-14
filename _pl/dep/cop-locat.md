---
layout: relation
title: 'cop:locat'
shortdef: 'copula with a locative predicate'
udver: '2'
---

The `cop:locat` subtype of the [cop]() relation is used for the copula _być, bywać_ when the
non-verbal part of the predicate specifies a location. This subtype is currently used in the
[Polish LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank but not
in the other Polish treebanks.

~~~ sdparse
W podziemiach jest strzelnica i magazyn broni . \n In basement there-is shooting-range and weapons warehouse .
case(podziemiach, W)
cop:locat(podziemiach, jest)
nsubj(podziemiach, strzelnica)
conj(strzelnica, magazyn)
cc(magazyn, i)
nmod:poss(magazyn, broni)
~~~

“There is a shooting range and a weapons warehouse in the basement.”

<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
