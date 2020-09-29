---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. Web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures in particular contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

In lists with more than two items, all items of the list shoud modify the first one.

~~~ sdparse
Steve Jones Phone: 555-9814 Email: jones@abc.edf
name(Steve-1, Jones-2)
list(Steve-1, Phone:-3)
list(Steve-1, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
~~~

In an itemized or numbered list, we have been taking the item marker as a [nummod]() dependent of the head of the contentful list item. This appears to be better than the alternatives….
<!-- Interlanguage links updated Út zář 29 18:41:25 CEST 2020 -->
