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

~~~ sdparse
That he lied surprised me .
csubj(surprised, lied)
mark(lied, That)
nsubj(lied, he)
obj(surprised, me)
~~~

~~~ sdparse
Whether he lied is unknown .
csubj(unknown, lied)
mark(lied, Whether)
nsubj(lied, he)
cop(unknown, is)
~~~

**New from v2:** The `csubj` relation is also used for the clausal subject of a passive verb or verb group. For languages
that have a grammaticalized passive transformation, it is strongly recommended to use the subtype [csubj:pass]() in 
such cases. If the subject is of a copular clause whose predicate is itself a clause, [csubj:outer]() may be used.

See also expletive subject examples under [expl]() that use `csubj`.

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:01 CEST -->
