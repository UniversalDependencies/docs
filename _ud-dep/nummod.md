---
layout: base
title: 'nummod'
shortdef: 'numeric modifier'
---

## nummod: numeric modifier

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
