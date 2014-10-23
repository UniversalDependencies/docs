---
layout: entry
title:  'compound:number'
shortdef : 'numerical expression'
---

Numerical expressions consisting of multiple tokens are annotated
using the `compound:number` dependency type. The last word of the numerical
expression is the governor, and the number dependencies are chained.

<!-- TODO Special cases of numerical expressions are discussed in Section [numberspecial](#sec-numberspecial). -->

<!-- fname:number.pdf -->
~~~ sdparse
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj-cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
compound:number(--5, 3-4)
compound:number(5-6, --5)
punct(5-6, .-7)
~~~
