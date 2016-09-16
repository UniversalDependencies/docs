---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier is the relation between a negation word and the word it modifies. Both elements of double negation are marked as `neg`. Note that in colloquial French, the first element of the double negation is often not present.

~~~ sdparse
L'homme parfait n' existe pas \n The perfect man does not exist
neg(existe, pas)
neg(existe, n')
~~~

~~~ sdparse
On ne le lâchera plus \n We will not let it go anymore
neg(lâchera, plus)
neg(lâchera, ne)
~~~
