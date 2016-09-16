---
layout: relation
title: 'list'
shortdef: 'list'
---

The `list` relation is used for chains of comparable items. It is not currently attested in the Swedish treebank.

Web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures in particular contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

In lists with more than two items, all items of the list shoud modify the first one.

~~~ sdparse
Steve Jones Mobil: 555-9814 Mejl: jones@abc.edf
name(Steve-1, Jones-2)
list(Steve-1, Mobil:-3)
list(Steve-1, Mejl:-5)
appos(Mobil:-3, 555-9814-4)
appos(Mejl:-5, jones@abc.edf-6)
~~~
