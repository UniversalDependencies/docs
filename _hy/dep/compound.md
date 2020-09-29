---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being [fixed]() and [flat]()). It is used:

- for any kind of X<sup>0</sup> compounding: bare noun compounds (e.g., *phone book*), but also
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

- for fraction and some range [numbers](NumType) in contrast with [flat](). The leftmost numeral is the head, the other numerals are attached as its modifiers:

~~~ sdparse
երեք քառորդ բաժին հաց \n three quarters pieces of-bread
nmod(հաց, բաժին)
nmod(of-bread, pieces)
nummod(բաժին, երեք)
nummod(pieces, three)
compound(երեք, քառորդ)
compound(three, quarters)
~~~

~~~ sdparse
չորս-հինգ/NUM[NumForm=Word|NumType=Range] ժամ/NOUN \n four-five hours
nummod(ժամ, չորս-հինգ)
nummod(hours, four-five)
~~~

~~~ sdparse
տասից/NOUN[Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing|NumForm=Word] տասնհինգ/NOUN[Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing|NumForm=Word] ժամ/NOUN \n from-ten to-fifteen hours
compound(տասից, տասնհինգ)
compound(from-ten, to-fifteen)
nummod(ժամ, տասից)
nummod(hours, from-ten)
~~~

`compound` in Armenian is used also for serial verbs (with the subtype [compound:svc]()), for light verbs (with the subtype [compound:lvc]()) and for a range of reduplicated forms (with the subtype [compound:redup]()).
<!-- Interlanguage links updated Út zář 29 20:43:12 CEST 2020 -->
