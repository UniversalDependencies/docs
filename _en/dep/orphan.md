---
layout: relation
title: 'orphan'
redirect_from: "en/dep/remnant.html"
shortdef : 'remnant in ellipsis'
---

The `orphan` relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided) *without* having to postulate empty nodes in the basic representation. This is something that was lacking in earlier versions
of SD and provides a basis for being able to reconstruct dependencies
in the enhanced representation of SD. 

USD adopts an analysis that notes that in ellipsis a `orphan` corresponds to a *correlate* in a preceding clause. The `orphan` relation connects each remnant to its correlate in the basic dependency representation. This is then a sufficient representation to reconstruct the predicate-argument structure in the enhanced representation.

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

Even in the more complex example below, the `orphan`
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

Note in particular that (unlike for [conj]()), `orphan` uses a chaining analysis where each subsequent remnant depends on the immediately preceding remnant/correlate. The reason for this is that otherwise in a sentence with 2 or more chained ellipses the dependency structure would no longer track which remnants go together. It would become impossible to determine whether Mary won silver and Sandy gold, or Mary won gold and Sandy silver.

Instances of stripping typically occur when there is only one argument in the second clause, but with an accompanying adverbial modifier such as *not* or *only*. We model these sentences with the remnant relation as well.

~~~ sdparse
Marie went to Paris , not Miriam
nsubj(went-2, Marie-1)
root(root-0, went-2)
nmod(went-2, Paris-4)
case(Paris-4, to-3)
remnant(Marie-1, Miriam-7)
neg(Miriam-7, not-6)
~~~

~~~ sdparse
Marie did go to Europe , but only to Paris .
nsubj(go-3, Marie-1)
aux(go-3, did-2)
root(root-0, go-3)
case(Europe-5, to-4)
nmod(go-3, Europe-5)
cc(go-3, but-7)
advmod(Paris-10, only-8)
case(Paris-10, to-9)
remnant(Europe-5, Paris-10)
~~~

Sometimes in these constructions adverbials will be "sprouted", and have no correlate in the precedeing clause. In such a situation, the adverbial should attach to one of the remnants; in principle it shouldn't matter which remnant it attaches to, since all remnants at a particular depth of embedding point back to the same semantic event (which the adverbial is a part of). However, to enforce a regular system, the adverbial should depend on the nearest leftmost dependent. 

~~~ sdparse
Mary will come today and Tom tomorrow , if he finds a ticket .
nsubj(come-3, Mary-1)
aux(come-3, will-2)
root(root-0, come-3)
advmod(come-3, today-4)
cc(come-3, and-5)
remnant(Mary-1, Tom-6)
remnant(today-4, tomorrow-7)
mark(finds-11, if-9)
nsubj(finds-11, he-10)
advcl(tomorrow-7, finds-11)
det(ticket-13, a-12)
dobj(finds-11, ticket-13)
~~~

~~~ sdparse
Mary will come today and , if he finds a ticket , Tom tomorrow .
nsubj(come-3, Mary-1)
aux(come-3, will-2)
root(root-0, come-3)
advmod(come-3, today-4)
cc(come-3, and-5)
mark(finds-9, if-7)
nsubj(finds-9, he-8)
advcl(Tom-13, finds-9)
det(ticket-11, a-10)
dobj(finds-9, ticket-11)
remnant(Mary-1, Tom-13)
remnant(today-4, tomorrow-14)
~~~

The `orphan` relation is used when no predicational material is present. In contrast, in right-node-raising (RNR) and VP-ellipsis constructions in which some kind of predicational or verbal material is still present, the `orphan` relation is not used. In RNR, the verbs are coordinated and the object is a [obj]() of the first verb:

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
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
