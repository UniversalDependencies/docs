---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any preposition in Swedish. Prepositions are treated as dependents of the noun they attach to or introduce in an "extended nominal projection". Thus, UD does not treat a preposition as a mediator between a modified word and its object. The `case` relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages. 

~~~ sdparse
Individuell beskattning av arbetsinkomster \n Individual taxation of employment income
case(arbetsinkomster, av)
~~~

~~~ sdparse
Du måste börja från början \n You must start from the beginning
case(början, från)
~~~

~~~ sdparse
Nytt system för ersättning \n New system for compensation
case(ersättning, för)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
