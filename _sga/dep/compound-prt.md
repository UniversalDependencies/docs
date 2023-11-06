---
layout: relation
title:  'compound:prt'
shortdef : 'preverbs'
udver: '2'
---

The subtype `compound:prt` is used in Old Irish UD treebanks to express the relation between preverbs and the remaining portion of a compound verb, where the preverb is considered an integral part of the verb expression. The governor of the dependency is the verb, and the dependent is the preverb.

### Examples

_.i. <b>at</b>tá diṡeirc_ "It <b>is</b> for love"

~~~ sdparse
.i. attá diṡeirc \n i.e. it_is for love
compound:prt(tá, at)
~~~

_<b>as</b>beirsom anísiu_ "He says this (aforementioned thing)"

~~~ sdparse
asbeirsom anísiu \n he_says this
compound:prt(beir, as)
~~~

### Further Examples

* _<b>ad</b>cí_ "he sees"
* _<b>do</b>beir_ "he gives"
* _<b>fo</b>gaib_ "he finds"
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:38 CET -->
