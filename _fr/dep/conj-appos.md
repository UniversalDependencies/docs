---
layout: relation
title: 'conj:appos'
shortdef: 'apposed conjunct'
udver: '2'
---

FrenchSpoken uses the `conj:appos` relation instead of `appos` for appositions which respect the prosody of lists. The elements in a `conj:appos` are not bound to a particular sequence, they can be rearranged in a different order. The elements of a `conj:appos` are in the same paradigm (i.e they fulfill the same role in relation to their governor). This choice of relation is meant to emphasize the similarity between some appositions and ordinary coordination.
Contrary to the conjuncts of a [conj:coord]() relation, the conjuncts of a `conj:appos` relation have the same referent.

~~~ sdparse
Sa cousine , une grande psychiatre , habite à Charleville-Mézière. \n His cousin, a great psychiatrist, lives in Charleville-Mézière.
conj:appos(cousine,psychiatre)
nsubj(habite,cousine)
~~~

~~~ sdparse
Bruno , mon oncle , est un grand fan de rugby \n Bruno, my uncle, is a big fan of rugby
conj:appos(Bruno, oncle)
~~~

Not all appositions respect these critierias, for appositions which modify nominal elements but without showing these similarities to coordinations we use the [nmod:appos]() relation instead.
