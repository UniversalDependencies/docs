---
layout: relation
title: 'ccomp:pred'
shortdef: 'clausal complement (predicative)'
udver: '2'
---

Clausal objects are marked with ccomp:obj,
clauses that express a core dependent of the main verb but are not objects are marked with ccomp:obl,
and clauses that express a predicative dependent of the main verb are marked with ccomp:pred.

“The goal is for the average earnings of the education sector, as in developed countries, to be 20-30 percent above the national average.”

~~~ sdparse
A cél az , hogy az oktatási ágazat átlagkeresete a fejlett országokéhoz hasonlóan 20-30 százalékkal legyen a nemzetgazdasági átlag felett . \n The goal this , that the educational sector average-earnings the advanced countries-on similarly 20-30 percent be the national average above .
det(cél, A)
nsubj(az-3, cél)
punct(legyen, ,-4)
mark(legyen, hogy)
det(ágazat, az-6)
amod:att(ágazat, oktatási)
nmod:att(átlagkeresete, ágazat)
det(országokéhoz, a-10)
amod:att(országokéhoz, fejlett)
obl(hasonlóan, országokéhoz)
advmod:mode(legyen, hasonlóan)
nummod(százalékkal, 20-30-14)
obl(legyen, százalékkal)
ccomp:pred(az-3, legyen)
det(átlag, a-17)
amod:att(átlag, nemzetgazdasági)
case(átlag, felett)
obl(legyen, átlag)
punct(az-3, .-21)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:55 CEST 2021 -->
