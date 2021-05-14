---
layout: relation
title:  'advcl'
shortdef : 'adverbial clause modifier'
udver: '2'
---

*Adverbial clause modifiers* (`advcl`) are subordinate clauses that
are not complements. Also non-complement infinitival or temporal clauses
(*lauseenvastike*, see for instance
(see ISK [§876](http://scripta.kotus.fi/visk/sisallys.php?p=876)) and non-complement participles modifying verbs are
marked as `advcl`. If there is a subordinating conjunction present, it
is marked with the dependency type [mark]().

<!-- fname:advcl.pdf -->
~~~ sdparse
Kun äiti tuli kotiin , isä keitti kahvia . \n When mother came home , father made coffee .
mark(tuli-3, Kun-1)
nsubj(tuli-3, äiti-2)
nmod(tuli-3, kotiin-4)
punct(tuli-3, ,-5)
nsubj(keitti-7, isä-6)
advcl(keitti-7, tuli-3)
obj(keitti-7, kahvia-8)
punct(keitti-7, .-9)
~~~

~~~ sdparse
Äidin tullessa kotiin isä keitti kahvia . \n Mother when_came home father made coffee .
nsubj(tullessa-2, Äidin-1)
nmod(tullessa-2, kotiin-3)
nsubj(keitti-5, isä-4)
advcl(keitti-5, tullessa-2)
obj(keitti-5, kahvia-6)
punct(keitti-5, .-7)
~~~

~~~ sdparse
Huolestuneena juoksin hänen luokseen . \n Worried I_ran him to .
advcl(juoksin-2, Huolestuneena-1)
nmod(juoksin-2, hänen-3)
case(hänen-3, luokseen-4)
punct(juoksin-2, .-5)
~~~

The dependency type `advcl` is used also in comparative
constructions, most often involving adjectives in the comparative
form. The head of the `advcl` dependency is the comparative
wordform, and the dependent is the compared element.

The annotation of comparative and superlative structures is described in
[Comparatives and superlatives](/docs/fi/overview/specific-syntax.html#comparatives-and-superlatives).

<!-- fname:compar.pdf -->
~~~ sdparse
parempi kuin eilinen näytelmä \n better than yesterday's(adj.) play
advcl(parempi-1, näytelmä-4)
mark(näytelmä-4, kuin-2)
amod(näytelmä-4, eilinen-3)
~~~

### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=876>
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->
