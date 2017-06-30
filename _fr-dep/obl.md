---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

In UDv2, the `obl` relation is used for a nominal dependent of a verb. However, this dependent is neither a subject (for which we use the [nsubj]() relation) nor a direct object (for which we use the [obj]() relation).

~~~ sdparse
Sara donne une fleur à Tom . \n Sara gives a flower to Tom.
obl(donne, Tom)
case(Tom, à)
~~~

In FrenchSpoken, we use the [obl:mod]() relation when the dependent is a modifier of the verb and the [obl:comp]() relation when the dependent is a core argument of the verb. We also use the [obl:periph]() relation for some of the non-core nominal dependents of the verb.

Here are a few examples :

~~~ sdparse
Habituellement, Pierre mange une pomme à dix heures piles. \n Usually, Pierre eats an apple at ten o'clock.
obl:mod(mange, heures)
case(heures, à)
~~~

~~~ sdparse
Max habite à Paris . \n Max lives in Paris.
obl:comp(habite, Paris)
case(Paris, à)
~~~

~~~ sdparse
Selon ma voisine , le gardien vole parfois des colis. \n According to my neighbour, the caretaker sometimes steals packages.
obl:periph(vole, voisine)
case(voisine, Selon)
~~~


