---
layout: relation
title:  'nmod:npmod'
shortdef: 'noun phrase as nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which captures the cases where something syntactically a noun phrase is used as a nominal modifier in a sentence.

~~~ sdparse
Նրա վերադարձը/NOUN[Case=Nom] հայրենիք/NOUN[Case=Nom] հետաձգվում էր ։ \n His return to-matherland was-beeing postponed .
aux(հետաձգվում, էր)
nsubj:pass(հետաձգվում, վերադարձը)
nmod:npmod(վերադարձը, հայրենիք)
det:poss(վերադարձը, Նրա)
aux(postponed, was-beeing)
nsubj:poss(postponed, return)
nmod:npmod(return, to-matherland)
det:pass(return, His)
~~~

~~~ sdparse
Սպառազինությունների/NOUN[Case=Dat] վաճառքը/NOUN[Case=Nom] հակամարտության/NOUN[Case=Dat] կողմերին/NOUN[Case=Dat] արգելվեց ։ \n Arms sales to-the-parties of-conflict was-forbidden . 
nsubj:pass(արգելվեց, վաճառքը)
nmod:npmod(վաճառքը, կողմերին)
nmod:poss(կողմերին, հակամարտության)
nmod:poss(վաճառքը, Սպառազինությունների)
nsubj:pass(was-forbidden, sales)
nmod:npmod(sales, to-the-parties)
nmod:poss(to-the-parties, of-conflict)
nmod:poss(sales, Arms)
~~~

In conjunction with the [case]() relation, `nmod:npmod` provides a uniform analysis:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod:npmod(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:npmod(the-war, the-enemy)
case(the-enemy, against)
~~~

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on the-table
nmod:npmod(գիրքը, սեղանի)
case:loc(սեղանի, վրայի)
nmod:npmod(the-book, the-table)
case:loc(the-table, on)
~~~

~~~ sdparse
այգու մոտի առուն \n the-brook near the-garden
nmod:obl(առուն, այգու)
case:loc(այգու, մոտի)
nmod:obl(the-brook, the-garden)
case:loc(the-garden, near)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:11 CEST 2021 -->
