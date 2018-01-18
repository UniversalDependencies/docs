---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

This subtype of [compound]() covers a range of reduplicated forms in Armenian.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ),
but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

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
Ինչ եկավ - չեկավ , սկսեցին վիճել ։ \n He-came or didn't-come , they-started quarreling .
compound:redup(եկավ, չեկավ)
compound:redup(He-came, didn't-come)
advcl(սկսեցին, եկավ)
advcl(they-started, He-came)
~~~

~~~ sdparse
Եղբայրները մեջք մեջքի կանգնած էին ։ \n The-brothers was standing back to-back .
compound:redup(մեջք, մեջքի)
compound:redup(back, to-back)
acl(կանգնած, մեջք)
acl(standing, back)
~~~

~~~ sdparse
Գիրքը ձեռքից ձեռք էր անցնում ։ \n The-books passed from-hand to-hand .
compound:redup(ձեռքից, ձեռք)
compound:redup(from-hand, to-hand)
obl(անցնում, ձեռքից)
obl(passed, from-hand)
~~~
