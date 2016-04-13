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

Exception: if the modifying adjectival word is pronominal (i.e. tagged [ru-pos/DET]()), the relation is [det]() instead of `amod`.

~~~ sdparse
Какие-то все эти ваши новые группы . \n Somewhat all these your new groups .
amod(группы, новые)
amod(groups, new)
det(группы, ваши)
det(groups, your)
det(группы, эти)
det(groups, these)
det(группы, все)
det(groups, all)
det(группы, какие-то)
det(groups, somewhat)
~~~
