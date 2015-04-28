---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words. This
may be because of a weird grammatical construction, a limitation in
software, a parser error, or because of an unresolved long distance 
dependency.

In the current version of the Swedish UD treebank, the _dep_ relation is (temporarily) used when
the relative pronoun _som_ duplicates the function of a wh word or phrase:

~~~ sdparse
Svårast är att bestämma vilka förändringar som har skett \n The hardest part is to decide which changes have taken place
dobj(bestämma, skett)
nsubj(skett, förändringar)
dep(skett, som)
~~~
