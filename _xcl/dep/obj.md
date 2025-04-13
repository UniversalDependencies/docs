---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

Typically, the object is the noun phrase that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient). In Classical Armenian, the object is marked by the accusative case. 
Classical Armenian is usually discribed as a language with a flexible (S)VO word order, and the position of the direct object is not fixed.

Classical Armenian has a differential object marking. The referentially prominent direct object is marked by an adposition զ= / _z=_ (see [Case]()).

~~~ sdparse
Ի սկզբանէ արար Աստուած զ երկին եւ զ երկիր : \n In the beginning God created the heaven and the earth .
obj(արար, երկին)
obj(արար, երկիր)
obj(created, heaven)
obj(created, earth)
~~~

~~~ sdparse
Եւ ընթացեալ մի ոմն ելից սպունգ մի քացախով : \n And one ran and filled a spunge with vinegar .
obj(ելից, սպունգ)
obj(filled, spunge)
~~~

If there are two core arguments in the accusative, only one of them has the `obj` relation, while others are `iobj`.

~~~ sdparse
հարցից եւ ես զ ձեզ բան մի \n I will ask you one question
obj(հարցից, բան)
iobj(հարցից, ձեզ)
obj(ask, question)
iobj(ask, you)
~~~

Dependents in the accusative, which are not core arguments, take the `obl` relation.

~~~ sdparse
բազում անգամ [Acc] անկանի ի հուր \n many times he falls into the fire
obl(անկանի, անգամ)
~~~

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.

Samvelian, Pollet, Pegah Faghiri, Victoria Khurshudyan. 2023. On the persistence of SVO: the case of Modern Eastern Armenian. _Linguistics_ 61/3: 459‒497.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:13 CET -->
