---
layout: base
title:  'Syntax'
permalink: sv/overview/specific-syntax.html
udver: '2'
---

# Specific constructions

## Passives

Swedish has two ways of forming passives, a morphological passive (s-passive) and a periphrastic passive (bli-passive).

~~~ sdparse
Han jagades av polisen . \n He was-chased by the-police .
nsubj:pass(jagades, Han)
obl:agent(jagades, polisen)
case(polisen, av)
punct(jagades, .)
~~~

~~~ sdparse
Han blev jagad av polisen . \n He was chased by the-police .
nsubj:pass(jagad, Han)
obl:agent(jagad, polisen)
case(polisen, av)
aux:pass(jagad, blev)
punct(jagad, .)
~~~

In addition, the morphological passive form (s-form) is sometimes used without a passive meaning (so-called deponens and
reciprocal verbs). These are distinguished from true passives by having the feature `Voice=Pass` (passive form) but the dependency relation _nsubj_ (not _nsubjpass_) to their subjects.

~~~ sdparse
Jag hoppas att du kommer . \n I hope that you come
nsubj(hoppas, Jag)
ccomp(hoppas, kommer)
mark(kommer, att)
nsubj(kommer, du)
punct(hoppas, .)
~~~

