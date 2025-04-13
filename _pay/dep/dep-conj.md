---
layout: relation
title: 'dep:conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements.
Pesh is a head-final language but UD validation does not accept conjunctions with a governor to the right of the dependant. 
We then use the `dep:conj` relation to get around this technical issue which goes against our theoretical analysis.

~~~ sdparse
toʔ nãeri nãer proheri nunca pãskertVi =na // text_en: " They went to look for him, they never found him, it is said"
dep:conj(pãskertVi, proheri) ("take_out", "look_for")
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:47 CET -->
