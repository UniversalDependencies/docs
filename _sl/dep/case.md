---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any case-marking element which is treated as a separate syntactic word, such as prepositions ([ADP](https://universaldependencies.org/sl/pos/ADP.html)) in Slovenian. The preposition is treated as the dependent of the noun.

~~~ sdparse
Za nekaj pomežikov je verjela , da je v hotelu
case(pomežikov,Za)
case(hotelu,v)
~~~

~~~ sdparse
V veliki ponvi segrejemo štiri do pet žlic olja
case(ponvi,V)
case(pet,do)
~~~

~~~ sdparse
bodice , ki pri hranjenju delujejo kot filter
case(hranjenju,pri)
case(filter,kot)
~~~

~~~ sdparse
V Slovenski filharmoniji je kot poslovna direktorica izpeljala projekt obnove
case(direktorica,kot)
case(filharmoniji,V)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:12 CET 2022 -->
