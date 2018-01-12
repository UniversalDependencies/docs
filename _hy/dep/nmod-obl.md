---
layout: relation
title:  'nmod:obl'
shortdef: 'oblique nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation. `nmod:obl` noun phrases attached to nouns are in different [cases](Case), usually follow the modified noun and functionally correspond either to a core or on oblique argument or adjunct.

~~~ sdparse
Նրա վերադարձը հայրենիք հետաձգվում էր ։ \n His return to-matherland.Nom was-beeing postponed .
aux(հետաձգվում, էր)
nsubj:pass(հետաձգվում, վերադարձը)
nmod:obl(վերադարձը, հայրենիք)
det:pass(վերադարձը, Նրա)
aux(postponed, was-beeing)
nsubj:pass(postponed, return)
nmod:obl(return, to-matherland.Nom)
det:pass(return, His)
~~~

~~~ sdparse
Սպառազինությունների վաճառքը հակամարտության կողմերին արգելվեց ։ \n Arms sales to-the-parties.Dat of-conflict was-forbidden . 
nsubj:pass(արգելվեց, վաճառքը)
nmod:obl(վաճառքը, կողմերին)
nmod:pass(կողմերին, հակամարտության)
nmod:pass(վաճառքը, Սպառազինությունների)
nsubj:pass(was-forbidden, sales)
nmod:obl(sales, to-the-parties.Dat)
nmod:pass(to-the-parties.Dat, of-conflict)
nmod:pass(sales, Arms)
~~~

In conjunction with the [case]() relation, `nmod:obl` provides a uniform analysis for the oblique alternation:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war.Dat against the-enemy
nmod:obl(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:obl(the-war.Dat, the-enemy)
case(the-enemy, against)
~~~

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.Dat the-table.Dat 
nmod:obl(գիրքը, սեղանի)
case(սեղանի, վրայի)
nmod:obl(the-book, the-table.Dat)
case(the-table.Dat, on.Dat)
~~~

~~~ sdparse
այգու մոտի առուն \n the-brook near.Dat the-garden.Dat
nmod:obl(առուն, այգու)
case(այգու, մոտի)
nmod:obl(the-brook, the-garden.Dat)
case(the-garden.Dat, near.Dat)
~~~
