---
layout: relation
title:  'cop'
shortdef : 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and
the copular verb. Copular heads are avoided when possible.

~~~ sdparse
Bill is an honest man
cop(man, is)
nsubj(man, Bill)
amod(man, honest)
det(man, an)
~~~

Prepositional phrases are annotated similarly, the only difference being that
the nominal predicate has an additional case marker.

~~~ sdparse
Bill is from California
case(California, from)
cop(California, is)
nsubj(California, Bill)
~~~

When an adjective or adverb is being predicated of a nominal phrase, the
adjective/adverb is the root, the nominal phrase is the nsubj, and the
copula is the cop.

~~~ sdparse
Bill is honest
nsubj(honest, Bill)
cop(honest, is)
~~~

~~~ sdparse
It was yesterday
nsubj(yesterday, It)
cop(yesterday, was)
~~~

Prepositions may also project a cop dependent.

~~~ sdparse
The light is on
cop(on, is)
nsubj(on, light)
det(light, The)
~~~

In predicative wh-constructions, the fronted wh-word is the head, and the copula is
another cop.

~~~ sdparse
What is that ?
cop(What, is)
nsubj(What, that)
~~~

However, whenever the copula has a clausal argument/adjunct, the copula becomes the root, so the cop relation is not used.

~~~ sdparse
It was because Bill is honest
nsubj(was, It)
mark(honest, because)
ccomp(was, honest)
nsubj(honest, Bill)
cop(honest, is)
~~~

~~~ sdparse
My question is : was that really true ?
nsubj(is, question)
ccomp(is, true)
cop(true, was)
nsubj(true, that)
advmod(true, really)
~~~

~~~ sdparse
This is to inform you of our decision
nsubj(is, This)
advcl(is, inform)
aux(inform, to)
dobj(inform, you)
nmod(inform, decision)
case(decision, of)
poss(decision, our)
~~~

Predicative "be" is the only verb recognized as a copula; other copula-like verbs,such as "become", "get", and "seem", are treated as regular raising verbs, and thus take xcomp arguments. Non-predicative uses of "be"--e.g., "be" when used in periphrastic verbal constructions, presentationals, or existentials--is annotated as an aux instead.
of a cop.

~~~ sdparse
Bill got rich
nsubj(got, Bill)
xcomp(got, rich)
~~~

~~~ sdparse
Bill is speaking
nsubj(speaking, Bill)
aux(speaking, is)
~~~

~~~ sdparse
Here are some bags
advmod(are, Here)
nsubj(are, bags)
det(bags, some)
~~~

~~~ sdparse
There 's a cow in the field
expl('s, There)
nsubj('s, cow)
det(cow, a)
nmod('s, field)
det(field, the)
case(field, in)
~~~
<!-- Interlanguage links updated St lis 3 20:58:47 CET 2021 -->
