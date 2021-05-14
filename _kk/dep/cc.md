---
layout: relation
title: 'cc'
shortdef : 'coordinating conjunction'
udver: '2'
---

*Coordinating conjunctions* are marked as dependents of the immediately following
coordinated element, and the dependency type used is `cc`.

~~~ sdparse
Олар Финляндия , Швеция және Эстонияидан кейін Ресейге барды . \n They Finland , Sweden and Estonia-from after Russia-to went .
nsubj(барды-9, Олар-1)
conj(Финляндия-2, Швеция-4)
conj(Финляндия-2, Эстонияидан-6)
punct(Швеция-4, ,-3)
cc(Эстонияидан-6, және-5)
case(Финляндия-2, кейін-7)
obl(барды-9, Финляндия-2)
obl(барды-9, Ресейге-8)
punct(барды-9, .-10)
~~~

Note: Coordination directionality is under discussion.

<!-- Interlanguage links updated Pá kvě 14 11:08:54 CEST 2021 -->
