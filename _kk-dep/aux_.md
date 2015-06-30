---
layout: relation
title:  'aux'
shortdef : 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "kk/dep/aux.html"
---

In Kazakh, only a closed list of verbs can act as auxiliaries. These are words
take part in participle constructions.

The full list of auxiliaries is as follows:

* _ал_ "do, make"
* _баста_ "start"
* _бер_ ""
* _біт_ ""
* _бітір_ ""
* _бол_ "be"
* _ет_ ""
* _жазда_ ""
* _жат_ ""
* _жүр_ ""
* _қал_ ""
* _кел_ "come"
* _кет_ ""
* _көр_ ""
* _отыр_ ""
* _сал_ ""
* _тұр_ "stand"
* _шық_ ""


#### Examples

~~~ sdparse
Ол терезеден Азамат пен Айгүлдің ойнағанына қарап тұр . \n She window-through Azamat and Aygül's playing watching stands .
nsubj(қарап-7, Ол-1)
nsubj(ойнағанына-6, Айгүлдің-5)
aux(қарап-7, тұр-8)
punct(қарап-7, .-9)
nmod(қарап-7, терезеден-2)
cc(Айгүлдің-5, пен-4)
conj(Азамат-3, пен-4)
ccomp(қарап-7, ойнағанына-6)
~~~

