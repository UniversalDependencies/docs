---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun (`appos`) is a nominal immediately following the first noun that serves to define or modify that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures.

*Bikote bat hil zuten Chinanin, Taref **probintzian** .*

*They killed a couple in Chinani, in the Taref **province** .*

~~~ sdparse
Bikote bat hil zuten Chinanin , Taref probintzian . \n Couple a killed Chinani_in , Taref province_the_in .

dobj(hil-3, Bikote-1)
nummod(Bikote-1, bat-2)
aux(hil-3, zuten-4)
nmod(hil-3, Chinanin-5)
punct(hil-3, ,-6)
nmod(probintzian-8, Taref-7)
appos(Chinanin-5, probintzian-8)
punct(hil-3, .-9)
~~~


*Azkenengo asanbladan, martxoaren 10ean **eginikoa**, adierazi zuten .*

*They explained it in the last assembly, in **the one made** in the 10th march .*

~~~ sdparse
Azkenengo asanbladan , martxoaren 10ean eginikoa , adierazi zuten . \n They explained it in the last assembly , in the one made in the 10th march .

amod(asanbladan-2, Azkenengo-1)
nmod(adierazi-8, asanbladan-2)
nmod(10ean-5, martxoaren-4)
nmod(eginikoa-6, 10ean-5)
appos(asanbladan-2, eginikoa-6)
aux(adierazi-8, zuten-9)
punct(adierazi-8, .-10)
punct(asanbladan-2, ,-3)
punct(asanbladan-2, ,-7)
~~~


*Nekazaritza eta abeltzaintza **(esnea, haragia eta txerriak)** dira bertako iharduera ekonomiko nagusiak .*

*Agriculture and stockbreeding **(milk, meat and pork)** are the main autochthonous economic activities .*

~~~ sdparse
Nekazaritza eta abeltzaintza ( esnea , haragia eta txerriak ) dira bertako iharduera ekonomiko nagusiak . \n Agriculture and stockbreeding ( milk , meat and pork ) are autochthonous activities economic main_the .

nsubj(iharduera-13, Nekazaritza)
cc(Nekazaritza-1, eta-2)
conj(Nekazaritza-1, abeltzaintza-3)
appos(abeltzaintza-3, esnea-5)
punct(esnea-5, ,-6)
conj(esnea-5, haragia-7)
cc(esnea-5, eta-8)
conj(esnea-5, txerriak-9)
appos(abeltzaintza-3, esnea-5)
cop(iharduera-13, dira-11)
amod(iharduera-13, bertako-12)
amod(iharduera-13, ekonomiko-14)
amod(iharduera-13, nagusiak-15)
punct(iharduera-13, .-16)
punct(abeltzaintza-3, (-4)
punct(iharduera-13, )-10)
~~~


*Francesco Casagrandre italiarrak Nazioarteko Txirrindularitza Elkarteko **(UCI)** lehen postuan jarraitzen du .*

*The italian Francesco Casagrandre continues in the first position of the Union Cycliste Internationale **(UCI)** .*

~~~ sdparse
Francesco Casagrandre italiarrak Nazioarteko Txirrindularitza Elkarteko ( UCI ) lehen postuan jarraitzen du . \n Francesco Casagrandre italian_the Internationale_the_of Cycliste Union ( UCI ) first position_the_in continues .

nmod(italiarrak-3, Francesco-1)
name(Francesco-1, Casagrandre-2)
nsubj(jarraitzen-12, italiarrak-3)
amod(lehen-10, Nazioarteko-4)
name(Nazioarteko-4, Txirrindularitza-5)
name(Txirrindularitza-5, Elkarteko-6)
appos(Elkarteko-6, UCI-8)
punct(UCI-8, (-7)
punct(UCI-8, )-9)
det(postuan-11, lehen-10)
nmod(jarraitzen-12, postuan-11)
aux(jarraitzen-12, du-13)
punct(jarraitzen-12, .-14)
~~~


<!-- Interlanguage links updated Pá kvě 14 11:08:50 CEST 2021 -->
