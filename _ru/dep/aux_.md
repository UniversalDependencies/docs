---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ru/dep/aux.html"
---

An auxiliary of a clause is a form of the [auxiliary verb](ru-pos/AUX) _быть_ “to be”
used to construct the periphrastic future tense or conditional.

Exception: Auxiliary verb used to construct the passive
[voice](ru-feat/Voice) is not labeled `aux` but [auxpass]().

Note that besides `aux` and `auxpass`, the verb _быть_ may also act as a [copula](cop)
and as the main verb.

~~~ sdparse
Завтра я буду выступать в университете . \n Tomorrow I will give-a-talk at the-university .
aux(выступать, буду)
aux(give-a-talk, will)
~~~

~~~ sdparse
Если бы я пришел раньше , я бы не пропустил поезд . \n If had I come earlier , I would not have-missed the-train .
aux(пришел, бы-2)
aux(come, had)
aux(пропустил, бы-8)
aux(have-missed, would)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:08 CEST 2020 -->
