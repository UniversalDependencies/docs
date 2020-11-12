---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers. 
`nmod` is a [noun](u-pos/NOUN) (or noun phrase) is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or genitive complement.

- the possessive alternation:

~~~ sdparse
Купих й плат за рокля . \n Bought-I her.CLITIC cloth for dress  .
nmod(плат, рокля)
nmod(cloth, dress)
~~~

- noun-noun modification:

~~~ sdparse
Най-често Йовка мислеше за стринка си Елка . \n More-often Yovka was-thinking about aunt her.REFL Elka  .
nmod(стринка, Елка)
nmod(aunt, Elka)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
