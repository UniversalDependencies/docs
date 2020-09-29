---
layout: relation
title: 'expl:pv'
shortdef: 'reflexive clitic with an inherently reflexive verb'
udver: '2'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) usually replace objects of verbs.
However, some verbs are inherently reflexive, i.e. the verb always occurs with a reflexive
prounoun, and the pronoun cannot be replaced by a non-reflexive pronoun.

With these verbs, the reflexive pronoun is attached as `expl:pv` instead of [obj]().
(Note that the `expl` relation is first used for this purpose in the UD release 1.2,
and it is further subtyped as `expl:pv` since UD 2.0,
to increase parallelism with other languages. In the previous releases this usage of
reflexive _se/si_ was labeled `compound:reflex`.)

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl:pv(bojí, se)
expl:pv(fears, REFLEX)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:21 CEST 2020 -->
