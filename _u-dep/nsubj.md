---
layout: base
title: 'nsubj'
shortdef: 'nominal subject'
---

## {{ page.title }}: {{ page.shortdef }}

A nominal subject is a nominal phrase which is the syntactic subject of a
clause.
(See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the nsubj relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun.

~~~ sdparse
Clinton defeated Dole
nsubj(defeated, Clinton)
~~~

~~~ sdparse
The car is red .
nsubj(red, car)
~~~
