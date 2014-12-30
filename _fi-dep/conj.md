---
layout: relation
title:  'conj'
shortdef : 'coordinated element'
---

The SD scheme marks coordination so that the first coordinated element acts as the head, and the rest of the elements in the coordination, as well as the coordinating conjunction, depend on it. *Coordinated elements* are marked with the dependency type `conj`.

<!-- fname:conj.pdf -->
~~~ sdparse
maitoa , leipää ja voita \n milk , bread and butter
punct(maitoa-1, ,-2)
conj(maitoa-1, leipää-3)
cc(maitoa-1, ja-4)
conj(maitoa-1, voita-5)
~~~

`Conj` is in Finnish used also in implicit coordinations without a coordinating conjunction, when the coordinated elements are not separated by a colon, semicolon or dash. When one of these is present, `parataxis` is used.

~~~sdparse
Kenkäkyllästyminen on kamala tauti, haluan kevään jo tänne. \n To\_get\_bored\_with\_shoes is an\_awful disease, I\_want spring already here.
conj(tauti-4, haluan-5)
~~~

##Diffs
###Turku Dependency Treebank

`Conj` is used also for implicit coordinations without a coordinating conjunction when the coordinated elements are not separated by a colon, semicolon or dash.
