---
layout: relation
title:  'nmod:npmod'
shortdef: 'noun phrases as nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which captures the cases where something syntactically a noun phrase is used as an nominal modifier in a sentence.

~~~ sdparse
Նրա վերադարձը հայրենիք հետաձգվում էր ։ \n His return to-matherland.Nom was-beeing postponed .
aux(հետաձգվում, էր)
nsubj:pass(հետաձգվում, վերադարձը)
nmod:npmod(վերադարձը, հայրենիք)
det:poss(վերադարձը, Նրա)
aux(postponed, was-beeing)
nsubj:poss(postponed, return)
nmod:npmod(return, to-matherland.Nom)
det:pass(return, His)
~~~

~~~ sdparse
Սպառազինությունների վաճառքը հակամարտության կողմերին արգելվեց ։ \n Arms sales to-the-parties.Dat of-conflict was-forbidden . 
nsubj:pass(արգելվեց, վաճառքը)
nmod:npmod(վաճառքը, կողմերին)
nmod:pass(կողմերին, հակամարտության)
nmod:pass(վաճառքը, Սպառազինությունների)
nsubj:pass(was-forbidden, sales)
nmod:npmod(sales, to-the-parties.Dat)
nmod:pass(to-the-parties.Dat, of-conflict)
nmod:pass(sales, Arms)
~~~

In conjunction with the [case]() relation, `nmod:npmod` provides a uniform analysis:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war.Dat against the-enemy
nmod:npmod(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:npmod(the-war.Dat, the-enemy)
case(the-enemy, against)
~~~

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.Dat the-table.Dat 
nmod:npmod(գիրքը, սեղանի)
case:loc(սեղանի, վրայի)
nmod:npmod(the-book, the-table.Dat)
case:loc(the-table.Dat, on.Dat)
~~~

~~~ sdparse
այգու մոտի առուն \n the-brook near.Dat the-garden.Dat
nmod:obl(առուն, այգու)
case:loc(այգու, մոտի)
nmod:obl(the-brook, the-garden.Dat)
case:loc(the-garden.Dat, near.Dat)
~~~
