---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause.  Its governor may be a verb or a nonverbal predicate. 

~~~ sdparse
Armastada tähendab elada elu , mida sa armastad \n To love means to live the life you love . 
csubj(tähendab,Armastada)
csubj(means,love)
~~~

~~~ sdparse
Mulle meeldib mõelda . \n I like to think .
obl(meeldib-2, Mulle-1)
csubj(meeldib-2, mõelda-3)
punct(meeldib-2, .-4)
csubj(like,think)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
