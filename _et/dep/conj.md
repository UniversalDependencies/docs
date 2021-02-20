---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction. Coordinated elements can be words, phrases or clauses. The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Luik , haug ja vähk vedasid vankrit . \n A swan , a pike  and a crab hauled the cart .
conj(Luik,haug)
conj(Luik,vähk)
nsubj(vedasid, Luik)
cc(vähk,ja)
conj(swan,pike)
conj(swan,crab)
cc(crab,and)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
