---
layout: entry
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement of a verb or adjective is a dependent clause 
which functions like an object of the verb, or
adjective.

~~~ sdparse
He says that you like to swim
ccomp(says, like)
~~~

Clausal complements for nouns are limited to complement
clauses with a subset of nouns like *fact* or *report*.  We analyze
them the same (parallel to the analysis of this class as "content
clauses" in Huddleston and Pullum 2002).

~~~ sdparse
the fact that nobody cares
ccomp(fact, cares)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is `xcomp`.

~~~ sdparse
The boss said to start digging
ccomp(said, start)
~~~

~~~ sdparse
We started digging
xcomp(started, digging)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.

Additionally, `ccomp` is used with copulas.

~~~ sdparse
The important thing is to keep calm.
ccomp(is, keep)
~~~

~~~ sdparse
The problem is that this has never been tried .
ccomp(is, tried)
~~~

(In these cases, the copula is treated as the root.)
