---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for reduplicating constructions in Armenian. We consider the case of a reduplication only when the same word is repeated in a sequence, all of the repetitions having the same function and head in the clause, often with no other words belonging to other phrases intervening. This allows for intermediate elements like conjunctions, adpositions, punctuation or the reduplicated elements' own dependents.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ), but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

~~~ sdparse
Եղած - չեղած , մի հաշիվ է ։ \n Existing - not-existing , is the same .
compound:redup(Եղած, չեղած)
csubj(հաշիվ, Եղած)
cop(հաշիվ, է)
det(հաշիվ, մի)
compound:redup(Existing, not-existing)
csubj(same, Existing)
cop(same, is)
det(same, the)
~~~

~~~ sdparse
Ինչ եկավ - չեկավ , սկսեցին վիճել ։ \n As he-came - didn't-come , they-started quarreling .
compound:redup(եկավ, չեկավ)
compound:redup(he-came, didn't-come)
advcl(սկսեցին, եկավ)
advcl(they-started, he-came)
~~~

~~~ sdparse
Եղբայրները մեջք մեջքի կանգնած էին ։ \n The-brothers was standing back to-back .
compound:redup(մեջք, մեջքի)
compound:redup(back, to-back)
acl(կանգնած, մեջք)
acl(standing, back)
~~~

~~~ sdparse
Գիրքը ձեռքից ձեռք էր անցնում ։ \n The-book passed from-hand to-hand .
compound:redup(ձեռքից, ձեռք)
compound:redup(from-hand, to-hand)
obl(անցնում, ձեռքից)
obl(passed, from-hand)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:06 CEST -->
