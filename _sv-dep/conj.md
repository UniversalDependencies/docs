---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as *and*, *or*, etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and other conjunctions depend on it via the `conj` relation.

~~~ sdparse
1500 kr per barn och år \n 1500 kr per child and year
conj(barn, år)
~~~

~~~ sdparse
En sekunds tvekan eller dröjsmål eller slarv \n A second's hesitation or delay or carelessness
conj(tvekan, dröjsmål)
conj(tvekan, slarv)
~~~
