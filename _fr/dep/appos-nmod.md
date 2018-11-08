---
layout: relation
title: 'appos:nmod'
shortdef: 'nominal modifier apposition'
udver: '2'
---

The `appos:nmod` relation is used only in **UD_French-Spoken** for appositions which modify nominal elements.
The nominal modifier is not introduced by a preposition (else we use the [nmod]() relation).
Contrary to the [appos:conj]() relation, the `appos:nmod` relation doesn't respect the prosody of lists.

Here are a few examples:

~~~ sdparse
Le journal Libération a refusé de dévoiler ses sources concernant le dossier Fillon . \n The newspaper Liberation refused to reveal its sources in the fillon case.
appos:nmod(journal, Libération)
appos:nmod(dossier, Fillon)
~~~

~~~ sdparse
l' affaire Dreyfus
appos:nmod(affaire, Dreyfus)
~~~

~~~ sdparse
la société Hebrard
appos:nmod(société, Hebrard)
~~~

~~~ sdparse
la région Auvergne
appos:nmod(région, Auvergne)
~~~

~~~ sdparse
La rue Faidherbe et la place Voltaire sont situées dans le même quartier. \n Faidherbe street and place Voltaire are located in the same neigbourhood.
appos:nmod(rue, Faidherbe)
appos:nmod(place, Voltaire)
~~~

~~~ sdparse
Monsieur Dupont habitait près de la ligne Maginot. \n Mister Dupont lived close to the Maginot Line.
appos:nmod(Monsieur, Dupont)
~~~

N.B.: for phrases like "la ville de Paris" the [nmod]() relation seems more appropriate because of the preposition (which cannot be removed *la ville Paris)

~~~ sdparse
la ville de Paris
nmod(ville, Paris)
case(Paris, de)
~~~

The `appos:nmod` relation is used instead of `flat`, for "le président Macron", which follows in French the same pattern as other `appos:nmod`. The relation is also used between first and second name:

~~~ sdparse
le président Macron
appos:nmod(président, Macron)
~~~

~~~ sdparse
Emmanuel Macron
appos:nmod(Emmanuel, Macron)
~~~

~~~ sdparse
l’ acteur Gaspard Ulliel
appos:nmod(acteur, Gaspard)
appos:nmod(Gaspard, Ulliel)
~~~

~~~ sdparse
la rue Victor Hugo
appos:nmod(rue, Victor)
appos:nmod(Victor, Hugo)
~~~
