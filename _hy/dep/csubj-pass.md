---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive clause.

~~~ sdparse
Օրերս մամուլում գրվել էր , որ նա ևս պաշտոնանկ կարվի : \n These-days it-was written in-the-press , that he will-be dismissed .
csubj:pass(գրվել, պաշտոնանկ)
aux(գրվել, էր)
obl(գրվել, Օրերս)
obl(գրվել, մամուլում)
mark(պաշտոնանկ, որ)
csubj:pass(written, dismissed)
aux(written, it-was)
obl(written, These-days)
obl(written, in-the-press)
mark(dismissed, that)
~~~

~~~ sdparse
Նամակում ասվում էր , որ Հայաստանը պատրաստ է զարգացնել իր հարաբերությունները ԵՄ հետ ։ \n In-the-letter it-was told , that Armenia is ready to-develop its relations with the-EU .
csubj:pass(ասվում, պատրաստ)
aux(ասվում, էր)
obl(ասվում, Նամակում)
xcomp(պատրաստ, զարգացնել)
mark(պատրաստ, որ)
csubj:pass(told, ready)
aux(told, it-was)
obl(told, In-the-letter)
xcomp(ready, to-develop)
mark(ready, that)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:17 CEST 2020 -->
