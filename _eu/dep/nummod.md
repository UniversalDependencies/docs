---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---


A numeric modifier of a noun (`nummod`) is any number phrase that serves to modify the meaning of the noun with a quantity.

*Urrezko domina irabazi zuen atletak **23** urte ditu .*

*The athlete who won the gold medal is **23** years old .*

~~~ sdparse
Urrezko domina irabazi zuen atletak 23 urte ditu . \n Gold medal_the won_who athlete_the 23 years is .

nmod(domina-2, Urrezko-1)
obj(irabazi-3, domina-2)
aux(irabazi-3, zuen-4)
acl(atletak-5, irabazi-3)
nsubj(ditu-8, atletak-5)
nummod(urte-7, 23-6)
obj(ditu-8, urte-7)
punct(ditu-8, .-9)
~~~


***Hiru** puntuak lortu ditugu .*

*We have got the **three** points .*

~~~ sdparse
Hiru puntuak lortu ditugu . \n Three points_the got have .

nummod(puntuak-2, Hiru-1)
obj(lortu-3, puntuak-2)
aux(lortu-3, ditugu-4)
punct(lortu-3, .-5)
~~~


*Festa **bat** ospatu zuten .*

*They celebreated **one** party .*

~~~ sdparse
Festa bat ospatu zuten . \n Party one celebreated .

obj(ospatu-3, Festa-1)
nummod(Festa-1, bat-2)
aux(ospatu-3, zuten-4)
punct(ospatu-3, .-5)
~~~


*Saiatuko naiz **bi** maratoi egiten .*

*I will try to run **two** maratons .*

~~~ sdparse
Saiatuko naiz bi maratoi egiten . \n I will try to run two maratons .

aux(Saiatuko-1, naiz-2)
nummod(maratoi-4, bi-3)
obj(egiten-5, maratoi-4)
advcl(Saiatuko-1, egiten-5)
punct(Saiatuko-1, .-6)
~~~

Note that indefinite quantifiers such as few, many are tagged DET rather than NUM. Therefore their relation to the quantified noun is not nummod but DET (see DET section).
<!-- Interlanguage links updated Čt lis 12 09:43:33 CET 2020 -->
