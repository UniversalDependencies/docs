---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Armenian, the phrase is in the nominative [Case]().
(See [csubj]() for when the subject is clausal.
See [nsubj:pass](), [csubj:pass]() and [nsubj:caus]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun (including a noun marked by a preposition).

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
<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
