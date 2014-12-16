---
layout: entry
title:  'xcomp:a'
shortdef : 'adjectival complement'
---

The dependency type `xcomp:a` is used for adjectival complements of
verbs, except for predicatives, which generally (but not always) imply secondary predication. For example in the sentence _Hän teki siitä hyvin vaikeaa_ there are two mixed predicates: 1) _hän teki jotain_, and 2) _se on vaikeaa_. The secondary predication can be provided to any higher clause element.

Note: `xcomp:a` corresponds to `acomp` (adjectival complement) in
the original Stanford Dependencies and the Turku Dependency
Treebank.

~~~ sdparse
Hän teki siitä hyvin vaikeaa . \n He made (from_)it very difficult .
nsubj(teki, Hän)
nmod(teki, siitä)
advmod(vaikeaa, hyvin)
xcomp:a(teki, vaikeaa)
punct(teki, .)
~~~

~~~ sdparse
Minulla oli mukavaa .
xcomp:a(oli, mukavaa)
nmod(oli, Minulla)
punct(oli, .)
~~~


