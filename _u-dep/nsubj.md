---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject (`nsubj`) is a nominal phrase which is the syntactic subject and the proto-agent of a clause.
That is, it is in the position that passes typical grammatical test for subjecthood, and this argument is the more agentive,
the do-er, or the proto-agent of the clause. 
(See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not 
the proto-agent argument due to valence changing operations. The `nsubj` role is only applied to semantic arguments of a predicate.
When there is an empty argument in a grammatical subject position, it is labeled as [expl](). If there is then a displaced subject
in the clause, as in the English existential _there_ construction, it will be labeled as `nsubj`.)
The governor of the `nsubj` relation might not always be a verb: when
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

~~~ sdparse
There is a ghost in the room .
expl(is, There)
nsubj(is, ghost)
~~~
