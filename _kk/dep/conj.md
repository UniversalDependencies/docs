---
layout: relation
title:  'conj'
shortdef : 'coordinated element'
---

A conjunct is the relation between two elements connected by a coordinating 
conjunction, such және, мен, немесе, etc. We treat conjunctions 
asymmetrically: The head of the relation is the last conjunct and all the 
other conjuncts depend on it via the `conj` relation.

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

Warning: If two sentences are joined with a comma and there is no relation between them, the relation should be parataxis. 

## Diffs

Note: Coordination directionality is under discussion. 
<!-- Interlanguage links updated Út zář 29 18:41:15 CEST 2020 -->
