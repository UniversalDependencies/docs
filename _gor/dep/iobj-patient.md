---
layout: relation
title: 'iobj:patient'
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
Bulonggo pilo-tubu li Dewi uponula \n pan IV-cook NPIV.FEM Dewi fish
iobj:patient(pilo-tubu, uponula)
iobj:patient(IV-cook, fish)
~~~

"Dewi cooked the fish in the pan" (instrument voice)