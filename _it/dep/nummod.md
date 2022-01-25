---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any number phrase that serves to modify the meaning of the noun with a quantity, both when the number is written in letters and in digits. 
In Italian this relation is only attested for POS <code>NUM</code> elements, so please do not use it with indefinite quantifiers, which are <code>DET</code> elements. 

~~~ sdparse
Corriere Sport da pagina 23 a pagina 26 .
nummod(pagina-4, 23)
nummod(pagina-7, 26)
~~~
~~~ sdparse
Due ragazze e un uomo .
nummod(ragazze, Due)
nmod(uomo, un)
~~~

Please note that, in dates, years should be marked as <code>nmod</code>, while the day is a numeric modifier. The month is the head.

~~~ sdparse
Feb 26 , 2014 .
nummod(Feb, 26)
nmod(Feb, 2014)
~~~

There are very few cases where <code>nummod</code> is used to mark indices of lists.

~~~ sdparse
a ) trasporti ad hoc \n b ) emanazioni di norme nazionali
nummod(trasporti, a)
nummod(emanazioni , b)
~~~
<!-- Interlanguage links updated St lis 3 20:59:02 CET 2021 -->
