---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](/u/overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- To hike in the mountains is to experience the best of nature .
root(-ROOT-, experience)
csubj:outer(experience, hike)
obl(hike, mountains)
mark(hike, To)
cop(experience, is)
mark(experience, to)
obj(experience, best)
~~~

~~~ sdparse
For us to not attempt to solve the problem is for us to acknowledge defeat .
mark(attempt, For)
nsubj(attempt, us)
mark(attempt, to-3)
xcomp(attempt, solve)
csubj:outer(acknowledge, attempt)
cop(acknowledge, is)
mark(acknowledge, for)
nsubj(acknowledge, us)
obj(acknowledge, defeat)
~~~

The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
It is very important that your students respect you .
expl(important, It)
csubj(important, respect)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:20 CET 2022 -->
