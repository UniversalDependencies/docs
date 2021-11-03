---
layout: relation
title:  'csubj:cop'
shortdef : 'clausal subject of copular construction'
udver: '2'
---

Following the Irish treebank,
a *clausal copular subject* (`csubj:cop`) is
used to label a clause that acts as the
subject of another (copular) clause. As in all copular clauses, the
predicate acts as the head of the clause and hence it is also the
governor of the copular subject.

### Example

#### Verbal ####

~~~ sdparse
S' treisht lhiam dy vel shiu braew \n Is hope with-me that are you-PL good
csubj:cop(treisht, vel)
~~~

#### Verbal Noun ####

~~~ sdparse
By vie lhiam gynsaghey clickyn da \n Would-be good with-me teaching tricks to-him
cop(vie, By)
csubj:cop(vie, gynsaghey)
obj(gynsaghey, clickyn)
~~~
<!-- Interlanguage links updated St lis 3 20:58:48 CET 2021 -->
