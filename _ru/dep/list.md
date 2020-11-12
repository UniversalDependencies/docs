---
layout: relation
title: 'list'
shortdef: 'list'
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
Стив Джонс тел.: 555-9814 e-mail: jones@mail.ru
name(Стив-1, Джонс-2)
list(Стив-1, тел.:-3)
list(Стив-1, e-mail:-5)
appos(тел.:-3, 555-9814-4)
appos(e-mail:-5, jones@mail.ru-6)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
