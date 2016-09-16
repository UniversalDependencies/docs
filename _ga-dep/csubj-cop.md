---
layout: relation
title:  'csubj:cop'
shortdef : 'relative clause modifier'
---

A *clausal copular subject* (`csubj:cop`) is a UD Irish subtype, used to label a clause that acts as the
subject of another (copular) clause. As in all copular clauses, the
predicate acts as the head of the clause and hence it is also the
governor of the copular subject. 

### Example

_Is dócha go <b>raibh</b> an ceart aici_  'It is likely that she <b>was</b> correct'

~~~ sdparse
Is dócha go raibh an ceart aici \n Is probable that was the right at_her
csubj:cop(dócha, raibh)
~~~

