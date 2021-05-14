---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](u-pos/NUM) phrase that
serves to modify the meaning of the noun with a quantity.

~~~ sdparse
a realização de mais 30 episódios
nummod(episódios, 30)
~~~

~~~ sdparse
dois árbitros resolveram contar todos os podres
nummod(árbitros, dois)
~~~

~~~ sdparse
ele aluga o imóvel por US$ 1.000
nummod(US$, 1.000)
~~~

Note that indefinite quantifiers such as _poucos_, _muitos_ are
tagged [u-pos/DET]() rather than [u-pos/NUM]().  Therefore their
relation to the quantified noun is not `nummod` but [det]():

~~~ sdparse
Há muitos servidores da Internet
det(servidores, muitos)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:14 CEST 2021 -->
