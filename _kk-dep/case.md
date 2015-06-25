---
layout: relation
title:  'case'
shortdef : 'case marking'
tags: ['case']
---

The dependency type `case` is used for the postposition in 
postpositional phrases. The head of
a postpositional phrase is the nominal, not the postposition, so as to
analyse postpositional phrases similarly to nominal modifiers without a
postposition. (Such nominal modifiers are frequent in Kazakh, as cases
are often used for the same purpose as postpositions.) To the same end,
the type `case` is used in combination with the type `nmod`, which is
also used for nominal modifiers when no adposition is present (see
[nmod]()).

<!-- fname:adpos.pdf -->
~~~ sdparse
Азамат ағашқа қарай жүгірді . \n Azamat tree-to towards ran .
nsubj(жүгірді-4, Азамат-1)
case(ағашқа-2, қарай-3)
punct(жүгірді-4, .-5)
nmod(жүгірді-4, ағашқа-2)
~~~
