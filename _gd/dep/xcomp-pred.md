---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
udver: '2'
---

We follow Irish and subtype the label `xcomp` as a UD Irish as `xcomp:pred` to mark predicates of the substantive verb _bi_ (to be), which can have predicate arguments in the form of adverbial, adjectival and prepositional phrases and for cases where a secondary predicate occurs.

### Examples

_Tha m' amhaich goirt 's tha mi a' call mo ghuth_ "My throat is sore and I am losing my voice" (c02\_002b)

~~~ sdparse
Tha m' amhaich goirt 's tha mi a' call mo ghuth \n is my throat sore and am I ASP losing my voice
xcomp:pred(Tha, goirt)
xcomp:pred(tha, call)
~~~
<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
