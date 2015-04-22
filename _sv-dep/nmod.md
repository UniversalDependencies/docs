---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal
predicates. `nmod` is a noun functioning as a non-core (oblique)
argument or adjunct. In Swedish, `nmod` is used for prepositional complements:

~~~ sdparse
Ekonomiska bidrag till staten \n Financial contributions to the state
nmod(bidrag, staten)
case(staten, till)
~~~

~~~ sdparse
Mamma har hand om barnen \n Mother takes care of the children
nmod(har, barnen)
case(barnen, om)
~~~

~~~ sdparse
Han växte upp i en kollektiv miljö \n He grew up in a collective environment
nmod(växte, miljö)
case(miljö, i)
~~~

Two subtypes of `nmod` are introduced in Swedish: [nmod:poss]() for for possessive/genitive modifiers and [nmod:agent]() for agents of passive verbs.
