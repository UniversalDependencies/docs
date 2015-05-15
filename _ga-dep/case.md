---
layout: relation
title: 'case'
shortdef: 'case marking'
---

The case relation is used for most prepositions in Irish. Prepositions are treated as dependents of the noun they introduce in an “extended nominal projection”. Thus, contrary to SD, UD abandons treating a preposition as a mediator between a modified word and its object. The case relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages.

See [nmod:pred]() for labelling of prepositional pronouns, and [xcomp:pred]() for prepositional predicates.


Prepositions have many functions in Irish.

### Examples

#### adjuncts 

PPs can precede or follow the verb they modify, or follow the noun they modify. 

(i) _<b>Sa</b> bhliain sin, bhuaigh siad an Chorn_ `In that year, they won the Cup'

(ii) _Bhuaigh siad an Chorn <b>sa</b> bhliain sin_ `They won the Cup <b>in</b> that year'

(iii) _An teach sa chathair_ `The house in the city'

#### progressive aspectuals

The preposition _ag_ is used with verbal nouns to form progressive aspectual phrases in Irish.

_Tá sí <b>ag</b> rith_ 'She is running'

~~~ sdparse
Tá sí ag rith \n Is she at running
nmod(Tá, rith)
nsubj(Tá, sí)
case(rith, ag)
~~~

#### ownership/ state

Prepositions are also used in phrasal constructions to denote ownership or a state of being.

_Tá airgead <b>ag</b> na daoine_ 'The people have money' (lit. Money is <b>at</b> the people)

~~~ sdparse
Tá airgead ag na daoine \n Is pen at the people
nmod(Tá, daoine)
case(daoine, ag)
~~~

_Tá brón <b>ar</b> an gcuairteoir_  `The visitor is sorry' (lit. sorrow is <b>on</b> the visitor)

~~~ sdparse
Tá brón ar an gcuairteoir \n Is sorrow on the visitor
nmod(Tá, gcuairteoir)
case(gcuairteoir, ar)
~~~


#### obliques

Oblique arguments are also labelled `case`.

_Tá muintir Chorcaí an-mhíshásta <b>le</b> Fianna Fáil_ 'The people of Cork are very unhappy with Fianna Fáil'

~~~ sdparse
Tá muintir Chorcaí an-mhíshásta le Fianna_Fáil \n Be people Cork very_unhappy with Fianna_Fáil
nsubj(Tá, muintir)
compound(muintir, Chorcaí)
xcomp:pred(Tá, an-mhíshásta)
nmod(Tá, Fianna_Fáil)
case(Fianna_Fáil, le)
~~~




