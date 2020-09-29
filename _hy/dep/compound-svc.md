---
layout: relation
title: 'compound:svc'
shortdef: 'serial compound verb'
udver: '2'
---

`compound:svc` marks compound verb constructs, in non-nominal complex predicates. In Armenian the both verbs typically are finite, the finite verb that controls the argument structure is the head. These verbs are also often the semantic heads of the clause.

~~~ sdparse
Մարդկանց հոսանքը քշեց տարավ ինձ տակառների մոտից ։ \n The-stream of-people banished took me away-from the-barrels . 
compound:svc(քշեց, տարավ)
nsubj(քշեց, հոսանքը)
obj(քշեց, ինձ)
obl(քշեց, տակառների)
case:loc(տակառների, մոտից)
nmod:poss(հոսանքը, Մարդկանց)
compound:svc(banished, took)
nsubj(banished, The-stream)
obj(banished, me)
obl(banished, the-barrels)
case:loc(the-barrels, away-from)
nmod:poss(The-stream, of-people)
~~~

~~~ sdparse
բռնել բերել \n to-catch to-bring
compound:svc(բռնել, բերել)
compound:svc(to-catch, to-bring)
~~~

~~~ sdparse
ասել - խոսել \n to-speak - to-talk
compound:svc(ասել, խոսել)
compound:svc(to-speak, to-talk)
~~~

~~~ sdparse
գրել - ջնջել \n to-write to-erase
compound:svc(գրել, ջնջել)
compound:svc(to-write, to-erase)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:13 CEST 2020 -->
