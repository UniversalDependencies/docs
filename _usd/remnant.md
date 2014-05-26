---
layout: base
title: 'remnant'
shortdef: 'remnant'
---

## remnant: remnant

(from LREC paper)

The *remnant* relation is used to provide a treatment of ellipsis (in
the case of gapping or stripping, where predicational or verbal
material gets elided), something that was lacking in earlier versions
of SD. It provides a basis for being able to reconstruct dependencies
in the enhanced version of SD. For example, in (11), the *remnant*
relations enable us to correctly retrieve the subjects and objects in
the clauses with an elided verb.

[TODO example numbering]

<div class="sd-parse">
John won bronze , Mary silver , and Sandy gold
nsubj(won-2, John-1)
dobj(won-2, bronze-3)
remnant(John-1, Mary-5)
remnant(Mary-5, Sandy-9)
remnant(bronze-3, silver-6)
remnant(silver-6, gold-10)
</div>

In contrast, in right-node-raising (RNR) (12) and VP-ellipsis (13)
constructions in which some kind of predicational or verbal material
is still present, the remnant relation is not used. In RNR, the verbs
are coordinated and the object is a dobj of the first verb. In
VP-ellipsis, we keep the auxiliary as the head, as shown in (13).

<div class="sd-parse">
John bought and ate an apple .
nsubj(bought-2, John-1)
cc(bought-2, and-3)
conj(bought-2, ate-4)
dobj(bought-2, apple-6)
</div>

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
