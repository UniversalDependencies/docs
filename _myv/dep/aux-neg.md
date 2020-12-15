---
layout: relation
title: 'aux:neg'
shortdef: 'negative auxiliary'
udver: '2'
---

This is a subtype of [aux](), used for the negative auxiliaries and particles _а, аволь, апак, арась, иля, эзь_.

The negative auxiliary, when attached to a predicate,
typically carries some of the tense/aspect/modality suffixes as well as person/number agreement suffixes.

Although they do not function as an auxiliary when attached to non-predicate words or phrases,
we use `aux:neg` for all forms and uses of the highly suppletive negative auxiliary paradigm and particles.

~~~ sdparse
Виде ли кияк косояк мезтькак а тейни ?.. \n Is it true that nobody _does_ anything anywhere ?..
aux:neg(тейни, а)
~~~

~~~ sdparse
Сон аволь минек велень . \n He is not from _our_ village .
aux:neg(минек, аволь)
~~~

~~~ sdparse
Кудов апак сова кармась учомо патянзо . \n Without _going in_ , he started waiting for her older sister .
aux:neg(сова, апак)
~~~

~~~ sdparse
— Мельсэньгак арасель уш умок . \n He hasn't even been _on my mind_ for a long time .
aux:neg(Мельсэньгак, арасель)
~~~

~~~ sdparse
— Вана сахор теть , иля аварде ансяк ... \n — Here , have some sugar , just don't _cry_ ...
aux:neg(аварде, иля)
~~~

~~~ sdparse
Ансяк маласо вирьганть азгондемс куватьс эзь саво . \n But he didn't _have_ to go far into the woods nearby or look long .
aux:neg(саво, эзь)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:15 CET 2020 -->
