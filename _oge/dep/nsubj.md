---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (<code>nsubj</code>) is a nominal which is the syntactic subject of a clause. In Georgian a nominal subject is a nominal which is the (ergative, nominative or dative) subject of the verbal predicate. The governor of this relation is typically a verb with the following exceptions: when the verb is a copular verb, the <code>nsubj</code> relation is headed by the complement of the copular verb, which can be an adjective or a noun. E.g.

~~~ sdparse
მას ჟამსა აღდგა კაიაფა/NOUN მღდელთმოძღუარი... \n 'At that time Caiaphas, the high priest, arose...'
nsubj(აღდგა, კაიაფა)
~~~
~~~ sdparse
და ვითარცა იხილა წმიდამან სტეფანემ/NOUN დიდებაჲ იგი ღმრთისაჲ. \n 'And when Saint Stephen saw that glory of God...'
nsubj(იხილა, სტეფანემ)
obj(იხილა, დიდებაჲ)
~~~
~~~ sdparse
არღარა ეყივნოს ქათამსა/NOUN დღეს... (ლ. 22,34) \n 'The hen will not crow today.' 
nsubj(ეყივნოს, ქათამსა)
~~~

**NB**
Note that when the verb is used in the passive voice the nominal syntactic subject is marked with the subtype [nsubj:pass](_oge/dep/nsubj-pass).
When the subject is clausal, it's preferable to use other specialized relations ([csubj](_oge/dep/csubj) or its subtype [csubj:pass](_oge/dep/csubj-pass).
<!-- Interlanguage links updated St 6. května 2026, 20:47:37 CEST -->
