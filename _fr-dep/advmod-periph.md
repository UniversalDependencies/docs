---
layout: relation
title: 'advmod:periph'
shortdef: 'peripheral adverbial modifier'
udver: '2'
---

FrenchSpoken uses the `advmod:periph` relation for periphal adverbial modifiers, i.e. adverbial modifiers which are not governed by their heads. 
Peripheral adverbial modifiers (like all peripheral elements) cannot be moved inside the core of the sentence, unless they are put in parenthesis.
Other adverbial modifiers are annotated with the [advmod]() relation.

~~~ sdparse
Franchement , tu aurais pu faire un effort. \n Honestly, you could have made an effort.
advmod:periph(faire, Franchement)
~~~

~~~ sdparse
Apparemment James a déjà vendu sa voiture. \n Apparently James has already sold his car.
advmod:periph(vendu, Apparemment)
~~~ 
