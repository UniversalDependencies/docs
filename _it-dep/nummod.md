---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is any number phrase that serves to modify the meaning of the noun with a quantity. 
In Italian it is only attested with POS <code>NUM</code>. 

~~~ sdparse
Corriere Sport da pagina 23 a pagina 26 .
nummod(pagina-4, 23)
nummod(pagina-7, 26)
~~~
~~~ sdparse
Feb 26 , 2014 .
nummod(Feb, 26)
~~~

There are very few cases where <code>nummod</code> is used to mark indices of lists.

~~~ sdparse
a ) trasporti ad hoc \n b ) emanazioni di norme nazionali
nummod(trasporti, a)
nummod(emanazioni , b)
~~~
