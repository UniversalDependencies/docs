---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` in Italian is used for noun compounds and numbers (e.g. numbers expressed alphabetically).

Examples:

~~~ sdparse
gli uffici leva
compound(uffici, leva)
~~~
~~~ sdparse
tra donne deputate
compound(donne, deputate)
~~~
~~~ sdparse
la parola chiave
compound(parola, chiave)
~~~
~~~ sdparse
Oggi la 10 km donne
compound(km, donne)
det(km, la)
nummod(km, 10)
~~~
~~~ sdparse
200 mila
compound(mila, 200)
~~~

