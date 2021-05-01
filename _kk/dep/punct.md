---
layout: relation
title:  'punct'
shortdef : 'punctuation'
udver: '2'
---

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation
symbol, and the governor is the element which the punctuation symbol delimits. For instance,
with coordination, the last coordinated element is the head of all `punct` dependencies
in the coordination.

*Coordination and parataxis:*

The punctuation attaches to the immediately following conjunct.

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

*Adverbial clauses:*

The punctuation attaches to the head of the adverbial phrase.


<!-- Interlanguage links updated Čt lis 12 09:43:38 CET 2020 -->
