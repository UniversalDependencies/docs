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
<!-- Interlanguage links updated Út zář 29 18:41:14 CEST 2020 -->
