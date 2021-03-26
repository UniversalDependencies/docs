---
layout: relation
title:  'aux'
shortdef : 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "kk/dep/aux.html"
udver: '2'
---

In Kazakh, only a closed list of verbs can act as auxiliaries. These are words
take part in participle constructions.

The full list of auxiliaries is as follows:

* _ал-_ "do, make"
* _баста-_ "start"
* _бер-_ ""
* _біт-_ ""
* _бітір-_ ""
* _бол-_ "be"
* _ет-_ ""
* _жазда-_ ""
* _жат-_ ""
* _жүр-_ ""
* _қал-_ ""
* _кел-_ "come"
* _кет-_ ""
* _көр-_ "see"
* _отыр-_ ""
* _сал-_ ""
* _тұр-_ "stand"
* _шық-_ ""

Note: Some of these are ambiguous with lexical verbs.

#### Examples

~~~ sdparse
Ол терезеден Азамат пен Айгүлдің ойнағанына қарап тұр . \n She window-through Azamat and Aygül's playing watching stands .
nsubj(қарап-7, Ол-1)
obl(қарап-7, терезеден-2)
nsubj(ойнағанына-6, Азамат-3)
conj(Азамат-3, Айгүлдің-5)
cc(Айгүлдің-5, пен-4)
ccomp(қарап-7, ойнағанына-6)
aux(қарап-7, тұр-8)
punct(қарап-7, .-9)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:14 CET 2020 -->
