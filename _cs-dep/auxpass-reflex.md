---
layout: relation
title: 'auxpass:reflex'
shortdef: 'reflexive pronoun used in reflexive passive'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) are used in various constructions in Czech,
including so-called _reflexive passive._
In PDT, their relation to the verb is labeled `AuxR`.
The corresponding label in Czech UD is called `auxpass:reflex`.

~~~ sdparse
To se řekne snadno . \n It is said easily .
auxpass:reflex(řekne, se)
auxpass:reflex(said, is)
~~~
