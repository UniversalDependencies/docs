---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---
For more on coordination, see the [conj]() relation. A cc is the relation between the first conjunct and the coordinating conjunction delimiting another conjunct.

~~~ sdparse
Kamskjell , piggvar og lammefilet sto på menyen \n Scallops , turbot and lamb were on the menu
cc(Kamskjell,og)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a cc, and it depends on the root predicate of the sentence.

~~~ sdparse
Og denne gangen gjorde hun det på engelsk \n And this time she did it in English
cc(gjorde,Og)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:11 CEST 2020 -->
