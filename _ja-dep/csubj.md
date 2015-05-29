---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

A clausal subject (`csubj`) is commonly introduced by a pair of particles,
a nominal marker の / *no* and a nominative case marker が / *ga*.
When the phrase is topicalized, the nominative が / *ga* is replaced by は / *wa*.

~~~ sdparse
太郎 が 怒ら れる の は いや だ 。 \n Taro NOM punish PASSIVE that TOPIC dislike AUX .
csubj(いや, 怒ら)
nsubjpass(怒ら, 太郎)
case(太郎, が)
auxpass(怒ら, れる)
mark(怒ら, の)
case(怒ら, は)
aux(いや, だ)
punct(いや, 。)
~~~
