---
udver: '2'
layout: relation
title: 'cop'
shortdef: 'copula'
---

A `cop` (copula) is the relation of a function word used to link a subject to a nonverbal predicate. UD generally only annotates forms of "to be" as cop, which in German would be the forms of the verb "sein". More about copula in UD can be found on the main documentation page for [cop]() or [here](https://universaldependencies.org/v2/copula.html#guidelines-for-udv2).

~~~ sdparse
Er ist ein guter Student . \n He is a good student .
cop(Student, ist)
cop(student, is)
~~~

~~~ sdparse
Alles wird besser sein . \n Everything will be better .
aux(besser, wird)
cop(besser, sein)
aux(better, will)
cop(better, be)
~~~

Note that the verbs sein and werden can be also used as full verbs. Examples for that case can be found under the `nsubj` relation.
<!-- Interlanguage links updated Út zář 29 20:23:25 CEST 2020 -->
