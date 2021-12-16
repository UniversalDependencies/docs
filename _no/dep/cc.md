---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---
For more on coordination, see the [conj]() relation. A cc is the relation for the coordinating conjunction delimiting a conjunct from another. The conjuct is a dependent on the nearest conjunct following it.

~~~ sdparse
Kamskjell , piggvar og lammefilet sto på menyen \n Scallops , turbot and lamb were on the menu
cc(lammefilet,og)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a cc, and it depends on the root predicate of the sentence.

~~~ sdparse
Og denne gangen gjorde hun det på engelsk \n And this time she did it in English
cc(gjorde,Og)
~~~
<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
