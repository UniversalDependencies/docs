---
layout: relation
title:  'csubj:pass'
shortdef : 'clausal passive subject'
udver: '2'
---

A clausal subject is annotated as csubj:pass when the subordinate clause functioning as the subject is governed by a passive participle.

~~~ sdparse
Nuspręsta , kad iškeliausime rytoj . \n It-was-decided that we-will-depart tomorrow .
csubj:pass(Nuspręsta, iškeliausime)
csubj:pass(It-was-decided, we-will-depart)
~~~

~~~ sdparse
Numatoma , kad rytoj lis . \n It-is-expected that it-will-rain tomorrow .
csubj:pass(Numatoma, lis)
csubj:pass(It-is-expected, it-will-rain)
~~~

An infinitive functioning as a subject is also annotated as csubj:pass when it is governed by a passive participle.

~~~ sdparse
Siekiama didinti gimstamumą . \n It-is-aimed to-increase the-birth-rate .
csubj:pass(Siekiama, didinti)
csubj:pass(It-is-aimed, to-increase)
~~~
