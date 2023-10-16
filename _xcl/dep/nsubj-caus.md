---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

`nsubj:caus` relation links the causative verb to the syntactical subject of the sentence, which corresponds to the causer (external agent) participant of the causative predicate, which can be expressed by a morphological or analytical causative. In the analytical causative, the infinitive verb governs the causative auxiliary with an [aux:caus]() relation.

~~~ sdparse
Եւ ասէ Մարիամ. Մեծացուսցէ անձն իմ զՏէր : \n And Mary said: My soul exalts the Lord
nsubj:caus(Մեծացուսցէ, անձն)
obj(Մեծացուսցէ, զՏէր)
~~~
