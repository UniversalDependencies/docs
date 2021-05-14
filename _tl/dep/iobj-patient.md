---
layout: relation
title: 'iobj:patient'
shortdef: 'patient object of a non-actor/patient-focused verb'
udver: '2'
---

A _ng_-marked nominal that denotes the patient in a clause with a voice other than actor-focus
or patient-focus. There are two objects (the other one denotes the agent). Only one of them
can use the `obj` relation; we reserve it for the agent and subtype it [obj:agent]().
The patient is thus a subtype of `iobj`.

~~~ sdparse
Binigyan ng titser ng premyo ang istudyante . \n Given the teacher a prize the student .
iobj:patient(Binigyan, premyo)
iobj:patient(Given, prize)
~~~

“The teacher gave the student a prize.”

<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
