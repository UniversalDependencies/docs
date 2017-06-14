---
layout: relation
title: 'conj:appos'
shortdef: 'conjunct apposition'
udver: '2'
---

In FrenchSpoken the `conj:appos` relation is used instead of `appos` for appositions which respect the prosody of lists. The elements in a `conj:appos` are not bound to a particular sequence, they can be rearranged in a different order. This choice of relation is meant to emphasize the similarity between some appositions and ordinary coordination.

Here is an example :

~~~ sdparse
Bruno, mon oncle, est un grand fan de rugby \n Bruno, my uncle, is a big fan of rugby
conj:appos(Bruno, oncle)
~~~


Not all appositions respect these critierias, for appositions which modify nominal elements but without showing these similarities to coordinations we use the [nmod:appos]() relation instead.
