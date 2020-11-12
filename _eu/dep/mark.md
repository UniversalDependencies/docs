---
layout: relation
title: 'mark'
shortdef: 'marker'
---

A marker is the word introducing a finite or non-finite clause subordinate to another clause. The tag  `mark` in related to dependent of the subordinate clause head. Although in some languages such as English it is used in [complement clauses](ccomp) or [adverbial clauses](advcl), in Basque, in those cases, we do not need the marker, since being an agglutinative language those marks are suffixed to words. 

*neskak solasa hausnartzen zuen **bitartean** .* 

***while** the girl was thinking about the conversation .*

~~~ sdparse
neskak solasa hausnartzen zuen bitartean . \n girl_the conversation_the thinking_about while . 

nsubj(hausnartzen-3, neskak-1)
dobj(hausnartzen-3, solasa-2)
aux(hausnartzen-3, zuen-4)
mark(hausnartzen-3, bitartean-5)
punct(hausnartzen-3, .-6)
~~~


*Orio eta Castro garaipena lortzeko hautagaiak ziren **arren**, maila makala erakutsi zuten estropada hasieratik .*

***Although** Orio and Castro were the candidates to obtain the victory, they showed a low level from the beginning of the regatta .*


~~~ sdparse
Orio eta Castro garaipena lortzeko hautagaiak ziren arren, maila makala erakutsi zuten estropada hasieratik . \n  Orio and Castro victory_the obtain_to candidates_the were Although, level low_a showed regata_the_of beginning_the_from  . 

nsubj(hautagaiak-6, Orio-1)
cc(Orio-1, eta-2)
conj(Orio-1, Castro-3)
dobj(lortzeko-5, garaipena-4)
advcl(hautagaiak-6, lortzeko-5)
advcl(erakutsi-12, hautagaiak-6)
cop(hautagaiak-6, ziren-7)
mark(ziren-7, arren-8)
dobj(erakutsi-12, maila-10)
amod(maila-10, makala-11)
aux(erakutsi-12, zuten-13)
nmod(hasieratik-15, estropada-14)
nmod(erakutsi-12, hasieratik-15)
punct(erakutsi-12, .-16)
~~~


*ez dugu hemen azalduko, Mirande eta Kristautasuna saioan egina dago **eta** gehienbat .* 

*We will not show it here, mainly **because** it is done in the session Mirande and Cristianity .* 


~~~ sdparse
ez dugu hemen azalduko, Mirande eta Kristautasuna saioan egina dago eta gehienbat . \nWe will not show it here, mainly because it is done in the session Mirande and Cristianity . 

neg(azalduko-4, ez-1)
aux(azalduko-4, dugu-2)
advmod(azalduko-4, hemen-3)
nmod(saioan-8, Mirande-5)
cc(Mirande-5, eta-6)
conj(Mirande-5, Kristautasuna-7)
nmod(egina-9, saioan-8)
advcl(azalduko-4, egina-9)
cop(egina-9, dago-10)
mark(dago-10, eta-11)
advmod(dago-10, gehienbat-12)
punct(azalduko-4, .-13)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
