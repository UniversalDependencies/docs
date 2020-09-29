---
layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation is used to link the infinitive verb (i.e. the governor) and the causative verb in a causative construction.
In French, only the lemma _faire_ is used as a causative auxiliary.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will either be annotated with an [iobj:agent](), an [obj:agent]() or an [obl:agent]() relation.

~~~ sdparse
Marie a fait asseoir Pierre . \n Marie made Pierre sit.
aux:caus(asseoir,fait)
nsubj:caus(asseoir,Marie)
obj:agent(asseoir-4,Pierre-5)
~~~

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/specific-syntax.html#causative).
<!-- Interlanguage links updated Út zář 29 18:41:09 CEST 2020 -->
