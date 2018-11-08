---
layout: relation
title: 'appos:conj'
shortdef: 'apposed conjunct'
udver: '2'
---

Only **UD_French-Spoken** uses the `appos:conj` relation instead of `appos` for appositions which respect the prosody of lists.
The elements in a `appos:conj` are not bound to a particular sequence, they can be rearranged in a different order.
The elements of a `appos:conj` are in the same paradigm (i.e they fulfill the same role in relation to their governor).
his choice of relation is meant to emphasize the similarity between some appositions and ordinary coordination.
Contrary to the conjuncts of a [conj:coord]() relation, the conjuncts of a `appos:conj` relation have the same referent.

~~~ sdparse
Sa cousine , une grande psychiatre , habite à Charleville-Mézière. \n His cousin, a great psychiatrist, lives in Charleville-Mézière.
appos:conj(cousine,psychiatre)
nsubj(habite,cousine)
~~~

~~~ sdparse
Bruno , mon oncle , est un grand fan de rugby \n Bruno, my uncle, is a big fan of rugby
appos:conj(Bruno, oncle)
~~~

Not all appositions respect these critierias, for appositions which modify nominal elements but without showing these similarities to coordinations we use the [appos:nmod]() relation instead.
