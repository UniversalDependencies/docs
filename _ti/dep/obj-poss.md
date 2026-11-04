---
layout: relation
title: 'obj:poss'
shortdef: 'possessor object of ኣለ'
udver: '2'
---

Possession is expressed by the existential verb ኣለ / *ʔalə* with a subject suffix agreeing with the possessed thing and an object suffix agreeing with the possessor. The possessed thing is the [nsubj](https://universaldependencies.org/u/dep/nsubj.html) and the possessor is annotated as `obj:poss`. The possessor usually has no case marker, but may take the objective prefix ን- / *n-*.

~~~ sdparse
ኣስቴር መኪና ኣላታ ። \n Aster car exist.Sb3sf.Ob3sf .
nsubj(ኣላታ, መኪና)
obj:poss(ኣላታ, ኣስቴር)
~~~

"Aster has a car." (ti_ref_7a)

~~~ sdparse
ን- ኣስቴር መኪና ኣላታ ። \n OBJ Aster car exist.Sb3sf.Ob3sf .
case:pre(ኣስቴር, ን-)
nsubj(ኣላታ, መኪና)
obj:poss(ኣላታ, ኣስቴር)
~~~

"Aster has a car." (ti_ref_7b)
