---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The case relation is used for most prepositions in Irish. Prepositions are treated as dependents of the noun they introduce in an “extended nominal projection”. Thus, contrary to SD, UD abandons treating a preposition as a mediator between a modified word and its object. The case relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages.

See [obl:prep]() for labelling of prepositional pronouns, and [xcomp:pred]() for prepositional predicates.


Prepositions have many functions in Irish.

### Examples

#### Adjuncts 

PPs can precede or follow the verb they modify, or follow the noun they modify. 

(i) _<b>Sa</b> bhliain sin, bhuaigh siad an Chorn_ `In that year, they won the Cup'

(ii) _Bhuaigh siad an Chorn <b>sa</b> bhliain sin_ `They won the Cup <b>in</b> that year'

(iii) _An teach sa chathair_ `The house in the city'


#### Progressive Aspectuals

The preposition _ag_ is used with verbal nouns to form progressive aspectual phrases in Irish.

_Tá sí <b>ag</b> rith_ 'She is <b>(at)</b> running'

~~~ sdparse
Tá sí ag rith \n Is she at running
case(rith, ag)
~~~

#### Ownership/State

Prepositions are also used in phrasal constructions to denote ownership or a state of being.

_Tá airgead <b>ag</b> na daoine_ 'The people have money' (lit. Money is <b>at</b> the people)

~~~ sdparse
Tá airgead ag na daoine \n Is money at the people
case(daoine, ag)
~~~

_Tá brón <b>ar</b> an gcuairteoir_  `The visitor is sorry' (lit. sorrow is <b>on</b> the visitor)

~~~ sdparse
Tá brón ar an gcuairteoir \n Is sorrow on the visitor
case(gcuairteoir, ar)
~~~


#### Obliques

Oblique arguments are also introduced by case markers and are therefore labelled `case`.

_Tá muintir Chorcaí an-mhíshásta <b>le</b> <b>Fianna Fáil</b>_ 'The people of Cork are very unhappy <b>with</b> Fianna Fáil'

~~~ sdparse
Tá muintir Chorcaí an-mhíshásta le Fianna Fáil \n Be people Cork very-unhappy with Fianna Fáil
obl(Tá, Fianna)
case(Fianna, le)
~~~

_Tá port amháin á chanadh <b>ag</b> an <b>Uachtarán</b> Chirac ó ceapadh é._ 'President Chirac has been singing the same old song since he was appointed'
~~~ sdparse
Tá port amháin á chanadh ag an Uachtarán Chirac ó ceapadh é \n Is tune one being to_sing by the President Chirac from was-appointed he.
obl(chanadh, Uachtarán)
case(Uachtarán, ag)
~~~

<!-- Interlanguage links updated Út zář 29 18:41:10 CEST 2020 -->
