---
layout: relation
title:  'compound'
shortdef : 'compound'
udver: '2'
---

The **compound** relation is used to analyze compounds, that is, combinations of lexemes that morphosyntactically behave as single words.  

In Lithuanian, only **compound numerals** composed of multiple words **without a clear syntactic head** are annotated with this relation.  
The **rightmost numeral** is taken as the head, and the other numerals are attached to it as its modifiers.

compound (compound) – used for compound numerals consisting of several words where no clear head can be determined. The governor is the rightmost numeral, while the other numerals are dependents attached with the relation `compound`.

~~~ sdparse
Šimtas penkiasdešimt penki žmonės . \n One-hundred fifty-five people .
compound(penki, Šimtas)
compound(penki, penkiasdešimt)
~~~

~~~ sdparse
Šimtas šešiasdešimt aštuoni namai . \n One-hundred sixty-eight houses .
compound(aštuoni, Šimtas)
compound(aštuoni, šešiasdešimt)
~~~

### Distinction from other relations

If a clear dependency relation exists between the components, that relation should be used instead of `compound`.

For example:

~~~ sdparse
Šimtas tūkstančių eurų . \n Hundred thousand euros .
nummod:gov(tūkstančių, Šimtas)
nmod(eurų, tūkstančių)
~~~

~~~ sdparse
Penki šimtai eurų . \n Five hundred euros .
nummod(šimtai, Penki)
nmod(eurų, šimtai)
~~~
