---
layout: base
title:  'number'
shortdef : 'numerical expression'
---

## number (numerical expression)

Numerical expressions consisting of multiple tokens are annotated using the `number` dependency type. The last word of the numerical expression is the governor, and the number dependencies are chained. 

<!-- TODO Special cases of numerical expressions are discussed in Section [numberspecial](#sec-numberspecial). -->


<!-- fname:number.pdf -->
<div class="sd-parse">
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj-cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
number(--5, 3-4)
number(5-6, --5)
punct(5-6, .-7)
</div>


