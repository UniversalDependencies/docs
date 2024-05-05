---
layout: relation
title: 'orphan'
shortdef : 'orphan-to-orphan relation in gapping'
udver: '2'
---

The [orphan]() dependency (orphan) is used in cases of head ellipsis where simple promotion would result in an unnatural and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments has to be promoted to clausal head.


~~~ sdparse
ja si paračíh pagotó pak žanáta kahvø 
lit:  I  myself ordered ice-cream but woman-the  coffee
"I ordered ice-cream but my wife coffee" 
obj(paračíh, pagotó)
conj(paračíh, žanáta)
orphan(žanáta, kahvǿ)      
cc(žanáta, pak)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:42 CEST -->
