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
Rich, ordea, ez dago bakarrik . \n Rich, however, is not alone .

nsubj(dago-4, Rich-1)
advmod(dago-4, ordea-2)
neg(dago-4, ez-3)
advmod(dago-4, bakarrik-5)
punct(dago-4, .-6)
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
