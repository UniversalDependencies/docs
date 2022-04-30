---
udver: '2'
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

A `cc` is the relation between a conjunct and a preceding coordinating conjunction. 

~~~ sdparse
Sarah , Martin und Max kommen . \n Sarah , Martin and Max are coming .
nsubj(kommen, Sarah)
conj(Sarah, Martin)
conj(Sarah, Max)
cc(Max, und)
~~~

~~~ sdparse
Er ist nicht schüchtern , sondern desinteressiert \n He is not shy but uninterested
advmod(schüchtern, nicht)
conj(schüchtern, desinteressiert)
cc(desinteressiert, sondern)
~~~

~~~ sdparse
Aber jetzt wird es geändert \n But now it is being changed
cc(geändert, Aber)
~~~

~~~ sdparse
Er wollte die Zahl weder dementieren noch bestätigen \n He neither wanted to deny nor confirm the number
cc(dementieren, weder)
conj(dementieren, bestätigen)
cc(bestätigen, noch)
~~~

~~~ sdparse
Entweder gefällt es dir oder du hasst es \n Either you like it or you hate it
cc(gefällt, Entweder)
conj(gefällt, hasst)
cc(hasst, oder)
~~~

~~~ sdparse
Je besser er bewertet wird , desto höher ist die Vergütung \n The better he is evaluated , the higher the compensation
cc(bewertet, Je)
conj(bewertet, höher)
cc(höher, desto)
~~~

~~~ sdparse
Nicht nur das preiswerteste , sondern auch das leckerste Eis \n Not just the most inexpensive but also the most delicious ice - cream
cc(preiswerteste, nur)
advmod(nur, Nicht)
conj(preiswerteste, leckerste)
cc(leckerste, sondern)
advmod(sondern, auch)
amod(Eis, preiswerteste)
~~~

<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
