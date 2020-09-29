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
Steve Jones tel.: 555-9814 e-mail: jones@abc.edf
flat(Steve-1, Jones-2)
list(Steve-1, tel.:-3)
list(Steve-1, e-mail:-5)
appos(tel.:-3, 555-9814-4)
appos(e-mail:-5, jones@abc.edf-6)
~~~

## Diffs

### Prague Dependency Treebank

The `list` relation is not used in the current conversion of the PDT data to UD.
<!-- Interlanguage links updated Út zář 29 20:23:34 CEST 2020 -->
