---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items.
In lists with more than two items, all items of the list should modify the first one.
Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences.
Email signatures often contain these structures, in the form of contact information:
the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

However, `list` should not be over-used. If a construction can be easily analyzed
using the grammatical relations of standard sentences, such as when there is overt coordination,
then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.

~~~ sdparse
Պետրոս Պետրոսյան , հեռ . ՝ ( 010 ) 101-010 , էլ . փոստ ՝ petros@petros.am
flat(Պետրոս, Պետրոսյան)
list(Պետրոս, հեռ)
list(Պետրոս, փոստ)
amod(փոստ, էլ)
appos(հեռ, 010)
flat(010, 101-010)
appos(փոստ, petros@petros.am)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
