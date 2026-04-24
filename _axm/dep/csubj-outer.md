---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
# visual-style 11 6 csubj:outer color:blue

~~~


The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ conllu
# visual-style 1 3 csubj color:blue

~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:40 CET -->
