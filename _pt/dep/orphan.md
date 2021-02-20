---
layout: relation
title: 'orphan'
shortdef: 'orphaned dependent of a predicate attached to another orphan'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of
ellipsis (in the case of gapping and stripping, where a predicational
or verbal head gets elided).
To develop motivation, consider first a sentence without ellipsis:

~~~ sdparse
Maria foi para Paris e Miriam foi para Praga
nsubj(foi-2, Maria-1)
root(root-0, foi-2)
nmod(foi-2, Paris-4)
case(Paris-4, para-3)
cc(foi-7, e-5)
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

In UD v2, the enhanced dependency representation uses empty nodes to
represent the elided predicates. In the basic representation, one
orphaned dependent is promoted as the head and it attaches to the
parent of the elided predicate, using its relation. The other orphans
are attached to the promoted orphan via the `orphan` relation. So, for this example, we have:

~~~ sdparse
Maria foi para Paris e Miriam para Praga
nsubj(foi-2, Maria-1)
root(root-0, foi-2)
nmod(foi-2, Paris-4)
case(Paris-4, para-3)
conj(Maria-1, Miriam-6)
cc(Miriam-6, e-5)
orphan(Miriam-6, Praga-8)
case(Praga-8, para-7)
~~~

In VP-ellipsis, we keep the auxiliary as the head, as shown below:

~~~ sdparse
João vai ganhar ouro e Maria vai também
nsubj(ganhar-3, João-1)
aux(ganhar-3, vai-2)
obj(ganhar-3, ouro-4)
conj(ganhar-3, vai-7)
cc(vai-7, e-5)
nsubj(vai-7, Maria-6)
advmod(vai-7, também-8)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
