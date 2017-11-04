---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the relations in UD for compounding.
In Turkish it is used for bare noun compounds, compound verbal forms and numbers.

~~~ sdparse
Anneannem bana bir çift yün çorap örmüş . \n My grandmother knitted pair of woolen socks for me .
compound(çorap, yün)
~~~

~~~ sdparse
Yagmurlu havalardan nefret ediyor . \n He\/she hates rainy weather
compound(nefret, ediyor)
~~~

~~~ sdparse
Onun fiyatı iki yüz elli lira . \n Price of it is two hundred and fifty liras .
compound(iki, yüz)
conj:num(yüz, elli)
~~~
