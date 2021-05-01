---
layout: relation
title: 'dep:conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements.
Beja is mostly a head-final language but UD validation does not accept conjunctions with a governor to the right of the dependant. 
We then use the `dep:conj` relation to get around this technical issue which goes against our theoretical analysis.

~~~ sdparse
a- skʷi -i a- gʷoːj =t // hoːj ɖaːb -ja -i iː- ha //
text_en: "I chased him, and I could not (catch up with him), and he run away from there.
dep:conj(ɖaːb, gʷoːj) ("run", "be_unable")
~~~
