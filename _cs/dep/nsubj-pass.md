---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause.

~~~ sdparse
Schwarzenberg byl poražen Zemanem . \n Schwarzenberg was defeated by-Zeman .
nsubj:pass(poražen, Schwarzenberg-1)
nsubj:pass(defeated, Schwarzenberg-7)
~~~

Reflexive passive (the meaning is “This will be solved tomorrow.”)

~~~ sdparse
Tohle se bude řešit zítra . \n This itself will solve tomorrow .
nsubj:pass(řešit, Tohle)
nsubj:pass(solve, This)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:38 CEST 2020 -->
