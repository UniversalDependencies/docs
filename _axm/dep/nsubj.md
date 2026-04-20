---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause; in Middle Armenian, the phrase is generally in the nominative [Case](). 
However, there are notable instances of subjects appearing in oblique cases. With the emergence of the passive suffix -v- (Voice=Pass) in Middle Armenian, which allows for the differentiation between active and passive forms of the verb, the use of the genitive (Case=Gen) for subjects disappears. Nevertheless, occasional examples of subjects in the accusative can still be found.
See [nsubj:pass](), [csubj:pass]() and [nsubj:caus]() for when the subject is not the proto-agent argument due to valence changing operations.)
(See [csubj]() for when the subject is clausal.
The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement
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
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:12 CET -->
