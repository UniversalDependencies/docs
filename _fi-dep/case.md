---
layout: entry
title:  'case'
shortdef : 'case marking'
tags: ['case']
---

The dependency type `case` is used for the adposition in pre- and
postpositional phrases. In the Finnish-specific SD scheme, the head of
an adpositional phrase is the nominal, not the adposition, so as to
analyze adpositional phrases similarly to nominal modifiers without an
adposition. (Such nominal modifiers are frequent in Finnish, as cases
are often used for the same purpose as adpositions.) To the same end,
the type `case` is used in combination with the type `nmod`, which is
also used for nominal modifiers when no adposition is present (see
[nmod]()).

<!-- fname:adpos.pdf -->
~~~ sdparse
Talo sijaitsee mäen takana . \n House is_located hill behind .
nsubj(sijaitsee-2, Talo-1)
nmod(sijaitsee-2, mäen-3)
case(mäen-3, takana-4)
punct(sijaitsee-2, .-5)
~~~
