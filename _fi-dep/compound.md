---
layout: entry
title:  'compound'
shortdef : 'compound'
---

The primary description of the USD relation `compound` in Finnish is
not yet completed.

---

Numerical expressions consisting of multiple tokens are also annotated
using the `compound` dependency type. The last word of the numerical
expression is the governor, and the number dependencies are chained.

(These relations are annotated `number` in
[TDT](http://bionlp.utu.fi/fintreebank.html).)

<!-- fname:number.pdf -->
~~~ sdparse
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj-cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
compound(--5, 3-4)
compound(5-6, --5)
punct(5-6, .-7)
~~~
