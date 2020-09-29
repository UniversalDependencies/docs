---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
---

A nominal subject (`nsubj`) is a nominal which is the syntactic subject and the proto-agent of a clause.
That is, it is in the position that passes typical grammatical test for subjecthood, and this argument is the more agentive,
the do-er, or the proto-agent of the clause. 
(See [csubj]() for when the subject is clausal. See [nsubjpass]() and [csubjpass]() for when the subject is not 
the proto-agent argument due to valence changing operations.) This nominal may be headed by a noun, 
or it may be a pronoun or relative pronoun, or in ellipsis contexts, other things such as an adjective.

The `nsubj` role is only applied to semantic arguments of a predicate.
When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive),
it is labeled as [expl](). If there is then a displaced subject
in the clause, as in the English existential _there_ construction, it will be labeled as `nsubj`.
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun, including a noun marked by a preposition,
as in the examples below.

In English, the `nsubj` normally precedes the predicate that it depends on, but this need not be the case, 
both for the displaced subjects of expletive constructions and in other cases of stylistic inversion, such
as the example headed by the predicate _come_ below.

~~~ sdparse
Clinton defeated Dole
nsubj(defeated, Clinton)
~~~

~~~ sdparse
The car is red .
nsubj(red, car)
~~~

~~~ sdparse
Sue is a true patriot .
nsubj(patriot, Sue)
~~~

~~~ sdparse
We are in the barn .
nsubj(barn, We)
~~~

~~~ sdparse
Agatha is in trouble .
nsubj(trouble, Agatha)
~~~

~~~ sdparse
There is a ghost in the room .
expl(is, There)
nsubj(is, ghost)
~~~

~~~sdparse
These links present the many viewpoints that existed .
acl:relcl(viewpoints, existed)
nsubj(existed, that)
~~~

~~~sdparse
From China comes news of a new super-small mobile phone .
nsubj(comes, news)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:57 CEST 2020 -->
