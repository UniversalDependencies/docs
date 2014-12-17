---
layout: relation
title:  'advcl:compar'
shortdef : 'comparative'
---

The dependency type `advcl:compar` is used in comparative
constructions, most often involving adjectives in the comparative
form. The head of the `advcl:compar` dependency is the comparative
wordform, and the dependent is the compared element.

The annotation of comparative and superlative structures is described in
[Comparatives and superlatives](/docs/fi/overview/specific-syntax.html#comparatives-and-superlatives).

<!-- fname:compar.pdf -->
~~~ sdparse
parempi kuin eilinen näytelmä \n better than yesterday's(adj.) play
advcl:compar(parempi-1, näytelmä-4)
comparator(näytelmä-4, kuin-2)
amod(näytelmä-4, eilinen-3)
~~~
