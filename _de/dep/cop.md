---
udver: '2'
layout: relation
title: 'cop'
shortdef: 'copula'
---

A `cop` (copula) is the relation of a function word used to link a subject to a nonverbal predicate. In German it is always a verb such as sein or werden.

~~~ sdparse
Er ist ein guter Student . \n He is a good student .
cop(Student, ist)
~~~

~~~ sdparse
Alles wird besser . \n Everything will become better .
cop(besser, wird)
~~~

Note that the verbs sein and werden can be also used as full verbs. Examples for that case can be found under the `nsubj` relation.
