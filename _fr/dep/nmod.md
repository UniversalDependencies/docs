---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns or noun phrases.

~~~ sdparse
Le résultat de la course \n The result of the race
nmod(résultat, course)
case(course, de)
~~~

~~~ sdparse
Maman prend bien soin de ses enfants \n Mother takes good care of her children
nmod(soin, enfants)
case(enfants, de)
~~~

Here are some examples from **UD_French-Spoken**:

~~~ sdparse
il est à l' opéra de Vienne \n he is at the opera of Vienna
nmod(opéra,Vienne)
case(Vienne,de)
~~~

~~~ sdparse
c'est un virus qui a fait le tour du monde \n it's a virus which went around the world
nmod(tour,monde)
case(monde,du)
~~~

N.B.: Apart from the usual `nmod` relation, **UD_French-Spoken** also uses the [nmod:appos]() relation for nominal modifiers which are not introduced by a preposition.
<!-- Interlanguage links updated Út zář 29 20:31:56 CEST 2020 -->
