---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject (“without its own subject” does not mean that a clause is an xcomp just because its subject is not overt). The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). 
These clauses are non-finite in Basque (although in some languages can be finite).

*atzo entrenamendua **uztea** erabaki zuen*

*yesterday decided **to leave** the training* 

~~~ sdparse
atzo entrenamendua uztea erabaki zuen \n  yesterday (he/she) decided to leave the training

advmod(erabaki-14, atzo-11)
dobj(uztea-13, entrenamendua-12)
xcomp(erabaki-14, uztea-13)
aux(erabaki-14, zuen-15)
~~~ 

~~~ sdparse
atzo entrenamendua uztea erabaki zuen \n  yesterday (he/she) decided to leave the training

advmod(erabaki, atzo)
dobj(uztea, entrenamendua)
xcomp(erabaki, uztea)
aux(erabaki, zuen)
~~~ sdparse



*alkateek nahi dute lehenbailehen **biltzea***

*mayors want **to meet** as soon as possible*

~~~ sdparse
alkateek nahi dute lehenbailehen biltzea \n  mayors want to meet as soon as possible

nsubj(nahi_dute-11, alkateek-9)
xcomp(nahi_dute-11, biltzea-15)
adv(biltzea-15, lehenbailehen-13)
~~~ 

~~~ sdparse
alkateek nahi dute lehenbailehen biltzea \n  mayors want to meet as soon as possible

nsubj(nahi_dute, alkateek)
xcomp(nahi_dute, biltzea)
adv(biltzea, lehenbailehen)
~~~ 

*mentalki oso **irmo** ikusi ditut haiek*

*I have seen them mentally very **firm***

~~~ sdparse
mentalki oso irmo ikusi ditut haiek \n   I have seen them mentally very firm

adv(ikusi-6, mentalki-3)
adv(irmo-5, oso-4)
xcomp(ikusi-6, irmo-5)
aux(ikusi-6, ditut-7)
dobj(ikusi-6, haiek-8)
~~~ 

~~~ sdparse
mentalki oso irmo ikusi ditut haiek \n   I have seen them mentally very firm

adv(ikusi, mentalki)
adv(irmo, oso)
xcomp(ikusi, irmo)
aux(ikusi, ditut)
dobj(ikusi, haiek)
~~~ 




*Madrilera **ez joatea** erabaki zuen

*(He/she) decided **not to go** to Madrid

~~~ sdparse
Madrilera ez joatea erabaki zuen \n  (He/she) decided not to go to Madrid

nmod(joatea-10, Madrilera-8)
neg(joatea-10, ez-9)
xcomp(erabaki-11, joatea-10)
aux(erabaki-11, zuen-12)
~~~ 

~~~ sdparse
Madrilera ez joatea erabaki zuen \n  (He/she) decided not to go to Madrid

nmod(joatea, Madrilera)
neg(joatea, ez)
xcomp(erabaki, joatea)
aux(erabaki, zuen)
~~~ 


EUSKARAZ HAU????
The xcomp relation is also used in constructions that are known as secondary predicates or predicatives. Examples:

    She declared the cake beautiful.
    She declared the cake a success.

