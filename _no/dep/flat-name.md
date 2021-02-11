---
layout: relation
title: 'flat:name'
shortdef: 'names'
udver: '2'
---

The `flat:name` relation is used for proper nouns constituted of multiple nominal elements. 
Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the name label.

~~~ sdparse
Sven O. Høiby 
flat:name(Sven-1,O.-2)
flat:name(Sven-1,Høiby-3)
~~~

A flat analysis is also adopted for names where there is a clear syntactic analysis (unlike the UD guidelines) due to the automated conversion procedure.

~~~ sdparse
Universitetet i Bergen
flat:name(Universitetet-1,i-2)
flat:name(Universitetet-1,Bergen-3)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
