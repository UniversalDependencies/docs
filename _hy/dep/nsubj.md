---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase that is the syntactic subject of a clause; in Armenian, the phrase is in the nominative [Case]().
See [csubj]() for clausal subjects.
See [nsubj:pass](), [csubj:pass](), and [nsubj:caus]() for subjects that are not proto-agent arguments due to valency-changing operations.
The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun (including a noun marked by a preposition).

~~~ sdparse
« Անուշ » օպերան գրել է Արմեն Տիգրանյանը ։ \n Anoush opera wrote Armen Tigranyan .
nsubj(գրել, Արմեն)
nsubj(wrote, Armen)
flat(Արմեն, Տիգրանյանը)
flat(Armen, Tigranyan)
~~~

~~~ sdparse
Մեքենան կարմիր է ։ \n Car is red .
nsubj(կարմիր, Մեքենան)
nsubj(red, Car)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:22 CEST -->
