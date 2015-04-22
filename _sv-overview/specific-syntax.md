---
layout: base
title:  'Syntax'
permalink: sv/overview/specific-syntax.html
---

# Specific constructions

## Elements of a clause

### Passives

Swedish has two ways of forming passives, a morphological passive (s-passive) and a periphrastic passive (bli-passive).

~~~ sdparse
Han jagades av polisen .
nsubjpass(jagades, Han)
nmod:agent(jagades, polisen)
case(polisen, av)
He was-chased by the-police
~~~

~~~ sdparse
Han blev jagad av polisen .
nsubjpass(jagad, Han)
nmod:agent(jagad, polisen)
case(polisen, av)
auxpass(jagad, blev)
He was chased by the-police
~~~

In addition, the morphological passive form (s-form) is sometimes used without a passive meaning (so-called deponens and
reciprocal verbs). These are distinguished from true passives by having the feature `Voice=Pass` (passive form) but the dependency relation _nsubj_ (not _nsubjpass_) to their subjects.

~~~ sdparse
Jag hoppas att du kommer .
nsubj(hoppas, Jag)
ccomp(hoppas, kommer)
I hope that you come
~~~

## Elements of a nominal


## Adjectival and adverbial constructions
