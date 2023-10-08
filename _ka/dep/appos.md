---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define or modify that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures. 

~~~ sdparse
შოთა რუსთაველის საქართველოს ეროვნული სამეცნიერო ფონდი (შრსესფ) \n 'Shota Rustaveli National Science Foundation (SRNSF)'
appos(ფონდი, შრსესფ)
~~~

Also, the appositive nominal is marked as modifying the prevoious one:

~~~ sdparse
ძია ლევანი სახლში იყო. \n 'Uncle Levan was at home.'
appos(ლევანი, ძია)
~~~

**NB** `appos` relation is used, if there is case and agreement concord between the first noun and appositive modifiers. If not, there is used [nmod](_ka/dep/nmod).
