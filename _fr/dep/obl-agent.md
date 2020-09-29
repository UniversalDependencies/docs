---
layout: relation
title: 'obl:agent'
shortdef: 'agentive oblique'
udver: '2'
---

In a causative construction, the `obl:agent` relation attaches the infinitive verb to his agent, when the latter is the syntactical oblique of the sentence (this initial agent has been demoted and became the oblique complement of the causative construction).
I.e. a complement introduced by a preposition (see the page about the [obl]() relation).

~~~ sdparse
Patrick a fait boire du thé à Micheline alors qu'elle déteste ça. \n Patrick made Micheline drink tee, even though she hates tee.
aux:caus(boire,fait)
nsubj:caus(boire,Patrick)
obl:agent(boire,Micheline)
~~~

~~~ sdparse
Monique a fait toiletter son bichon par le meilleur toiletteur de la région. \n Monique made her Bichon Frise groomed by the best groomer in the area.
aux:caus(toiletter,fait)
nsubj:caus(toiletter,Monique)
obl:agent(toiletter,toiletteur)
~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation and the causative verb with an [aux:caus]() relation.

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/fr/specific-syntax.html#causative).
<!-- Interlanguage links updated Út zář 29 18:41:32 CEST 2020 -->
