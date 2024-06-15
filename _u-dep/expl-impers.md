---
layout: relation
title: 'expl:impers'
shortdef: 'impersonal expletive'
udver: '2'
---

The relation <code>expl:impers</code> is a sub-class of [expl](), specific for the impersonal use of the reflexive clitic pronoun.
While the default function of a reflexive pronoun is to signal that the subject applies a transitive action to itself (i.e., the
reflexive pronoun is an object coreferential with the subject), the impersonal construction can be used with any verb, transitive
or intransitive. The clitic is formally identical with a reflexive object but it does not fill the object slot in these constructions
and if the verb is transitive, its real object still occurs in the clause and fills the slot. The reflexive clitic is not a subject
either; in fact there is no subject at all, which is the defining property of impersonal constructions. If the verb must express
agreement, it will take a default form (this depends on the language, a typical example would be 3rd person singular).

Impersonal constructions should be distinguished from reflexive passives, in which the reflexive clitic is attached as
[expl:pass](). They are constructed for transitive verbs: The object is promoted to subject, the verb stays in its active form
(although agreement morphemes may have to be adjusted to the new subject), and the object slot is filled by the reflexive pronoun.

[it] _Si prevede che viaggerà._ “He is expected to travel.”

~~~ sdparse
Si prevede che viaggerà . \n REFL expects that will-travel .
expl:impers(prevede, Si)
expl:impers(expects, REFL)
punct(prevede, .-5)
punct(expects, .-11)
ccomp(prevede, viaggerà)
ccomp(expects, will-travel)
mark(viaggerà, che)
mark(will-travel, that)
~~~

In Italian, if there's a clitic in a construction with a modal or an auxiliary verb, than generally it is an impersonal construction.

[it] _Si può procedere a sequestro._ “Seizure can be carried out.”

~~~ sdparse
Si può procedere a sequestro . \n REFL can proceed to seizure .
expl:impers(procedere, Si)
expl:impers(proceed, REFL)
aux(procedere, può)
aux(proceed, can)
punct(procedere, .-6)
punct(proceed, .-13)
obl(procedere, sequestro)
obl(proceed, seizure)
case(sequestro, a)
case(seizure, to)
~~~

In the following Polish example, _wystawę archeologiczną_ “archaeological exhibition” is in the accusative case, hence it is still
the object and not a subject, hence it is a reflexive impersonal construction and not a reflexive passive.

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

Compare the Polish example with Czech where the archaeological exhibition switched to the nominative, it became the subject and thus
we are dealing with the reflexive passive construction instead.

[cs] _Rovněž se připravuje archeologická výstava._ “An archaeological exhibition is also being prepared.”

~~~ sdparse
Rovněž se připravuje archeologická výstava . \n Also REFL prepares archaeological exhibition .
punct(připravuje, .-6)
punct(prepares, .-13)
expl:pass(připravuje, se)
expl:pass(připravuje, REFL)
advmod(připravuje, Rovněž)
advmod(prepares, Also)
nsubj:pass(připravuje, výstava)
nsubj:pass(prepares, exhibition)
amod(výstava, archeologická)
amod(exhibition, archaeological)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:12 CEST -->
