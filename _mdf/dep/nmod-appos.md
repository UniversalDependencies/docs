---
layout: relation
title: 'nmod:appos'
shortdef: 'nominal modifier apposition'
udver: '2'
---

TODO: check this page !!!


The `nmod:appos` relation is used for apposition-like support nouns which modify nominal elements.
The nominal modifier is not introduced by an adposition (otherwise we use the [nmod]() relation).
Contrary to the [appos]() relation, the `nmod:appos` relation can also go right to left.
This not the `compound:nn` found in the Finnish treebanks.

Here is the first example:

~~~ sdparse
Стирнятне работасть цехса , а Яхим атянь путозь комендантокс . \n The girls worked in the shop, and old-man Yakhim was was appointed foreman.
cc(путозь-8, а-5)
obj(путозь-8, атянь-7)
nmod:appos(атянь-7, Яхим-6)
xcomp(путозь-8, комендантокс-9)

~~~



<!-- Interlanguage links updated St lis 3 20:58:58 CET 2021 -->
