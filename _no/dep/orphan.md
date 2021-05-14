---
layout: relation
title: 'orphan'
redirect_from: "no/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---

The 'orphan' relation is used in cases of head [ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in an unnatural 
and misleading dependency relation. The orphan is dependent on the word promoted to head position:

~~~ sdparse
En prins er født, navnet klart til uken \n A prince is born, name ready next week
conj(født,navnet)
orphan(navnet,klart)
~~~

~~~ sdparse
Jeg er norsk i Norge, og fransk i Frankrike \n I am Norwegian in Norway and French in France
conj(norsk,fransk)
orphan(fransk,Frankrike)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:19 CEST 2021 -->
