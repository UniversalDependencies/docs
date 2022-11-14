---
layout: relation
title:  'csubj'
shortdef : 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause.

~~~ sdparse
Taking a nap will relax you !
csubj(relax, Taking)
~~~

The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb:

~~~ sdparse
Whether he lied is beside the point .
csubj(point, lied)
mark(lied, Whether)
nsubj(lied, he)
cop(point, is)
case(point, beside)
det(point, the)
~~~

Special cases include [csubj:pass]() for clausal subjects of passive clauses, and [csubj:outer]() for clausal subjects of copular clauses whose predicate is itself a clause.

This relation often occurs in extraposition constructions alongside [expl](). See further discussion and examples on the universal dependency page ([u-dep/expl]()).

<!-- Interlanguage links updated Po lis 14 15:35:19 CET 2022 -->
