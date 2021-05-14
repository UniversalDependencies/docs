---
layout: relation
title:  'obj'
shortdef : 'direct object'
udver: '2'
---

The dependency type `obj` is used for (nominal) direct objects of the
verb.

Direct objects are typically in "nominative" (unmarked, indefinite
accusative) or "accusative" (marked, definite accusative), but may be
in other cases (e.g. dative).

~~~ sdparse
Ол барлық жерді қарап жүр . \n She all place-in looking is .
obj(қарап-4, жерді-3)
aux(қарап-4, жүр-5)
~~~

Another example:

~~~ sdparse
Бұл көрсеткіш 75 пайызды құрайды . \n This indicator 75 percent makes-up-for .
obj(құрайды-5, пайызды-4)
nummod(пайызды-4, 75-4)
~~~

A dative direct object:

~~~ sdparse
Айгүл терезеде тұрған анасына қарайды . \n Aygül window-in standing mother-her watches .
obj(қарайды-5, анасына-4)
acl(анасына-4, тұрған-3)
obl(тұрған-3, терезеде-2)
nsubj(қарайды-5, Айгүл-1)
punct(қарайды-5, .-6)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:15 CEST 2021 -->
