---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "hy/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a form of the [auxiliary verbs](AUX) _եմ_ “be”, and its variants (with separate lemma) _լինեմ (լինել)_ “be repeatedly / habitually” used to construct the periphrastic and the “secondary extended” tenses (in several moods).

Besides `aux`, the verb _եմ_ may also act as a [copula](cop).

Note that in Armenian auxiliary verb _տալ_ used to construct causative constructions is labeled [aux:caus](). We use[aux:ex]()for finite form of existentials _կամ&nbsp;_ “be, exist” and _ունեմ&nbsp;_ “have” in combination with resultative participle.

~~~ sdparse
Երեկ եմ հասել ։ \n Yesterday I-have arrived .
aux(հասել, եմ)
aux(arrived, I-have)
~~~

~~~ sdparse
Կարծում ես նա գնացած կլինի ՞ , երբ տեղ հասնենք ։ \n You-are think he will-have gone , when we-arrive ?
aux(Կարծում, ես)
aux(think, You-are)
aux(գնացած, կլինի)
aux(gone, will-have)
~~~
