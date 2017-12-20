---
layout: relation
title:  'nmod:poss'
shortdef : 'possessive nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which covers only those possessives that are expressed using the dative [case](Case). If a possessive [pronoun](Pron) is used, the relation is labeled `nmod`.

~~~ sdparse
տնօրենի գրասենյակը \n office of-the-director.`Dat`
nmod:poss(գրասենյակը, տնօրենի)
nmod:poss(office, of-the-director.`Dat`)
~~~

~~~ sdparse
նրա գրասենյակը \n his office
nmod:poss(գրասենյակը, նրա)
nmod:poss(office, his)
~~~

In conjunction with the [case]() relation, `nmod:poss` provides a uniform analysis for the possessive alternation:

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.`Dat` of-the-table 
nmod:poss(գիրքը, սեղանի)
case(սեղանի, վրայի)
nmod:poss(the-book, of-the-table)
case(of-the-table, on.`Dat`)
~~~
