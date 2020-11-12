---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement of a verb or adjective is a dependent clause
which is a core argument. That is, it functions like an object of the
verb, or adjective.

~~~ sdparse
o PMDB vai procurar os presidentes
ccomp(vai, procurar)
~~~

~~~ sdparse
Agora imagina que é chegado o momento.
ccomp(imagina, chegado)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the
same as the higher subject or object, with no other possible
interpretation) the appropriate relation is [xcomp]().

~~~ sdparse
The boss said to start digging
ccomp(said, start)
mark(start, to)
~~~

~~~ sdparse
We started digging
xcomp(started, digging)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.

Additionally, `ccomp` is used with copulas.

~~~ sdparse
The important thing is to keep calm.
ccomp(is, keep)
~~~

~~~ sdparse
The problem is that this has never been tried .
ccomp(is, tried)
~~~

(In these cases, the copula is treated as a head. This is a somewhat
inconsistent and ugly feature of the current UD. An alternative
solution was adopted for this case in the Turku TDT. It may be worth
considering adopting it in a revision of UD.)

_Note:_ In earlier versions of SD/USD, complement clauses with nouns
like *fact* or *report* were also analyzed as `ccomp`.  However, we
now analyze them as [acl](). Hence, `ccomp` does not appear in
nominals.  This makes sense, since nominals normally do not take core
arguments.
<!-- Interlanguage links updated Čt lis 12 09:43:17 CET 2020 -->
