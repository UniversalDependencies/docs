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
adjective/adverb is the [root](), the nominal phrase is the [nsubj](), and the
copula is the `cop`.

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

Prepositions may also project a `cop` dependent.

~~~ sdparse
The light is on
cop(on, is)
nsubj(on, light)
det(light, The)
~~~

In predicative wh-constructions, the fronted wh-word is the head, and the copula follows.

~~~ sdparse
What is that ?
cop(What, is)
nsubj(What, that)
~~~

The `cop` may mark a [predicate clause](/u/overview/complex-syntax.html#predicate-clauses), i.e., a full clause serving as the predicate within an outer copular clause. 
In such cases, [nsubj:outer]() or [csubj:outer]() can be used to distinguish the outer subject:

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
The important thing is to keep calm .
nsubj:outer(keep, thing)
cop(keep, is)
mark(keep, to)
xcomp(keep, calm)
~~~

Predicative "be" is the only verb recognized as a copula; other copula-like verbs, such as "become", "get", and "seem", are treated as regular raising verbs, and thus take [xcomp]() arguments. In its non-predicative uses—e.g., when used in periphrastic verbal constructions, presentationals, or existentials—"be" is attached with [aux]() or [aux:pass](), or is considered the root of the clause.

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
I was given a horse
nsubj:pass(given, I)
aux:pass(given, was)
~~~

~~~ sdparse
Here are some bags
advmod(are, Here)
nsubj(are, bags)
det(bags, some)
~~~

~~~ sdparse
There 's/VERB a cow in the field
expl('s, There)
nsubj('s, cow)
det(cow, a)
obl('s, field)
det(field, the)
case(field, in)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:18 CET 2022 -->
