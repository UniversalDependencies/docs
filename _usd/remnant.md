---
layout: base
title: 'remnant'
shortdef: 'remnant'
---

## remnant: remnant

The *remnant* relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). This is something that was lacking in earlier versions
of SD. 
It provides a basis for being able to reconstruct dependencies
in the enhanced representation of SD. 
In particular, the goal was to achieve this *without* having to postulate empty nodes in the basic representation.

To develop motivation, consider first a sentence without ellipsis:

<div class="sd-parse">
Marie went to Paris and Miriam went to Prague.
nsubj(went-2, Marie-1)
root(root-0, went-2)
nmod(went-2, Paris-4)
case(Paris-4, to-3)
cc(went-2, and-5)
nsubj(went-2, Miriam-6)
conj(went-2, went-7)
case(Prague-9, to-8)
nmod(went-7, Prague-9)
</div>

The question is then how to treat *Marie went to Paris and Miriam to Prague*.


In the example below, the *remnant*
relations enable us to correctly retrieve the subjects and objects in
the clauses with an elided verb.

<div class="sd-parse">
John won bronze , Mary silver , and Sandy gold
nsubj(won-2, John-1)
dobj(won-2, bronze-3)
remnant(John-1, Mary-5)
remnant(Mary-5, Sandy-9)
remnant(bronze-3, silver-6)
remnant(silver-6, gold-10)
</div>

In contrast, in right-node-raising (RNR) and VP-ellipsis constructions in which some kind of predicational or verbal material is still present, the *remnant* relation is not used. In RNR, the verbs
are coordinated and the object is a *dobj* of the first verb:

<div class="sd-parse">
John bought and ate an apple
nsubj(bought-2, John-1)
cc(bought-2, and-3)
conj(bought-2, ate-4)
dobj(bought-2, apple-6)
</div>

In
VP-ellipsis, we keep the auxiliary as the head, as shown below:

<div class="sd-parse">
John will win gold and Mary will too
nsubj(win-3, John-1)
aux(win-3, will-2)
dobj(win-3, gold-4)
cc(win-3, and-5)
conj(win-3, will-7)
nsubj(will-7, Mary-6)
advmod(will-7, too-8)
</div>
