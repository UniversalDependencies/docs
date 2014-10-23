---
layout: entry
title:  'advcl'
shortdef : 'adverbial clause modifier'
---

*Adverbial clause modifiers* (`advcl`) are subordinate clauses that
are not complements. Also non-complement infinite or temporal clauses
(*lauseenvastike*, see for instance 
(see ISK [§876](http://scripta.kotus.fi/visk/sisallys.php?p=876)) are
marked as `advcl`. If there is a subordinating conjunction present, it
is marked with the dependency type [mark]().

<!-- fname:advcl.pdf -->
~~~ sdparse
Kun äiti tuli kotiin , isä keitti kahvia . \n When mother came home , father made coffee .
mark(tuli-3, Kun-1)
nsubj(tuli-3, äiti-2)
nmod(tuli-3, kotiin-4)
punct(tuli-3, ,-5)
nsubj(keitti-7, isä-6)
advcl(keitti-7, tuli-3)
dobj(keitti-7, kahvia-8)
punct(keitti-7, .-9)
~~~

### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=876>
