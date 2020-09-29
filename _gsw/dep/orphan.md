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

nsubj(kaufe-2, Ich-1)
det(Essen-4, das-3)
obj(kaufe-2, Essen-4)
conj(kaufe-2, du-6)
cc(du-6, und-5)
det(Getränke-8, die-7)
orphan(du-6, Getränke-8)
~~~

If the head nominal is elided, we promote dependents in the following order: amod > nummod > det > nmod > case.

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes . \n He buys himself a green car and she buys herself a red .

nsubj(kauft-2, Er-1)
det(Auto-6, ein-4)
iobj(kauft-2, sich-3)
amod(Auto-6, grünes-5)
obj(kauft-2, Auto-6)
conj(kauft-2, kauft-9)
cc(kauft-9, und-7)
nsubj(kauft-9, sie-8)
obj(kauft-9, rotes-12)
iobj(kauft-9, sich-10)
det(rotes-12, ein-11)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:26 CEST 2020 -->
