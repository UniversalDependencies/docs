---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Czech, the phrase is in the nominative [Case]().
(See [csubj]() for when the subject is clausal.
See [nsubjpass]() and [csubjpass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun.

~~~ sdparse
Ленинградскую симфонию написал Дмитрий Шостакович . \n Leningrad Symphony wrote Dmitri Shostakovich .
nsubj(написал, Шостакович)
nsubj(wrote, Shostakovich)
~~~

~~~ sdparse
Автомобиль красный . \n Car-is red .
nsubj(красный, Автомобиль)
nsubj(red, Car)
~~~

