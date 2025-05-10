---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---


A `conjunct` is the relation between two elements connected by a coordinating conjunction, such as and, or, or a comma or other punctuation. We treat coordination asymmetrically. The head of the relation is the first conjunct and all the other conjuncts depend on it via the conj relation.

~~~ sdparse
Peter gali Mary \n Peter and Mary
cc(Mary-3, gali)
conj(Peter-1, Mary-3)
cc(Mary-7, and)
conj(Peter-5, Mary-7)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Lhohn mohn gali churi mathamme . \n Alcohol drink and cigarette smoke
cc(mathamme, gali)
conj(mahn, mathamme)
cc(smoke, and)
conj(drink, smoke)
~~~

In Naga-Suansu `conj` relation is also used for correlative clauses relations.

~~~ sdparse
Re rema nahn . \n come come.NEG you . \n Either you come or not
conj(Re, rema)
nsubj(Re, nahn)
conj(Come, come.NEG)
nsubj(Come, you)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues. Note that the present conversion procedure loses some annotations of shared modifiers and nested coordination. 

<!-- Interlanguage links updated So 10. května 2025, 18:15:16 CEST -->
