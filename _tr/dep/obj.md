---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity
acted upon.

In Turkish, direct objects typically take
either nominative (unmarked), or accusative [cases](tr-feat/Case).
An object can also be in ablative case if only part of it is 
affected by the predeicate (see below for an example).
We do not mark arguments of verbs in other cases with ``obj``,
the [obl]() relation is used for any "non-core" arguments and adjuncts.

~~~ sdparse
Hafta sonları kitap okurum . \n I read (books) during weekends
obj(okurum, kitap)
~~~

~~~ sdparse
Kitabı okudum . \n I read the book.
obj(okudum, Kitabı)
~~~

~~~ sdparse
pastadan yedim \n I ate (some of) the cake
obj(yedim, pastadan)
~~~
Note that the above differs from, e.g.,
_tabaktan yedim_ "I ate from the plate",
where relation should be [obl]().

We also mark the non-case marked or accusative noun phrases as ``obj``
even if they are not the entities that are acted upon.

~~~ sdparse
Dün 10 kilometre koştum . \n I ran 10 kilometers yesterday
obj(koştum, kilometre)
~~~

~~~ sdparse
Dün 10 kilometreyi 35 dakikada koştum . \n  Yesterday, I ran 10 kilometers in 35 minutes
obj(koştum, kilometreyi)
~~~
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
