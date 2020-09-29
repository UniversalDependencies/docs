---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The <code>dislocated</code> relation is used for fronted or postposed elements that do not fulfill the usual core grammatical relations of a sentence. 
In Italian we use this relation in cases of clitic doubling, by considering the clitic pronoun as the core argument of the predicate and the lexical element (be it fronted or postposed)
as the dislocated item of the same predicate.

~~~ sdparse
Wojtyla non l' avevo mai sentito parlare così . 
obj(sentito, l')
dislocated(sentito, Wojtyla)
~~~
~~~ sdparse
l' occasione propizia glie l' ha offerta Alija Izetbegovic
det(occasione, l'-1)
obj(offerta, l'-5)
dislocated(offerta, occasione)
nsubj(offerta, Alija)
~~~
~~~ sdparse
li abbiamo cacciati già i fascisti
obj(cacciati, li)
dislocated(cacciati, fascisti)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:51 CEST 2020 -->
