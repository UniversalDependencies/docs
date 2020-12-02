---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.
A `cc` is the relation between the first conjunct and
<!--
TODO
a [coordinating conjunction](../pos/CCONJ)
-->
a coordinating conjunction like _και_ or _αλλά_ delimiting another conjunct.

~~~ sdparse
Ο οδηγός ενοχλήθηκε και άρχισε να κορνάρει .
cc(ενοχλήθηκε, και)
~~~

A coordinating conjunction may also appear at the beginning
or close to the beginning of a sentence. This is also called
a `cc`, and it depends on the root predicate of the sentence.
(In fact there is a coordination that spans multiple sentences.
We cannot attach a word to the first conjunct because it is in another sentence.
Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ sdparse
Το σύστημα , όμως , δεν εφαρμόστηκε .
cc(εφαρμόστηκε, όμως)
~~~
<!--
TODO
Όμως πέρασε ένας χρόνος και το σύστημα δεν εφαρμόστηκε
-->
<!-- Interlanguage links updated Čt lis 12 09:43:16 CET 2020 -->
