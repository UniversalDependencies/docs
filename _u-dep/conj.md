---
layout: base
title: 'conj'
shortdef: 'conjunct'
---

## `{{ page.title }}`: {{ page.shortdef }}

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _and, or,_ etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

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

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
He came home , took a shower and immediately went to bed .
conj(came, took)
conj(came, went)
punct(came, ,-4)
cc(came, and)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.
Asyndetic coordination may be more frequent in some languages, while in others, conjunction will appear between every two conjuncts _(John and Mary and Bill)._

~~~ sdparse
Veni , vidi , vici .
conj(Veni, vidi)
conj(Veni, vici)
punct(Veni, ,-2)
punct(Veni, ,-4)
~~~

Note that the current basic annotation scheme cannot distinguish between a dependent of the first conjunct
and a shared dependent of the whole coordination:

~~~ sdparse
He met her at the station and kissed her .
conj(met, kissed)
nsubj(met, He)
~~~

vs.

~~~ sdparse
He met her at the station and she kissed him .
conj(met, kissed)
nsubj(met, He)
nsubj(kissed, she)
~~~

In contrast, the additional dependencies in the enhanced representation
can be used to encode the fact that in the first case, _he_ is also subject of _kissed:_

~~~ sdparse
He met her at the station and kissed her .
conj(met, kissed)
nsubj(met, He)
nsubj(kissed, He)
~~~

Furthermore, the enhanced representation can also capture the relation of each conjunct
to the parent of the coordination. Nevertheless, the effective parents can be found
algorithmically and showing them explicitly is for convenience only, while
the information about shared dependents is otherwise not available.

~~~ sdparse
I saw that he met her at the station and kissed her .
conj(met, kissed)
nsubj(met, He)
nsubj(kissed, He)
ccomp(saw, met)
ccomp(saw, kissed)
~~~

Note further that the current annotation scheme has only a limited capability to capture nested coordination
such as _apples and pears or oranges and lemons._
Consider coordinations

* A, B, C
* (A, B), C
* A, (B, C)

The first two cases, i.e. (A, B, C) and ((A, B), C) lead to the same tree:

~~~ sdparse
A B C
conj(A, B)
conj(A, C)
~~~

Only the right-nesting case (A, (B, C)) can be distinguished because its tree is different:

~~~ sdparse
A B C
conj(B, C)
conj(A, B)
~~~
