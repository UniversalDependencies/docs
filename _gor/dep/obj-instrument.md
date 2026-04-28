---
layout: relation
title: 'obj:instrument'
shortdef: 'nominal object of an instrument-voice verb'
udver: '2'
---

`obj:instrument` is used for a nominal core argument of a verb that is in a non-pivot role and whose 
semantic role is instrumental. Typically this will be signalled as a core argument by way of a 
non-pivot marker. This is not currently attested in the treebnaks but is documented here in 
anticipation.

~~~ sdparse
Uponula tilubu lo bulonggo \n fish cooked NPIV pan
obj:instrument(tilubu, bulonggo)
obj:instrument(cooked, pan)
nsubj:patient(tilubu, Uponula)
nsubj:patient(cooked, fish)
~~~

"\[someone\] cooked fish in the pan"