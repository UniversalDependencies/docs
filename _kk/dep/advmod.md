---
layout: relation
title:  'advmod'
shortdef : 'adverb modifier'
---

The dependency type `advmod` is used for *adverb modifiers* of verbs,
nominals and adverbs alike.

Governed by a verb:

~~~ sdparse
Бақыткүл мүлдем өзгерді . \n Baqıtkul completely changed . 
advmod(өзгерді-3, мүлдем-2)
nsubj(өзгерді-3, Бақыткүл-1)
punct(өзгерді-3, .-4)
~~~

Governed by an adjective:

~~~ sdparse 
Бірақ кеше өте суық еді ! \n But yesterday very cold was-it !
advmod(суық-4, өте-3)
cop(суық-4, еді-5)
~~~

<!-- noun-->

Note that adjectives used adverbially are also given this relation.
<!-- Interlanguage links updated Út zář 29 20:31:42 CEST 2020 -->
