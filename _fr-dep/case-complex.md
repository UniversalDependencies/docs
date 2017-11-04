---
layout: relation
title: 'case:complex'
shortdef: 'complex case marker'
udver: '2'
---

In the FrechSpoken corpus, the `case:complex` relation is used to analyze complex prepositions. In some corpora of the French treebank these prepositions are analyzed with a [fixed]() relation. 
However FrenchSpoken does not consider them as fixed but intead as regular constructions since like complex determiners (see the [det:complex]() relation), complex prepositions can be coordinated. 
Moreover in complex prepositions containing a _de_, the contraction of the _de_ remains possible:
_contrairement à toi et à ta mère_, _à côté du garage et de la maison_ etc.

~~~ sdparse
Elle a trouvé du travail grâce à cette agence d'intérim. \n She found a job thanks to this temporary employment agency.
case:complex(agence,grâce)
case(agence,à)
det(agence,cette)
~~~~

~~~ sdparse
La tortue est à côté de son arbre favori. \n The tortoise is next to its favorite tree.
case:complex(arbre,côté)
case(arbre,de)
det(arbre,son)
case(côté,à)
~~~

~~~ sdparse
Contrairement à toi et à ton frère , Patrick a fait des efforts pour être plus poli. \n Contrary to you and your brother, Patrick made some efforts to be more polite.
case:complex(toi,Contrairement)
case(toi-3,à-2)
case(frère-7,à-5)
conj:coord(toi,frère)
~~~
