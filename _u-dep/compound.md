---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being `fixed` and `flat`). It is used 

- for any kind of X<sup>0</sup> compounding: noun compounds (e.g., *phone book*), but also verb and
adjective compounds that are more common in other languages (such as Persian or Japanese light verb constructions). 
See further discussion at [Two Nominals](/workgroups/newdoc/two_nominals.html).

~~~ sdparse
phone book
compound(book, phone)
~~~

~~~ sdparse
ice cream flavors
compound(cream, ice)
compound(flavors, cream)
~~~

- for particle verbs (with the subtype `compound:prt`):

~~~ sdparse
put up
compound:prt(put, up)
~~~

- for serial verbs (with the subtype `compound:svc`):

~~~ sdparse
Musa bé lá èbi \n Musa came took knife
nsubj(bé, Musa)
compound:svc(bé, lá)
obj(bé, èbi)
~~~

The `compound` relation (nor any subtype thereof) is not used to link an inherently reflexive verb with the reflexive morpheme, despite the similarity of this construction to particle verbs. The current UD guideline is to use an appropriate [subtype](/u/dep/expl.html#reflexives) of the [expl]() relation.

Each language that uses `compound` should develop its own specific criteria based on morphosyntax (rather than lexicalization or semantic idiomaticity),
though elsewhere the terms "compound" and "multiword expression" may be used more broadly.
In English, for example, adjective-noun combinations, prepositional phrases, and light verb constructions are better described 
with other relations:

~~~ sdparse
hot dog
amod(dog, hot)
~~~

~~~ sdparse
the state of play
det(state, the)
nmod(state, play)
case(play, of)
~~~

~~~ sdparse
make a decision
obj(make, decision)
det(decision, a)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:18 CET 2020 -->
