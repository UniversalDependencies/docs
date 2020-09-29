---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the three relations in UD for compounding.

It is used for 

- any kind of X<sup>0</sup> compounding: noun compounds (e.g., *linha vermelha*), but also verb and
adjective compounds that are more common in other languages (_guarda-chuva, nova era_). 
~~~ sdparse
nova era
compound(era, nova)
~~~


- for numbers

~~~ sdparse
a décima primeira rodada 
compound(décima, primeira)
~~~

~~~ sdparse
vendas de US$ 150 milhões
compound(milhões, 150)
~~~


The two other compounding relations are:

- [fixed]() for fixed grammaticized expressions with function words
- [flat]() for proper nouns constituted of multiple nominal elements
<!-- Interlanguage links updated Út zář 29 20:23:23 CEST 2020 -->
