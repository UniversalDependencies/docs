---
layout: entry
title:  'cc'
shortdef : 'coordinating conjunction'
---

*Coordinating conjunctions* are marked as dependents of the first
 coordinated element, and the dependency type used is `cc`.

<!-- fname:cc1.pdf -->
~~~ sdparse
kirjat , kynät ja viivottimet \n books , pencils and rulers
conj(kirjat-1, kynät-3)
punct(kirjat-1, ,-2)
cc(kirjat-1, ja-4)
conj(kirjat-1, viivottimet-5)
~~~

<!--details-->

Coordinating conjunctions that consist of parts separated by coordinated elements are marked so that the first part is marked with the type [preconj]() and the second part with `cc` in the regular fashion. Adjacent parts of conjunctions are joined together with the most general dependency type [dep](), the rightmost word being the head.

<!-- fname:cc2.pdf -->
~~~ sdparse
toisaalta kynät , toisaalta viivottimet \n on_the_one_hand pencils , on_the_other_hand rulers
preconj(kynät-2, toisaalta-1)
punct(kynät-2, ,-3)
cc(kynät-2, toisaalta-4)
conj(kynät-2, viivottimet-5)
~~~

<!-- fname:cc3.pdf -->
~~~ sdparse
kynät ja / tai viivottimet \n pencils and / or rulers
cc(kynät-1, tai-4)
dep(tai-4, /-3)
dep(/-3, ja-2)
conj(kynät-1, viivottimet-5)
~~~

Coordinating conjunctions are a closed class of words, and the main conjunctions are as follows:

+ ja (and)
+ sekä (and)
+ sekä... että (both... and)
+ -kä (attached to negation words, nor)
+ eli (a.k.a.)
+ tai (or)
+ vai (or, in a question context)
+ joko... tai (either... or)
+ mutta (but)
+ vaan (but, in a negative context)


In addition, certain less frequent words or combinations of words are marked as coordinating conjunctions in TDT, namely:

+ &
+ elikkä (colloquial version of *eli*, a.k.a)
+ ja / tai (and / or)
+ ja toisaalta (and on the other hand)
+ kuin (as/like)
+ kuin myös (as also)
+ kuten (like also)
+ milloin... milloin (when... when)
+ mitä... sitä (the... the)
+ niin... kuin (as well as)
+ niin kuin (like)
+ paitsi että (except that) (a two-part *preconjunction*, see [preconj]())
+ paitsi... myös (not only... but also)
+ saati (let alone)
+ saati että (let alone that)
+ saatikka (let alone)
+ samoin kuin ("the same way as")
+ siinä missä ("as much as")
+ sitä... mitä (the... the)
+ sitä mukaa... mitä (a version of *the... the*)
+ sun muuta (et cetera)
+ toisaalta... ja/mutta toisaalta (on the one hand... and/but on the other hand)
+ toisaalta... toisaalta (on the one hand... on the other hand)
+ vaikka (although) (also a subordinating conjunction)
+ vuoroin... ja vuoroin (in turn... and in turn)
+ vuoroin... vuoroin (in turn... in turn)
+ yhtä lailla... kuin (+kin) (as well as (also))
+ ym. (etc.)
