---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-clauses.html#predicate-clauses).

~~~ sdparse
-ROOT- To hike in the mountains is to experience the best of nature.
root(-ROOT-, experience)
csubj:outer(experience, hike)
obl(hike, mountains)
mark(hike, To)
cop(experience, is)
mark(experience, to)
obj(experience, best)
~~~

The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
It is very important that your students respect you .
expl(important, It)
csubj(important, respect)
~~~
