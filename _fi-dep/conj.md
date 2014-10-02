---
layout: entry
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
