---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word (`advmod`) is a (non-clausal) adverb or adverbial phrase that serves to modify the meaning of the word.

We differentiate adverbials realized as adverbs _(advmod)_ and adverbials realized by noun phrases or adpositional phrases _(nmod)_ .

*Rich, **ordea**, ez dago **bakarrik** .*

*Rich, **however**, is not **alone** .*

~~~ sdparse
Rich , ordea , ez dago bakarrik . \n Rich , however , is not alone .

nsubj(dago-6, Rich-1)
advmod(dago-6, ordea-3)
neg(dago-6, ez-5)
advmod(dago-6, bakarrik-7)
punct(dago-6, .-8)
punct(dago-6, ,-2)
punct(dago-6, ,-4)
~~~


***Han** ez zen ezer mugitzen .*

*Nothing was moved **there** .*

~~~ sdparse
Han ez zen ezer mugitzen . \n There was nothing moved .

advmod(mugitzen-5, Han-1)
neg(mugitzen-5, ez-2)
aux(mugitzen-5, zen-3)
nsubj(mugitzen-5, ezer-4)
punct(mugitzen-5, .-6)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:47 CEST 2021 -->
