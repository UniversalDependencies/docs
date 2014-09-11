---
layout: base
title:  'complm'
shortdef : 'complementizer'
---

## complm (complementizer) <a name="sec-complm"></a>

The *complementizer* (*complm*) appears in most clausal complements, and the head of the dependency is the main verb of the subordinate clause. The only complementizer in Finnish is *että* (*that*).


<!-- fname:complm.pdf -->
~~~ sdparse
Sanoin , että hän voi tulla . \n I_said , that he can come .
ccomp(Sanoin-1, tulla-6)
punct(tulla-6, ,-2)
complm(tulla-6, että-3)
nsubj(tulla-6, hän-4)
aux(tulla-6, voi-5)
punct(Sanoin-1, .-7)
~~~


