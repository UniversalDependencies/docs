---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-clauses.html#predicate-clauses).

~~~ sdparse
-ROOT- The problem is that this has never been tried .
nsubj:outer(tried, problem)
cop(tried, is)
mark(tried, that)
nsubj:pass(tried, this)
aux(tried, has)
advmod(tried, never)
aux:pass(tried, been)
root(-ROOT-, tried)
~~~

~~~ sdparse
The title is Some Like It Hot .
nsubj:outer(Like, title)
cop(Like, is)
nsubj(Like, Some)
obj(Like, It)
xcomp(Like, Hot)
~~~

There may be an outer subject with no inner subject:

~~~ sdparse
The important thing is to keep calm.
nsubj:outer(keep, thing)
cop(keep, is)
mark(keep, to)
xcomp(keep, calm)
~~~

The clausal counterpart of this relation is [csubj:outer]().

The `:outer` subtype is *not* intended for most nominal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [nsubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
That book is very good .
nsubj(good, book)
~~~

~~~ sdparse
The title is Green Eggs and Ham .
nsubj(Eggs, title)
~~~
