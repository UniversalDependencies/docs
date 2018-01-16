---
layout: relation
title: 'compound:svc'
shortdef: 'serial compound verb'
udver: '2'
---

`compound:svc` marks compound verb constructs, in non-nominal complex predicates. In Armenian the both verbs typically are finite, the finite verb that controls the argument structure is the head. These verbs are also often the semantic heads of the clause.

~~~ sdparse
Մարդկանց հոսանքը քշեց տարավ ինձ տակառների մոտից ։ \n
compound:svc(քշեց, տարավ)
nsubj(քշեց, հոսանքը)
obj(քշեց, ինձ)
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
