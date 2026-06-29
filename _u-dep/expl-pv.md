---
layout: relation
title: 'expl:pv'
shortdef: 'reflexive clitic with an inherently reflexive verb'
udver: '2'
---

Reflexive pronouns (see the feature [Reflex]()) usually replace objects of verbs.
However, some verbs are inherently reflexive (also called pronominal verbs in some grammatical traditions),
i.e. the verb always occurs with a reflexive prounoun, and the pronoun cannot be replaced
by a non-reflexive pronoun.

With these verbs, the reflexive pronoun is attached as `expl:pv` instead of [obj]().

For example, in Czech:

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl:pv(bojí, se)
expl:pv(fears, REFLEX)
nsubj(bojí, Martin-1)
nsubj(fears, Martin-7)
obl:arg(bojí, zvířat)
obl:arg(fears, animals)
punct(bojí, .-5)
punct(fears, .-11)
~~~

<!-- Interlanguage links updated Po 29. června 2026, 17:00:50 CEST -->
