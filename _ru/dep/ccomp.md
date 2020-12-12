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
Он говорит , что она работает в музее . \n He says , that she works in a museum .
ccomp(говорит, работает)
ccomp(says, works)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
Генерал приказал нам выйти . \n General ordered us to-leave .
ccomp(приказал, выйти)
ccomp(ordered, to-leave)
~~~

~~~ sdparse
Мы начали писать тест . \n We started to-write test .
xcomp(начали, писать)
xcomp(started, to-write)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the general will not be leaving, in the second
sentence it is clear that the subject of __writing__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.
<!-- Interlanguage links updated Čt lis 12 09:43:17 CET 2020 -->
