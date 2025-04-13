---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The `orphan` relation is used in cases of head ellipsis where simple promotion would result in an unnatural and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments has to be promoted to clausal head (a subject, object, or adjunct).
~~~ sdparse
No , H. ni prevzel od Anglosasov ničesar , pač pa Anglosasi nekaj od H. \n Well , H. did-not take from Anglo-Saxons anything , but CONJ Anglo-Saxons something from H.
conj(prevzel,Anglosasi)
cc(Anglosasi,pač)
orphan(Anglosasi,nekaj)
orphan(Anglosasi,H.-15)
conj(take,Anglo-Saxons-28)
cc(Anglo-Saxons-28,but)
orphan(Anglo-Saxons-28,something)
orphan(Anglo-Saxons-28,H.-31)
~~~

If there was no ellipsis in the second clause of the above example (*pač pa so Anglosasi nekaj prevzeli od H.*), *nekaj* would be marked as the direct object (`obj`) and *od H.* as an oblique argument of the predicate (`obl`). Since it would be misleading to mark these elements as dependents of the promoted head *Anglosasi* via the `obj` and `obl` relations, it is instead better to mark them with the `orphan` relation.

The `orphan` relation is currently also used for the unfinished words or phrases at the end of an unfinished clause which are not followed by a direct [repair](https://universaldependencies.org/sl/dep/reparandum).

~~~ sdparse
ja to pa bova z- \n yes this PART we-will speci-
discourse(bova,ja)
obj(bova,to)
advmod(bova,pa)
orphan(bova,z-)
discourse(we-will,yes)
obj(we-will,this)
advmod(we-will,PART)
orphan(we-will,speci-)
~~~

~~~ sdparse
gre za gre za postopek \n it-is about it-is about procedure
reparandum(gre-3,gre-1)
orphan(gre-1,za-2)
obl(gre-3,postopek)
case(postopek,za-4)
reparandum(it-is-9,it-is-7)
orphan(it-is-7,about-8)
obl(it-is-9,procedure)
case(procedure,about-10)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:23 CET -->
