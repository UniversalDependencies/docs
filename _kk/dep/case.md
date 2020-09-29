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

Note that case is not used with auxiliary nouns (sometimes called "postpositions") in 
the form of N¹.gen N².poss.case, for those nmod should be used (following treatment 
in English of prepositional constructions like "in front of"). 

~~~ sdparse
Айгүл бақшаның ішінде ақырын басып жүр . \n Aygül garden-of inside-in quietly walking is .
nsubj(басып-5, Айгүл-1)
nmod:poss(ішінде-3, бақшаның-2)
nmod(басып-5, ішінде-3)
advmod(басып-5, ақырын-4)
aux(басып-5, жүр-6)
punct(басып-5, .-7)
~~~

<!-- TODO: @case with verbal nouns -->

<!-- Interlanguage links updated Út zář 29 20:23:21 CEST 2020 -->
