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
Han jagades av polisen . \n He was-chased by the-police .
nsubjpass(jagades, Han)
nmod:agent(jagades, polisen)
case(polisen, av)
~~~

~~~ sdparse
Han blev jagad av polisen . \n He was chased by the-police .
nsubjpass(jagad, Han)
nmod:agent(jagad, polisen)
case(polisen, av)
auxpass(jagad, blev)
~~~

In addition, the morphological passive form (s-form) is sometimes used without a passive meaning (so-called deponens and
reciprocal verbs). These are distinguished from true passives by having the feature `Voice=Pass` (passive form) but the dependency relation _nsubj_ (not _nsubjpass_) to their subjects.

~~~ sdparse
Jag hoppas att du kommer . \n I hope that you come
nsubj(hoppas, Jag)
ccomp(hoppas, kommer)
~~~

## Elements of a nominal


## Adjectival and adverbial constructions
