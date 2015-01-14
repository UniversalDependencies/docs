---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the relations in UD for compounding.
In Czech it is used only for compound numbers.

~~~ sdparse
Bude to stát nanejvýš 50 tisíc korun . \n Will it cost at-most 50 thousand crowns .
nummod:gov(korun, tisíc)
compound(tisíc, 50-5)
nummod:gov(crowns, thousand)
compound(thousand, 50-14)
~~~
