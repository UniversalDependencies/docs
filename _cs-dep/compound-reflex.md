---
layout: relation
title: 'compound:reflex'
shortdef: 'reflexive verb'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) usually replace objects of verbs.
However, some verbs are inherently reflexive, i.e. the verb always occurs with a reflexive
prounoun, and the pronoun cannot be replaced by a non-reflexive pronoun.
With these verbs, the reflexive pronoun is not attached as [dobj]()
but as a special sort of `compound` relation.

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
compound:reflex(bojí, se)
compound:reflex(fears, REFLEX)
~~~
