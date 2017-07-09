---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.

In Turkish, direct objects take either nominative (unmarked), or accusative [cases](tr-feat/Case).
We do not mark arguments of verbs in other cases with `dobj`.
(**NOTE:** Kyrgiz treebank marks ablatives as in _pastadan aldı_ 'he took from the cake'. We may consider doing the same. At least we should try to unify the analyses.)
Note also that we mark objects of intransitive causative verbs using [dobj:cau](dobj-cau).

~~~ sdparse
Hafta sonları kitap okurum . \n I read (books) during weekends
dobj(okurum, kitap)
~~~

~~~ sdparse
Kitabı okudum . \n I read the book.
dobj(okudum, Kitabı)
~~~

We also mark the non-case marked or accusative noun phrases as `dobj` even if they are not the entities that are acted upon.

~~~ sdparse
Dün 10 kilometre koştum . \n I ran 10 kilometers yesterday
dobj(koştum, kilometre)
~~~

~~~ sdparse
Dün 10 kilometreyi 35 dakikada koştum . \n  Yesterday, I ran 10 kilometers in 35 minutes
dobj(koştum, kilometreyi)
~~~
