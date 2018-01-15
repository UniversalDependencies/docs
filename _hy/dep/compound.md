---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being `fixed` and `flat`). It is used for:

- any kind of X<sup>0</sup> compounding: noun compounds (e.g., *phone book*), but also verb and
adjective/adverb compounds.

~~~ sdparse
տուն - թանգարան
compound(տուն, թանգարան)
~~~

~~~ sdparse
գեներալ - լեյտենանտ
compound(գեներալ, լեյտենանտ)
~~~

~~~ sdparse
թղթակից անդամ
compound(թղթակից, անդամ)
~~~

~~~ sdparse
երկար - բարակ
compound(երկար, բարակ)
~~~

- for serial verbs (with the subtype `compound:svc`):

~~~ sdparse
եկավ - չեկավ
compound:svc(եկավ, չեկավ)
~~~

~~~ sdparse
ասել - խոսել
compound:svc(ասել, խոսել)
~~~

~~~ sdparse
բռնել բերել
compound:svc(բռնել, բերել)
~~~

~~~ sdparse
Եղած - չեղած , մի հաշիվ է ։
compound:svc(Եղած, չեղած)
csubj(հաշիվ, Եղած)
cop(հաշիվ, է)
det(հաշիվ, մի)
~~~

- for light verbs (with the subtype `compound:lvc`):

~~~ sdparse
բաց անել
compound:lvc(բաց, անել)
~~~

~~~ sdparse
վեր - վեր թռչել
compound:lvc(վեր-1, թռչել)
~~~

~~~ sdparse
թույլ տալ
compound:lvc(թույլ, տալ)
~~~
