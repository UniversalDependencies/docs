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

The `det` relation is also used by FrenchSpoken:

~~~ sdparse
donc la vigilance sera accrue à ce moment -là \n so there will be increased vigilance at that time
det(vigilance,la)
det(moment,ce)
~~~

In some corpora of the French treebank, possessive determiners are marked with the [nmod:poss]() relation:

~~~ sdparse
Mon ami  \n My friend
nmod:poss(ami, Mon)
~~~

However FrenchSpoken annotates possessive determiners with a `det` relation and does not use the `nmod:poss` relation.

~~~ sdparse
nous allons vous prouver l' efficacité de notre boule magique \n we will show you the efficiency of our magic ball
det(boule,notre)
det(efficacité,l')
~~~

N.B.: The [det:complex]() relation is used to analyze complex determiners.
