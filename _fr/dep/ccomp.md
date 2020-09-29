---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause (which is a core argument) where the subject is not determined by obligatory control, either because the clause has its own overt subject or because the subject is arbitrary or determined anaphorically.
This contrasts with the [xcomp]() relation, which is used for clausal complements with obligatory control.

~~~ sdparse
Il dit que tu aimes nager \n He says that you like to swim
ccomp(dit, aimes)
~~~

~~~ sdparse
Je suis certain qu'il l'a fait \n I am certain that he did it
ccomp(certain, fait)
~~~

~~~ sdparse
on ne peut pas exclure qu' il y ait quelque chose de grave \n it cannot be ruled out that there is something serious
ccomp(exclure, ait)
mark(ait, qu')
~~~
<!-- Interlanguage links updated Út zář 29 20:31:46 CEST 2020 -->
