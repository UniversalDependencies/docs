---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the
clause is the complement of the copular verb. The dependent is the main lexical verb or other 
predicate of the subject clause. In the following
example, *what she said* (that is, *said* is the clausal subject of *makes*.

~~~ sdparse
What she said makes sense
csubj(makes, said)
~~~
