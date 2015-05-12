---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

The dependency type `nsubj` marks nominal subjects of a clause. Subjects are direct dependents of the main predicate of the clause, which may be a verb, noun or adjective.

~~~ sdparse
Le plus jeune participant a gagné la course . \n The youngest participant won the race .
nsubj(gagné, participant)
~~~

~~~ sdparse
Papa est malade . \n Dad is sick .
nsubj(malade, Papa)
~~~

~~~ sdparse
Maman est une bonne cuisinière . \n Mom is a good cook .
nsubj(cuisinière, Maman)
~~~
