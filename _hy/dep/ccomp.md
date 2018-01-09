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
Նա ասաց , որ դու աշխատում ես այստեղ ։ \n He said , that you are working here .
ccomp(ասաց, աշխատում)
ccomp(said, working)
mark(աշխատում, որ)
mark(working, that)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
Ղեկավարը հրամայեց փորել ։ \n The-boss ordered to-dig .
ccomp(հրամայեց, փորել)
ccomp(ordered, to-dig)
~~~

~~~ sdparse
Մենք սկսեցինք փորել ։ \n We started to-dig .
xcomp(սկսեցինք, փորել)
xcomp(started, to-dig)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.
