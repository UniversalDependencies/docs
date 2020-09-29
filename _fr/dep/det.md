---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

A determiner is the relation between the head of a nominal phrase and its determiner.

~~~ sdparse
Les fleurs sont magnifiques \n The flowers are beautiful
det(fleurs, Les)
~~~

~~~ sdparse
Quel livre préfères-tu ? \n Which book do you prefer ?
det(livre, Quel)
~~~

~~~ sdparse
donc la vigilance sera accrue à ce moment -là \n so there will be increased vigilance at that time
det(vigilance,la)
det(moment,ce)
~~~

Possessive determiners are marked as `det` in French (unlike the English data whet the [nmod:poss]() relation is used):

~~~ sdparse
Mon ami  \n My friend
det(ami, Mon)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:18 CEST 2020 -->
