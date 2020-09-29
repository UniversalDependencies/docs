---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject (“without its own subject” does not mean that a clause is an xcomp just because its subject is not overt). The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). 
These clauses are non-finite in Basque (although in some languages can be finite).

*Atzo entrenamendua **uztea** erabaki zuen .*

*Yesterday (he/she) decided **to leave** the training .* 

~~~ sdparse
Atzo entrenamendua uztea erabaki zuen .\n  Yesterday training_the to_leave decided .

advmod(erabaki-4, Atzo-1)
dobj(uztea-3, entrenamendua-2)
xcomp(erabaki-4, uztea-3)
aux(erabaki-4, zuen-5)
punct(erabaki-4, .-6)
~~~ sdparse


*Alkateek nahi dute lehenbailehen **biltzea** .*

*Mayors want **to meet** as soon as possible .*

~~~ sdparse
Alkateek nahi dute lehenbailehen biltzea .\n  Mayors want as_soon_as_possible to_meet.

nsubj(nahi_dute-2, Alkateek-1)
xcomp(nahi_dute-2, biltzea-4)
adv(biltzea-4, lehenbailehen-3)
punct(nahi_dute-2, .-5)
~~~ 


*Mentalki **irmo** ikusi ditut haiek .*

*I have seen them mentally **firm** .*

~~~ sdparse
Mentalki irmo ikusi ditut haiek .\n Mentally firm seen have them .

adv(ikusi-3, Mentalki-1)
xcomp(ikusi-3, irmo-2)
aux(ikusi-3, ditut-4)
dobj(ikusi-3, haiek-5)
punct(ikusi-3, .-6)
~~~ 



*Madrilera ez **joatea** erabaki zuen .*

*(He/she) decided not **to go** to Madrid .*

~~~ sdparse
Madrilera ez joatea erabaki zuen .\n  Madrid_to not to_go decided .

nmod(joatea-3, Madrilera-1)
neg(joatea-3, ez-2)
xcomp(erabaki-4, joatea-3)
aux(erabaki-4, zuen-5)
punct(erabaki-4, .-6)
~~~ 
<!-- Interlanguage links updated Út zář 29 18:41:37 CEST 2020 -->
