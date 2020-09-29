---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "it/dep/aux.html"
---

An auxiliary of a clause is a non-main verb of the clause. In Italian the two main auxiliary verbs are form of *essere* (to be), *avere* (to have); in periphrastic tenses with the progressive form is used the verb *stare* instead. Modals are also marked as auxiliary (*fare* to do, *sapere* to know, *volere* to want, *potere* to can or *dovere* must). 

* auxiliary *avere*

~~~ sdparse
hanno sparato a sangue freddo
aux(sparato, hanno)
~~~

* auxiliary *essere*

~~~ sdparse
il sequestro era avvenuto
aux(avvenuto, era)
~~~

* auxiliary *stare*

~~~ sdparse
stavano realizzando un serbatoio
aux(realizzando, stavano)
~~~

* modal auxiliaries

~~~ sdparse
non l' hanno potuto ascoltare
aux(ascoltare, potuto)
~~~
~~~ sdparse
dovrà sparire la figura
aux(sparire, dovrà)
~~~

Note that the auxiliary verb used to construct the passive voice is not labeled <code>aux</code> but [auxpass]().
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
