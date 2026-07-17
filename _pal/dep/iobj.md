---
layout: relation
title: 'iobj'
shortdef: '<shortdef>'
udver: '2'
---

The indirect object relation is rare in Middle Persian because it is mostly the subject and direct object that appear without adpositional flagging. The indirect object is usually flagged by the preposition *ō* 'to' so that recipients, addressees, and goals are formally indistinguishable.

As the category of indirect objects is not well-defined for Middle Persian, only those constituents are annotated as `iobj` whose core argument status is certain and which are not flagged by a preposition. These are mostly enclitic personal pronouns.

- "The minor (child) whom the father does culpably not give food and maintenance, a person raises (it), (that one) is the provider."
~~~ sdparse
aburnāyīg kē =š pid pad wināhgārīh xwarišn ud dārišn nē dahēd kas be parwarēd parwardār \n minor REL 3SG.OBL father in wrongdoing food and maintenance not gives person SBJV raises provider
mark(dahēd, kē)
iobj(dahēd, =š)
nsubj(dahēd, pid)
case(wināhgārīh, pad)
obl(dahēd, wināhgārīh)
obj(dahēd, xwarišn)
cc(dārišn, ud)
conj(xwarišn, dārišn)
advmod(dahēd, nē)
acl:relcl(aburnāyīg, dahēd)
~~~

- "And the corpse is to be shown (to) a dog." (in order to drive out the demon of decay)
~~~ sdparse
ud nasāy sag nimūdan \n and corpse dog show.NEC
cc(nimūdan, ud)
nsubj:pass(nimūdan, nasāy)
iobj(nimūdan, sag)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:12 CEST -->
