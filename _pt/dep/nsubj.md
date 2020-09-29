---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject (`nsubj`) is a nominal which is the syntactic subject and the proto-agent of a clause.
That is, it is in the position that passes typical grammatical test for subjecthood, and this argument is the more agentive,
the do-er, or the proto-agent of the clause. 
(See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not 
the proto-agent argument due to valence changing operations.) This nominal may be headed by a noun, 
or it may be a pronoun or relative pronoun, or in ellipsis contexts, other things such as an adjective.

~~~ sdparse
Euler fez mais duas jogadas .
nsubj(fez, Euler)
~~~

<<!- The `nsubj` role is only applied to semantic arguments of a predicate.
When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive),
it is labeled as [expl](). If there is then a displaced subject
in the clause, as in the English existential _there_ construction, it will be labeled as `nsubj`.) -->

The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun, including a noun marked by a preposition,
as in the examples below.



~~~ sdparse
o tom já é outro .
nsubj(outro, tom)
~~~

Note that when the subject appears after the verb, it is still tagged as `nsubj`.

~~~ sdparse
É um povo apaixonado , o povo basco .
nsubj(povo-3, povo-7)
~~~

Note that complex subjects are treated as conjunctions and only the first element of the conjunction holds the `nsubj` relation.

~~~ sdparse
O Grupo Champalimaud, a Petrogal, a TAP, a Marconi, são algumas das que mais investiram.
nsubj(algumas, Grupo)
conj(Grupo, Petrogal)
conj(Grupo, TAP)
conj(Grupo, Marconi)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:37 CEST 2020 -->
