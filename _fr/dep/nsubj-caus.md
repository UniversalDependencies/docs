---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

The `nsubj:caus` relation links the infinitive verb (i.e. the head of the sentence) to the syntactical subject of the sentence (i.e. the causer) in a causative construction.
The infinitive verb governs the causative verb with an [aux:caus]() relation.
The true agent of the action described by the sentence is annotated with an [iobj:agent](), an [obj:agent]() or an [obl:agent]() relation.

~~~ sdparse
Ses filles lui ont fait acheter un chiot. \n His girls made him buy a puppy.
aux:caus(acheter,fait)
nsubj:caus(acheter,filles)
iobj:agent(acheter,lui)
~~~

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/specific-syntax.html#causative).
<!-- Interlanguage links updated Út zář 29 20:43:23 CEST 2020 -->
