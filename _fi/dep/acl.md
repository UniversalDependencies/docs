---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

`acl` stands for finite and non-finite clauses that modify a noun, in
contrast to the [advcl]() relation which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

These modifiers include infinitive and participial modifiers (correspond to infmod and partmod in the original Turku Dependency Treebank). Instead, the third possible type of clausal modifiers of nouns, *relative clause modifier* ([acl:relcl]()), is defined as a subtype of `acl`.


<!-- fname:infmod.pdf -->
~~~ sdparse
Minulla oli lupa mennä ulos . \n I had permission to_go out .
nmod:own(oli-2, Minulla-1)
nsubj(oli-2, lupa-3)
acl(lupa-3, mennä-4)
advmod(mennä-4, ulos-5)
punct(oli-2, .-6)
~~~


The participial modifier is a participle verb which modifies a noun
phrase. Note that the participle can take arguments, for instance a subject,
just as any verb. (Also the MA-derivation is treated as a participle in UD
Finnish.)  

<!-- fname:partmod_NP.pdf -->
~~~ sdparse
Äidin leipoma kakku oli menestys . \n Mother baked_by cake was success .
nsubj(leipoma-2, Äidin-1)
acl(kakku-3, leipoma-2)
nsubj:cop(menestys-5, kakku-3)
cop(menestys-5, oli-4)
punct(menestys-5, .-6)
~~~

<!-- fname:partmod_NP_2.pdf -->
~~~ sdparse
Saadut lahjat ilahduttivat lapsia . \n Received presents made_happy children .
acl(lahjat-2, Saadut-1)
nsubj(ilahduttivat-3, lahjat-2)
dobj(ilahduttivat-3, lapsia-4)
punct(ilahduttivat-3, .-5)
~~~

Occasionally, participial verb forms can modify a verb as well. These uses include cases that are clearly modifiers, as well as some more complement-like situations. In the complement-like situations, one of the clausal complement types ([ccomp](), [xcomp]() or [xcomp:ds]()) should be used, whereas modifiers are marked as *adverbial clause modifiers* ([advcl]()).


<!-- fname:partmod_VP_mod.pdf -->
~~~ sdparse
Huolestuneena juoksin hänen luokseen . \n Worried I_ran him to .
advcl(juoksin-2, Huolestuneena-1)
nmod(juoksin-2, hänen-3)
case(hänen-3, luokseen-4)
punct(juoksin-2, .-5)
~~~

<!-- fname:partmod_VP_comp.pdf -->
~~~ sdparse
Ksylitoli osoittautui kariesta ehkäiseväksi . \n Xylitol turned_out karies preventing .
nsubj(osoittautui-2, Ksylitoli-1)
xcomp(osoittautui-2, ehkäiseväksi-4)
dobj(ehkäiseväksi-4, kariesta-3)
punct(osoittautui-2, .-5)
~~~






## Diffs

### Turku Dependency Treebank

We do not attempt to distinguish modifiers including secondary predication from other type of modifiers. Therefore, optional predicative like modifiers are attached to the main verb with one of the modifier relations.
<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
