---
layout: relation
title: 'orphan'
shortdef : 'orphan-to-orphan relation in gapping'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided) *without* having to postulate empty nodes in the basic representation.
This is something that was lacking in earlier versions
of SD and provides a basis for being able to reconstruct dependencies
in the enhanced representation of UD.

The `orphan` relation connects one orphaned dependent of a missing predicate to another
in the basic dependency representation.

~~~ sdparse
Marie went to Paris and Miriam to Prague
nsubj(went-2, Marie-1)
obl(went-2, Paris-4)
case(Paris-4, to-3)
conj(went-2, Miriam-6)
cc(Miriam-6, and-5)
orphan(Miriam-6, Prague-8)
case(Prague-8, to-7)
~~~

The `orphan` relation is used when no predicational material is present.
In contrast, in right-node-raising (RNR) and VP-ellipsis constructions
in which some kind of predicational or verbal material is still present,
the `orphan` relation is not used. In RNR, the verbs are coordinated
and the object is an [obj]() of the first verb:

~~~ sdparse
John bought and ate an apple
nsubj(bought-2, John-1)
conj(bought-2, ate-4)
cc(ate-4, and-3)
det(apple-6, an-5)
obj(bought-2, apple-6)
~~~

In VP-ellipsis, we keep the auxiliary as the head, as shown below:

~~~ sdparse
John will win gold and Mary will too
nsubj(win-3, John-1)
aux(win-3, will-2)
obj(win-3, gold-4)
conj(win-3, will-7)
cc(will-7, and-5)
nsubj(will-7, Mary-6)
advmod(will-7, too-8)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:18 CEST 2021 -->
