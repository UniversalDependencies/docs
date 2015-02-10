---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

A coordination is the relation between an element of a conjunct and the coordinating conjunction word of the conjunct.  For more on coordination, see the [conj]() relation. 

~~~ sdparse
1500 kr per barn och år \n 1500 kr per child and year
cc(barn, och)
conj(barn, år)
~~~

A conjunction may also appear at the beginning of a sentence.  This is also called a `cc`, and dependent on the root predicate of the sentence. 

~~~ sdparse
Och du har inte bara en chans \n And you don't have just one chance
cc(har, Och)
~~~
