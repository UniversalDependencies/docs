---
layout: relation
title: 'aux:ех'
shortdef: 'existentials as auxiliary'
udver: '2'
---

The `aux:ex` relation links the resultative participle (i.e. the governor) and the finite form of existentials _կամ_ “be, exist” and _ունեմ_ “have” as [auxiliary](AUX).

~~~ sdparse
Նա հագած ուներ թեթև վերարկու ։ \n He had a light coat dressed .
nsubj(հագած, Նա)
nsubj(dressed, He)
amod(վերարկու, թեթև)
amod(coat, light)
obj(հագած, վերարկու)
obj(dressed, coat)
aux(հագած, ուներ)
aux(dressed, had)
det(coat, a)
~~~ 

~~~ sdparse
Երեկվանից ոչ մի տող գրած չկամ ։ \n I do-not-have a single line written since-yesterday . (lit: “I do not exist written no any row since yesterday.”)
obl(գրած, Երեկվանից)
obl(written, since-yesterday)
obj(գրած, տող)
obj(written, line)
det(տող, ոչ)
fixed(ոչ, մի)
aux(գրած, չկամ)
aux(written, do-not-have)
~~~ 

For more details see [specific-syntax](http://universaldependencies.org/hy/overview/specific-syntax.html).
