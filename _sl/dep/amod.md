---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier is any adjectival phrase that serves to modify a noun phrase. The head of the relation corresponds to the head of the nominal phrase, and its dependent is the (adjectival) modifier. This relation is typically used for premodifying or postmodifying phrases. 

~~~ sdparse
v vrste prostovoljnega gasilskega društva Dolga vas
amod(društva,prostovoljnega)
amod(društva,gasilskega)
amod(vas,Dolga)
~~~

~~~ sdparse
astronome zanima nekaj drugega
amod(nekaj,drugega)
~~~



The `amod` relation is also used for postmodifying adjectives that are separated from the noun by a comma. These adjectives typically—but not necessarily—belong to the category of participial adjectives.

~~~ sdparse
Se strinjate s trditvijo , postavljeno v naslovu pesmi ?
amod(trditvijo,postavljeno)
~~~

~~~ sdparse
Spremeni se v temen vzorec , podoben šahovnici .
amod(vzorec,podoben)
~~~

~~~ sdparse
nova ladja , velika 1350 kvadratnih metrov
amod(ladja,velika)
~~~
