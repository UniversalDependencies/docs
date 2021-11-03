---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. 
In Russian, the demonstrative particle _eto_ can be used as an "extra" subject in the sentence, in this case the remaining part of the sentence can be considered as the group of predicate. Cf. English construction with _there_-expletive. 

~~~ sdparse
Это мама звонит . \n This-is my-mother calls .
expl(звонит, Это)
expl(calls, This-is)
nsubj(звонит, мама)
nsubj(calls, my-mother)
~~~

The particle _eto_ is also labeled `expl` when it is ised in the nominal sentence with zero copula.  

~~~ sdparse
Счастье - это путешествие , а не цель . \t Happiness is-a journey , not a destination .
expl(путешествие, это)
expl(journey, is-a)
nsubj(путешествие, Счастье)
nsubj(journey, Happiness)
~~~

<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
