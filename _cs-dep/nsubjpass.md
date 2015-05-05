---
layout: relation
title: 'nsubjpass'
shortdef: 'passive nominal subject'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause.

~~~ sdparse
Schwarzenberg byl poražen Zemanem . \n Schwarzenberg was defeated by-Zeman .
nsubjpass(poražen, Schwarzenberg-1)
nsubjpass(defeated, Schwarzenberg-7)
~~~

Reflexive passive (the meaning is “This will be solved tomorrow.”)

~~~ sdparse
Tohle se bude řešit zítra . \n This itself will solve tomorrow .
nsubjpass(řešit, Tohle)
nsubjpass(solve, This)
~~~
