---
layout: relation
title: 'compound:lvc'
shortdef: 'light verb construction'
udver: '2'
---

This subtype of [compound]() covers light verbs.
In a  light-verb construction the verb that does not have much semantic content.
The semantics of the construction is determined by the non-head word,
often a noun or adjective.

~~~ sdparse
Onlar treni tercih ediyor . \n They prefer the train .
compound:lvc(ediyor, tercih)
obj(ediyor, treni)
subj(ediyor, Onlar)
~~~

Most common verbs that act like as a light verb is _et-_.
However, many other are possible.

~~~ sdparse
Yıllarca çile çektiler . \n They suffered for years .
compound:lvc(çektiler, çile)
~~~

Although the semantically loaded component of a light-verb construction is
generally an adjective or a noun,
it is common to observe verbs in this position particularly in code-switching settings.

~~~ sdparse
Partiyi  cancel ettik . \n We canceled the party
compound:lvc(ettik, cancel)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:56 CEST 2021 -->
