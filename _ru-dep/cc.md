---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

For more on coordination, see the [conj]() relation.
A `cc` is the relation between the first conjunct and
the [coordinating conjunction](cs-pos/CONJ) delimiting another conjunct.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
Он старый и мудрый мужчина. \n He is old and wise man .
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
И потом мы ушли . \n And then we-have left .
cc(ушли, И)
cc(left, And)
~~~

~~~ sdparse
У нас есть яблоки , груши , апельсины a бананы . \n We have apples , pears , oranges and bananas .
dobj(есть, яблоки)
dobj(We-have, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(яблоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(яблоки, и)
cc(apples, and)
punct(яблоки, ,-5)
punct(яблоки, ,-6)
punct(apples, ,-16)
punct(apples, ,-18)
~~~
