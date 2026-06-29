---
layout: relation
title:  'compound'
shortdef : 'compound'
udver: '2'
---

The `compound` relation is used to analyze compounds, that is, combinations of lexemes that morphosyntactically behave as single words.  

In Lithuanian, only **compound numerals** composed of multiple words **without a clear syntactic head** are annotated with this relation.  
The **rightmost numeral** is taken as the head, and the other numerals are attached to it as its modifiers.

~~~ sdparse
Šimtas penkiasdešimt penki žmonės . \n One-hundred fifty five people .
compound(penki, Šimtas)
compound(penki, penkiasdešimt)
compound(five, One-hundred)
compound(five, fifty)
~~~

~~~ sdparse
Šimtas šešiasdešimt aštuoni namai . \n One-hundred sixty eight houses .
compound(aštuoni, Šimtas)
compound(aštuoni, šešiasdešimt)
compound(eight, One-hundred)
compound(eight, sixty)
~~~

### Distinction from other relations

If dependency relation between the components is clear, such dependency labels should be used as, for example, šimtas [nummod:gov]() tūkstančių eurų; penki [nummod]() šimtai eurų (hundred [nummod:gov]() thousand euro; five [nummod]() thousand euro).

For example:

~~~ sdparse
Šimtas tūkstančių eurų . \n Hundred thousand euros .
nummod:gov(tūkstančių, Šimtas)
nummod:gov(eurų, tūkstančių)
nummod:gov(thousand, Hundred)
nummod:gov(euros, thousand)
~~~

~~~ sdparse
Penki šimtai eurų . \n Five hundred euros .
nummod:gov(šimtai, Penki)
nummod:gov(eurų, šimtai)
nummod(hundred, Five)
nummod(euros, hundred)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:00:25 CEST -->
