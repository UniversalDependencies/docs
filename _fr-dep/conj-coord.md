---
layout: relation
title: 'conj:coord'
shortdef: 'coordinated conjunct'
udver: '2'
---

The `conj:coord` relation is used between conjuncts that are coordinated. Coordinating conjunctions such as _et_ (_and_) or _ou_ (_or_) may connect the conjuncts, but they are not necessary. 
Conjunctions are treated asymetrically with the first conjunct as the head, and all the other conjuncts as dependants of this element.
Contrary to the conjuncts of a `conj:appos` relation, the conjuncts of a `conj:coord` relation do not have the same referent.

~~~ sdparse
J'ai acheté des tomates, des courgettes et des aubergines pour faire une ratatouille. \n I bought tomatoes, zucchinis and eggplants to cook a ratatouille.
obj(tomates)
conj:coord(tomates,courgettes)
conj:coord(tomates,aubergines)
cc(aubergines,et)
~~~

~~~ sdparse
Ni sa mère , ni son père ont répondu à ses appels. \n Neither his mother nor his dad answered his phonecalls.
cc(mère,ni)
conj:coord(mère,père)
cc(père,ni)
nsubj(répondu,mère)
