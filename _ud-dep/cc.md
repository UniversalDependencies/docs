---
layout: base
title: 'cc'
shortdef: 'coordination'
---

## cc: coordination

A coordination is the relation between an element of a conjunct and
the coordinating conjunction word of the conjunct.  (Note: different
dependency grammars have different treatments of coordination.  We
take one conjunct of a conjunction (normally the first) as the head of
the conjunction.) A conjunction may also appear at the beginning of a
sentence.  This is also called a cc, and it depends on the root
predicate of the sentence.

~~~ sdparse
Bill is big and honest
cc(big, and)
~~~

~~~ sdparse
And then we left .
cc(left, And)
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
