---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

In a causative construction, the `iobj:agent` relation attaches the infinitive verb to his agent, when the latter is the syntactical indirect object of the sentence
(this initial agent has been demoted and became an indirect object in the causative construction).
For example, in the following sentences, the use of the pronouns _leur_ and _lui_ shows that these pronouns are indirect objects (see the page on the [iobj]() relation).

~~~ sdparse
Marie leur fait manger des épinards pour la première fois. \n Marie made them eat spinach for the first time.
aux:caus(manger,fait)
nsubj:caus(manger,Marie)
iobj:agent(manger,leur)
~~~

~~~ sdparse
Ils lui ont fait vivre les pires vacances de sa vie. \n They made her spend the worst holidays she had ever had.
aux:caus(vivre,fait)
nsubj:caus(vivre,Ils)
iobj:agent(vivre,lui)
~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation and the causative verb with an [aux:caus]() relation.

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/specific-syntax.html#causative).
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
