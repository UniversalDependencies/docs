---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

<!--For more on coordination, see the [conj]() relation.-->
A `cc` is the relation between a conjunct and
a preceding [coordinating conjunction](../pos/CCONJ).
<!--(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)-->

~~~ sdparse
Bill is big and honest
conj(big, honest)
cc(honest, and)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, even though there is no preceding conjunct
(except implicitly or in a preceding sentence).

~~~ sdparse
And then we left .
cc(left, And)
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
