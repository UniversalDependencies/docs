---
layout: relation
title: 'obl:appl'
shortdef: 'applied oblique argument in non-canonical applicative construction'
udver: '2'
---

Certain semantic roles (e.g., locatives) require the verb to switch to an applicative form,
although the argument is still coded as oblique rather than object. This is a non-canonical
applicative construction. The locative argument is attached to the verb using the relation
`obl:appl`.

~~~ sdparse
Faatu togge jën wi ci waañ wi . \n Faatu cooked the fish in the kitchen .
nsubj(togge, Faatu-1)
obj(togge, jën)
det(jën, wi-4)
obl:appl(togge, waañ)
case(waañ, ci)
det(waañ, wi-7)
punct(togge, .-8)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
