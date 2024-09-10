---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any case-marking element which is treated as a separate syntactic word, such as prepositions ([ADP](https://universaldependencies.org/sl/pos/ADP.html)) in Slovenian. The preposition is treated as the dependent of the noun.

~~~ sdparse
Za nekaj pomežikov je verjela , da je v hotelu \n For a-few blinks-of-an-eye she believed , that she is in hotel
case(pomežikov,Za)
case(hotelu,v)
case(blinks-of-an-eye,For)
case(hotel,in)
~~~

~~~ sdparse
V veliki ponvi segrejemo štiri do pet žlic olja \n In large pan we-warm-up four to five spoonfuls of-oil
case(ponvi,V)
case(pet,do)
case(pan,In)
case(five,to)
~~~

~~~ sdparse
bodice , ki pri hranjenju delujejo kot filter \n thorns , which during feeding act as filter
case(hranjenju,pri)
case(filter-8,kot)
case(feeding,during)
case(filter-17,as)
~~~

~~~ sdparse
V Slovenski filharmoniji je kot poslovna direktorica izpeljala projekt obnove \n In Slovenian Philharmonic-Orchestra she as finance director carried-out renovation project
case(direktorica,kot)
case(filharmoniji,V)
case(director,as)
case(Philharmonic-Orchestra,In)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:48 CEST -->
