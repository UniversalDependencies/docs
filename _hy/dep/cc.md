---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and
the [coordinating conjunction](CCONJ) that precedes it.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
Նա ծեր ու իմաստուն մարդ է ։ \n He is old and wise man .
cc(իմաստուն, ու)
cc(wise, and)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, and it depends on the root
predicate of the sentence.
(In fact there is a coordination that spans multiple sentences. We cannot attach a word to the first conjunct because it is in another sentence. Thus we attach it to the first conjunct available in the current sentence: its main predicate.))

~~~ sdparse
Ու հետո մենք գնացինք ։ \n And then we-have left .
cc(գնացինք, Ու)
cc(left, And)
~~~

~~~ sdparse
Մենք ունենք խնձոր , տանձ , նարինջ և բանան ։ \n We have apples , pears , oranges and bananas .
obj(ունենք, խնձոր)
obj(have, apples)
conj(խնձոր, տանձ)
conj(խնձոր, նարինջ)
conj(խնձոր, բանան)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(բանան, և)
cc(bananas, and)
punct(խնձոր ,-4)
punct(տանձ, ,-6)
punct(apples, ,-15)
punct(oranges, ,-17)
~~~
