---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` is the relation between the first conjunct and the [coordinating conjunction](../pos/CCONJ) delimiting another conjunct.

See the [conj]() relation, for more information.
Punctuation that delimit the conjuncts are indicated with [punct]() relation.

~~~ sdparse
Бир табак сары күрүч менен балык бар . \n There is a bowl of yellow rice and fish.
cc(күрүч, менен)
conj(күрүч, балык)
~~~


~~~ sdparse
КМШ жана ЕАЭБ өлкөлөрүнүн чыгармачыл жаштары кызматташууну өнүктүрүүгө ниеттенүүдө. \n Creative youth of the CIS and EAEU countries intend to develop cooperation.
cc(КМШ, жана )
conj(КМШ, ЕАЭБ)
~~~
~~~
Note that in instrumental or commutative usage of _ile_ the relation [case]() is used.

A coordinating conjunction at the beginning of a sentence,
even there is no [conj]() is also called ``cc``.

~~~ sdparse
Бирок карыз алгандан дайыма качам. \n But I always avoid borrowing.
cc(качам, Бирок)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:13 CET 2022 -->
