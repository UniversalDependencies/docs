---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ sdparse
Виждам , че идва често . \n See-I that comes-he often .
ccomp(Виждам, идва)
ccomp(See-I, comes-he)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
Аз обичах да разговарям с него . \n I liked to speak with him .
ccomp(обичах, разговарям)
ccomp(liked, speak)
~~~

~~~ sdparse
Невеста Нена престана да вика . \n Aunt Nena stopped shouting .
xcomp(престана, вика)
xcomp(stopped, shout)
~~~

Example with copula:

~~~ sdparse
Трудно е да я накараш да признае . \n Difficult-it is to her make confess .
ccomp(Трудно, накараш)
ccomp(Difficult-it, make)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:11 CEST 2020 -->
