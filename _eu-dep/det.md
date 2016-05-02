---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (`det`) holds between a nominal head and its determiner. 

* Cardinal and ordinal numbers and quantifiers are considered det in Basque:

***3.000** pezeta kostatzen da .*

*It costs **3.000** pesetas .* 

~~~ sdparse
3.000 pezeta kostatzen da . \n 3.000 pesetas costs . 

det(pezeta-2, 3.000-1)
aux(kostatzen-3, da-4)
dobj(kostatzen-3, pezeta-2)
punct(kostatzen-3, .-5)
~~~


***Bost** minutu jokatuta pozik egongo nintzateke .*

*I would be happy playing **five** minutes .*

~~~ sdparse
Bost minutu jokatuta pozik egongo nintzateke . \n Five minutes playing happy would be  .

det(minutu-2, Bost-1)
dobj(jokatuta-3, minutu-2)
advcl(egongo-5, jokatuta-3)
advmod(egongo-5, pozik-4)
aux(egongo-5, nintzateke-6)
punct(egongo-5, .-7)
~~~


***Lehen** partiduan hiru puntuak eskuratzea ez da ezinbestekoa .*

*To get the three points in the **first** match is not essential .*

~~~ sdparse
Lehen partiduan hiru puntuak eskuratzea ez da ezinbestekoa . \n First match_the_in three points_the     to_get not is essential . 

det(partiduan-2, Lehen-1)
nmod(eskuratzea-5, partiduan-2)
nummod(puntuak-4, hiru-3)
dobj(eskuratzea-5, puntuak-4)
neg(da-7, ez-6)
cop(ezinbestekoa-8, da-7)
csubj(ezinbestekoa-8, eskuratzea-5)
punct(ezinbestekoa-8, .-9)
~~~

* Indefinite quantifiers (such as few and many) are also tagged as det.

*Hortxe biltzen da mota **guztietako** jendea .*

***All** kind of people are met there .*

~~~ sdparse
Hortxe biltzen da mota guztietako jendea . \n There met are kind all_of people .

advmod(biltzen-2, Hortxe-1)
aux(biltzen-2, da-3)
det(mota-4, guztietako-5)
nmod(jendea-6, mota-4)
ncubj(biltzen-2, jendea-6)
punct(biltzen-2, .-7)
~~~


*Aukera **asko** daude .*

*There are **many** options .*

~~~ sdparse
Aukera asko daude . \n Options many there_are .

det(Aukera-1, asko-2)
cop(Aukera-1, daude-3)
punct(Aukera-1-2, .-4)
~~~


*Oso harreman **gutxi** dute gurekin .* 

*They have very **few** relation with us .*

~~~ sdparse
Oso harreman gutxi dute gurekin . n\ Very relation few have us_with .

advmod(harreman-2, Oso-1)
det(harreman-2, gutxi-3)
dobj(dute-4, harreman-2)
nmod(dute-4, gurekin-5)
punct(dute-4, .-6)
~~~


***Zeintzu** proiektu dituzu epe laburrera ?* 

***Which** projects do you have in the near future ?*

~~~ sdparse
Zeintzu proiektu dituzu epe laburrera ? \n Which projects do you have in the near future ?

det(proiektu-2, Zeintzu-1)
dobj(dituzu-3, proiektu-2)
nmod(dituzu-3, epe-4)
amod(epe-4, laburrera-5)
punct(dituzu-3, ?-6)
~~~


* Possessive determiners, are not tagged with det but with nmod (see nmod section).  
