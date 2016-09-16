---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "it/dep/aux.html"
---

An auxiliary of a clause is a non-main verb of the clause, e.g., a modal auxiliary (potere _to can_ or dovere _must_), or a form of essere _to be_, avere _to have_ or stare in a periphrastic tense. Note that the auxiliary verb used to construct the passive voice (essere or venire) is not labeled aux but auxpass.

* auxiliary avere

~~~ sdparse
hanno sparato a sangue freddo
aux(sparato, hanno)
~~~

* auxiliary essere

~~~ sdparse
il sequestro era avvenuto
aux(avvenuto, era)
~~~

* auxiliary stare

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
