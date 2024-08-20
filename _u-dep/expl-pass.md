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

In the following Czech example, _archeologická výstava_ “archaeological exhibition” has switched to the nominative,
it became the subject and thus we are dealing with the reflexive passive and not with an impersonal construction
([expl:impers]()).

[cs] _Rovněž se připravuje archeologická výstava._ “An archaeological exhibition is also being prepared.”

~~~ sdparse
Rovněž se připravuje archeologická výstava . \n Also REFL prepares archaeological exhibition .
punct(připravuje, .-6)
punct(prepares, .-13)
expl:pass(připravuje, se)
expl:pass(prepares, REFL)
advmod(připravuje, Rovněž)
advmod(prepares, Also)
nsubj:pass(připravuje, výstava)
nsubj:pass(prepares, exhibition)
amod(výstava, archeologická)
amod(exhibition, archaeological)
~~~

Compare the Czech example with Polish where _wystawę archeologiczną_ “archaeological exhibition” is in the accusative case,
hence it is still the object and not a subject, hence it is a reflexive impersonal construction and not a reflexive passive.

[pl] _Przygotowuje się również wystawę archeologiczną._ “An archaeological exhibition is also being prepared.”

~~~ sdparse
Przygotowuje się również wystawę archeologiczną . \n Prepares REFL also exhibition archaeological .
punct(Przygotowuje, .-6)
punct(Prepares, .-13)
expl:impers(Przygotowuje, się)
expl:impers(Prepares, REFL)
advmod(Przygotowuje, również)
advmod(Prepares, also)
obj(Przygotowuje, wystawę)
obj(Prepares, exhibition)
amod(wystawę, archeologiczną)
amod(exhibition, archaeological)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:12 CEST -->
