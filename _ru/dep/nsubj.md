---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a NP which is the syntactic subject of a clause; in Russian, the phrase is prototypically in the nominative [Case](). Under negation, the phrase can be in the genitive [Case]().
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

~~~ sdparse
Машины нет . \n There-is-no car  .
nsubj(нет, Машины)
nsubj(There-is-no, car)
~~~


<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
