---
layout: relation
title: 'nsubj:quasi'
shortdef: 'quasi nominal subject'
udver: '2'
---


FrenchSpoken does not use the usual [expl]() relation. There is instead a subrelation used only for impersonal constructions: [nsubj:expl]().
To annotate the other dependent of the predicate (i.e. not the dependent annotated with the `nsubj:expl` relation), the `nsubj:quasi` relation is used. 

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

When the other dependent of the impersonal construction's predicate is a clause, the [csubj:quasi]() relation is used.
