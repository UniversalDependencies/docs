---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier is any adjectival phrase that serves to modify a noun phrase. The head of the relation corresponds to the head of the nominal phrase, and its dependent is the (adjectival) modifier. This relation is typically used for premodifying or postmodifying phrases. 

~~~ sdparse
v vrste prostovoljnega gasilskega društva Dolga vas \n into ranks of-volunteer fire brigade Dolga vas
amod(društva,prostovoljnega)
amod(društva,gasilskega)
amod(vas-7,Dolga-6)
amod(brigade,volunteer)
amod(brigade,fire)
amod(vas-15,Dolga-14)
~~~

~~~ sdparse
astronome zanima nekaj drugega \n astronomers are-interested-in something else
amod(nekaj,drugega)
amod(something,else)
~~~



The `amod` relation is also used for postmodifying adjectives that are separated from the noun by a comma. These adjectives typically—but not necessarily—belong to the category of participial adjectives.

~~~ sdparse
Se strinjate s trditvijo , postavljeno v naslovu pesmi ? \n You agree with idea , expressed in title of-song ?
amod(trditvijo,postavljeno)
amod(idea,expressed)
~~~

~~~ sdparse
Spremeni se v temen vzorec , podoben šahovnici . \n Transforms itself into dark pattern , resembling chessboard . 
amod(vzorec,podoben)
amod(pattern,resembling)
~~~

~~~ sdparse
nova ladja , velika 1350 kvadratnih metrov \n new ship , spanning 1350 square meters
amod(ladja,velika)
amod(ship,spanning)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:03:59 CEST -->
