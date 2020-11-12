---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier is the relation between a negation word and the word it modifies.

In Turkish, negation is typically done through suffixation.
We use `neg` only if the non-predicative use of  the word _değil_.

~~~ sdparse
Elma değil , armut al demiştim . \n I asked for pears, not for apples.
neg(Elma, değil)
~~~

~~~ sdparse
En büyüğünü al dedim, küçük değil . \n I told you to get the biggest
not small(est)
neg(küçük, değil)
~~~


~~~ sdparse
Değil üniversite , orta okulu bile bitirmemiş . \n Let alone the university, he did not even finish the secondary school
neg(üniversite, Değil)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
