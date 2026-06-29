---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfill the usual core grammatical
relations of a sentence. These elements often appear to be in the periphery of the sentence, and may be separated
off with a comma intonation.

It is used for fronted elements that introduce the topic of a clause, as in the following example. The dislocated
element attaches to the head of the clause to which it belongs:

<!-- en: Those are our wishes, but I have no real hopes. -->
~~~ sdparse
esos son nuestros deseos , pero esperanzas de verdad yo no tengo ningunas \n those are our wishes , but hopes of reality I not have none
nsubj(deseos, esos)
cop(deseos, son)
det(deseos, nuestros)
conj(deseos, tengo)
punct(tengo, ,-5)
cc(tengo, pero)
case(verdad, de)
nmod(esperanzas, verdad)
nsubj(tengo, yo)
advmod(tengo, no)
obj(tengo, ningunas)
dislocated(tengo, esperanzas)
nsubj(wishes, those)
cop(wishes, are)
det(wishes, our)
conj(wishes, have)
punct(have, ,-19)
cc(have, but)
case(reality, of)
nmod(hopes, reality)
nsubj(have, I)
advmod(have, not)
obj(have, none)
dislocated(have, hopes)
~~~

<!-- Interlanguage links updated Po 29. června 2026, 17:00:46 CEST -->
