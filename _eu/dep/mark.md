---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word introducing a finite or non-finite clause subordinate to another clause. The tag  `mark` in related to dependent of the subordinate clause head. Although in some languages such as English it is used in [complement clauses](ccomp) or [adverbial clauses](advcl), in Basque, in those cases, we do not need the marker, since being an agglutinative language those marks are suffixed to words.

*neskak solasa hausnartzen zuen **bitartean** .*

***while** the girl was thinking about the conversation .*

~~~ sdparse
neskak solasa hausnartzen zuen bitartean . \n girl_the conversation_the thinking_about while .

nsubj(hausnartzen-3, neskak-1)
obj(hausnartzen-3, solasa-2)
aux(hausnartzen-3, zuen-4)
mark(hausnartzen-3, bitartean-5)
punct(hausnartzen-3, .-6)
~~~


*Orio eta Castro garaipena lortzeko hautagaiak ziren **arren**, maila makala erakutsi zuten estropada hasieratik .*

***Although** Orio and Castro were the candidates to obtain the victory, they showed a low level from the beginning of the regatta .*


~~~ sdparse
Orio eta Castro garaipena lortzeko hautagaiak ziren arren , maila makala erakutsi zuten estropada hasieratik . \n  Orio and Castro victory_the obtain_to candidates_the were Although, level low_a showed regata_the_of beginning_the_from  .

nsubj(hautagaiak-6, Orio-1)
cc(Orio-1, eta-2)
conj(Orio-1, Castro-3)
obj(lortzeko-5, garaipena-4)
advcl(hautagaiak-6, lortzeko-5)
advcl(erakutsi-12, hautagaiak-6)
cop(hautagaiak-6, ziren-7)
mark(ziren-7, arren-8)
obj(erakutsi-12, maila-10)
amod(maila-10, makala-11)
aux(erakutsi-12, zuten-13)
nmod(hasieratik-15, estropada-14)
nmod(erakutsi-12, hasieratik-15)
punct(erakutsi-12, .-16)
punct(erakutsi-12, ,-9)
~~~


*Ez dugu hemen azalduko, Mirande eta Kristautasuna saioan egina dago **eta** gehienbat .*

*We will not show it here, mainly **because** it is done in the session Mirande and Cristianity .*


~~~ sdparse
Ez dugu hemen azalduko , Mirande eta Kristautasuna saioan egina dago eta gehienbat . \n We will not show it here , mainly because it is done in the session Mirande and Cristianity .

advmod(azalduko-4, Ez-1)
aux(azalduko-4, dugu-2)
advmod(azalduko-4, hemen-3)
nmod(saioan-9, Mirande-6)
cc(Mirande-6, eta-7)
conj(Mirande-6, Kristautasuna-8)
nmod(egina-10, saioan-9)
advcl(azalduko-4, egina-10)
cop(egina-10, dago-11)
mark(dago-11, eta-12)
advmod(dago-11, gehienbat-13)
punct(azalduko-4, .-14)
punct(azalduko-4, ,-5)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
