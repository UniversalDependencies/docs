---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

`nsubj:caus` relation links the causative verb to the syntactical subject of the sentence (i.e. the causer) in a causative construction.
The infinitive verb governs the causative verb with an [aux:caus]() relation. The true agent of the action described by the sentence is annotated with an [iobj:agent]().

~~~ sdparse
Աղջիկս ինձ տիկնիկ գնել տվեց ։ \n My-dautghter made me buy a-doll .
aux:caus(գնել, տվեց)
aux:caus(buy, made)
nsubj:caus(գնել, Աղջիկս)
nsubj:caus(buy, My-dautghter)
iobj:agent(գնել, ինձ)
iobj:agent(buy, me)
obj:agent(գնել, տիկնիկ)
obj:agent(buy, a-doll)
~~~

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/hy/overview/specific-syntax.html).
