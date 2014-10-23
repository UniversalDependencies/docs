---
layout: entry
title:  'mark:complm'
shortdef : 'complementizer'
---

The *complementizer* (`mark:complm`) appears in most clausal
complements, and the head of the dependency is the main verb of the
subordinate clause. The only complementizer in Finnish is _että_
"that".

<!-- fname:complm.pdf -->
~~~ sdparse
Sanoin , että hän voi tulla . \n I_said , that he can come .
ccomp(Sanoin-1, tulla-6)
punct(tulla-6, ,-2)
mark:complm(tulla-6, että-3)
nsubj(tulla-6, hän-4)
aux(tulla-6, voi-5)
punct(Sanoin-1, .-7)
~~~
