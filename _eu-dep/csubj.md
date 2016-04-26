---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---
A clausal subject (`csubj`) is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is the main lexical verb or other predicate of the subject clause. 

*Orain ezinezkoa da **engainatzea***

*now impossible  is  **to deceive***

*it is now impossible **to deceive***

~~~ sdparse
Orain ezinezkoa da engainatzea \n it is now impossible to deceive 

advmod(da-3, Orain-1)
csubj(ezinezkoa-2,engainatzea-4)
~~~



*Hemen **inor etxekotzat hartzea** zail egiten da*

*Here someone as a relative **to take** is difficult*

*Here it is difficult **to take someone as a relative***

~~~ sdparse
Hemen inor etxekotzat hartzea zail egiten da \n Here it is difficult to take someone as a relative 

adv(egiten-6, Hemen-1)
dobj(hartzea-4,inor-2)
xcomp(hartzea-4,etxekotzat-3)
xcomp(egiten-6, zail-5)
aux(egiten-6, da-7)
~~~
