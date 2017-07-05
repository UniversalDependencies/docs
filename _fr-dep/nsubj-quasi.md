---
layout: relation
title: 'nsubj:expl'
shortdef: 'quasi nominal subject'
udver: '2'
---

In FrenchSpoken we don't use the usual [expl]() relation and have instead decided to use only a subrelation for impersonal construction: [nsubj:expl]().
To annotate the other dependent of the predicate (i.e. not the dependent annotated with `nsubj:expl` relation) we use the `nsubj:quasi` relation.

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

