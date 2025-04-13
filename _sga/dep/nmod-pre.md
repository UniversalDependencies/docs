---
layout: relation
title:  'nmod:pre'
shortdef : 'preposed genitive'
udver: '2'
---

Standard word order would see nouns in the genitive following the noun which they modify. It is possible, however, for the genitive to precede the noun which governs the dependency. The subtype `nmod:pre` is used in Old Irish treebanks to identify such preposed genitives.

### Examples

_<b>fairggae</b> findḟolt_ "(the) <b>ocean's</b> white hair"

~~~ sdparse
fairggae find ḟolt \n ocean's white hair
nmod:pre(ḟolt, fairggae)
~~~

_a<b>con</b>mír_ "the <b>dog's</b> morsel"

~~~ sdparse
a con mír \n the dog's morsel
nmod:pre(mír, con)
~~~

_<b>fidbaidae</b> fál_ "a hedge <b>of trees</b>"

~~~ sdparse
fidbaidae fál \n of_trees a_hedge
nmod:pre(fál, fidbaidae)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:05 CET -->
