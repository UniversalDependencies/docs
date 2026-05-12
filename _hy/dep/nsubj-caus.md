---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

The `nsubj:caus` relation links the causative verb to the syntactic subject of the sentence (i.e. the causer) in a causative construction.
The infinitive verb governs the causative auxiliary via an [aux:caus]() relation. The true agent of the action described in the sentence is annotated with the [iobj:agent]() relation.

~~~ sdparse
Աղջիկս ինձ տիկնիկ գնել տվեց ։ \n My-dautghter made me buy a-doll .
aux:caus(գնել, տվեց)
aux:caus(buy, made)
nsubj:caus(գնել, Աղջիկս)
nsubj:caus(buy, My-dautghter)
iobj:agent(գնել, ինձ)
iobj:agent(buy, me)
obj(գնել, տիկնիկ)
obj(buy, a-doll)
~~~

For more details see [specific-syntax](http://universaldependencies.org/hy/overview/specific-syntax.html).
<!-- Interlanguage links updated St 6. května 2026, 20:47:39 CEST -->
