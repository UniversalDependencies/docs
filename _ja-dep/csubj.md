---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

Clausal subjects introduced by a nominal marker の / no.

~~~ sdparse
太郎 が 怒ら れる の は いや だ 。\n Taro NOM punish PASSIVE that TOPIC dislike AUX .
csubj(いや, 怒ら)
nsubjpass(怒ら, 太郎)
case(太郎, が)
auxpass(怒ら, れる)
mark(怒ら, の)
case(怒ら, は)
aux(いや, だ)
punct(いや, 。)
~~~
