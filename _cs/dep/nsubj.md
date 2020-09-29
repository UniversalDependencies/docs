---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Czech, the phrase is in the nominative [cs-feat/Case]().
(See [csubj]() for when the subject is clausal.
See [nsubj:pass]() and [csubj:pass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun.

~~~ sdparse
Novosvětskou symfonii napsal Antonín Dvořák . \n From-the-New-World Symphony wrote Antonín Dvořák .
nsubj(napsal, Dvořák-5)
nsubj(wrote, Dvořák-12)
~~~

~~~ sdparse
Auto je červené . \n Car is red .
nsubj(červené, Auto)
nsubj(red, Car)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:22 CEST 2020 -->
