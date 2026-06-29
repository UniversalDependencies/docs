---
layout: relation
title: 'expl:pass'
shortdef: 'reflexive pronoun used in reflexive passive'
udver: '2'
---

Reflexive pronouns (see the feature [Reflex]()) are used in various constructions in Slavic, Romance and Germanic languages,
including so-called _reflexive passive,_ which in UD uses the relation subtype `expl:pass`.

For example, in Czech:

~~~ sdparse
To se řekne snadno . \n It is said easily .
expl:pass(řekne, se)
expl:pass(said, is)
nsubj:pass(řekne, To)
nsubj:pass(said, It)
advmod(řekne, snadno)
advmod(said, easily)
punct(řekne, .-5)
punct(said, .-11)
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

<!-- Interlanguage links updated Po 29. června 2026, 17:00:49 CEST -->
