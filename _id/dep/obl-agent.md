---
layout: relation
title: 'obl:agent'
shortdef: 'agent modifier of passive verbs'
udver: '2'
---

The relation obl:agent is used for agents of passive verbs. In Indonesian, the agent could be optionally preceded by preposition _oleh_ "by". For example:

~~~ sdparse
Dibentuk oleh kekuatan tektonik \n Shaped by tectonic forces
obl:agent(dibentuk, kekuatan)
case(kekuatan, oleh)
nmod(kekuatan, tektonik)
~~~

~~~ sdparse
buku yang disukai nya \n the-book that loved by-him
acl:relcl(buku, disukai)
mark(disukai, yang)
obl:agent(disukai, nya)
~~~

~~~ sdparse
Ia telah diingatkan Ibu sebelumnya . \n She had been-warned by-Mother before .
nsubj:pass(Ia, diingatkan)
advmod(diingatkan, telah)
obl:agent(diingatkan, Ibu)
advmod(diingatkan, sebelumnya)
punct(diingatkan, .)
~~~

