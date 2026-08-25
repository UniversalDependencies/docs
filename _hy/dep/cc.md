---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and the [coordinating conjunction](CCONJ) that precedes it.
(Note that different dependency grammars have different treatments of coordination. We take the first conjunct as the head of the coordination.)

~~~ sdparse
Նա ծեր ու իմաստուն մարդ է ։ \n He is old and wise man .
conj(ծեր, իմաստուն)
conj(old, wise)
cc(իմաստուն, ու)
cc(wise, and)
~~~

A coordinating conjunction may also occur at the beginning of a sentence, linking it to the preceding discourse. In such cases, it is also attached with the `cc` relation and depends on the root predicate of the sentence. Since dependencies cannot cross sentence boundaries, the conjunction cannot be attached to a conjunct in the preceding sentence and is therefore attached to the main predicate of the current sentence.

~~~ sdparse
Ու հետո մենք գնացինք ։ \n And then we left .
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
punct(տանձ, ,-4)
punct(նարինջ, ,-6)
punct(pears, ,-15)
punct(oranges, ,-17)
~~~

~~~ sdparse
Նա ոչ ՛ տեսել է , ոչ ՛ լսել ։ \n He has not seen or heard .
cc(տեսել, ոչ-2)
cc(seen, not)
cc(լսել, ոչ-7)
cc(heard, or)
conj(տեսել, լսել)
conj(seen, heard)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:46 CEST -->
