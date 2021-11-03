---
layout: relation
title: 'dobj'
shortdef: 'direct object'
udver: '2'
---

In Estonian, an object can be a noun in singular or plural nominative case, singular genitive case or singular or plural partitive case.

~~~ sdparse
Kass nägi koera . \n The cat saw the dog .
nsubj(nägi-2, Kass-1)
obj(nägi-2, koera-3)
punct(nägi-2, .-4)
obj(saw,dog)
~~~

~~~ sdparse
Öö jooksul olid hundid kolm lammast maha murdnud . \n The wolves had killed three sheep during the night .
obl(murdnud-8, Öö-1)
case(Öö-1,jooksul-2)
aux(murdnud-8,olid-3)
nsubj(murdnud-8,hundid-4)
nummod(lammast-6,kolm-5)
obj(murdnud-8,lammast-6)
compound:prt(murdnud-8,maha-7)
punct(murdnud-8,.-9)
obj(killed,sheep)
~~~

<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
