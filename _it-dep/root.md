---
layout: relation
title: 'root'
shortdef: 'root'
---

The root grammatical relation points to the root of the sentence, this means that there's only one root for each sentence. 
In Italian the root is usually a verbal predicate, unless we are analysing a nominal phrase, where the root is a noun. 

~~~ sdparse
Alcune chiamate partirono/VERB da il Quirinale .
root(partirono, )
~~~
~~~ sdparse
Questa ricchezza è tutta apparenza/NOUN .
root(apparenza, )
cop(apparenza, è)
~~~
~~~ sdparse
Ecco l' arringa/NOUN di Tiziana Maiolo .
root(arringa, )
~~~

If the main predicate is not present due to ellipsis and there are multiple orphaned dependents, the leftmost dependent should be promoted to the head (<code>root</code>) position and the other orphans should be attached to it.

~~~ sdparse
Sorpresa/NOUN in la sorpresa .
root(Sorpresa, )
nmod(Sorpresa, sorpresa)
punct(Sorpresa, .)
~~~
