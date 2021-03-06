---
layout: relation
title: 'obl:agent'
shortdef: 'agent modifier of passive verbs'
udver: '2'
---

The relation obl:agent is used for agents of passive verbs. In Indonesian, the agent could be optionally preceded by preposition _oleh_ "by". For example:

~~~ sdparse
dibentuk oleh kekuatan tektonik \n shaped by tectonic forces
obl:agent(dibentuk, kekuatan)
case(kekuatan, oleh)
nmod(kekuatan, tektonik)
obl:agent(shaped, forces)
~~~

~~~ sdparse
buku yang disukai nya \n the-book that loved by him
acl:relcl(buku, disukai)
mark(disukai, yang)
obl:agent(disukai, nya)
obl:agent(loved, him)
~~~

~~~ sdparse
Ia telah diingatkan Ibu sebelumnya . \n She had been warned by Mother before .
nsubj:pass(Ia, diingatkan)
advmod(diingatkan, telah)
obl:agent(diingatkan, Ibu)
advmod(diingatkan, sebelumnya)
punct(diingatkan, .)
obl:agent(warned, Mother)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
