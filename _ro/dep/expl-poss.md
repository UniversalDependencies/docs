---
layout: relation
title:  'expl:poss'
shortdef : 'possessively used reflexive clitic'
udver: '2'
---

A dative reflexive clitic can in certain contexts mean possession of the direct object by the
subject of the clause. The construction is comparable to the middle voice of old Indo-European
languages such as Ancient Greek. We attach the dative clitic to the main verb using the
relation `expl:poss`.

~~~ sdparse
Clientă cu artrită gravă și- a rupt șoldul . \n A-client with an-arthritis severe herself has broken hip .
nsubj(rupt, Clientă)
nmod(Clientă, artrită)
case(artrită, cu)
amod(artrită, gravă)
expl:poss(rupt, și-)
aux(rupt, a)
obj(rupt, șoldul)
punct(rupt, .)
~~~

“A client with severe arthritis broke her hip.”

<!-- Interlanguage links updated Pá kvě 14 11:09:04 CEST 2021 -->
