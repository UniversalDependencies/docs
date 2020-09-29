---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction the `obj:agent` relation attaches the infinitive verb to his agent, when the latter is the syntactical object of the sentence
(this initial agent has been demoted and became the object of the causative construction).
For example, in the following sentence, _ses petits_ is the true agent of the verb "sauter" (_Ses petits ont sauté dans la mare_).
This nominal phrase can be pronominalized as follows: _La cane les a fait sauter dans la mare._ The use of the pronoun _les_ clearly shows that _ses petits_ is the syntactical object of the sentence.

~~~ sdparse
La cane a fait sauter ses petits dans la mare. \n The duck made its ducklings jump into the pond.
aux:caus(sauter,fait)
nsubj:caus(sauter,cane)
obj:agent(sauter,petits)
~~~

~~~ sdparse
Mon père a une femme de ménage. Il la fait venir le mercredi. \n My father has a cleaning lady. He makes her come on wednesdays.
aux:caus(venir,fait)
nsubj:caus(venir,Il)
obj:agent(venir,la)
~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation and the causative verb with an [aux:caus]() relation.

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/specific-syntax.html#causative).
<!-- Interlanguage links updated Út zář 29 20:23:40 CEST 2020 -->
