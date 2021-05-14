---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its [determiner](ru-pos/DET).
This relation is used for pronominal adjectival modifiers of noun phrases.
Non-pronominal adjectives are tagged [ru-pos/ADJ]() and the relation is labeled [amod]().

~~~ sdparse
Тот человек уже здесь . \n The man already is-here .
det(человек, Тот)
det(man, The)
~~~

~~~ sdparse
Он такой человек . \n He is this-kind-of man .
det(человек, такой)
det(man, this-kind-of)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:02 CEST 2021 -->
