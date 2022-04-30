---
layout: relation
title:  'nmod:poss'
shortdef : 'genitive modifier'
udver: '2'
---

The dependency type `poss` stands for *possessive* in the original SD
scheme, but in UD Finnish, the corresponding type `nmod:poss` is used
for genitive modifiers in general, which in Finnish often but not nearly
always imply possession. There are two kinds of genitive modifiers  that
are not annotated using the general genitive modifier type: *the genitive
object*, [nmod:gobj]() and *the genitive subject*, [nmod:gsubj]().

<!-- fname:poss1.pdf -->
~~~ sdparse
Matin penaali jäi kouluun . \n Matti's pencilcase was_left at_school .
nmod:poss(penaali-2, Matin-1)
nsubj(jäi-3, penaali-2)
nmod(jäi-3, kouluun-4)
punct(jäi-3, .-5)
~~~

<!-- fname:poss2.pdf -->
~~~ sdparse
Autossa on kahden litran moottori . \n In_the_car is two litre's engine .
nmod(on-2, Autossa-1)
nsubj(on-2, moottori-5)
punct(on-2, .-6)
nmod:poss(moottori-5, litran-4)
nummod(litran-4, kahden-3)
~~~

###Diffs

FinnTreeBank (FI_FTB) applies
the universal relation [`nmod`](http://universaldependencies.org/u/dep/all.html#al-u-dep/nmod)
instead of the language-specific `nmod:poss`.
<!-- Interlanguage links updated St lis 3 20:58:59 CET 2021 -->
