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
Եվ ինքն․․․ հինգ կամ վեց  ճուղ կունենայ , եւ յերկայնութիւնն մէկ թիզ կու լինի եւ ի ցաներուն ի փոս  տեղրանք կու բուսնի , եւ տերեւին համն գղթորի համ կու նմանի ։ \n Ev ink’n․․․ hing kam vec’  č̣owġ kownenay , ew yerkaynowt’iwnn mēk t’iz kow lini ew i c’anerown i p’os  teġrank’ kow bowsni , ew terewin hamn gġt’ori ham kow nmani \n He came home , showered himself and immediately went to-bed . \n And it possesses five or six shoots; it reaches one span in length and grows in pitted, sparse areas; the flavor of its leaf is similar to that of garlic
conj(կունենայ, լինի)
conj(կունենայ, բուսնի)
conj(կունենայ, նմանի)
punct(լինի, ,-1)
punct(նմանի, ,-2)
cc(լինի, եւ-1)
cc(նմանի, եւ-2)

cc(went, and)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.

~~~ sdparse
Եկա , տեսա , հաղթեցի ։ \n Veni , vidi , vici .
conj(Եկա, տեսա)
conj(Եկա, հաղթեցի)
punct(տեսա, ,-2)
punct(հաղթեցի, ,-4)
conj(Veni, vidi)
conj(Veni, vici)
punct(vidi, ,-9)
punct(vici, ,-11)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
Note that the present conversion procedure loses some annotations of shared modifiers and nested
coordination.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:35 CET -->
