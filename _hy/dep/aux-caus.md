---
layout: relation
title: 'aux:cau'
shortdef: 'causative auxiliary'
udver: '2'
---

`aux:caus` relation links the infinitive verb (i.e. the governor) and the causative [auxiliary](AUX) _տալ_ “to make” (in any tense or in the infinitive) in a causative construction.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will either be anotated with an [iobj:agent](), an [obj:agent]() or an [obl:agent]() relation.

~~~ sdparse
Արամը Արային նամակ գրել տվեց ։ \n Aram.Nom Ara.Dat a-letter.Nom to-write he-made .
aux:caus(գրել, տվեց)
aux:caus(to-write, he-made)
nsubj:caus(գրել, Արամը)
nsubj:caus(to-write, Aram.Nom)
iobj:agent(գրել, Արային)
iobj:agent(to-write, Ara.Dat)
obj:agent(գրել, նամակ)
obj:agent(to-write, a-letter.Nom)
~~~ 

~~~ sdparse
Այդ գիրքը բերել տվեցի Բեռլինից ։ \n That book.Nom to-bring I-made from-Berlin .
aux:caus(բերել, տվեցի)
aux:caus(to-bring, I-made)
obj:agent(բերել, գիրքը)
obj:agent(to-bring, book.Nom)
obl:agent(բերել, Բեռլինից)
obl:agent(to-bring, from-Berlin)
det(գիրքը, Այդ)
det(book, That)
~~~

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/hy/overview/specific-syntax.html).
