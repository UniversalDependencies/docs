---
layout: relation
title: 'obj:instrument'
shortdef: 'nominal object of an instrument-voice verb'
udver: '2'
---

`obj:instrument` is used for a nominal core argument of a verb that is in a non-pivot role and whose 
semantic role is instrumental. Typically this will be signalled as a core argument by way of a 
non-pivot marker.

Instrument arguments have lowest priority to take the `obj` label, after agents and patients.
If there is no agent or patient in the non-pivot position, the instrument may take the `obj` label as `obj:instrument`.

This is not currently attested in the treebanks, as it is rare that an instrument is specified but not an agent, 
but is documented here in anticipation.

~~~ sdparse
Uponula tilubu lo tulu \n fish cooked NPIV fire
obj:instrument(tilubu, tulu)
obj:instrument(cooked, fire)
nsubj:patient(tilubu, Uponula)
nsubj:patient(cooked, fish)
~~~

"\[someone\] cooked fish in the pan"
<!-- Interlanguage links updated Út 30. června 2026, 10:35:03 CEST -->
