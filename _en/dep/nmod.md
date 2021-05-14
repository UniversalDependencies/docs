---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal
predicates. `nmod` is a noun functioning as a non-core (oblique)
argument or adjunct. In English, `nmod` is used

- for prepositional complements (including datives and partitives):

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

~~~ sdparse
give the toys to the children
dobj(give, toys)
nmod(give, children)
case(children, to)
~~~

~~~ sdparse
some of the toys
nmod(some, toys)
case(toys, of)
det(toys, the)
~~~

The `nmod` relation holds between the noun/predicate modified by the
prepositional complement and the noun introduced by the preposition.

- for 's genitives, use [nmod:poss]():

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod:poss(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

Nominal modifiers not marked by a preposition or 's genitive
are tagged [nmod:npmod](), a subtype of `nmod`. Temporal nominal
modifiers are also marked with a separate relation [nmod:tmod](). See
the definitions of these relations.
<!-- Interlanguage links updated Pá kvě 14 11:09:09 CEST 2021 -->
