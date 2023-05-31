---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---


[cc]() is the dependency relation between  a coordinating conjunction  like _και_ or _αλλά_ and the predicate it introduces.

<!--
TODO
a [coordinating conjunction](../pos/CCONJ)
-->

~~~ sdparse
Ο οδηγός ενοχλήθηκε και άρχισε να κορνάρει .
cc(άρχισε, και)
~~~

A coordinating conjunction may be used to introduce a main sentence. Again, the [cc]() dependency is used.  

<!--
and it depends on the root predicate of the sentence.
(In fact there is a coordination that spans multiple sentences.
We cannot attach a word to the first conjunct because it is in another sentence.
Thus we attach it to the first conjunct available in the current sentence: its main predicate.)
-->
~~~ sdparse
Το σύστημα , όμως , δεν εφαρμόστηκε .
cc(εφαρμόστηκε, όμως)
~~~

~~~ sdparse
Όμως πέρασε ένας χρόνος και το σύστημα δεν εφαρμόστηκε
cc(πέρασε, όμως)
cc(εφαρμόστηκε, και)
~~~

For more on coordination, see the [conj]() relation.
<!-- Interlanguage links updated Út 9. května 2023, 20:04:03 CEST -->
