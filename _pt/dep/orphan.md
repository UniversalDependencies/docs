---
layout: relation
title: 'orphan'
redirect_from: "pt/dep/remnant.html"
shortdef: 'remnant in ellipsis'
---

The `orphan` relation is used to provide a satisfactory treatment of
ellipsis (in the case of gapping and stripping, where a predicational
or verbal head gets elided). This is something that was lacking in
earlier versions of SD and provides a basis for being able to
reconstruct dependencies in the enhanced representation of UD.  In
particular, the goal was to achieve this *without* having to postulate
empty nodes in the basic representation.

To develop motivation, consider first a sentence without ellipsis:

~~~ sdparse
Maria foi para Paris e Miriam foi para Praga
nsubj(foi-2, Maria-1)
root(root-0, foi-2)
nmod(foi-2, Paris-4)
case(Paris-4, para-3)
cc(foi-2, e-5)
nsubj(foi-7, Miriam-6)
conj(foi-2, foi-7)
case(Praga-9, para-8)
nmod(foi-7, Praga-9)
~~~

The question is then how to treat the sentence "Maria foi para Paris e
Miriam para Praga"

~~~ sdparse
Maria foi para Paris e Miriam para Praga
nsubj(foi-2, Maria-1)
root(root-0, foi-2)
nmod(foi-2, Paris-4)
case(Paris-4, para-3)
cc(foi-2, e-5)
case(Praga-8, para-7)
~~~

One option would be to pretend that there is an empty verb and to have
the final elements be dependents of it: *Maria foi para Paris e Miriam
∅ para Praga*. This analysis has some appeal but also has some
problems and at any rate stops the basic dependency graph from being
simply a tree of dependencies over the words of a sentence. A second
option is to simply promote the final elements and to have them as
dependents of the main verb of the sentence (*foi-2*) or of
*root-0*. But then (in general) one loses the ability to successfully
reconstruct the correct predicate-argument structure of the sentence
from the basic dependency representation.

Therefore, UD adopts an analysis that notes that in ellipsis a
`orphan` corresponds to a *correlate* in a preceding clause. The
`orphan` relation connects each remnant to its correlate in the basic
dependency representation. This is then a sufficient representation to
reconstruct the predicate-argument structure in the enhanced
representation. So, for this example, we have:

~~~ sdparse
Maria foi para Paris e Miriam para Praga
nsubj(foi-2, Maria-1)
root(root-0, foi-2)
nmod(foi-2, Paris-4)
case(Paris-4, para-3)
cc(foi-2, e-5)
case(Praga-8, para-7)
remnant(Maria-1, Miriam-6)
remnant(Paris-4, Praga-8)
~~~

Even in the more complex example below, the `orphan`
relations enable us to correctly retrieve the subjects and objects in
the clauses with an elided verb.

~~~ sdparse
João ganhou bronze , Maria prata , e Sandy ouro
nsubj(ganhou-2, João-1)
dobj(ganhou-2, bronze-3)
remnant(João-1, Maria-5)
remnant(Maria-5, Sandy-9)
remnant(bronze-3, prata-6)
remnant(prata-6, ouro-10)
~~~

Note in particular that (unlike for [conj]()), `orphan` uses a chaining analysis where each subsequent remnant depends on the immediately preceding remnant/correlate. The reason for this is that otherwise in a sentence with 2 or more chained ellipses the dependency structure would no longer track which remnants go together. It would become impossible to determine whether _Maria ganhou prata_ and _Sandy ouro_, or _Maria ganhou ouro_ e _Sandy prata_.

It is also possible that the incomplete part precedes the complete one in the sentence [de]:

~~~ sdparse
78 % para Bush e 4 % para o discurso do Clinton
remnant(%-7, %-2)
remnant(Clinton, Bush)
~~~

The `orphan` relation is used when no predicational material is
present. In contrast, in right-node-raising (RNR) and VP-ellipsis
constructions in which some kind of predicational or verbal material
is still present, the `orphan` relation is not used. In RNR, the
verbs are coordinated and the object is a [obj]() of the first verb:

~~~ sdparse
João comprou e comeu uma maçã
nsubj(comprou-2, João-1)
cc(comprou-2, e-3)
conj(comprou-2, comeu-4)
det(maçã-6, uma-5)
dobj(comprou-2, maçã-6)
~~~

In VP-ellipsis, we keep the auxiliary as the head, as shown below:

~~~ sdparse
João vai ganhar ouro e Maria vai também
nsubj(ganhar-3, João-1)
aux(ganhar-3, vai-2)
dobj(ganhar-3, ouro-4)
cc(ganhar-3, e-5)
conj(ganhar-3, vai-7)
nsubj(vai-7, Maria-6)
advmod(vai-7, também-8)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
