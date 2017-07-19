---
layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation is used to link the infinitive verb (i.e. the governor) and the causative verb in a causative construction.
The syntactical subject of the sentence receives a [nsubj:caus]() link.
The true agent of the action described by the sentence will either be anotated with an [iobj:agent](), an [obj:agent]() or an [obl:agent]() relation.

~~~ sdparse
Marie a fait asseoir Pierre. \n Marie made Pierre sit.
aux:caus(asseoir,fait)
nsubj:caus(asseoir,Marie)
obj:agent(asseoir,Pierre)
~~~ 

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/overview/specific-syntax.html#causative).