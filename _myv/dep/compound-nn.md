---
layout: relation
title: 'compound:nn'
shortdef: 'noun compound modifier'
udver: '2'
---



The dependency type `compound:nn`, which stands for _noun compound modifier_ has one use in the Moksha UD scheme. It is used for linking non-inflecting proper nouns to their inflecting appellations. Appellations may be titles or even concepts, e.g., 'professor', 'fellow', 'town', 'river', 'event', etc.
Contrary to the [appos]() relation, the `compound:nn` relation goes right to left, and only the second element declines.

Here is the first example:

~~~ sdparse
― Совсинек Звездов ялгат туртов . \n ― We went in to meet your friend Zvezdov .
punct(Совсинек-2, –-1)
obl(Совсинек-2, ялгат-4)
compound:nn(ялгат-4, Звездов-3)
case(ялгат-4, туртов-5)

~~~



<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:38 CET -->
