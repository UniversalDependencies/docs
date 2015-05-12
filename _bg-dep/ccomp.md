---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

This document is a placeholder for the language-specific documentation
for `ccomp`.

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

Example 1: The clausal subject is the relative clause, which has a main verb.

~~~ sdparse
Който е закъснял , ще чака . \n Who is late , will wait-he .
csubj(чака, закъснял)
csubj(wait-he, late)
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
Невеста Нена престана да вика . \n Aunt Nena stopped to shout .
xcomp(престана, вика)
xcomp(stopped, shout)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.

Example with copula:

~~~ sdparse
Трудно е да я накараш да признае . \n Difficult-it is to her make confess .
csubj(Трудно, накараш)
csubj(Difficult-it, make)
~~~

