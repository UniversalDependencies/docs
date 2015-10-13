---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---
Coordinationin the Basque UD annotation follows the general schema where the first element of the conjunction is the head, and each conjunct, conjunction complementizer or puntuation mark acting as a conjunction should be attached to the first conjunct:

Example:

Zidane, Henry, Barthez, Deschamps, Blancand and the rest form the most robust team according to most experts.

Zidane, Henry, Barthez, Deschamps, Blanc eta enparauek Europako Talde sendoena osatzen dute aditu gehienentzat.
zidane, Henry, Barthez, Deschamps, Blanc and rest-the-erg Europe-gen team robust form aux-they-transitive-preesent 
expert most-for.

~~~ sdparse
kirjat , kynät ja viivottimet \n books , pencils and rulers
conj(kirjat-1, kynät-3)
punct(kirjat-1, ,-2)
cc(kirjat-1, ja-4)
conj(kirjat-1, viivottimet-5)
punct(Zidane, ,)
conj(Zidane, Henry)
punct(Zidane, ,)
conj(Zidane, Barthez)
punct(Zidane, ,)
conj(Zidane, Deschamps)
conj(Zidane, ,)
conj(Zidane, Blanc)
cc(Zidane, eta)
conj(Zidane, enparauek)
nmod(talde, Europako)
dobj(osatzen, talde)
amod(talde, sendoena)
aux(osatzen, dute)
nmod(osatzen, aditu)
det(aditu, gehienentzat)
punct(osatzen, .)
~~~


~~~ sdparse
punct(Zidane, ,)
conj(Zidane, Henry)
punct(Zidane, ,)
conj(Zidane, Barthez)
punct(Zidane, ,)
conj(Zidane, Deschamps)
conj(Zidane, ,)
conj(Zidane, Blanc)
cc(Zidane, eta)
conj(Zidane, enparauek)
nmod(talde, Europako)
dobj(osatzen, talde)
amod(talde, sendoena)
aux(osatzen, dute)
nmod(osatzen, aditu)
det(aditu, gehienentzat)
punct(osatzen, .)
~~~


