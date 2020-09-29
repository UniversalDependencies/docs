---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The root grammatical relation points to the root of the sentence, so there's only one root for each sentence. In Italian the root is usually a verbal predicate, unless we are analysing a nominal phrase, where the root is a noun. 

~~~ sdparse
ROOT Alcune chiamate partirono/VERB da il Quirinale .
root(ROOT, partirono)
~~~
~~~ sdparse
ROOT Questa ricchezza è tutta apparenza/NOUN .
root(ROOT, apparenza)
cop(apparenza, è)
~~~
~~~ sdparse
ROOT Ecco l' arringa/NOUN di Tiziana Maiolo .
root(ROOT, arringa)
~~~

If the main predicate is not present due to ellipsis and there are multiple orphaned dependents, the leftmost dependent should be promoted to the head (<code>root</code>) position and the other orphans should be attached to it.

~~~ sdparse
ROOT Sorpresa/NOUN in la sorpresa .
root(ROOT, Sorpresa)
nmod(Sorpresa, sorpresa)
punct(Sorpresa, .)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:27 CEST 2020 -->
