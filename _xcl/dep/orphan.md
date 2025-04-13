---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used in cases of head ellipsis where simple promotion would result in an unnatural and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments has to be promoted to clausal head.

~~~ sdparse
նմա պարտ է աճել , եւ ինձ մեղմանալ \n he must increase, but I [must] decrease .
xcomp(պարտ, աճել)
conj(պարտ, մեղմանալ)
orphan(մեղմանալ, եւ)
orphan(մեղմանալ, ինձ)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:23 CET -->
