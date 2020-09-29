---
layout: relation
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

Coordinating conjunctions that consist of parts separated by
coordinated elements are annotated so that the first part is marked with
the type [cc:preconj]() and the second part with `cc` in the regular
fashion. Adjacent parts of acting as a single conjunction are joined
together with the [fixed]() dependency relation with the initial word
as the head and others as direct dependents of this word.

<!-- fname:cc2.pdf -->
~~~ sdparse
toisaalta kynät , toisaalta viivottimet \n on_the_one_hand pencils , on_the_other_hand rulers
cc:preconj(kynät-2, toisaalta-1)
punct(kynät-2, ,-3)
cc(kynät-2, toisaalta-4)
conj(kynät-2, viivottimet-5)
~~~

<!-- fname:cc3.pdf -->
~~~ sdparse
kynät ja / tai viivottimet \n pencils and / or rulers
cc(kynät-1, ja-2)
mwe(ja-2, /-3)
mwe(ja-2, tai-4)
conj(kynät-1, viivottimet-5)
~~~

Coordinating conjunctions are a closed class of words, and the main conjunctions are as follows:

* _ja_ "and"
* _sekä_ "and"
* _sekä... että_ "both... and"
* _-kä_ "attached to negation words, nor"
* _eli_ "a.k.a."
* _tai_ "or"
* _vai_ "or" (in a question context)
* _joko... tai_ "either... or"
* _mutta_ "but"
* _vaan_ "but" (in a negative context)

In addition, certain less frequent words or combinations of words are marked as coordinating conjunctions in TDT, namely:

* _&_
* _elikkä_ "colloquial version of *eli*, a.k.a"
* _ja / tai_ "and / or"
* _ja toisaalta_ "and on the other hand"
* _kuin_ "as/like"
* _kuin myös_ "as also"
* _kuten_ "like also"
* _milloin... milloin_ "when... when"
* _mitä... sitä_ "the... the"
* _niin... kuin_ "as well as"
* _niin kuin_ "like"
* _paitsi että_ "except that" (a two-part *preconjunction*, see [cc:preconj]())
* _paitsi... myös_ "not only... but also"
* _saati_ "let alone"
* _saati että_ "let alone that"
* _saatikka_ "let alone"
* _samoin kuin_ "the same way as"
* _siinä missä_ "as much as"
* _sitä... mitä_ "the... the"
* _sitä mukaa... mitä_ (a version of "the... the")
* _sun muuta_ "et cetera"
* _toisaalta... ja/mutta toisaalta_ "on the one hand... and/but on the other hand"
* _toisaalta... toisaalta_ "on the one hand... on the other hand"
* _vaikka_ "although" (also a subordinating conjunction)
* _vuoroin... ja vuoroin_ "in turn... and in turn"
* _vuoroin... vuoroin_ "in turn... in turn"
* _yhtä lailla... kuin (+kin)_ "as well as (also)"
* _ym._ "etc."
<!-- Interlanguage links updated Út zář 29 20:43:11 CEST 2020 -->
