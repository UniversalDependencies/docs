---
layout: relation
title: 'obl:agent'
shortdef: 'agent modifier of passive verbs'
udver: '2'
---

The relation obl:agent is used for agents of passive verbs. In Indonesian, the agent could be optionally preceded by preposition _oleh_ "by", which is what makes it oblique. For example:

~~~ sdparse
dibentuk oleh kekuatan tektonik \n shaped by tectonic forces
obl:agent(dibentuk, kekuatan)
case(kekuatan, oleh)
nmod(kekuatan, tektonik)
obl:agent(shaped, forces)
~~~

The agent may also be realized as the clitic _-nya_ attached to a passive verb. We split the verb and the clitic into two syntactic words. Here the clitic is coded the same way as a direct (core) object of active verbs. Nevertheless, we still attach it as `obl:agent` rather than `obj:agent`, in order to have consistent annotation of agents in passive clauses.

~~~ sdparse
buku yang disukai nya \n the-book that loved by him
obl:agent(disukai, nya)
obl:agent(loved, him)
~~~

~~~ sdparse
Ia telah diingatkan Ibu sebelumnya . \n She had been warned by Mother before .
obl:agent(diingatkan, Ibu)
obl:agent(warned, Mother)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
