---
layout: relation
title:  'cc:preconj'
shortdef : 'preconjunct'
---

The *preconjunct* (`cc:preconj`) dependency relation marks the
first part of those two-part coordinating conjunctions where the
two parts are separated by coordinated elements.

<!-- fname:preconj.pdf -->
~~~ sdparse
sekä talo että piha \n both house and yard
cc:preconj(talo-2, sekä-1)
cc(talo-2, että-3)
conj(talo-2, piha-4)
~~~

Such two-part coordinating conjunctions are:

* _joko ... tai_ "either ... or"
* _milloin ... milloin_ "when ... when"
* _mitä ... sitä_ "the ... the"
* _niin ... kuin_ "as well as"
* _paitsi ... myös_ "not only ... but also"
* _sekä ... että_ "both ... and"
* _sitä ... mitä_ "the ... the"
* _sitä mukaa ... mitä_ "the ... the" (alternative wording)
* _toisaalta ... ja toisaalta_ "on the one hand ... and on the other hand"
* _toisaalta ... mutta toisaalta_ "on the one hand ... but on the other hand"
* _toisaalta ... toisaalta_ "on the one hand ... on the other hand"
* _vuoroin ... vuoroin_ "in turn ... in turn"
* _yhtä lailla ... kuin_ (+kin) "as much ... as also"
