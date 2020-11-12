---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The _orphan_ relation is used to analyze cases of ellipsis where there is no function word that can be 
promoted to take the place of the elided content word. 

~~~ sdparse
Marie åkte till Paris och Miriam till Prag \n Marie went to Paris and Miriam to Prague
nsubj(åkte, Marie-1)
obl(åkte-2, Paris-4)
case(Paris-4, till-3)
cc(Miriam-6, och-5)
orphan(Miriam-6, Prag-8)
case(Prag-8, till-7)
conj(åkte-2, Miriam-6)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
