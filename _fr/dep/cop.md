---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and the copular verb.
Copular heads are avoided when possible.
In French, only the verb _être_ appears as a copula.
For more on the `cop` relation, see the universal dependency description ([u-dep/cop]())

~~~ sdparse
Bill est un homme honnête \n Bill is an honest man
cop(homme, est)
nsubj(homme, Bill)
amod(homme, honnête)
det(homme, un)
~~~

~~~ sdparse
c' est une jeune fille pauvre \n it's a poor girl
cop(fille,est)
nsubj(fille,c')
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
