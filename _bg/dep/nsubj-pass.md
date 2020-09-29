---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause. Similarly to Czech, in Bulgarian there are
two kinds of passive: participle-based
and reflexive(se)-based:

~~~ sdparse
Биячите не бяха разкрити . \n Bullies-the not-were detected .
nsubjpass(разкрити, Биячите)
nsubjpass(detected, Bullies-the)
~~~

~~~ sdparse
Черквата се затопли от свещите . \n Church-the REFL.got-warm from candles-the .
nsubjpass(затопли, Черквата)
nsubjpass(REFL.got-warm, Church-the)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:58 CEST 2020 -->
