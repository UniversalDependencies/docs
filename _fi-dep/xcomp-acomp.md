---
layout: entry
title:  'xcomp:acomp'
shortdef : 'adjectival complement'
---

The dependency type `xcomp:acomp` is used for adjectival complements of
verbs, except for predicatives.

~~~ sdparse
Hän teki siitä hyvin vaikeaa . \n He made (from_)it very difficult .
nsubj(teki, Hän)
nmod(teki, siitä)
advmod(vaikeaa, hyvin)
xcomp:acomp(teki, vaikeaa)
punct(teki, .)
~~~

(TODO: UD Finnish team: we may wish to simply remove this, [de Marneffe et al. 2014](http://www.lrec-conf.org/proceedings/lrec2014/pdf/1062_Paper.pdf#page=6) proposes to generalize SD `acomp` into `xcomp` for USD, and [UD English](http://universaldependencies.github.io/docs/en/dep/) has followed suite.)
