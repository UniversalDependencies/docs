---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and the copular verb *essere* (in Italian this is the only verb that can be a copula). The copula be is not treated as the head of a clause, but rather as the dependent of a lexical predicate, as exemplified below, which can be an adjective, a noun or a pronoun. 

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
nsubj(mila, persone)
compound(mila, 200)
cop(mila, sono)
~~~

In predicative wh-constructions, the fronted wh-word is the head, and the copula is another <code>cop</code>.

~~~ sdparse
Qual è la capitale della Nuova Zelanda ?
nsubj(Qual, capitale)
cop(Qual, è)
~~~

If the copula comes together another verbal auxiliaries (e.g. because of the tense), they are taken as dependents of the lexical predicate:

~~~ sdparse
Non venne mai chiarito quale formazione era stata responsabile
det(formazione, quale)
nsubj(responsabile, formazione)
aux(responsabile, era)
cop(responsabile, stata)
~~~

The verb *essere* is not always marked as copula, but can also be the main verb of the clause. This analysis is generally adopted when:

* the verb *essere* is used in presentational or existential constructions where it has an existential or locative meaning;

~~~ sdparse
ROOT Vi sono migliaia di casi di questo genere
root(ROOT, sono)
expl(sono, Vi)
nsubj(sono, migliaia)
~~~
~~~ sdparse
ROOT In armeria ci sono 300 armature
root(ROOT, sono)
expl(sono, ci)
nsubj(sono, armeria)
~~~
~~~ sdparse
ROOT Il Presidente è in il mirino dei suoi attacchi
root(ROOT, è)
nsubj(è, Presidente)
nmod(è, mirino)
~~~

* the predicate is a prepositional phrase, in which case the nominal part of the prepositional phrase is the head of a [nmod]() relation, with a few exception in case of idiomatic forms, such as *in forma* (in shape).

~~~ sdparse
ROOT La scultura è di il pachistano Hamad Butt
root(ROOT, è)
nsubj(è, scultura)
case(Hamad, di)
det(Hamad, il)
nmod(è, Hamad)
amod(Hamad, pachistano)
name(Hamad, Butt)
~~~
~~~ sdparse
ROOT Oggi è in grado di dir ci qualcosa
root(ROOT, è)
nmod(è, grado)
case(grado, in)
acl(grado, dir)
mark(dir, di)
iobj(dir, ci)
~~~
~~~ sdparse
Per essere in forma
cop(forma, essere)
case(forma, in)
~~~

* the complement of the verb *essere* is a subordinate clause

~~~ sdparse
ROOT La verità è che la spesa sanitaria sta esplodendo
root(ROOT, è)
nsubj(è, verità)
ccomp(è, esplodendo)
nsubj(esplodendo, spesa)
mark(esplodendo, che)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
