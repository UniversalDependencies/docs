---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

<!--For more on coordination, see the [conj]() relation.-->
A `cc` is the relation between a conjunct and
an associated [coordinating conjunction](../pos/CCONJ).
<!--(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)-->

~~~ sdparse
Bill is big and honest
conj(big, honest)
cc(honest, and)
~~~

<div id="punct1" class="sd-parse">
We have apples , pears , oranges , and bananas .
obj(have, apples)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(bananas, and)
punct(pears, ,-4)
punct(oranges, ,-6)
punct(bananas, ,-8)
</div>

A coordinating conjunction may also appear at the beginning of a
sentence. This is also attached as `cc`, even though the sentence lacks
multiple conjuncts joined with a [conj]() relation.

~~~ sdparse
And then we left .
cc(left, And)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
