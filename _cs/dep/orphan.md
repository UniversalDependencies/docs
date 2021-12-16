---
layout: relation
title: 'orphan'
redirect_from: "cs/dep/remnant.html"
shortdef: 'connecting orphaned arguments of elided predicate'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/cs/overview/specific-syntax.html#ellipsis)
(in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Pavel si objednal hovězí a Markéta vepřové . \n Pavel himself ordered beef and Markéta pork .
nsubj(objednal, Pavel-1)
nsubj(ordered, Pavel-10)
obj(objednal, hovězí)
obj(ordered, beef)
conj(objednal, Markéta-6)
conj(ordered, Markéta-15)
orphan(Markéta-6, vepřové)
orphan(Markéta-15, pork)
cc(Markéta-6, a)
cc(Markéta-15, and)
~~~
<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
