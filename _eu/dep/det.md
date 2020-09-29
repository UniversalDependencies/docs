---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (`det`) holds between a nominal head and its
[determiner]. 
Determiners are words that modify nouns or noun phrases and express the reference of the noun phrase in context. That is, a determiner may indicate whether the noun is referring to a definite or indefinite element of a class, to a closer or more distant element, to an element belonging to a specified person or thing, to a particular number or quantity, etc.

Note that cardinal numerals (one, five, hundred) are not tagged DET but nummod.

* Ordinal numbers are considered det in Basque:

***Lehen** partiduan hiru puntuak eskuratzea ez da ezinbestekoa .*

*To get the three points in the **first** match is not essential .*

~~~ sdparse
Lehen partiduan hiru puntuak eskuratzea ez da ezinbestekoa . \n First match_the_in three points_the to_get not is essential . 

det(partiduan-2, Lehen-1)
nmod(eskuratzea-5, partiduan-2)
nummod(puntuak-4, hiru-3)
dobj(eskuratzea-5, puntuak-4)
neg(da-7, ez-6)
cop(ezinbestekoa-8, da-7)
csubj(ezinbestekoa-8, eskuratzea-5)
punct(ezinbestekoa-8, .-9)
~~~

* Quantifiers (such as *all*, *many*, *few*...) are also tagged as det:

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
Oso harreman gutxi dute gurekin . \n Very relation few have us_with .

advmod(harreman-2, Oso-1)
det(harreman-2, gutxi-3)
dobj(dute-4, harreman-2)
nmod(dute-4, gurekin-5)
punct(dute-4, .-6)
~~~

* Interrogative determiners:

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

* Demonstrative determiners are also det:

*Euroaren kotizazio **hau** azken lau asteetako altuena da .*

***This** price of the euro is the highest one in the last four weeks .*

~~~ sdparse
Euroaren kotizazio hau azken lau asteetako altuena da . \n Euro_the_of price this last four week_the_of highest_the is .*

nmod(kotizazio-2, Euroaren-1)
det(kotizazio-2, hau-3)
nsubj(altuena-7, kotizazio-2)
det(lau-5, azken-4)
nummod(asteetako-6, lau-5)
nmod(altuena-7, asteetako-6)
cop(altuena-7, da-8)
punct(altuena-7, .-9)
~~~


* Possessive determiners, are not tagged with det but with nmod (see nmod section).  
<!-- Interlanguage links updated Út zář 29 20:31:50 CEST 2020 -->
