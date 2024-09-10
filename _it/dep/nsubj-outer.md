---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

As of version 2.10, this relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause. Its clausal counterpart is [csubj:outer]().
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- L' obiettivo è che quel bambino torni a casa .
nsubj:outer(torni, obiettivo)
cop(torni, è)
mark(torni, che)
nsubj(torni, bambino)
root(-ROOT-, torni)
~~~

The `:outer` subtype is *not* intended for most nominal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [nsubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
Le chiavi dei suoi film sono fin troppo leggibili .
nsubj(leggibili, chiavi)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:28 CEST -->
