---
layout: relation
title: 'mark:advmod'
shortdef: 'adverbial modifier confusable with a subordination marker'
udver: '2'
---

This relation subtype is currently used only for variants of the adverb _coment_ “how”.
Note that it is a divergence from the UD guidelines. Since the word is tagged [ADV](),
the main relation type should be [advmod]().

~~~ sdparse
et quant il orent mengié si demanderent de la costume dou chastel et coment ele estoit establie et por quoi
ccomp(demanderent, establie)
cc(establie, et-13)
mark:advmod(establie, coment)
nsubj(establie, ele)
aux:pass(establie, estoit)
conj(coment, quoi)
cc(quoi, et-18)
case(quoi, por)
~~~
