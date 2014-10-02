---
layout: entry
title:  'acomp'
shortdef : 'adjectival complement'
---

The dependency type `acomp` is used for adjectival complements of
verbs, except for predicatives.

~~~ sdparse
Hän teki siitä hyvin vaikeaa . \n He made (from_)it very difficult .
nsubj(teki, Hän)
nmod(teki, siitä)
advmod(vaikeaa, hyvin)
acomp(teki, vaikeaa)
punct(teki, .)
~~~
