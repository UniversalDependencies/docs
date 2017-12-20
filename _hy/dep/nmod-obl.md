---
layout: relation
title:  'nmod:obl'
shortdef: 'oblique nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation.

`nmod:obl` noun phrases attached to nouns are in different [cases](Case), usually follow the modified noun and functionally correspond to a non-core (oblique) argument or adjunct.

~~~ sdparse
Նրա վերադարձը հայրենիք հետաձգվում էր ։ \n His return to-matherland.`Nom` was-beeing postponed .
aux(հետաձգվում, էր)
nsubj:pass(հետաձգվում, վերադարձը)
nmod:obl(վերադարձը, հայրենիք)
nsubj:pass(վերադարձը, Նրա)
aux(postponed, was-beeing)
nsubj:pass(postponed, return)
nmod:obl(return, to-matherland.`Nom`)
nsubj:pass(return, His)
~~~

~~~ sdparse
Սպառազինությունների վաճառքը հակամարտության կողմերին արգելվեց ։ \n Arms sales to-the-parties.`Dat` of-conflict  was-forbidden . 
nsubj:pass(արգելվեց, վաճառքը)
nmod:obl(վաճառքը, կողմերին)
nmod:pass(կողմերին, հակամարտության)
nmod:pass(վաճառքը, Սպառազինությունների)
nsubj:pass(was-forbidden, sales)
nmod:obl(sales, to-the-parties.`Dat`)
nmod:pass(to-the-parties.`Dat`, of-conflict)
nmod:pass(sales, Arms)
~~~

In conjunction with the [case]() relation, `nmod:obl` provides a uniform analysis for the oblique alternation:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod:obl(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:obl(the-war, the-enemy)
case(the-enemy, against)
~~~

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.`Dat` of-the-table 
nmod:obl(գիրքը, սեղանի)
case(սեղանի, վրայի)
nmod:obl(the-book, of-the-table)
case(of-the-table, on.`Dat`)
~~~

~~~ sdparse
այգու մոտի առուն \n
nmod:obl(առուն, այգու)
case(այգու, մոտի)
~~~
