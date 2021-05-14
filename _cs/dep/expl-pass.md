---
layout: relation
title: 'expl:pass'
shortdef: 'reflexive pronoun used in reflexive passive'
udver: '2'
---

Reflexive pronouns (see the feature [cs-feat/Reflex]()) are used in various constructions in Czech,
including so-called _reflexive passive._
In PDT, their relation to the verb is labeled `AuxR`.
The corresponding label in Czech UD is called `expl:pass`
(since UD 2.0; in previous versions it was labeled `auxpass:reflex`).

~~~ sdparse
To se řekne snadno . \n It is said easily .
expl:pass(řekne, se)
expl:pass(said, is)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:04 CEST 2021 -->
