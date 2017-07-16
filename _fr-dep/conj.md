---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements. We treat
coordination asymmetrically: The head of the relation is the first
conjunct and other conjuncts depend on it via the `conj` relation.

~~~ sdparse
1500 euros par an et par enfant \n 1500 euros per child and per year
conj(an, enfant)
~~~

~~~ sdparse
Une seconde d' hésitation , d' inattention ou de retard  \n A second of hesitation, carelessness or delay
conj(hésitation, inattention)
conj(hésitation, retard)
~~~

FrenchSpoken does not use the simple `conj` relation. Three different subrelations are used instead: [conj:appos](), [conj:coord]() and [conj:dicto]().

~~~ sdparse
Sa cousine , une grande psychiatre , habite à Charleville-Mézière. \n His cousin, a great psychiatrist, live in Charleville-Mézière.
conj:appos(cousine,psychiatre)
nsubj(habite,cousine)
~~~

~~~ sdparse
Pierre et Patrick aiment rouler en moto. \n Pierre and Patrick like driving a motorcycle.
conj:coord(Pierre,Patrick)
nsubj(aiment,Pierre)
cc(Patrick,et)
~~~

~~~ sdparse
Je vais au chez le coiffeur. \n I'm going at to the hairdresser.
conj:dicto(au,chez)
case(coiffeur.,au)
~~~
