---
layout: relation
title:  'mark'
shortdef : 'marker'
udver: '2'
---

A *marker* (`mark`) is the subordinating conjunction in a
non-complement subordinate clause.

<!-- fname:mark.pdf -->
~~~ sdparse
Kun tulin kotiin , jätin avaimen pöydälle . \n When I_came home , I_left key on_table .
mark(tulin-2, Kun-1)
nmod(tulin-2, kotiin-3)
punct(tulin-2, ,-4)
advcl(jätin-5, tulin-2)
obj(jätin-5, avaimen-6)
nmod(jätin-5, pöydälle-7)
punct(jätin-5, .-8)
~~~

The dependency relation `mark` is also used to identify the
*complementizer* appearing in most clausal complements, where the head
of the dependency is the main verb of the subordinate clause. The only
complementizer in Finnish is _että_ "that". (These relations are
annotated `complm` in TDT.)

<!-- fname:complm.pdf -->
~~~ sdparse
Sanoin , että hän voi tulla . \n I_said , that he can come .
ccomp(Sanoin-1, tulla-6)
punct(tulla-6, ,-2)
mark(tulla-6, että-3)
nsubj(tulla-6, hän-4)
aux(tulla-6, voi-5)
punct(Sanoin-1, .-7)
~~~

<!--details-->

The *comparative conjunction* (most commonly *kuin*, which corresponds
roughly to "than" and "as" in English) is marked with the dependency
type `mark`. The head of the dependency is the element
being compared.

<!-- fname:comparator.pdf -->
~~~ sdparse
enemmän kuin haluaisin \n more than I_would_want
advcl(enemmän-1, haluaisin-3)
mark(haluaisin-3, kuin-2)
~~~


The main subordinating conjunctions are the following:

* _että_ "that"
* _jotta_ "so that"
* _koska_ "because"
* _kun_ "when"
* _jos_ "if"
* _vaikka_ "even though"
* _kunnes_ "until"
* _kuin_ "as, than"

Note that the conjunction *kuin* can also serve as an
adverb modifier [advmod]().

In addition to the basic subordinating conjunctions, the following
words or word combinations can be considered subordinating
conjunctions. Not all of these expressions have a direct
counterpart in English, and thus the translations are approximate.

* _ennenkuin_ "before"
* _jahka_ "as soon as"
* _jos kohta_ "even if"
* _kun taas_ "whereas"
* _kuten_ "like, as"
* _mikäli_ "if"
* _mitä nyt_ "only"
* _muuten_ "otherwise"
* _niin_ "so"
* _niinkuin/niinku_ "like" (standard and colloquial version)
* _paitsi_ "except"
* _paitsi että_ "except that"
* _paitsi jos_ "except if"
* _sikäli kuin_ "if"
* _sillä_ "because"
* _sitten kun_ "then when"
* _vähän kuin_ "a bit like"
<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
