---
layout: relation
title: 'flat'
shortdef: 'flat structure with no head'
udver: '2'
---

`flat` is one of the three relations for compounding in UD (together with [compound]() and [fixed]()). It is used for proper nouns constituted of multiple nominal elements.
Words joined by `flat` should all be part of a minimal noun phrase; otherwise, regular syntactic relations should be used.
In general, names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the `flat` label.

***Scottie Pippenek** polemika artean ekin zion norgehiagokari .*

***Scottie Pippene** attacked to the competition among polemics .*

~~~ sdparse
Scottie Pippenek polemika artean ekin zion norgehiagokari . \n Scottie Pippene polemic among attacked competition_the_to .

nsubj(ekin-5, Scottie-1)
name(Scottie-1, Pippenek-2)
nmod(ekin-5, polemika-3)
case(polemika-3, artean-4)
aux(ekin-5, zion-6)
iobj(ekin-5, norgehiagokari-7)
punct(ekin-5, .-8)
~~~

***Dan Eggen** gustora zegoen atzo .*

***Dan Eggen** was comfortably yesterday .*

~~~ sdparse
Dan Eggen gustora zegoen atzo . \n Dan Eggen comfortably was yesterday .

nsubj(zegoen-4, Dan-1)
name(Dan-1, Eggen-2)
advmod(zegoen-4, gustora-3)
advmod(zegoen-4, atzo-5)
punct(zegoen-4, .-6)
~~~

*Hego Koreako gobernuak **Hyundai Motor** enpresaren salmenta baimendu du .*

*South Korea's government has authorized the sale of **Hyundai Motor** enterprise .*

~~~ sdparse
Hego Koreako gobernuak Hyundai Motor enpresaren salmenta baimendu du . \n South Korea's government Hyundai Motor enterprise_of sale_the authorized has .

compound(Koreako-2, Hego-1)
nmod(gobernuak-3, Koreako-2)
subj(baimendu-8, gobernuak-3)
nmod(enpresaren-6, Motor-5)
name(Motor-5, Hyundai-4)
nmod(salmenta-7, enpresaren-6)
dobj(baimendu-8, salmenta-7)
aux(baimendu-8, du-9)
punct(baimendu-8, .-10)
~~~



<!-- Interlanguage links updated Pá kvě 14 11:09:05 CEST 2021 -->
