---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in unnatural and misleading dependency relation (in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
իւր բնակութիւնն հանապազ ի կաղնի ծառն լինի, եւ իւր հոտն՝ հոտած դժնիկ ։ \n Diwr bnakowt’iwnn hanapaz i kaġni çaṙn lini, ew iwr hotn՝ hotaç džnik . Its dwelling is always in the oak tree, and its odor - like the rotten buckthorn .
nsubj(ծառն, բնակութիւնն)
nsubj(tree, dwelling)
cop(ծառն, լինի)
cop(tree, is)
conj(ծառն, հոտն)
conj(tree, odor)
orphan(հոտն, դժնիկ)
orphan(odor, buckthorn)
cc(հոտն, եւ)
cc(odor, and)
~~~

In this example, the subject _հոտն_ “odor” is promoted to the head position in the second conjunct. Attaching the predicate (without copula) _դժնիկ_ “buckthorn” to the
subject is necessary to preserve the integrity of the clause, but using the standard relation [nsubj]() would be misleading because _դժնիկ_ “buckthorn” can't be the 
predicate of _հոտն_ “odor” without the copula. Therefore, the `orphan` relation is used to indicate that this is a non-standard attachment. By contrast, the coordinating 
conjunction _եւ_ “and” performs essentially the same function as in the non-elliptical case and therefore retains its normal relation [cc]().
<!-- Interlanguage links updated St 6. května 2026, 20:48:23 CEST -->
