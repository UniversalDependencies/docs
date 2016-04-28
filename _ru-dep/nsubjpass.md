---
layout: relation
title: 'nsubjpass'
shortdef: 'passive nominal subject'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause.

~~~ sdparse
Шварценберг был побеждён Земаном . \n Schwarzenberg was defeated by-Zeman .
nsubjpass(побеждён, Шварценберг)
nsubjpass(defeated, Schwarzenberg)
~~~

Reflexive passive (the meaning is “This will be solved tomorrow.”)

~~~ sdparse
Это решится завтра . \n This will-be-solved tomorrow .
nsubjpass(решится, Это)
nsubjpass(will-be-solved, This)
~~~

