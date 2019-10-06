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
det(occasione, l')
obj(offerta, l')
dislocated(offerta, occasione)
~~~
~~~ sdparse
li abbiamo cacciati già i fascisti
obj(cacciati, li)
dislocated(cacciati, fascisti)
~~~
