---
layout: relation
title:  'conj'
shortdef : 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as *and*, *or*, etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and other conjunctions depend on it via the `conj` relation.

~~~ sdparse
Bill is big and honest
conj(big, honest)
~~~

See also: [`cc`](cc.html)
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:33 CET -->
