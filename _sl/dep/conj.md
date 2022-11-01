---
layout: relation
title:  'conj'
shortdef : 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction or by other means (including punctuation). Regardless of the number of coordinated elements, the head of the relation is always the first element in the sequence, which acts as the head of the entire phrase. 

~~~ sdparse
z Rusi , Čehi in Španci ni bilo pretirane nevarnosti za poraz
conj(Rusi,Čehi)
conj(Rusi,Španci)
cc(Španci,in)
punct(Čehi,,)
~~~
~~~ sdparse
Vitka Ribičič je postregla s kratkim , a jasnim odgovorom
conj(kratkim,jasnim)
cc(jasnim,a)
punct(jasnim,,)
amod(odgovorom,kratkim)
~~~
~~~ sdparse
drugi so bolj ali manj zanimivi
conj(bolj,manj)
cc(manj,ali)
advmod(zanimivi,bolj)
~~~
~~~ sdparse
opaziti je že tudi predstavnike ruske finančno - ekonomske elite
conj(finančno,ekonomske)
punct(ekonomske,-)
amod(elite,finančno)
amod(elite,ruske)
~~~

The `conj` relation is used for all types of coordination, including coordinated clauses with an overtly expressed coordinating conjunction, appearing in front of the clausal conjunct. For clausal coordination without explicit conjunctions, see the description of the [parataxis]() relation.

~~~ sdparse
Kaldenove oči so se jezno zožile , vendar je spregovoril z mirnim glasom.
conj(zožile,spregovoril)
cc(spregovoril,vendar)
~~~
~~~ sdparse
Prvenstvo bo zelo izenačeno , saj lahkega tekmeca tokrat ne bo .
conj(izenačeno,bo-11)
cc(bo-11,saj)
cop(izenačeno,bo)
~~~
~~~ sdparse
Ko si enkrat na vrhu in se poškoduješ , se je težko vrniti .
conj(si,poškoduješ)
cc(poškoduješ,in)
~~~
