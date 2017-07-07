---
layout: relation
title: 'nsubj:quasi'
shortdef: 'quasi nominal subject'
udver: '2'
---


In FrenchSpoken we don't use the usual [expl]() relation and have instead decided to use only a subrelation for impersonal construction: [nsubj:expl]().
To annotate the other dependent of the predicate (i.e. not the dependent annotated with the `nsubj:expl` relation) we use the `nsubj:quasi` relation. 

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

When the other dependent of the impersonal construction's predicate is a clause, we use the [csubj:quasi]() relation.
