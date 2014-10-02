---
layout: entry
title:  'remnant'
shortdef : 'remnant in ellipsis'
---

The `remnant` relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided) *without* having to postulate empty nodes in the basic representation. This is something that was lacking in earlier versions
of SD and provides a basis for being able to reconstruct dependencies
in the enhanced representation of SD. 

USD adopts an analysis that notes that in ellipsis a `remnant` corresponds to a *correlate* in a preceding clause. The `remnant` relation connects each remnant to its correlate in the basic dependency representation. This is then a sufficient representation to reconstruct the predicate-argument structure in the enhanced representation.

~~~ sdparse
Marie went to Paris and Miriam to Prague
nsubj(went-2, Marie-1)
root(root-0, went-2)
nmod(went-2, Paris-4)
case(Paris-4, to-3)
cc(went-2, and-5)
remnant(Marie-1, Miriam-6)
case(Prague-8, to-7)
remnant(Paris-4, Prague-8)
~~~

Even in the more complex example below, the `remnant`
relations enable us to correctly retrieve the subjects and objects in
the clauses with an elided verb.

~~~ sdparse
John won bronze , Mary silver , and Sandy gold
nsubj(won-2, John-1)
dobj(won-2, bronze-3)
remnant(John-1, Mary-5)
remnant(Mary-5, Sandy-9)
remnant(bronze-3, silver-6)
remnant(silver-6, gold-10)
~~~

Note in particular that (unlike for [conj]()), `remnant` uses a chaining analysis where each subsequent remnant depends on the immediately preceding remnant/correlate. The reason for this is that otherwise in a sentence with 2 or more chained ellipses the dependency structure would no longer track which remnants go together. It would become impossible to determine whether Mary won silver and Sandy gold, or Mary won gold and Sandy silver.

The `remnant` relation is used when no predicational material is present. In contrast, in right-node-raising (RNR) and VP-ellipsis constructions in which some kind of predicational or verbal material is still present, the `remnant` relation is not used. In RNR, the verbs are coordinated and the object is a [dobj]() of the first verb:

~~~ sdparse
John bought and ate an apple
nsubj(bought-2, John-1)
cc(bought-2, and-3)
conj(bought-2, ate-4)
det(apple-6, an-5)
dobj(bought-2, apple-6)
~~~

In VP-ellipsis, we keep the auxiliary as the head, as shown below:

~~~ sdparse
John will win gold and Mary will too
nsubj(win-3, John-1)
aux(win-3, will-2)
dobj(win-3, gold-4)
cc(win-3, and-5)
conj(win-3, will-7)
nsubj(will-7, Mary-6)
advmod(will-7, too-8)
~~~
