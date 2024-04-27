---
layout: base
title:  'Object Predication'
udver: '2'
---

# Clauses with Predication of Object Concepts

Prototypical predication is predication of action concepts, where the 
predicate is a verb. Here we consider one type of nonprototypical 
predication, namely predication of an object (entity) concept. One entity 
(typically, but not necessarily, denoted by a definite nominal) is predicated 
to belong to a category of entities (typically denoted by an indefinite 
noun). Example: _Ivan is a dancer._

This construction is similar but not necessarily identical to equational 
clauses where two definite nominals are said to refer to the same entity. 
Example: _Ivan is the winner of this dancing competition._

The exact UD analysis of the construction depends on the strategy used by the 
language to express it. What the analyses have in common is that the category 
being predicated (e.g., _dancer_) is the root of the clause, while the entity 
said to belong to that category is attached to it as the subject.

## Zero Strategy

In some languages, the subject and the categorial predicate are simply 
juxtaposed. “Zero” refers to the absence of any verbal inflection and any 
linking morpheme between the subject and the predicate. 

Waskia [wsk] (Ross and Natu Paol 1978:10; Stassen 1997:144; Croft 2022:299)

~~~ sdparse
Aga bawa taleng-duap . \n My brother policeman .
nmod(bawa, Aga)
nmod(brother, My)
nsubj(taleng-duap, bawa)
nsubj(policeman, brother)
punct(taleng-duap, .-4)
punct(policeman, .-9)
~~~
