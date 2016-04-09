---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ru/dep/aux.html"
---

An auxiliary of a clause is a form of the [auxiliary verb](cs-pos/AUX) _,быть_ “to be”
used to construct the periphrastic future tense, past tense or conditional.

Exception: Auxiliary verb used to construct the passive
[voice](cs-feat/Voice) is not labeled `aux` but [auxpass]().

Note that besides `aux` and `auxpass`, the verb _быть_ may also act as a [copula](cop)
and as the main verb.

~~~ sdparse
Завтра я буду выступать в университете . \n Tomorrow I will give-a-talk at university .
aux(выступать, буду)
aux(give-a-talk, will)
~~~

~~~ sdparse
Если бы я пришел раньше, я бы не пропустил поезд. \n If I had come earlier, I wouldn't-have missed the train .
aux(пришел, бы)
aux(come, had)
aux(не пропустил, бы)
aux(missed, wouldn't have)
~~~

