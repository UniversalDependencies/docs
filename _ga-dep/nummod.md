---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

*Numeric modifiers* of a noun or NP, including both cardinal and
ordinal numbers, are marked with the `nummod` dependency type. Quantifiers are also included.

### Examples

_sa bhliain <b>1975</b>_ `in the year <b>1975</b>'

~~~ sdparse
sa bhliain 1975 \n in year 1975
nummod(bhliain, 1975)
~~~

_an <b>chéad</b> chéim_ `the <b>first</b> year'

~~~ sdparse
an chéad chéim \n in first year
nummod(chéim, chéad)
~~~

_fo-alt <b>(1)</b>_ `sub-paragraph <b>(1)</b>'

~~~ sdparse
fo-alt (1) \n sub-paragraph (1)
nummod(fo-alt, (1))
~~~



