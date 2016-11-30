---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the
clause is the complement of the copular verb. The dependent is the main lexical verb or other 
predicate of the subject clause. In the following
examples, *what she said* (that is, *said*) is the clausal subject of *makes* and *interesting*, respectively.

**New from v2:** The `csubj` relation is also used for the clausal subject of a passive verb or verb group. For languages
that have a grammaticalized passive transformation, it is strongly recommended to use the subtype `csubj:pass` in 
such cases.

~~~ sdparse
What she said makes sense
csubj(makes, said)
~~~

~~~ sdparse
What she said is interesting
csubj(interesting, said)
~~~

~~~ sdparse
What she said was well received
csubj:pass(received, said)
~~~
