---
layout: relation
title: 'case'
shortdef: 'case marking'
---

The case relation is used for most prepositions in Irish. Prepositions are treated as dependents of the noun they attach to or introduce in an “extended nominal projection”. Thus, contrary to SD, UD abandons treating a preposition as a mediator between a modified word and its object. The case relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages.

See [nmod:pred]() for labelling of prepositional pronouns, and [xcomp:pred]() for prepositional predicates.


Prepositions have many functions in Irish.

Regular prepositional phrases can precede or follow a verb. 

(i) <b>Sa</b> bhliain sin, bhuaigh siad an Chorn `In that year, they won the Cup'

(ii) Bhuaigh siad an Chorn <b>sa</b> bhliain sin `They won the Cup in that year'


#### progressive aspectuals

The preposition _ag_ is used with verbal nouns to form progressive aspectual phrases in Irish.

~~~ sdparse
Tá sí ag rith \n She is running
nmod(Tá, rith)
nsubj(Tá, sí)
case(rith, ag)
~~~

#### ownership/ state

Prepositions are also used in phrasal constructions to denote ownership or a state of being.
_Tá airgead ag na daoine_ `The people have money' (lit. Money is at the people)

~~~ sdparse
Tá peann ag an bhfear \n The man has a pen
nmod(Tá, bhfear)
case(bhfear, ag)
~~~

_Tá brón ar an gcuairteoir_  `The visitor is sorry' (lit. sorry is on the visitor)
~~~ sdparse
Tá brón ar an gcuairteoir \n The visitor is sorry
nmod(Tá, gcuairteoir)
case(gcuairteoir, ar)
~~~


####obliques

Oblique arguments are also labelled `case'.

~~~ sdparse
Tá muintir Chorcaí an-mhíshásta le Fianna_Fáil \n The people of Cork are very unhappy with Fianna_Fáil
nmod(Tá, Fianna_Fáil)
case(Fianna_Fáil, le)
~~~




