---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as and, or, etc. The head of the relation is the first conjunct and all the other conjuncts depend on it via the conj relation.

* coordination with conjunctions

~~~ sdparse
Siamo andati alla stazione Termini e lo abbiamo chiesto
con(andati, e)
conj(andati, chiesto)
~~~
~~~ sdparse
sparatorie e rapine
con(sparatorie, e)
conj(sparatorie, rapine)
~~~
~~~ sdparse
qua e là
con(qua, e)
conj(qua, là)
~~~

* Asyndetic coordination with omitted conjunction. Commas or other punctuation symbols delimit the conjuncts. 

~~~ sdparse
Per il fratello di Luigi , la cognata , i nipoti
conj(fratello, cognata)
conj(fratello, nipoti)
~~~
~~~ sdparse
quanto gli piaceva , quanto ne era innamorato
conj(piaceva, innamorato)
aux(innamorato, era)
~~~

* mixed coordination

~~~ sdparse
l' ho vista brutta , ma poi si è ripreso
conj(vista, ripreso)
punct(vista, , )
con(vista, ma)
~~~

