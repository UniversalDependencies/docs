---
layout: relation
title: 'orphan'
shortdef: 'connecting orphaned arguments of elided predicate'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html)
(in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Դավիթը սուրճ խմեց , Մերին ՝ թեյ ։ \n David drank coffee , Mary - tea .
nsubj(խմեց, Դավիթը)
nsubj(drank, David)
obj(խմեց, սուրճ)
obj(drank, coffee)
conj(խմեց, Մերին)
conj(drank, Mary)
orphan(Մերին, թեյ)
orphan(Mary, tea)
~~~

In this example, the subject _Մերին_ is promoted to the head position in the second conjunct. Attaching the object _թեյ_ to the subject is necessary to preserve the integrity of the clause, but using the standard relation [obj]() would be misleading because _թեյ_ is not the object of _Մերին_. Therefore, the `orphan` relation is used to indicate that this is a non-standard attachment.
