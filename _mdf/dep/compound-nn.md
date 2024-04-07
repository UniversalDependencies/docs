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
Стирнятне работасть цехса , а Яхим атянь путозь комендантокс . \n The girls worked in the shop, and old-man Yakhim was appointed foreman.
cc(путозь-8, а-5)
obj(путозь-8, атянь-7)
compound:nn(атянь-7, Яхим-6)
xcomp(путозь-8, комендантокс-9)

~~~



<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:03 CET -->
