---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A `cop` (copula) is the relation of a function word used to link a subject to a [nonverbal predicate](/u/overview/simple-syntax.html#nonverbal-clauses), including the expression of identity predication (e.g. sentences like "Kim is the President").
It is often a verb but nonverbal (pronominal) copulas are also frequent in the world's languages.
Verbal copulas are tagged [AUX](), not `VERB`. Pronominal copulas are tagged [PRON]() or [DET]().

The `cop` relation
should only be used for pure copulas that add at most TAME categories to the meaning of the predicate,
which means that most languages have at most one copula, and only when the nonverbal predicate is treated
as the head of the clause.

As a concrete example, in many European languages the equivalent of the English verb _to be_ is the only word that can appear with the `cop` relation. In Spanish and related languages, both _ser_ and _estar_ can be copulas. In Czech and related languages, both _být_ and _bývat_ are copulas (because they are morphological variants of the same lexeme, and the reason they have two lemmas is that aspect-related morphology is treated as derivational in these languages). In contrast, the equivalents of _to become_ are not copulas despite the fact that traditional grammar may label them as such. Existential _to be_ can be copula only if it is the same verb as in equivalence clauses _(John is a teacher)_. If a language uses two different verbs, then the existential one is not a copula. Some more discussion of the topic is archived [here](https://universaldependencies.org/v2/copula.html#guidelines-for-udv2).

~~~ sdparse
Bill is honest
nsubj(honest, Bill)
cop(honest, is)
~~~

~~~ sdparse
Ivan is the best dancer
nsubj(dancer-5, Ivan-1)
cop(dancer-5, is-2)
det(dancer-5, the-3)
amod(dancer-5, best-4)
~~~

The copula *be* is not treated as the head of a clause, but rather the nonverbal predicate, as exemplified above.

Such an analysis is motivated by the fact that many languages often or always lack an overt copula in such
constructions, as in the the following Russian and Hebrew examples:

~~~ sdparse
Ivan lučšij tancor \n Ivan best dancer
nsubj(tancor, Ivan)
amod(tancor, lučšij)
~~~

~~~ sdparse
ani Kim \n I am Kim
nsubj(Kim-2, ani-1)
~~~

In informal English, this may also arise.

~~~ sdparse
Email usually free if you have Wifi.
nsubj(free, Email)
~~~

This analysis is adopted also when the predicate is a prepositional phrase, provided that the same copula
(or absence thereof) is used here, in which case the nominal part of the
prepositional phrase is the head of the clause.

~~~ sdparse
Sue is in shape
nsubj(shape, Sue)
cop(shape, is)
case(shape, in)
~~~

<!--A parallel can also be drawn to so-called raising-to-object or small clause constructions in English.
Under the basic analysis proposed for SD, the predicate complement is
not linked to its subject argument, but in the enhanced representation
(see below), the linkage is then parallel to the treatment in a zero
copula language:

~~~ sdparse
I judge Ivan the best dancer
nsubj(judge-2, I-1)
obj(judge-2, Ivan-3)
xcomp(judge-2, dancer-6)
det(dancer-6, the-4)
amod(dancer-6, best-5)
nsubj(dancer-6, Ivan-3)
~~~
-->

If the copula is accompanied by other verbal auxiliaries for tense, aspect, etc., then they are also given a flat structure, and taken as dependents of the lexical predicate:

~~~ sdparse
Sue has been helpful
nsubj(helpful, Sue)
cop(helpful, been)
aux(helpful, has)
~~~

The motivation for this choice is that this structure is parallel to the flat structure which we give to auxiliary verbs accompanying verbs. In particular, in languages such as English, it is often very difficult to decide whether to regard a participle as a verb or an adjective.  Perhaps the following sentence is such a case:

~~~ sdparse
The presence of troops will be destabilizing .
nsubj(destabilizing, presence)
cop/aux(destabilizing, be)
aux(destabilizing, will)
~~~

While a part of speech (and associated deprel: `cop` vs. `aux`) has to be decided in such cases, it would be unfortunate if the choice of part of speech also changed the dependency structure. Note, however, that the exact distribution of the copula construction is subject to language-specific variation.

Finally, the `cop` may mark a [predicate clause](/u/overview/complex-syntax.html), i.e., a full clause serving as the predicate within an outer copular clause. 
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
The important thing is to keep calm.
nsubj:outer(keep, thing)
cop(keep, is)
mark(keep, to)
xcomp(keep, calm)
~~~

<!-- Interlanguage links updated St lis 3 20:58:47 CET 2021 -->
