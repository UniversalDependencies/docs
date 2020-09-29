---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive
clause. In the example below, *att hon ljög* is the subject.

~~~ sdparse
Att hon ljög misstänktes av alla . \n That she lied was suspected by everyone .
csubj:pass(misstänktes, ljög)
mark(misstänktes, att)
nsubj(misstänktes, hon)
obl:agent(misstänktes, alla)
case(alla, av)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:15 CEST 2020 -->
