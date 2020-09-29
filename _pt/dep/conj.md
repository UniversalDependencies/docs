---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _e, ou, mas_ etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Palmeiras e Corinthians treinam hoje
conj(Palmeiras, Corinthians)
~~~

~~~ sdparse
Aqui era o quarto pobre , simples , limpo e acolhedor.
amod(quarto, pobre)
conj(pobre, simples)
conj(pobre, limpo)
conj(pobre, acolhedor)
cc(pobre, e)
~~~ 

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Ronaldo tomou conhecimento da pesquisa e procurou Belluzzo.>
He came home , took a shower and immediately went to bed .
conj(tomou, procurou)
punct(tomou, .)
cc(tomou, e)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.


~~~ sdparse
O tom familiar , coloquial , benigno de suas crônicas foi pouco a pouco vencendo as resistências do público .
conj(familiar, coloquial)
conj(familiar, benigno)
punct(familiar, ,-4)
punct(familiar, ,-6)
~~~
<!--
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
first conjunct (coordination head).
Relations to the other conjuncts are in the enhanced representation.
In the following example, enhanced dependencies are shown in red:

~~~ conllu
# visual-style 6 1 amod color:red
# visual-style 4 3 amod color:red
# visual-style 6 3 amod color:red
1 American   _ _ _ _ 4 amod 6:amod        _
2 and        _ _ _ _ 1 cc   _             _
3 British    _ _ _ _ 1 conj 4:amod|6:amod _
4 professors _ _ _ _ 0 root _             _
5 and        _ _ _ _ 4 cc   _             _
6 students   _ _ _ _ 4 conj 0:root        _
~~~

### Nested Coordination

Note further that the current annotation scheme has only a limited capability to capture nested coordination
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
-->
<!-- Interlanguage links updated Út zář 29 20:31:48 CEST 2020 -->
