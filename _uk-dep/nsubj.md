---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause; in Ukrainian, the phrase is in the nominative [uk-feat/Case](). (See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not the proto-agent argument due to valence changing operations.) The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun. Copular verbs in the present tense are in most cases omitted in Ukrainian.

~~~ sdparse
Заповіт написав Тарас Шевченко . \n The Will was written by Taras Shevchenko .
nsubj(написав, Шевченко-4)
nsubj(wrote, Shevchenko-13)
~~~

~~~ sdparse
Машина -- червона . \n Car is red .
nsubj(червона, Машина)
nsubj(red, Car)
~~~
