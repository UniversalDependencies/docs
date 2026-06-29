---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is used for certain fixed grammaticalized expressions. Such expressions tend to behave like function words. They include:

* Coordinate conjunction _tamas ka i o_ "or"
* Prepositions _ams ai_ "near", _soas ǃnâ_ "instead of", etc.
* Adverbial _s tsin(a)_ "also"
    
Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the `fixed` label. The assumption is that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary.

~~~ sdparse
Î , hî-î , tama/[ExtPos=CONJ] s ka i o ǁkha ts a s kōse . \n Yes , no , or1 or2 or3 or4 or5 can you STAT.PRS NMLZ until .
fixed(tama, s)
fixed(tama, ka)
fixed(tama, i)
fixed(tama, o)
cc(ǁkha, tama)
fixed(or1, or2)
fixed(or1, or3)
fixed(or1, or4)
fixed(or1, or5)
cc(can, or1)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:00:50 CEST -->
