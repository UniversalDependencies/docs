---
udver: '2'
layout: relation
title: 'nmod:relat'
shortdef: 'relational nominal modifier'
---

The `nmod:relat` subtype of the [nmod]() relation is used for a nominal modifier of another
nominal with _relational_ meaning, see Dunn (1999: §8.7).

~~~ sdparse
Гымнинэ игыткин чакэттомгыт ымыԓьо Кымъытваԓьынтэыʼм . \n My today-REL sisters all Kamytwals .
nmod:poss(чакэттомгыт, Гымнинэ)
nmod:poss(sisters, My)
nmod:relat(чакэттомгыт, игыткин)
nmod:relat(sisters, today-REL)
det(чакэттомгыт, ымыԓьо)
det(sisters, all)
nsubj(Кымъытваԓьынтэыʼм, чакэттомгыт)
nsubj(Kamytwals, sisters)
punct(Кымъытваԓьынтэыʼм, .-6)
punct(Kamytwals, .-13)
~~~

“All my sisters that are now alive are Kamytwals.”

<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
