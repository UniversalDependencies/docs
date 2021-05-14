---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---
A clausal subject (`csubj`) is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is the main lexical verb or other predicate of the subject clause.

*Orain ezinezkoa da **engainatzea** .*

*It is now impossible **to deceive** .*

~~~ sdparse
Orain ezinezkoa da engainatzea .\n Now impossible is to_deceive

advmod(da-3, Orain-1)
cop(ezinezkoa-2, da-3)
csubj(ezinezkoa-2,engainatzea)
punct(ezinezkoa-2, .-5)
~~~


*Hemen inor etxekotzat **hartzea** zail egiten da .*

*Here it is difficult **to take** someone as relative .*

~~~ sdparse
Hemen inor etxekotzat hartzea zail egiten da .\n Here someone relative_as to_take difficult is .

adv(egiten-6, Hemen-1)
dobj(hartzea-4,inor-2)
xcomp(hartzea-4, etxekotzat-3)
xcomp(egiten-6, zail-5)
aux(egiten-6, da-7)
punct(egiten-6, .-8)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
