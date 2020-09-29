---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define or modify that noun (aposto). It
includes parenthesized examples, as well as defining abbreviations in
one of these structures. This relation is universal.

~~~ sdparse
O modelo Lx 810, da Epson, é vendido em Miami por US$ 178.
appos(modelo, Lx 810)
nmod(modelo, Epson)
~~~

~~~ sdparse
O Applause, um sedã quatro portas, com motor 1.6, é o carro mais caro da Daihatsu.
appos(Applause, sedã)
~~~

~~~ sdparse
O nome oficial do projeto é Depse 1 (Deep Space Program Science Experiment).
appos(Depse 1, Deep Space Program Science Experiment)
~~~

In case of more than one appositive nominal, all nouns should be
marked as modifying the first noun, rather than being chained:

~~~ sdparse
Para o terceiro réu, Alexandre Cardoso , 21 , o "Topeira" , o juiz determinou uma pena de 20 anos .
appos(réu, Alexandre Cardoso)
appos(réu, 21)
appos(réu, Topeira)
~~~

Note however that nested apposition cannot be completely excluded. It
may occur in combination with coordination:

~~~ sdparse
Você pode escolher entre quatro matérias : língua ( alemão ou francês) , economia , tecnologia e arte .
appos(matérias, língua)
conj(língua, economia)
conj(língua, tecnologia)
conj(língua, arte)
cc(língua, e)
appos(língua, alemão)
conj(alemão, francês)
cc(alemão, ou)
~~~

*appos* is also used to link key-value pairs in addresses, signatures,
etc. (see also the [list]() label):

~~~ sdparse
Steve Jones Fone: 555-9814 Email: jones@abc.edf
appos(Fone, 555-9814)
appos(Email, jones@abc.edf)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:09 CEST 2020 -->
