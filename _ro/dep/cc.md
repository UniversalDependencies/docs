---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` is the relation between the first conjunct and the coordinating conjunction delimiting another conjunct:

~~~ sdparse
Maria și Ion tocmai au sosit . \n Mary and John just have arrived .
cc(Maria, și)
conj(Maria, Ion)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a `cc`, and it depends on the root predicate of the sentence. (In fact there is a coordination that spans multiple sentences. We cannot attach a word to the first conjunct because it is in another sentence. Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ sdparse
Și au salutat gazda . \n And have greeted host-the
cc(salutat, Și)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:16 CET 2020 -->
