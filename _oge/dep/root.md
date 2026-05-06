---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The root grammatical relation points to the root of the sentence, so there's only one root for each sentence. In Georgian the root is usually a verbal predicate. 

~~~ sdparse
მოვიდა იგი. \n 'He came.'
root(ROOT, მოვიდა)
nsubj(მოვიდა, იგი)
~~~
~~~ sdparse
იხილა მან დიდებაჲ ღმრთისაჲ. \n 'He saw the glory of God.'
root(ROOT, იხილა)
nsubj(იხილა, მან)
obj(იხილა, დიდებაჲ)
nmod(დიდებაჲ, ღმრთისაჲ)
~~~
~~~ sdparse
იგი კეთილ არს. \n 'He is good.'
root(ROOT, კეთილ)
nsubj(კეთილ, იგი)
cop(კეთილ, არს)
~~~

If the main predicate is not present due to ellipsis and there are multiple orphaned dependents, the leftmost dependent should be promoted to the head (<code>root</code>) position and the other orphans should be attached to it.

~~~ sdparse
ცხორებაჲ წმიდისა აბოჲსი. \n 'The Life of Saint Abo.'
root(ROOT, ცხორებაჲ)
nmod(ცხორებაჲ, აბოჲსი)
amod(აბოჲსი, წმიდისა)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:48:39 CEST -->
