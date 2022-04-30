---
layout: relation
title:  'list'
shortdef : 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items.
Web text often contains passages which are meant to be interpreted
as lists but are parsed as single sentences. Email signatures in
particular contain these structures, in the form of contact
information: the different contact information items are labeled
as `list`; the key-value pair relations are labeled as [appos]().

In lists with more than two items, all items of the list should
modify the first one.

~~~ sdparse
Maria Korhonen Puhelin: 555-9814 Sähköposti: mkorhonen@example.com
name(Maria-1, Korhonen-2)
list(Maria-1, Puhelin:-3)
list(Maria-1, Sähköposti:-5)
appos(Puhelin:-3, 555-9814-4)
appos(Sähköposti:-5, mkorhonen@example.com-6)
~~~

## Diffs

### Turku Dependency Treebank

`list` is not annotated in TDT and is not used in
the current version of the UD Finnish corpus.
<!-- Interlanguage links updated St lis 3 20:58:56 CET 2021 -->
