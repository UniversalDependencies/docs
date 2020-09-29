---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
Можеш ли да плуваш ? \n Can PART to swim ?
xcomp(Можеш, плуваш)
xcomp(Can, swim)
~~~

~~~ sdparse
Двете сестри започнаха да си шепнат още по-ниско . \n Two-the sisters started to REFL whisper even lower .
xcomp(започнаха, шепнат)
xcomp(started, whisper)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause.
That is, there should be no available interpretation where the subject of the lower clause may be distinct from the specified role of the upper clause.
In cases where the missing subject may or must be distinct from a fixed role in the higher clause,
[ccomp]() should be used instead, as below.  This includes cases of arbitrary subjects and anaphoric control.

~~~ sdparse
Каза да не се-шегувам . \n Said-he to not REFL.kid-I  .
ccomp(Каза, се-шегувам)
ccomp(Said-he, REFL.kid-I)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:37 CEST 2020 -->
