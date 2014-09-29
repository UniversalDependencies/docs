---
layout: base
title: 'conj'
shortdef: 'conjunct'
---

## conj: conjunct

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as "and", "or", etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and other conjunctions depend on it via the *conj* relation.

~~~ sdparse
Bill is big and honest
conj(big, honest)
~~~

<div id="punct1" class="sd-parse">
We have apples , pears , oranges , and bananas .
dobj(have, apples)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(apples, and)
punct(apples, ,-4)
punct(apples, ,-6)
punct(apples, ,-8)
</div>
