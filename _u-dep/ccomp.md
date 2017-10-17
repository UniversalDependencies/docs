---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ sdparse
He says that you like to swim
ccomp(says, like)
mark(like, that)
~~~

~~~ sdparse
He says you like to swim
ccomp(says, like)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
The boss said to start digging
ccomp(said, start)
mark(start, to)
~~~

~~~ sdparse
We started digging
xcomp(started, digging)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.

Additionally, `ccomp` is used with copulas in equational constructions involving full clauses.

~~~ sdparse
The important thing is to keep calm.
ccomp(is, keep)
nsubj(is, thing)
~~~

~~~ sdparse
The problem is that this has never been tried .
ccomp(is, tried)
nsubj(is, problem)
~~~

(In these cases, the copula is treated as a head to preserve the integrity of clause boundaries and prevent one predicate to
be assigned two subjects. This is not an optimal solution given the analysis of equational constructions involving nominals, where one of the nominals is treated as the head, but it is the preferred solution for now.)

_Note:_ In earlier versions of SD/USD, complement
clauses with nouns like *fact* or *report* were also analyzed as `ccomp`. 
However, we now analyze them as [acl](). Hence, `ccomp` does not appear in nominals.
This makes sense, since nominals normally do not take core arguments.
