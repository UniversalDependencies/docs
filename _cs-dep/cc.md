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
Je to starý a moudrý muž . \n Is he old and wise man .
cc(starý, a)
cc(old, and)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, and it depends on the root
predicate of the sentence.
(In fact there is a coordination that spans multiple sentences.
We cannot attach a word to the first conjunct because it is in another sentence.
Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ sdparse
A pak jsme odešli . \n And then we-have left .
cc(odešli, A)
cc(left, And)
~~~

~~~ sdparse
Máme jablka , hrušky , pomeranče a banány . \n We-have apples , pears , oranges and bananas .
dobj(Máme, jablka)
dobj(We-have, apples)
conj(jablka, hrušky)
conj(jablka, pomeranče)
conj(jablka, banány)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(jablka, a)
cc(apples, and)
punct(jablka, ,-3)
punct(jablka, ,-5)
punct(apples, ,-13)
punct(apples, ,-15)
~~~
