---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "cs/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a form of the [auxiliary verb](cs-pos/AUX) _být_ “to be”
used to construct the periphrastic future tense, past tense or conditional.

Exception: Auxiliary verb used to construct the passive
[voice](cs-feat/Voice) is not labeled `aux` but [aux:pass]().

Note that besides `aux` and `aux:pass`, the verb _být_ may also act as a [copula](cop)
and as the main verb.

~~~ sdparse
Přijel jsem včera . \n Arrived I-have yesterday .
aux(Přijel, jsem)
aux(Arrived, I-have)
~~~

~~~ sdparse
Zítra budu přednášet na univerzitě . \n Tomorrow I-will give-a-talk at university .
aux(přednášet, budu)
aux(give-a-talk, I-will)
~~~

~~~ sdparse
Přišel bych dříve , ale ujel mi vlak . \n Come I-would earlier , but missed my train .
aux(Přišel, bych)
aux(Come, I-would)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:13 CET 2020 -->
