---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun. Ordinal numerals that modify the meaning of the noun are also labeled `amod`.

Exception: if the modifying adjectival word is pronominal (i.e. tagged [cs-pos/DET]()),
the relation is [det]() instead of `amod`.

~~~ sdparse
Василий ест куриную лапшу . \n Vasily eats chicken noodles .
amod(лапшу, куриную)
amod(noodles, chicken)
~~~

~~~ sdparse
Первое впечатление было хорошим . \n First impression was positive .
amod(впечатление, Первое)
amod(impression, First)
nsubj(хорошим, впечатление)
nsubj(positive, impression)
~~~

~~~ sdparse
эти ваши новые группы \n these your new groups
amod(группы, новые)
amod(groups, new)
amod(группы, ваши)
amod(groups, your)
det(группы, эти)
det(groups, these)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:12 CET 2020 -->
