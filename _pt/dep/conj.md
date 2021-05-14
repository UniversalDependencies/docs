---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
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
cc(acolhedor, e)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Ronaldo tomou conhecimento da pesquisa e procurou Belluzzo.>
He came home , took a shower and immediately went to bed .
conj(tomou, procurou)
punct(tomou, .)
cc(procurou, e)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.


~~~ sdparse
O tom familiar , coloquial , benigno de suas crônicas foi pouco a pouco vencendo as resistências do público .
conj(familiar, coloquial)
conj(familiar, benigno)
punct(coloquial, ,-4)
punct(benigno, ,-6)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
