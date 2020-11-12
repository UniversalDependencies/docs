---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in unnatural and misleading dependency relation (in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Դավիթը սուրճ խմեց , իսկ Մերին ՝ թեյ ։ \n David drank coffee and Mary - tea .
nsubj(խմեց, Դավիթը)
nsubj(drank, David)
obj(խմեց, սուրճ)
obj(drank, coffee)
conj(խմեց, Մերին)
conj(drank, Mary)
orphan(Մերին, թեյ)
orphan(Mary, tea)
cc(Մերին, իսկ)
cc(Mary, and)
~~~

In this example, the subject _Մերին_ “Mary” is promoted to the head position in the second conjunct. Attaching the object _թեյ_ “tea” to the subject is necessary to preserve the integrity of the clause, but using the standard relation [obj]() would be misleading because _թեյ_ “tea” is not the object of _Մերին_ “Mary”. Therefore, the `orphan` relation is used to indicate that this is a non-standard attachment. By contrast, the coordinating conjunction _իսկ_ “and” performs essentially the same function as in the non-elliptical case and therefore retains its normal relation [cc]().
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
