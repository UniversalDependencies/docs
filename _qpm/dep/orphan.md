---
layout: relation
title: 'orphan'
shortdef : 'orphan-to-orphan relation in gapping'
udver: '2'
---

The `orphan` (orphan) relation is used in cases of head ellipsis where simple promotion would result in an unnatural and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments has to be promoted to clausal head: 

~~~ sdparse
magáreso je staro i kóneso (je) jáko   
the donkey is old and the horse (is) strong
orphan (jáko, kóneso)
cc (stáro, i)    
~~~

Note that, when accompanied by a coordinating (e.g. i, íli etc) or adversative (e.g. ála, pak etc) adjunct, these retain their normal function and they are labeled as cc:

~~~ sdparse
ja si paračíh pagotó pak žanáta kahvø (si paračí) 
I ordered ice-cream but my wife (ordered) coffee 
lit:  I  myself ordered ice-cream but woman-the (ordered) coffee
orphan (žanáta kahvǿ)      
cc (paračíh, pak)
~~~
