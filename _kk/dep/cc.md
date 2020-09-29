---
layout: relation
title: 'cc'
shortdef : 'coordinating conjunction'
---

*Coordinating conjunctions* are marked as dependents of the last 
coordinated element, and the dependency type used is `cc`.

~~~ sdparse
Олар Финляндия , Швеция және Эстонияидан кейін Ресейге барды . \n They Finland , Sweden and Estonia-from after Russia-to went .
case(Эстонияидан-6, кейін-7)
conj(Эстонияидан-6, Швеция-4)
cc(Эстонияидан-6, және-5)
conj(Эстонияидан-6, Финляндия-2)
punct(Эстонияидан-6, ,-3)
nmod(барды-9, Эстонияидан-6)
subj(барды-9, Олар-1)
nmod(барды-9, Ресейге-8)
~~~

Note: Coordination directionality is under discussion. 
<!-- Interlanguage links updated Út zář 29 20:23:22 CEST 2020 -->
