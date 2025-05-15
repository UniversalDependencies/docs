---
layout: relation
title:  'nummod'
shortdef : 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any number phrase that serves to
modify the meaning of the noun with a quantity.

~~~ sdparse
Sam ate 3 sheep
nummod(sheep, 3)
~~~

~~~ sdparse
Sam spent forty dollars
nummod(dollars, forty)
~~~

~~~ sdparse
Sam spent $ 40
nummod($, 40)
~~~

Numbers used in other constructions are not `nummod`. For instance, the phrase _number 1_ is analyzed as a [flat]() structure, as discussed [here](nmod-desc.html#numbered-entities).

<!-- Interlanguage links updated So 10. května 2025, 18:15:51 CEST -->
