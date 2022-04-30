---
layout: relation
title: 'aux:neg'
shortdef: 'negative auxiliary'
udver: '2'
---

This is a subtype of [aux](), used for the negative auxiliaries and particles _оз, абу, не, ни_.

The negative auxiliary, when attached to a predicate,
typically carries some of the tense/aspect/modality suffixes as well as person/number agreement suffixes.

Although they do not function as an auxiliary when attached to non-predicate words or phrases,
we use `aux:neg` for all forms and uses of the negative auxiliary paradigm and particles.

~~~ sdparse
Гымалігад пу улын сулавны оз позь . \n – When there is thunder , you _should_ not stand under a tree .
aux:neg(позь, оз)
~~~

~~~ sdparse
Тані ме абу ӧтнам . \n I am not here _alone_ .
aux:neg(ӧтнам, абу)
~~~

~~~ sdparse
Но гӧгӧр сулалысь ылі вӧръяс абу на вежсьӧмаӧсь . \n But the surrounding distant forests have not _changed_ yet .
aux:neg(Висьтавны, абу)
~~~

~~~ sdparse
Енэжын ни ӧти кымӧртор эз тыдав . \n Not a single small cloud could be seen in the sky.
obl:lmod(тыдав-6, Енэжын-1)
aux:neg(ӧти-3, ни-2)
nummod(кымӧртор-4, ӧти-3)
nsubj(тыдав-6, кымӧртор-4)
aux:neg(тыдав-6, эз-5)
punct(тыдав-6, .-7)
~~~


<!-- Interlanguage links updated St lis 3 20:58:41 CET 2021 -->
