---
layout: relation
title:  'parataxis'
shortdef : 'parataxis'
---

`parataxis` dependencies mark two different phenomena. Firstly, they are used with certain implicit coordinations. These coordinations are recognized by two factors: there is no coordinating conjunction, and the independent clauses are separated by a colon, semicolon or a dash. As with explicit coordinations, the first element is the governor. Also parenthetical and interjected clauses can receive the `parataxis` dependency. If there is a coordinating conjunction present (regardless of punctuation) or if the clauses are separated by merely a comma, the coordination type `conj` is used (differs from the UD).

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

~~~ sdparse
Ilmoittakaa suoraan sähköpostilla ( palautelomakekin käy ) .
nmod(Ilmoittakaa-1, sähköpostilla-3)
advmod(sähköpostilla-3, suoraan-2)
punct(Ilmoittakaa-1, .-8)
parataxis(Ilmoittakaa-1, käy-6)
nsubj(käy-6, palautelomakekin-5)
punct(käy-6, (-4)
punct(käy-6, )-7)
~~~

`parataxis` is also used for direct speech. If the verb of saying (or thinking, etc.) precedes the utterance, it acts as the governor, and the main verb or predicative of the utterance is the dependent. However, if the utterance precedes the speech verb, the relation is reversed. 

~~~ sdparse
Mies sanoi : Tulen kotiin vasta myöhään . \n The_man said : I_will_come home only late .
nsubj(Mies-1, sanoi-2)
punct(sanoi-2, :-3)
nmod(Tulen-4, kotiin-5)
advmod(Tulen-4, myöhään-7)
advmod(myöhään-7, vasta-6)
parataxis(sanoi-2, Tulen-4)
punct(sanoi-2, .-8)
~~~

<!-- fname:parataxis_speech.pdf -->
~~~ sdparse
Tulen kotiin vasta myöhään , mies sanoi . \n I_will_come home only late , the_man said .
nmod(Tulen-1, kotiin-2)
advmod(Tulen-1, myöhään-4)
advmod(myöhään-4, vasta-3)
punct(Tulen-1, ,-5)
nsubj(sanoi-7, mies-6)
parataxis(Tulen-1, sanoi-7)
punct(Tulen-1, .-8)
~~~

##Diffs
###Turku Dependency Treebank

If the clauses are separated by a comma and there is no coordinating conjunction, TDT does not use `parataxis` but `conj`.
