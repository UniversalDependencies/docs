---
layout: relation
title: 'discourse:filler'
shortdef: 'filler sound in spoken data'
udver: '2'
---

The `discourse:filler` subtype of the [discourse]() relation is used in spoken data for sounds
that have no syntactic or semantic function (they correspond to a pause rather than a real word).
The filler is attached to the head of the phrase in which it occurs.

~~~ sdparse
og køyrde # ko- e kombinert rute til Oslo . \n and drove the # ko- e combined route to Oslo .
discourse:filler(kombinert, e-5)
reparandum(kombinert, ko--4)
punct(kombinert, #-3)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
