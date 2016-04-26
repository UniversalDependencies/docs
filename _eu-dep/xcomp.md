---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject (“without its own subject” does not mean that a clause is an xcomp just because its subject is not overt). The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). 
These clauses are non-finite in Basque (although in some languages can be finite).

*atzo entrenamendua **uztea** erabaki zuen*

*yesterday (he/she) decided **to leave** the training* 

~~~ sdparse
atzo entrenamendua uztea erabaki zuen \n  yesterday decided to leave the training

advmod(erabaki, atzo)
dobj(uztea, entrenamendua)
xcomp(erabaki, uztea)
aux(erabaki, zuen)
~~~ sdparse



*alkateek nahi dute lehenbailehen **biltzea***

*mayors want **to meet** as soon as possible*

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

adv(ikusi, mentalki)
adv(irmo, oso)
xcomp(ikusi, irmo)
aux(ikusi, ditut)
dobj(ikusi, haiek)
~~~ 



*Madrilera **ez joatea** erabaki zuen*

*(He/she) decided **not to go** to Madrid*

~~~ sdparse
Madrilera ez joatea erabaki zuen \n  decided not to go to Madrid

nmod(joatea, Madrilera)
neg(joatea, ez)
xcomp(erabaki, joatea)
aux(erabaki, zuen)
~~~ 


