---
layout: relation
title: 'iobj:patient'
shortdef: 'patient object of a non-actor/patient-voice verb'
udver: '2'
---

A nominal core argument of a clause which is in a non-pivot syntactic role and with a 
patient semantic role.

When there are multiple arguments in the post-verbal non-pivot position, patient arguments have second priority to take 
the `obj` label, after agents but before instruments.
If there is an agent in the non-pivot position, the patient must take the `iobj` label as `iobj:patient`.

~~~ sdparse
Bulonggo pilo-tubu li Dewi uponula \n pan IV-cook NPIV.FEM Dewi fish
iobj:patient(pilo-tubu, uponula)
iobj:patient(IV-cook, fish)
~~~

"Dewi cooked the fish in the pan" (instrument voice)
<!-- Interlanguage links updated Po 29. června 2026, 17:59:59 CEST -->
