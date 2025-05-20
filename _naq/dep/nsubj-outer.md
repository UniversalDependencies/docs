---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause. See discussion of [Predicate Clauses](https://universaldependencies.org/u/overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
ǂGuro xū-i ge ǁgam-i ǀari sa . \n First thing DECL water dry NMLZ.OBL .
amod(xū-i, ǂGuro)
nsubj:outer(ǀari, xū-i)
aux(ǀari, ge)
obj(ǀari, ǁgam-i)
mark(ǀari, sa)
punct(ǀari, .-7)
amod(thing, First)
nsubj:outer(dry, thing)
aux(dry, DECL)
obj(dry, water)
mark(dry, NMLZ.OBL)
punct(dry, .-15)
~~~

The clausal counterpart of this relation is [csubj:outer]().
<!-- Interlanguage links updated So 10. května 2025, 18:15:50 CEST -->
