---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

`discourse` is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART). The guidelines of what the Penn Treebanks count as an INTJ have been followed in this case, which inlcude interjections, fillers and discourse markers.


***Ez**, ez naiz bakarrik egoiten e !*

***No**, I will not be alone eh !*

~~~ sdparse
Ez , ez naiz bakarrik egoiten e ! \n No , I will not be alone eh !

discourse(egoiten-6, Ez-1)
neg(egoiten-6, ez-3)
aux(egoiten-6, naiz-4)
vocative(egoiten-6, e-7)
punct(egoiten-6, !-8)
~~~


***Ba** ez da hori, **ez** .*

***So** it is not that, **no** .*

~~~ sdparse
Ba ez da hori , ez . \n So it is not that , no .

discourse(da-3, Ba-1)
neg(da-3, ez-2)
nsubj(da-3, hori-4)
discourse(da-3, ez-6)
punct(da-3, .-7)
punct(da-3, ,-5)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:50 CET -->
