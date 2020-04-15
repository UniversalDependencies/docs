---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

*Numeric modifiers* of a noun or NP, including both cardinal and
ordinal numbers, are marked with the `nummod` dependency type. Quantifiers are also included.

### Examples

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

_don aoisghrúpa faoi <b>ocht</b> mbliana_ `for the under <b>eights</b> age group'

~~~ sdparse
don aoisghrúpa faoi ocht mbliana. \n for_the age_group under eight years
nummod(mbliana, ocht)
~~~

_I gceann <b>cúig</b> bliana_ `within <b>five</b> years'

~~~ sdparse
I gceann cúig bliana \n In time_of five years
nummod(bliana, cúig)
~~~

ina bhfuil 27 Ballstát

_ina bhfuil <b>27</b> Ballstát `in which there are <b>27</b> Member States'

~~~ sdparse
ina bhfuil 27 Ballstát \n in_which are 27 Member_States
nummod(Ballstát, 27)
~~~
