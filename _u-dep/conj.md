---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

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
obj(have, apples)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(bananas, and)
punct(pears, ,-4)
punct(oranges, ,-6)
punct(bananas, ,-8)
</div>

Coordinated clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
He came home , took a shower and immediately went to bed .
conj(came, took)
conj(came, went)
punct(took, ,-4)
cc(went, and)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.
Asyndetic coordination may be more frequent in some languages, while in others, conjunction will appear between every two conjuncts _(John and Mary and Bill)._

~~~ sdparse
Veni , vidi , vici .
conj(Veni, vidi)
conj(Veni, vici)
punct(vidi, ,-2)
punct(vici, ,-4)
~~~

### Shared Dependents and Effective Parents in Coordination

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
nsubj(met, he)
nsubj(kissed, he)
ccomp(saw, met)
ccomp(saw, kissed)
~~~

If a dependent is shared among conjuncts, the basic representation always links it to the
first conjunct (coordination head), while the enhanced representation shows all dependencies.
In the following example, relations that are only part of the enhanced representation are shown in red.

~~~ conllu
# visual-style 6 1 amod color:red
# visual-style 4 3 amod color:red
# visual-style 6 3 amod color:red
1 American   _ _ _ _ 4 amod 6:amod        _
2 and        _ _ _ _ 3 cc   _             _
3 British    _ _ _ _ 1 conj 4:amod|6:amod _
4 professors _ _ _ _ 0 root _             _
5 and        _ _ _ _ 6 cc   _             _
6 students   _ _ _ _ 4 conj 0:root        _
~~~

### Nested Coordination

Note further that the basic annotation scheme has only a limited capability to capture nested coordination
such as _apples and pears or oranges and lemons._
Consider coordinations

* A, B, C
* (A, B), C
* A, (B, C)

The first two cases, i.e. (A, B, C) and ((A, B), C), lead to the same tree:

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
