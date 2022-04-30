---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as *og* "and", *eller* "or", etc. We treat conjunctions asymmetrically: The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Lam og piggvar på bryllupsmenyen \n Lamb and turbot on the wedding menu
conj(Lam,piggvar)
~~~

~~~ sdparse
Kamskjell , piggvar og lammefilet sto på menyen \n Scallops, turbot and lamb were on the menu
conj(Kamskjell-1,piggvar-3)
punct(piggvar-3,,-2)
conj(Kamskjell-1,lammefilet-5)
cc(lammefilet-5,og-4)
~~~
<!-- Interlanguage links updated St lis 3 20:58:46 CET 2021 -->
