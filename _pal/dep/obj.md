---
layout: relation
title: 'obj'
shortdef: '<shortdef>'
udver: '2'
---

The object relation is used for the secondary participant of transitive verbs. In an ergative construction, the object is in direct case and triggers person-number agreement with the verb. If an ergative construction receives a passive interpretation, the object is annotated as `nsubj:pass`. Object clauses are annotated as `ccomp`. In a possessive construction, the possessum is encoded as subject.<br>Indirect objects can formally not be differentiated from direct objects. We identify that participant as indirect, which is normally flagged with a preposition in other attestations (typically the recipient or addressee).

Objects are frequently omitted as known, active referents.

- "And why did (he) allow harm to befall (his) creatures?"
~~~ sdparse
ud wizend ō dāmān čim padīrift \n and harm to creatures why accepted
cc(padīrift, ud)
obj(padīrift, wizend)
case(dāmān, ō)
obl(padīrift, dāmān)
advmod((padīrift, čim)
~~~

- "And will (he) throw him back by force?"
~~~ sdparse
u =š pad nērōg abāz abganēd \n and him by strength back throws
cc(abganēd, u)
obj(abganēd, =š)
case(nērōg, pad)
obl(abganēd, nērōg)
advmod(abganēd, abāz)
~~~

- "That woman does not have property to the extent that she were able to sustain herself and the child."
~~~ sdparse
ān zan xwāstag ōwōn nēst kū =š xwēštan ud frazend dāštan tuwān \n that woman property such not_is that her self and child keep able
mark(tuwān, kū)
nsubj(tuwān, =š)
xcomp(tuwān, dāštan)
obj(dāštan, xwēštan)
conj(xwēštan, frazend)
cc(frazend, ud)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:28 CEST -->
