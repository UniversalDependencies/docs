---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Classical Armenian uses combinations of inflectional case forms and [adpositions](xcl-pos/ADP) to express semantic case. In UD, adpositions are treated as dependents of the nominal, to which they are attached. The relation between the nominal and the adposition is labelled `case`.

~~~ sdparse
ի Գաղիղեա \n into Galilee
case(Գաղիղեա, ի)
~~~

Classical Armenian has prepositions, postpositions, and circumpositions. Prepositions can be simplex or multiword expressions. In case of multiword expressions, the subsequent word(s) is linked to the first one by the [fixed]() relation.

~~~ sdparse
ի վերայ նորա \n on him
case(նորա, ի)
fixed(ի, վերայ)
~~~

A complex preposition can be disrupted by a head noun, in which case it turns into a circumposition and its component words are linked to the head nominal by the `case` relation.

~~~ sdparse
յ որոյ վերայ քաղաքն նոցա շինեալ էր \n on which their city had been built
case(որոյ, յ)
case(որոյ, վերայ)
~~~

A special case of complex adpositions are combinations of prepositional construction with demonstrative local adverbs that reinforce the meaning of the construction. When used in this function, local adverbs are tagged [ADP](), linked to the modified nominal by the `case` relation, and function as constituents of circumposition.

~~~ sdparse
էջ ի լեռնէ անտի \n he came down from the mountain
case(լեռնէ, ի)
case(լեռնէ, անտի)
~~~

When a noun phrase contains a modifier, prepositions can be repeated before each of the constituents of the noun phrase (see Meyer 2023). By convention when a noun phrase with an adnominal modifier contains only one preposition, the latter is linked to the head of the noun phrase by the `case` relation. When the preposition is repeated, its instances are linked by the `case` relation to the nominal head and its modifier.

~~~ sdparse
ընդ այն ճանապարհ \n by that way
case(ճանապարհ, ընդ)
det(ճանապարհ, այն)
~~~

~~~ sdparse
ընդ աւուրս ն ընդ այնոսիկ \n in those (in) days
case(աւուրս, ընդ)
case(այնոսիկ, ընդ)
det(աւուրս, այնոսիկ)
det(աւուրս, ն)
~~~


### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.

Meyer, Robin. 2023. Die Präfixaufnahme von _z=_ im Altarmenischen. _Armeniaca. International Journal of Armenian Studies_ 2: 41-58.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:31 CET -->
