---
layout: relation
title: 'obj:patient'
shortdef: 'patient object of an actor-focused verb'
udver: '2'
---

A nominal argument of a clause that is in the non-pivot role and is semantically the 
patient of the clause.
This typically occurs in actor-voice clauses.
in Gorontalo and many other Austronesian languages agent voice is not clearly less 
marked than any other voice, and a patient in the non-pivot position still requires 
explicit labeling.

When there are multiple arguments in the post-verbal non-pivot position, patient arguments have second priority to 
take the `obj` label, after agents but before instruments.
If there is no agent in the non-pivot position, the patient may take the `obj` label as `obj:patient`.

~~~ sdparse
Ti Dewi lo-tubu uponula \n PIV Dewi cooked fish
obj:patient(lo-tubu, uponula)
obj:patient(cooked, fish)
~~~

“Dewi cooked fish.” (actor voice)