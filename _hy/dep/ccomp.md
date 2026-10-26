---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.

~~~ sdparse
Նա ասաց , որ դու աշխատում ես այստեղ ։ \n He said , that you are working here .
ccomp(ասաց, աշխատում)
ccomp(said, working)
mark(աշխատում, որ)
mark(working, that)
~~~

Such clausal complements may be finite or nonfinite. However, if the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is [xcomp]().

~~~ sdparse
Ղեկավարը հրամայեց փորել ։ \n The-boss ordered to-dig .
ccomp(հրամայեց, փորել)
ccomp(ordered, to-dig)
~~~

~~~ sdparse
Ղեկավարը հրամայեց մեզ փորել ։ \n The-boss ordered us to-dig .
xcomp(հրամայեց, փորել)
xcomp(ordered, to-dig)
iobj(հրամայեց, մեզ)
iobj(ordered, us)
~~~

~~~ sdparse
Մենք սկսեցինք փորել ։ \n We started to-dig .
xcomp(սկսեցինք, փորել)
xcomp(started, to-dig)
~~~

The key difference here is that, while it is possible to interpret the first sentence to mean that the boss will not be doing any digging, in the second sentence it is clear that the subject of **digging** can only be **we**. This is what distinguishes `ccomp` and `xcomp`.

Note that in constructions such as _բանն այն է, որ…_/_bann ayn ē, or…_ “the fact is that…”, the complement clause introduced by _որ_/_or_ is analyzed as [acl]() rather than `ccomp`. More generally, `ccomp` is not used with nominal heads, since nominals do not normally take core arguments.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:46 CEST -->
