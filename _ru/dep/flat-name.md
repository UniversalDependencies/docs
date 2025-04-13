---
layout: relation
title: 'flat:name'
shortdef: 'multiword proper names'
udver: '2'
---

We use `flat:name` to label multiword proper names.
The leftmost token is always the head of the multiword group.

~~~ sdparse
Президент Владимир Владимирович Путин вчера посетил Минеральные Воды . \n President Vladimir Vladimirovich Putin yesterday visited Mineralnye Vody .
nsubj(посетил, Президент)
nsubj(visited, President)
flat:name(Президент, Владимир)
flat:name(Президент, Владимирович)
flat:name(Президент, Путин)
flat:name(President, Vladimir)
flat:name(President, Vladimirovich)
flat:name(President, Putin)
~~~


<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:56 CET -->
