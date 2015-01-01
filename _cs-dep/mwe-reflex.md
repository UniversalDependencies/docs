---
layout: relation
title: 'mwe:reflex'
shortdef: 'reflexive verb'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) usually replace objects of verbs.
However, some verbs are obligatorily reflexive, i.e. the verb always occurs with a reflexive
prounoun. With these verbs, the reflexive pronoun is not attached as [dobj]()
but as a special sort of `mwe` relation.

~~~ sdparse
Martin se bojí zvířat .
mwe:reflex(bojí, se)
~~~
