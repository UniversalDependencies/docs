---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.
A `cc` is the relation between a conjunct and
the [coordinating conjunction](cs-pos/CCONJ) that precedes it.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
Je to starý a moudrý muž . \n Is he old and wise man .
cc(moudrý, a)
cc(wise, and)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, and it depends on the root
predicate of the sentence.
(In fact there is a coordination that spans multiple sentences.)

~~~ sdparse
A pak jsme odešli . \n And then we-have left .
cc(odešli, A)
cc(left, And)
~~~

~~~ sdparse
Máme jablka , hrušky , pomeranče a banány . \n We-have apples , pears , oranges and bananas .
obj(Máme, jablka)
obj(We-have, apples)
conj(jablka, hrušky)
conj(jablka, pomeranče)
conj(jablka, banány)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(banány, a)
cc(bananas, and)
punct(hrušky, ,-3)
punct(pomeranče, ,-5)
punct(pears, ,-13)
punct(oranges, ,-15)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:11 CEST 2020 -->
