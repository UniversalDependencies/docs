---
layout: entry
title:  'parataxis'
shortdef : 'parataxis'
---

`parataxis` dependencies mark two different phenomena. Firstly, they are used with certain implicit coordinations. These coordinations are recognized by two factors: there is no coordinating conjunction, and the independent clauses are separated by a colon, semicolon or a dash. As with explicit coordinations, the first element is the governor. Also parenthetical clauses can receive the `parataxis` dependency. If there is a coordinating conjunction present (regardless of punctuation) or if the clauses are separated by merely a comma, the coordination type `conj` is used.

<!-- fname:parataxis_coord.pdf -->
~~~ sdparse
Lapset leipoivat piparit ; äiti paistoi ne . \n The_children made the_cookies ; the_mother baked them .
nsubj(leipoivat-2, Lapset-1)
dobj(leipoivat-2, piparit-3)
punct(leipoivat-2, ;-4)
punct(leipoivat-2, .-8)
parataxis(leipoivat-2, paistoi-6)
nsubj(paistoi-6, äiti-5)
dobj(paistoi-6, ne-7)
~~~

`parataxis` is also used for direct speech. The verb of saying (or thinking, etc.)  acts as the governor, and the main verb or predicative of the utterance is the dependent.

<!-- fname:parataxis_speech.pdf -->
~~~ sdparse
Tulen kotiin vasta myöhään , mies sanoi . \n I_will_come home only late , the_man said .
nmod(Tulen-1, kotiin-2)
advmod(Tulen-1, myöhään-4)
advmod(myöhään-4, vasta-3)
punct(Tulen-1, ,-5)
nsubj(sanoi-7, mies-6)
parataxis(sanoi-7, Tulen-1)
punct(sanoi-7, .-8)
~~~
