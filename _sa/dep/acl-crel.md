---
layout: relation
title: 'acl:crel'
shortdef: 'correlative clausal modifier'
udver: '2'
---

`acl:crel` is used for correlative constructions with “a subtype of adjoined relative clauses: specifically those that are left-adjoined and have a nominal phrase in the adjoined clause that is co-referent with a nominal phrase in the main clause” (R. Hendery, Relative clauses in time and space, Amsterdam 2012, p. 18).

Whatever mortal sharpens his (wits to) over(trump us), at night, the rogue shall not be master of us! (RV 1.36.16cd)
~~~ sdparse
yás mártyas śíśīte áti aktúbhis mā́ nas sá ripús īśata \n which human sharpens beyond at-night[s] not us that rogue be-master-of

det(mártyas, yás)
det(ripús, sá)
nsubj(īśata, ripús)
nsubj(śíśīte, mártyas)
xcomp(śíśīte, áti)
obl:temp(śíśīte, aktúbhis)
advmod(īśata, mā́)
obj(īśata, nas)
acl:crel(ripús, śíśīte)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:13 CET -->
