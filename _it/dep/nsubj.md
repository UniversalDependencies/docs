---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (<code>nsubj</code>) is a nominal which is the syntactic subject of a clause. The governor of this relation is typically a verb with an exceptions: when the verb is a copular verb, the <code>nsubj</code> relation is headed by the complement of the copular verb, which can be an adjective or a noun.

~~~ sdparse
Ai balconi si affacciano donne/NOUN anziane.
nsubj(affacciano, donne)
~~~
~~~ sdparse
Chi/PRON ha ucciso l'ingegner Reali?
nsubj(ucciso, Chi)
~~~
~~~ sdparse
La situazione arbitrale è pessima/ADJ.
nsubj(pessima, situazione)
cop(pessima, è)
~~~
~~~ sdparse
Questa ricchezza è tutta apparenza/NOUN.
nsubj(apparenza, ricchezza)
cop(apparenza, è)
~~~

The <code>nsubj</code> role is only applied to semantic arguments of a predicate. When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive), it is labeled as [expl]() or better [expl:impers]()

~~~ sdparse
Si può procedere .
expl:impers(procedere, Si)
~~~

**NB**
Note that when the verb is used in the passive voice the nominal syntactic subject is marked as <code>nsubjpass</code>.
When the subject is clausal, it's preferable to use other specialized relations ([csubj]() or [csubjpass]()).
<!-- Interlanguage links updated Út zář 29 20:43:22 CEST 2020 -->
