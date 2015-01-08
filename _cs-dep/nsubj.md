---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Czech, the phrase is in the nominative [cs-feat/Case]().
(See [csubj]() for when the subject is clausal.
See [nsubjpass]() and [csubjpass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun.

~~~ sdparse
Novosvětskou symfonii napsal Antonín Dvořák . \n From-the-New-World Symphony wrote Antonín Dvořák .
nsubj(napsal, Dvořák)
~~~

~~~ sdparse
Auto je červené . \n Car is red .
nsubj(červené, Auto)
~~~

~~~ sdparse
Eeva tuli töistä . \n Eeva came from_work .
nsubj(tuli-2, Eeva-1)
nmod(tuli-2, töistä-3)
punct(tuli-2, .-4)
~~~
