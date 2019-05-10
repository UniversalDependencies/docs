---
udver: '2'
layout: relation
title: 'orphan'
shortdef: 'orphan'
---

The `orphan` relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided) without having to postulate empty nodes in the basic representation. 


~~~ sdparse
Ich kaufe das Essen und du die Getränke \n I buy the food and you the drinks
orphan(du, Getränke)
~~~

If the head nominal is elided, we promote dependents in the following order: amod > nummod > det > nmod > case.

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes \n He buys himself a green car and she buys herself a red .
obj(kauft, rotes)
~~~
