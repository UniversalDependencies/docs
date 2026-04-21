---
layout: relation
title: 'iobj:instrument'
shortdef: 'patient object of a non-actor/patient-voice verb'
udver: '2'
---

A nominal core argument of a clause which is in a non-pivot syntactic role and with a 
patient semantic role. Universal Dependencies only allows one core argument to have the 
`obj` label, while others are expected to have the `iboj` label. If both an agent and a 
patient appear as non-pivot arguments, we allow the agent to take the `obj:agent` label, 
while the patient takes `iobj:patient`. This is arbitrary, but we do not currently have 
a solid linguistic argument for which is more direct or indirect, and in the absence of 
this we use a hierarchy of _agent > patient > instrument_.

~~~ sdparse
Uponula tilubu li Dewi lo bulonggo \n fish <PV>-cook NPIV.FEM Dewi NPIV pan
iobj:instrument(tilubu, bulonggo)
iobj:instrument(<PV>-cook, pan)
~~~

"Dewi cooked the fish in the pan" (patient voice)
