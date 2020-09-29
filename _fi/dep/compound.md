---
layout: relation
title:  'compound'
shortdef : 'compound'
---

`compound` is one of the three UD relations UD for compounding,
together with [fixed]() and [flat]().

UD Finnish additionally defines two subtypes of `compound`,
[compound:nn]() for noun compounds and [compound:prt]()
for phrasal verb particles. As the other UD types and the
UD Finnish subtypes cover most cases of compounding, only
few cases are annotated specifically as `compound`.

Numerical expressions consisting of multiple tokens are annotated
using the `compound` dependency type. The last word of the numerical
expression is the governor, and the number dependencies are chained.

(These relations are annotated `number` in
[TDT](http://bionlp.utu.fi/fintreebank.html).)

<!-- fname:number.pdf -->
~~~ sdparse
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj:cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
compound(--5, 3-4)
compound(5-6, --5)
punct(5-6, .-7)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:13 CEST 2020 -->
