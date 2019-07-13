---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The 'orphan' relation is used in cases of head [ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in an unnatural 
and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments
has to be promoted to clausal head.

~~~sdparse
Marie won gold and Peter bronze
nsubj(won, Marie)
obj(won, gold)
conj(won, Peter)
cc(Peter, and)
orphan(Peter, bronze)
~~~

In this example, the subject _Peter_ is promoted to the head position in the second conjunct. Attaching
the object _bronze_ to the subject is necessary to preserve the integrity of the clause, but using the
standard relation [obj]() would be misleading because _bronze_ is not the object of _Peter_. Therefore,
the `orphan` relation is used to indicate that this is a non-standard attachment. By contrast, the coordinating
conjunction _and_ performs essentially the same function as in the non-elliptical case and therefore retains
its normal relation `cc`.

See further discussion of [ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis).
