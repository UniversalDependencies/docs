---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

The dependency type `nsubj` marks nominal subjects of a clause.
Subjects are direct dependents of the main predicate of the clause, which may be a verb, noun or adjective.

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

Here are some examples from **UD_French-Spoken** with the `nsubj` relation:

~~~ sdparse
je peux pas vous dire \n I can't tell you
nsubj(peux, je)
~~~

~~~ sdparse
on est plus confiant \n we are more confident
nsubj(confiant, on)
~~~

~~~ sdparse
l' art est le reflet de la société \n art is the reflection of society
nsubj(reflet, art)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:57 CEST 2020 -->
