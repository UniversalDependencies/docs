---
layout: relation
title: 'compound:reflex'
shortdef: 'reflexive verb'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) usually replace objects of verbs.
However, some verbs are obligatorily reflexive, i.e. the verb always occurs with a reflexive
prounoun. With these verbs, the reflexive pronoun is not attached as [dobj]()
but as a special sort of `compound` relation.

~~~ sdparse
Martin se bojí zvířat .
compound:reflex(bojí, se)
~~~
