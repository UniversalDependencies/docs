---
layout: relation
title:  'conj'
shortdef : 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction or by other means (including punctuation). Regardless of the number of coordinated elements, the head of the relation is always the first element in the sequence, which acts as the head of the entire phrase. 

~~~ sdparse
z Rusi , Čehi in Španci ni bilo pretirane nevarnosti za poraz \n with Russians , Czechs and Spaniards there was no-particular possibility of defeat
conj(Rusi,Čehi)
conj(Rusi,Španci)
cc(Španci,in)
punct(Čehi,,-3)
conj(Russians,Czechs)
conj(Russians,Spaniards)
cc(Spaniards,and)
punct(Czechs,,-16)
~~~
~~~ sdparse
Vitka Ribičič je postregla s kratkim , a jasnim odgovorom \n Vitka Ribičič aux-PAST offered a short , but clear answer
conj(kratkim,jasnim)
cc(jasnim,a)
punct(jasnim,,-7)
amod(odgovorom,kratkim)
conj(short,clear)
cc(clear,but)
punct(clear,,-18)
amod(answer,short)
~~~
~~~ sdparse
drugi so bolj ali manj zanimivi \n others are more or less interesting
conj(bolj,manj)
cc(manj,ali)
advmod(zanimivi,bolj)
conj(more,less)
cc(less,or)
advmod(interesting,more)
~~~
~~~ sdparse
opaziti je že tudi predstavnike ruske finančno - ekonomske elite \n noticable are already also representatives of-Russian financial - economic elite
conj(finančno,ekonomske)
punct(ekonomske,--8)
amod(elite,finančno)
amod(elite,ruske)
conj(financial,economic)
punct(economic,--19)
amod(elite,financial)
amod(elite,of-Russian)
~~~

The `conj` relation is used for all types of coordination, including coordinated clauses with an overtly expressed coordinating conjunction, appearing in front of the clausal conjunct. For clausal coordination without explicit conjunctions, see the description of the [parataxis]() relation.

~~~ sdparse
Kaldenove oči so se jezno zožile , vendar je spregovoril z mirnim glasom . \n Kalden's eyes aux-PAST REFLEX angrily contracted , but aux-PAST he-spoke with calm voice .
conj(zožile,spregovoril)
cc(spregovoril,vendar)
conj(contracted,he-spoke)
cc(spoke,but)
~~~
~~~ sdparse
Prvenstvo bo zelo izenačeno , saj lahkega tekmeca tokrat ne bo . \n Competition will-be very close , since easy opponent this-time not will-be .
conj(izenačeno,bo-11)
cc(bo-11,saj)
cop(izenačeno,bo-2)
conj(close,will-be-24)
cc(will-be,since)
cop(close,will-be-14)
~~~
~~~ sdparse
Ko si enkrat na vrhu in se poškoduješ , se je težko vrniti . \n When you-are once on top and REFLEX you-injure , REFLEX is hard to-get-back . 
conj(si,poškoduješ)
cc(poškoduješ,in)
conj(you-are,you-injure)
cc(you-injure,and)
~~~

By agreement, the `conj` relation is also used for general extenders, such as _in tako naprej_ 'and so forth', and their abbreviations, such as _itd._ 'etc.'. The expressions _in tako dalje_ 'and so forth' and _in tako naprej_ 'and so on' are analyzed as [fixed](https://universaldependencies.org/sl/dep/fixed.html) multi-word expressions.

~~~ sdparse
preveč organske snovi pomeni gnitje , slabše prezimovanje in podobno \n Too-much organic matter means rotting , poor overwintering , and similar .
conj(gnitje,prezimovanje)
conj(gnitje,podobno)
cc(podobno,in)
conj(rotting,overwintering)
conj(rotting,similar)
cc(similar,and)
~~~
~~~ sdparse
že se pripravljamo na pust , veliko noč in tako dalje \n Already REFLEX we-prepare for Carnival , Easter , and so on .
conj(pust,noč)
conj(pust,in)
fixed(in,tako)
fixed(and,on)
conj(Carnival,Easter)
conj(Carnival,and)
fixed(and,so)
fixed(and,on)
~~~


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:41 CET -->
