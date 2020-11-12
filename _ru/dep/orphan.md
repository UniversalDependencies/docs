---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
---

The `orphan` relation is used in cases of head ellipsis where simple promotion would result in unnatural 
and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments 
have to be promoted to clausal head.

~~~ sdparse
Павел заказал говядину , а Мария свинину . \n Pavel  ordered beef and Maria pork .
nsubj(заказал, Павел)
nsubj(ordered, Pavel)
obj(заказал, говядину)
obj(ordered, beef)
conj(Павел, Мария)
conj(Pavel, Maria)
orphan(говядину, свинину)
orphan(beef, pork)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
