---
layout: base
title:  'nmod'
shortdef : 'nominal modifier'
---

## `{{ page.title }}`: {{ page.shortdef }}

The `nmod` relation is used for nominal modifiers of nouns or clausal
predicates. `nmod` is a noun functioning as a non-core (oblique)
argument or adjunct. In English, `nmod` is used

- for prepositional complements:

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

The `nmod` relation holds between the noun/predicate modified by the
prepositional complement and the noun introduced by the preposition.

- for 's genitives:

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
poss(Chair-2, 's-3)
~~~

Nominal modifiers not introduced by a preposition or not 's genitives
are tagged [nmod:npmod](), a subtype of `nmod`. Temporal nominal
modifiers are also marked with a separate relation [nmod:tmod](). See
the definitions of these relations.
