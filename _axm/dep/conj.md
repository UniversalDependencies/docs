---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _և_/_ev_ (and), _կամ_/_kam_ (or), or a comma or other punctuation.
We treat coordination asymmetrically.
The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Առ գխտոր եւ նռան ծաղիկ \n Aṙ gxtor ew nṙan çaġik \n Take garlic and pomegranate flower
conj(գխտոր, ծաղիկ)
conj(garlic, flower)
~~~

~~~ sdparse
Եւ զդստերսն իրաւունք է ՝ որ ի նահապետութեան տուն կարգեն , որ է թագաւոր կամ բրինձ կամ մարգիզ կամ այսպիսիքն ։ \n Ew zdstersn irawownk’ ē՝ or i nahapetowt’ean town kargen, or ē t’agawor kam brinj kam margiz kam ayspisik’n . \n ARegarding the daughters , the law requires that they be married into noble families , such as those of a King , or a Prince , or a Marquis , or those-of-similar-rank .
conj(թագաւոր, բրինձ)
cc(բրինձ, կամ)
conj(թագաւոր, մարգիզ)
cc(մարգիզ, կամ)
conj(թագաւոր, այսպիսիքն)
cc(այսպիսիքն, կամ)
conj(King, Prince)
cc(Prince, or)
conj(King, Marquis)
cc(Marquis, or)
conj(King, those-of-similar-rank)
cc(those-of-similar-rank, or)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
ինքն․․․ հինգ կամ վեց ճուղ կունենայ , եւ յերկայնութիւնն մէկ թիզ կու լինի եւ ի ցաներուն ի փոս տեղրանք կու բուսնի , եւ տերեւին համն գղթորի համ կու նմանի ։ \n ink’n․․․ hing kam vec’ č̣owġ kownenay , ew yerkaynowt’iwnn mēk t’iz kow lini ew i c’anerown i p’os teġrank’ kow bowsni , ew terewin hamn gġt’ori ham kow nmani \n it possesses five or six shoots, and reaches one span in length and grows in pitted or sparse areas, and the flavor of its leaf is similar to that of garlic .
conj(կունենայ, լինի)
conj(կունենայ, բուսնի)
conj(կունենայ, նմանի)
punct(լինի, ,-1)
punct(նմանի, ,-2)
cc(լինի, եւ-1)
cc(բուսնի, եւ-2)
cc(նմանի, եւ-3)
conj(possesses, reaches)
conj(possesses, grows)
conj(possesses, similar)
punct(reaches, ,-1)
punct(similar, ,-2)
cc(reaches, and-1)
cc(grows, and-2)
cc(similar, and-3)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
<!-- Interlanguage links updated St 6. května 2026, 20:46:09 CEST -->
