---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the two relations for multiword expressions (MWEs) in the Slovenian treebanks (in addition to [flat]()). It is used for connecting set phrases with a particular grammatical role, such as multi-word conjunctions, prepositions, adverbs, and other kinds of syntactic relations that usually also have a fixed form. The head of the relation is always the first word of the expression, while all the other words in the expression dependend on it.

~~~ sdparse
Po več kot tridesetih letih tega dela \n After more than thirty years of-this work
fixed(več,kot)
fixed(more,than)
~~~
~~~ sdparse
Čisto me je prevzelo , tako da je to opazila tudi Jasna \n Completely me aux-PAST it-overwhelmed , so that aux-PAST this noticed also Jasna
fixed(tako,da)
fixed(so,that)
~~~
~~~ sdparse
na Kolpi bo tako imenovana schengenska meja \n on Kolpa will-be so called Schengen border
fixed(tako,imenovana)
fixed(so,called)
~~~

If a comma appears in between the elements of a multi-word expression without affecting the meaning or function of the expression as a whole, the `fixed` relation is applied to each individual word in the same way as above. The comma is annotated as `punct` and also depends on the head of the multi-word expression.

~~~ sdparse
kljub temu , da \n despite the-fact , that
fixed(kljub,temu)
fixed(kljub,da)
punct(kljub,,-3)
fixed(despite,the-fact)
fixed(despite,that)
punct(despite,,-8)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:15 CEST -->
