---
layout: base
title:  'partmod'
shortdef : 'participal modifier'
---

## `{{ page.title }}`: {{ page.shortdef }}

The *participal modifier* (`partmod`) most commonly modifies a noun phrase. Note that the participle (Also the MA-derivation is treated as a participle in TDT.)  can take arguments, for instance a subject, just as any verb.


<!-- fname:partmod_NP.pdf -->
~~~ sdparse
Äidin leipoma kakku oli menestys . \n Mother baked_by cake was success .
nsubj(leipoma-2, Äidin-1)
partmod(kakku-3, leipoma-2)
nsubj-cop(menestys-5, kakku-3)
cop(menestys-5, oli-4)
punct(menestys-5, .-6)
~~~



<!-- fname:partmod_NP_2.pdf -->
~~~ sdparse
Saadut lahjat ilahduttivat lapsia . \n Received presents made_happy children .
partmod(lahjat-2, Saadut-1)
nsubj(ilahduttivat-3, lahjat-2)
dobj(ilahduttivat-3, lapsia-4)
punct(ilahduttivat-3, .-5)
~~~


Occasionally, participles can modify a verb as well. These uses include cases that are clearly modifiers, as well as some more complement-like situations. Note that in the complement-like cases of `partmod`, the complement is not a clause; otherwise it would be marked as an *infinite clausal complement* <a href="http://universaldependencies.github.io/docs/fi/iccomp.html">iccomp</a>.


<!-- fname:partmod_VP_mod.pdf -->
~~~ sdparse
Huolestuneena juoksin hänen luokseen . \n Worried I_ran him to .
partmod(juoksin-2, Huolestuneena-1)
nmod(juoksin-2, hänen-3)
adpos(hänen-3, luokseen-4)
punct(juoksin-2, .-5)
~~~



<!-- fname:partmod_VP_comp.pdf -->
~~~ sdparse
Ksylitoli osoittautui kariesta ehkäiseväksi . \n Xylitol turned_out karies preventing .
nsubj(osoittautui-2, Ksylitoli-1)
partmod(osoittautui-2, ehkäiseväksi-4)
dobj(ehkäiseväksi-4, kariesta-3)
punct(osoittautui-2, .-5)
~~~


<!-- TODO For more information on different verb-headed constructions as dependents, see Section [verbal](#sec-verbal). -->

