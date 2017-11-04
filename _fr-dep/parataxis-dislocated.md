---
layout: relation
title: 'parataxis:dislocated'
shortdef: 'parataxis dislocated'
udver: '2'
---

In FrenchSpoken, the `parataxis:dislocated` relation is used for pre-nucleus clauses that function like dislocations. 
They  cannot be considered as illocutary units since they are not autonomous.

For instance, in the following example, _j'ai le copain de ma copine_ could not be an autonomous sentence. Furthermore it commutes with the nominal phrase _le copain de ma copine_ and works like a dislocation, that is why the `parataxis:dislocated` relation is appropriate.

~~~ sdparse
j' ai le copain de ma copine il a un petit bateau dans le port de Toulon \n this boyfriend of my friend, he's got a little boat in the port of Toulon
parataxis:dislocated(a,ai)
~~~ 

N.B.: Since pre-nucleus clause functions like a dislocation, it could be annotated with a simple [dislocated]() link.

There are five more subrelations that FrenchSpoken uses: [parataxis:discourse](), [parataxis:insert](), [parataxis:obj], [parataxis:parenth]() and [parataxis:conj]().
