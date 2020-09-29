---
layout: relation
title:  'punct'
shortdef : 'punctuation'
---

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation 
symbol, and the governor is the element which the punctuation symbol delimits. For instance, 
with coordination, the last coordinated element is the head of all `punct` dependencies 
in the coordination.

*Coordination and parataxis:*

The punctuation attaches to the governor.

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

*Adverbial clauses:*

The punctuation attaches to the head of the adverbial phrase.


<!-- Interlanguage links updated Út zář 29 20:32:01 CEST 2020 -->
