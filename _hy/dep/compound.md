---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being [fixed]() and [flat]()). It is used for:

- any kind of X<sup>0</sup> compounding: bare noun compounds (e.g., *phone book*), but also verb and
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

~~~ sdparse
Եղած - չեղած , մի հաշիվ է ։ \n Existing - not-existing , is the same .
compound:svc(Եղած, չեղած)
csubj(հաշիվ, Եղած)
cop(հաշիվ, է)
det(հաշիվ, մի)
compound:svc(Existing, not-existing)
csubj(same, Existing)
cop(same, is)
det(same, the)
~~~

~~~ sdparse
եկավ - չեկավ \n he-came - did-not-come
compound:svc(եկավ, չեկավ)
compound:svc(he-came, did-not-come)
~~~

- for serial verbs (with the subtype [compound:svc]()) and for light verbs (with the subtype `compound:lvc`):

~~~ sdparse
բաց անել \n open to-do
compound:lvc(բաց, անել)
compound:lvc(open, to-do)
~~~

~~~ sdparse
վեր - վեր թռչել \n high - high to-jump
compound:lvc(վեր-1, թռչել)
compound:lvc(high-6, to-jump)
~~~

~~~ sdparse
թույլ տալ \n permission to-give
compound:lvc(թույլ, տալ)
compound:lvc(permission, to-give)
~~~
