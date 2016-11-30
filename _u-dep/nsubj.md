---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (`nsubj`) is a nominal which is the syntactic subject and the proto-agent of a clause.
That is, it is in the position that passes typical grammatical test for subjecthood, and this argument is the more agentive,
the do-er, or the proto-agent of the clause. This nominal may be headed by a noun, 
or it may be a pronoun or relative pronoun or, in ellipsis contexts, other things such as an adjective.

**New from v2:** The `nsubj` relation is also used for the nominal subject of a passive verb or verb group, even
though the subject is then not typically the proto-agent argument due to valency changing operations. For languages
that have a grammaticalized passive transformation, it is strongly recommended to use the subtype `nsubj:pass` in 
such cases.

The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun, including a noun marked by a preposition,
as in the examples below.

The `nsubj` role is only applied to semantic arguments of a predicate.
When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive),
it is labeled as [expl](). If there is then a displaced subject
in the clause, as in the English existential _there_ construction, it will be labeled as `nsubj`.)

~~~ sdparse
Clinton defeated Dole
nsubj(defeated, Clinton)
~~~

~~~ sdparse
Dole was defeated by Clinton
nsubj:pass(defeated, Dole)
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
acl(viewpoints, existed)
nsubj(existed, that)
~~~

