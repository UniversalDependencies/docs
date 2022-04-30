---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

`compound` in Italian is used for noun compounds and numbers (e.g. numbers expressed alphabetically). <code>compound</code> is not used to mark only traditional compounds, but also terms that frequently appear together, words juxtaposed or separated by graphical signs (like "-"). 

~~~ sdparse
gli uffici leva
compound(uffici, leva)
~~~
~~~ sdparse
il campo profughi
compound(profughi, campo)
~~~
~~~ sdparse
la data limite
compound(data, limite)
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
l' indirizzo e-mail
compound(indirizzo, e-mail)
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
~~~ sdparse
Centro - destra
compound(Centro, destra)
punct(Centro, -)
~~~
<!-- Interlanguage links updated St lis 3 20:58:44 CET 2021 -->
