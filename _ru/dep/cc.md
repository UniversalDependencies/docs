---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.
A `cc` is the relation between a conjunct and
the [coordinating conjunction](ru-pos/CCONJ) that precedes it.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
Он старый и мудрый мужчина. \n He-is old and wise man .
cc(старый, и)
cc(old, and)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, and it depends on the root
predicate of the sentence.
(In fact there is a coordination that spans multiple sentences.
We cannot attach a word to the first conjunct because it is in another sentence.
Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ sdparse
И потом мы ушли . \n And then we left .
cc(ушли, И)
cc(left, And)
~~~

~~~ sdparse
Мы покупаем яблоки , груши , апельсины и бананы . \n We buy apples , pears , oranges and bananas .
obj(покупаем, яблоки)
obj(buy, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(яблоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(бананы, и)
cc(bananas, and)
punct(груши, ,-4)
punct(апельсины, ,-6)
punct(pears, ,-15)
punct(oranges, ,-17)
~~~
<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
