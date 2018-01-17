---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being [fixed]() and [flat]()). It is used for:

- any kind of X<sup>0</sup> compounding: bare noun compounds (e.g., *phone book*), but also
adjective/adverb compounds.

~~~ sdparse
տուն - թանգարան \n house - museum
compound(տուն, թանգարան)
compound(house, museum)
~~~

~~~ sdparse
գեներալ - լեյտենանտ \n general - lieutenant
compound(գեներալ, լեյտենանտ)
compound(general, lieutenant)
~~~

~~~ sdparse
թղթակից անդամ \n associate member
compound(թղթակից, անդամ)
compound(associate, member)
~~~

~~~ sdparse
երկար - բարակ \n long - thin
compound(երկար, բարակ)
compound(long, thin)
~~~

Note, that we use `compound` relation for a range of reduplicated forms in Armenian. They can have additional feature of [Echo]().

~~~ sdparse
Եղած - չեղած , մի հաշիվ է ։ \n Existing - not-existing , is the same .
compound(Եղած, չեղած)
csubj(հաշիվ, Եղած)
cop(հաշիվ, է)
det(հաշիվ, մի)
compound(Existing, not-existing)
csubj(same, Existing)
cop(same, is)
det(same, the)
~~~

~~~ sdparse
Ինչ եկավ - չեկավ, սկսեցին վիճել ։ \n He-came or didn't-come , they started quarreling .
compound(եկավ, չեկավ)
compound(He-came, didn't-come)
~~~

~~~ sdparse
Եղբայրները մեջք մեջքի կանգնած էին ։ \n The-brothers was standing back to-back .
compound(մեջք, մեջքի)
compound(back, to-back)
~~~

~~~ sdparse
Գիրքը ձեռքից ձեռք էր անցնում ։ \n The-books passed from-hand to-hand .
compound(ձեռքից, ձեռք)
compound(from-hand, to-hand)
~~~

`compound` in Armenian is used for serial verbs (with the subtype [compound:svc]()) and for light verbs (with the subtype [compound:lvc]()).
