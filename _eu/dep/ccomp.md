---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective (`ccomp`) is a dependent clause which is a core argument, that is, it functions like an object of the verb, or adjective. Such clausal complements need to be finite (the relation that corresponds to non finite clausal complements is xcomp).

*Arazoa da ez **daudela** instituzioak arau horiek **betetzen** diren bermatzeko .*

*The problem is **that** there are not institutions to guarantee **whether** those rules are observed .*

~~~ sdparse
Arazoa da ez daudela instituzioak arau horiek betetzen diren bermatzeko . \n Problem_the is not there_are_that institutions rules those are_observed_whether to_guarantee .

nsubj(da-2, Arazoa-1)
neg(daudela-4, ez-3)
ccomp(da-2, daudela-4)
nsubj(daudela-4, instituzioak-5)
det(arau-6, horiek-7)
dobj(betetzen-8, arau-6)
aux(betetzen-8, diren-9)
ccomp(bermatzeko-10, betetzen-8)
advcl(daudela-4, bermatzeko-10)
punct(da-2, .-11)
~~~

<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
