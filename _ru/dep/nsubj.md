---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a NP which is the syntactic subject of a clause; in Russian, the phrase is in the Nominative [Case]().
(See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun.

~~~ sdparse
Ленинградскую симфонию написал Шостакович . \n Leningrad Symphony wrote Shostakovich .
nsubj(написал, Шостакович)
nsubj(wrote, Shostakovich)
~~~

~~~ sdparse
Автомобиль красный . \n Car is-red .
nsubj(красный, Автомобиль)
nsubj(is-red, Car)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:37 CEST 2020 -->
