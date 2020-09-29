---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The ``compound`` relation is one of three relations
for multi-word expressions (MWEs) (the other two being [fixed]() and [flat]()).

In Turkish ``compound`` relation is used mainly noun-verb compounds, and numbers.
For light-verb constructions we use the subtype [compoun:lvc](compound-lvc),
and for reduplicated compounds we use [compound:redup](compound-redup).

~~~ sdparse
Çocuğu yoldan çıkarmış .
compound(çıkarmış, yoldan)
~~~

``compound`` is also used for numbers, where head is the right-most number.

~~~ sdparse
iki yüz bin lira \n two hundred thousand liras
compound(bin, iki)
compound(bin, yüz)
nummod(lira, bin)
~~~

For non-lexicalized (non-MWE) nominal modification,
e.g., _tahta kapı_ "wood(en) door", [nmod]() relation is used.
<!-- Interlanguage links updated Út zář 29 18:41:13 CEST 2020 -->
