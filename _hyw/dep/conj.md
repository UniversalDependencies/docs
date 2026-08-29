---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as _և_ (and), _կամ_ (or), or a comma or other punctuation.
We treat coordination asymmetrically.
The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ conllu

~~~

~~~ conllu

~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ conllu

~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.

~~~ sdparse

~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
Note that the present conversion procedure loses some annotations of shared modifiers and nested coordination.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:54 CEST -->
