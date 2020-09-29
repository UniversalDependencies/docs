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
predicate of the subject clause. 

Example 1: The clausal subject is the relative clause, which has a main verb.

~~~ sdparse
Който е закъснял , ще чака . \n Who is late , will wait-he .
csubj(чака, закъснял)
csubj(wait-he, late)
~~~

Example 2: The clausal subject is the to-clause (да се срещнем)

~~~ sdparse
Предстои да се срещнем . \n Coming-it-is to REFL.meet-each-other .
csubj(Предстои, срещнем)
csubj(Coming-it-is, REFL.meet-each-other)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:26 CEST 2020 -->
