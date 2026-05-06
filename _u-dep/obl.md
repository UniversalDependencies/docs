---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal dependent of a verbal, adjectival or adverbial expression or a nominal predication, with the nominal dependent functioning as a non-core (oblique) argument or modifier. (A nominal is any expression headed by a word tagged [NOUN](), [PRON]() or [PROPN](), or some elliptical version of such an expression.)

~~~ sdparse
I talked to my friend in the park
nsubj(talked-2, I-1)
obl(talked-2, friend-5)
obl(talked-2, park-8)
nmod:poss(friend-5, my-4)
case(friend-5, to-3)
det(park-8, the-7)
case(park-8, in-6)
~~~

~~~ sdparse
he is the manager of the store on Mondays
nsubj(manager-4, he-1)
cop(manager-4, is-2)
det(manager-4, the-3)
obl(manager-4, store-7)
case(store-7, of-5)
det(store-7, the-6)
obl(manager-4, Mondays-9)
case(Mondays-9, on-8)
~~~

~~~ sdparse
we are proud of our students
nsubj(proud-3, we-1)
cop(proud-3, are-2)
obl(proud-3, students-6)
case(students-6, of-4)
nmod:poss(students-6, our-5)
~~~

In conjunction with the [case]() relation, it provides a uniform analysis for variant forms with inflectional case, as in Finnish for example:

~~~ sdparse
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
obl(etsiä, johtolankaa)
case(johtolankaa, ilman)
~~~

~~~ sdparse
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
obl(etsiä, taskulampun)
case(taskulampun, kanssa)
~~~

~~~ sdparse
etsiä johtolangatta \n to_search clue.ABESSIVE
obl(etsiä, johtolangatta)
~~~

The `obl` relation is also used for temporal and locational nominal modifiers:

~~~ sdparse
Last night , I swam in the pool
obl(swam, night)
obl(swam, pool)
~~~

and for the agent of a passive verb (with the subtype [obl:agent]()):

~~~ sdparse
the cat was chased by the dog
nsubj:pass(chased, cat)
obl:agent(chased, dog)
~~~

The `obl` relation contrasts with the [nmod]() relation when the head is a nominal. Compare:

~~~ sdparse
we prefer lilies to daisies
obl(prefer-2, daisies-5)
~~~
~~~ sdparse
a preference for lilies
nmod(preference-2, lilies-4)
~~~

<!-- Interlanguage links updated St 6. května 2026, 20:48:00 CEST -->
