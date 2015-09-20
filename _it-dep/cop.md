---
layout: relation
title: 'cop'
shortdef: 'copula'
---

A copula is the relation between the complement of a copular verb and the copular verb essere (only). The copula be is not treated as the head of a clause, but rather as the dependent of a lexical predicate, as exemplified below. 

~~~ sdparse
I cinque sarebbero tutti immigrati clandestini
nsubj(immigrati, cinque)
cop(immigrati, sarebbero)
~~~
~~~ sdparse
Per questo sono ambiziosi
cop(ambiziosi, sono)
~~~
~~~ sdparse
Secondo l' Onu sono 200 mila le persone
nsubj(persone, mila)
compound(mila, 200)
cop(mila, sono)
~~~

This analysis is generally not adopted when the predicate is a prepositional phrase, in which case the nominal part of the prepositional phrase is the head of the clause, with a few exception in case of idiomatic forms, such as _in forma_ *in shape*, expressing a property.

~~~ sdparse
La scultura è di il pachistano Hamad Butt
nsubj(è, scultura)
case(Hamad, di)
det(Hamad, il)
nmod(è, Hamad)
amod(Hamad, pachistano)
name(Hamad, Butt)
~~~

If the copula is accompanied by other verbal auxiliaries (e.g. for tense), they are taken as dependents of the lexical predicate:

~~~ sdparse
Non venne mai chiarito quale formazione era stata responsabile
det(formazione, quale)
nsubj(responsabile, formazione)
aux(responsabile, era)
cop(responsabile, stata)
~~~

