---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

An adjectival modifier of an NP is any adjectival phrase that serves to modify the meaning of the NP.

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
Some pronominal modifiers are also considered as `amod`
Exception: if the modifying adjectival word is article-equivalent (i.e. tagged [ru-pos/DET]()), the relation is [det]() instead of `amod`.

~~~ sdparse
эти ваши новые группы \n these your new groups
amod(группы, новые)
amod(groups, new)
amod(группы, ваши)
amod(groups, your)
det(группы, эти)
det(groups, these)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:07 CEST 2020 -->
