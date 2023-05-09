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
<!-- Interlanguage links updated Út 9. května 2023, 20:04:30 CEST -->
