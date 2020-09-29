---
layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation links the infinitive verb (i.e. the governor) and the finite causative [auxiliary](AUX) _տալ_ “to make” in a causative construction.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will be anotated with an [iobj:agent]() relation.

~~~ sdparse
Արամը Արային նամակ գրել տվեց ։ \n Aram.Nom Ara.Dat a-letter.Nom to-write he-made .
aux:caus(գրել, տվեց)
aux:caus(to-write, he-made)
nsubj:caus(գրել, Արամը)
nsubj:caus(to-write, Aram.Nom)
iobj:agent(գրել, Արային)
iobj:agent(to-write, Ara.Dat)
obj(գրել, նամակ)
obj(to-write, a-letter.Nom)
~~~ 

~~~ sdparse
Այդ գիրքը բերել տվեցի Բեռլինից ։ \n That book.Nom to-bring I-made from-Berlin .
aux:caus(բերել, տվեցի)
aux:caus(to-bring, I-made)
obj(բերել, գիրքը)
obj(to-bring, book.Nom)
obl(բերել, Բեռլինից)
obl(to-bring, from-Berlin)
~~~

For more details see [specific-syntax](http://universaldependencies.org/hy/overview/specific-syntax.html).
<!-- Interlanguage links updated Út zář 29 20:23:20 CEST 2020 -->
