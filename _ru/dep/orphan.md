---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/cs/overview/specific-syntax.html#ellipsis)
(in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Павел заказал говядину , а Мария свинину . \n Pavel  ordered beef and Maria pork .
nsubj(заказал, Павел)
nsubj(ordered, Pavel)
obj(заказал, говядину)
obj(ordered, beef)
conj(Павел, Мария)
conj(Pavel, Maria)
orphan(Мария, свинину)
orphan(Maria, pork)
~~~

In this example, the subject *Мария* “Maria“ is promoted to the head position in the second conjunct. Attaching the object *свинину* “pork“ to the subject is necessary to preserve the integrity of the clause, but using the standard relation `obj` would be misleading because *pork* is not the object of *Maria*. Therefore, the orphan relation is used to indicate that this is a non-standard attachment. By contrast, the coordinating conjunction *а* “and“ performs essentially the same function as in the non-elliptical case and therefore retains its normal relation `cc`.

<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
