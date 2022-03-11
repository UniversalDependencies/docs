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

### Reported Speech

With a speech verb like _say_, the content of reported speech is considered to be part of the verb's valency. It therefore attaches as [ccomp]()—not only when integrated within the clause as an indirect quotation (_said that..._), but also when set off as a direct quotation, even with inverted order:

~~~ sdparse
He said that he knew the muffin man .
ccomp(said, knew)
~~~

~~~ sdparse
I asked : " Do you know the muffin man ? "
ccomp(asked, know)
~~~

~~~ sdparse
" Do you know the muffin man ? " I asked .
ccomp(asked, know)
~~~

~~~ sdparse
" I had hoped to remain anonymous , " said the muffin man , who was tracked down Sunday at his home on Drury Lane .
ccomp(said, hoped)
nsubj(said, man)
~~~~

Quoted content is considered to be [ccomp]() even if it is a sentence fragment:

~~~ sdparse
" Three/NUM muffins/NOUN , " he answered .
nummod(muffins, Three)
ccomp(answered, muffins)
~~~

If the speech verb interrupts the reported speech content, [parataxis]() is used instead. The speech verb attaches to the root of the reported speech (_all_ in the following example):

~~~ sdparse
" Three muffins , " he answered , " are all that I need today . "
parataxis(all, answered)
nsubj(all, muffins)
~~~

~~~ sdparse
Weapons of mass destruction , the report explained , are designed to target civilian populations .
parataxis(designed, explained)
nsubj:pass(designed, Weapons)
~~~

~~~ sdparse
the impact that the group 's practices , law enforcement officials say , are having on the most vulnerable within the sect
acl:relcl(impact, having)
nsubj(having, practices)
parataxis(having, say)
~~~

### Copular Construction with Full Clause as Predicate

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
<!-- Interlanguage links updated St lis 3 20:58:44 CET 2021 -->
