---
layout: relation
title: 'flat'
redirect_from: "no/dep/name.html"
shortdef: 'name'
---

The `flat` relation is used for proper nouns constituted of multiple nominal elements. 
Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the name label.

~~~ sdparse
Sven O. Høiby 
name(Sven-1,O.-2)
name(Sven-1,Høiby-3)
~~~

A flat analysis is also adopted for names where there is a clear syntactic analysis (unlike the UD guidelines) due to the automated conversion procedure.

~~~ sdparse
Universitetet i Bergen
name(Universitetet-1,i-2)
name(Universitetet-1,Bergen-3)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
