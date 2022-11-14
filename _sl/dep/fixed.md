---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the two relations for multiword expressions (MWEs) in the Slovenian treebanks (in addition to [flat]()). It is used for connecting set phrases with a particular grammatical role, such as multi-word conjunctions, prepositions, adverbs, and other kinds of syntactic relations that usually also have a fixed form. The head of the relation is always the first word of the expression, while all the other words in the expression dependend on it.

~~~ sdparse
Po več kot tridesetih letih tega dela
fixed(več,kot)
~~~
~~~ sdparse
Čisto me je prevzelo, tako da je to opazila tudi Jasna
fixed(tako,da)
~~~
~~~ sdparse
na Kolpi bo tako imenovana schengenska meja
fixed(tako,imenovana)
~~~

If a comma appears in between the elements of a multi-word expression without affecting the meaning or function of the expression as a whole, the `fixed` relation is applied to each individual word in the same way as above. The comma is annotated as `punct` and also depends on the head of the multi-word expression.

~~~ sdparse
kljub temu , da
fixed(kljub,temu)
fixed(kljub,da)
punct(kljub,,)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:26 CET 2022 -->
