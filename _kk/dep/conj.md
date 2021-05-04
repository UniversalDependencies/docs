---
layout: relation
title:  'conj'
shortdef : 'coordinated element'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating
conjunction, such және, мен, немесе, etc. We treat conjunctions
asymmetrically: The head of the relation is the first conjunct and all the
other conjuncts depend on it via the `conj` relation.

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

Warning: If two sentences are joined with a comma and there is no relation between them, the relation should be parataxis.

## Diffs

Note: Coordination directionality is under discussion.

<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
