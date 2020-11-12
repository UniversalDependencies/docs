---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as *e*, *o*, etc. The head of the relation is the first conjunct and all the other conjuncts depend on it via the <code>conj</code> relation. Here are some examples of the use of the conj relation.

* coordination with conjunctions

~~~ sdparse
Siamo andati alla stazione Termini e lo abbiamo chiesto
cc(andati, e)
conj(andati, chiesto)
~~~
~~~ sdparse
sparatorie e rapine
cc(sparatorie, e)
conj(sparatorie, rapine)
~~~
~~~ sdparse
qua e là
cc(qua, e)
conj(qua, là)
~~~

* Asyndetic coordination with omitted conjunction. Commas or other punctuation symbols delimit the conjuncts. 

~~~ sdparse
Per il fratello di Luigi , la cognata , i nipoti
conj(fratello, cognata)
conj(fratello, nipoti)
punct(fratello, ,-6)
punct(fratello, ,-9)
~~~
~~~ sdparse
quanto gli piaceva , quanto ne era innamorato
conj(piaceva, innamorato)
aux(innamorato, era)
~~~

* mixed coordination. Note that in the example *ma* (but) coordinates two clauses, not syntagms; head and dependent of the [conj]() relation are the main verbs of the clauses.

~~~ sdparse
l' ho vista brutta , ma poi si è ripreso
conj(vista, ripreso)
punct(vista, , )
cc(vista, ma)
~~~

The dependent of the relation automatically inherit the syntactic relations of the head, unless they have different dependencies explicitly expressed. Here, for instance, the subject of the two verbs is the same (so *cominciare* inherits it from *lasciare*), but the direct object is different (so not inherited).

~~~ sdparse
I tre avevano da poco lasciato la cima e stavano cominciando la discesa .
conj(lasciato, cominciando)
nsubj(lasciato, tre)
dobj(lasciato, cima)
dobj(cominciando, discesa)
cc(lasciato, e)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
