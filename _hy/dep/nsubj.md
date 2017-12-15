---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Armenian, the phrase is in the nominative [Case]().
(See [csubj]() for when the subject is clausal.
See [nsubj:pass]() and [csubj:pass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective, noun or adverb.

~~~ sdparse
« Անուշ » օպերան գրել է Արմեն Տիգրանյանը ։ \n Anoush opera wrote Armen Tigranyan .
nsubj(գրել, Տիգրանյանը-8)
nsubj(wrote, Tigranyan-14)
~~~

~~~ sdparse
Մեքենան կարմիր է ։ \n Car is red .
nsubj(կարմիր, Մեքենան)
nsubj(red, Car)
~~~
