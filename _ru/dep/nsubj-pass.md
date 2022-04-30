---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause.

~~~ sdparse
Шварценберг был побеждён Земаном . \n Schwarzenberg was defeated by-Zeman .
nsubj:pass(побеждён, Шварценберг)
nsubj:pass(defeated, Schwarzenberg)
~~~

Reflexive passive (the meaning is “This will be solved tomorrow.”)

~~~ sdparse
Это решится завтра . \n This will-be-solved tomorrow .
nsubj:pass(решится, Это)
nsubj:pass(will-be-solved, This)
~~~

<!-- Interlanguage links updated St lis 3 20:59:02 CET 2021 -->
