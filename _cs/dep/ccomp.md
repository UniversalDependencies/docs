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
Říká , že ráda plaveš . \n He-says , that like-to you-swim .
ccomp(Říká, plaveš)
ccomp(He-says, you-swim)
~~~

Such clausal complements may be finite or nonfinite. However, if the
subject of the clausal complement is controlled (that is, must be the same
as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
Šéf nám nařídil vykopat příkop . \n Boss us ordered to-dig ditch .
ccomp(nařídil, vykopat)
ccomp(ordered, to-dig)
~~~

~~~ sdparse
Začali jsme kopat příkop . \n Started we-have to-dig ditch .
xcomp(Začali, kopat)
xcomp(Started, to-dig)
~~~

The key difference here is that, while it is possible to interpret the first
sentence to mean that the boss will not be doing any digging, in the second
sentence it is clear that the subject of __digging__ can only be __we__. This is
what distinguishes `ccomp` and `xcomp`.
<!-- Interlanguage links updated Út zář 29 18:41:11 CEST 2020 -->
