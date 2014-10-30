<---
layout: entry
title:  'xcomp:a'
shortdef : 'adjectival complement'
---

The dependency type `xcomp:a` is used for adjectival complements of
verbs, except for predicatives.

~~~ sdparse
Hän teki siitä hyvin vaikeaa . \n He made (from_)it very difficult .
nsubj(teki, Hän)
nmod(teki, siitä)
advmod(vaikeaa, hyvin)
xcomp:a(teki, vaikeaa)
punct(teki, .)
~~~
