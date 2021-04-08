---
layout: relation
title: 'oblique'
shortdef: 'oblique'
udver: '2'
---


The obl relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. 
This is similar to an adverbial attaching to a verb, adjective or other adverb.

The obl relation can be further specified by the case. If the oblique argument is part of a prepositional phrase, then the preposition is attached as 'case'.

If the noun is inflected as part of a pronominal preposition, then use the label [obl:prep](https://universaldependencies.org/ga/dep/obl-prep.html). If the oblique argument indicates temporality, we use the label [obl:tmod](https://universaldependencies.org/ga/dep/obl-tmod.html).

### Examples

#### Temporal:

_Foilsíodh an chéad chuid den sraith cartún sa <b>bhliain</b> 1983_  "The first part of the cartoon series was published in the <b>year</b> 1983"

~~~ sdparse
Foilsíodh an chéad chuid den sraith cartún sa bhliain 1983
obl:tmod(Foilsíodh, bhliain)
case(bhliain, sa)
~~~


#### Arguments of Adjectives:

_liosta na dtríú tíortha a mbeidh a náisiúnaigh saor ón <b>gceanglas</b> sin_  "a list of the three countries whose nationals will be free from that <b>requirement</b>"

~~~ sdparse
liosta na dtríú tíortha a mbeidh a náisiúnaigh saor ón gceanglas sin
obl(saor, gceanglas)
case(gceanglas, ón)
~~~ 

_Níor chonaic sé na haghaidheanna smeartha le <b>snas</b> roimhe_  "He didn't see the faces smeared with <b>polish</b> before"

~~~ sdparse
Níor chonaic sé na haghaidheanna smeartha le snas roimhe
obl(smeartha, snas)
case(snas, le)
~~~ 

#### Dative (verbal) arguments:

_Má bhreathnaítear ar <b>Ghaillimh</b>_  "If we look at <b>Galway</b>" (If Galway is looked at)

~~~ sdparse
Má bhreathnaítear ar Ghaillimh
obl(bhreathnaítear, Ghaillimh)
case(Ghaillimh, ar)
~~~ 

_Sagairt a bhí ag saothrú ar na <b>misin</b> ann a bhformhór_ "The majority working on the missions there were priests"

~~~ sdparse
Sagairt a bhí ag saothrú ar na misin ann a bhformhór
obl(saothrú, misin)
case(misin, ar)
~~~ 

<!-- Interlanguage links updated Čt lis 12 09:43:35 CET 2020 -->
