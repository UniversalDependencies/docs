---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

The dependency type `advcl` is reserved for subordinate clauses.
The head of the dependency is the main predicate of the main clause,
and the dependant is the main predicate of the subordinate clause.
A subordinate clauses consists of a clause and a word of "[SCONJ]()",
and is typically followed by the main clause.

~~~ sdparse
食べ た なら 行く 。 \n eat PAST if go .
advcl(行く, 食べ)
aux(食べ, た)
mark(食べ, なら)
punct(行く, 。)
~~~ 
