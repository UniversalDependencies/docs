---
layout: relation
title: 'expl'
shortdef: 'expletive: reflexive pronoun with an inherently reflexive verb'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) usually replace objects of verbs.
However, some verbs are inherently reflexive, i.e. the verb always occurs with a reflexive
prounoun, and the pronoun cannot be replaced by a non-reflexive pronoun.

With these verbs, the reflexive pronoun is attached as `expl` instead of [dobj]().
(Note that the `expl` relation is first used for this purpose in the UD release 1.2,
to increase parallelism with other languages. In the previous releases this usage of
reflexive _se/si_ was labeled `compound:reflex`.)

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl(bojí, se)
expl(fears, REFLEX)
~~~
