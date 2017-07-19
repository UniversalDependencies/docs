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

A possessive determiner is marked with the [nmod:poss]() relation:

~~~ sdparse
Mon ami  \n My friend
nmod:poss(ami, Mon)
~~~

The `det` relation is also used by FrenchSpoken:

~~~ sdparse
donc la vigilance sera accrue à ce moment -là \n so there will be increased vigilance at that time
det(vigilance,la)
det(moment,ce)
~~~

