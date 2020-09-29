---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements. We treat
coordination asymmetrically: The head of the relation is the first
conjunct and other conjuncts depend on it via the `conj` relation.

~~~ sdparse
1500 kr per barn och år \n 1500 kr per child and year
conj(barn, år)
cc(år, och)
~~~

~~~ sdparse
En sekunds tvekan eller dröjsmål eller slarv \n A second's hesitation or delay or carelessness
conj(tvekan, dröjsmål)
conj(tvekan, slarv)
cc(dröjsmål, eller-4)
cc(slarv, eller-6)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:25 CEST 2020 -->
