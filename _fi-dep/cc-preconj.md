---
layout: entry
title:  'cc:preconj'
shortdef : 'preconjunction'
---

*Preconjunction* (`cc:preconj`) marks the first part of those two-part
coordinating conjunctions where the two parts are separated by
coordinated elements.

<!-- fname:preconj.pdf -->
~~~ sdparse
sekä talo että piha \n both house and yard
cc:preconj(talo-2, sekä-1)
cc(talo-2, että-3)
conj(talo-2, piha-4)
~~~

Such two-part coordinating conjunctions in TDT are:

+ joko... tai (either... or)
+ milloin... milloin (when... when)
+ mitä... sitä (the... the)
+ niin... kuin (as well as)
+ paitsi... myös (not only... but also)
+ sekä... että (both... and)
+ sitä... mitä (the... the)
+ sitä mukaa... mitä (a version of *the... the*)
+ toisaalta... ja toisaalta (on the one hand... and on the other hand)
+ toisaalta... mutta toisaalta (on the one hand... but on the other hand)
+ toisaalta... toisaalta (on the one hand... on the other hand)
+ vuoroin... vuoroin (in turn... in turn)
+ yhtä lailla... kuin (+kin) (as much... as also)
