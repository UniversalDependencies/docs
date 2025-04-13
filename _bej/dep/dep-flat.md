---
layout: relation
title: 'dep:conj'
shortdef: 'conjunct'
udver: '2'
---

The flat relation is used to combine the elements of an expression where none of the immediate components can be identified as the sole head using standard substitution tests.
Beja is mostly a head-final language but UD validation does not accept `flat` with a governor to the right of the dependant. 
We then use the `dep:flat` relation to get around this technical issue which goes against our theoretical analysis.

~~~ sdparse
tamina faɖig =t jina \n fourteen days
dep:flat(faɖig,tamina)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:47 CET -->
