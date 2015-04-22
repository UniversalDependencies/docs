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

In the current version of the Swedish UD treebank, the _dep_ relation is (temporarily) used in two constructions, due to the automatic conversion. This should be reanalyzed in later versions.

First, the relative pronoun _som_ is assigned the _dep_ relation when it duplicates the function of a wh word or phrase:

~~~ sdparse
Svårast är att bestämma vilka förändringar som har skett \n The hardest part is to decide which changes have taken place
dobj(bestämma, skett)
nsubj(skett, förändringar)
dep(skett, som)
~~~

Secondly, the focus element in a cleft sentence is analyzed as having a _dep_ relation to the verb introducing it:

~~~ sdparse
Det var Pelle som gjorde det \n It was Pelle who did it
dep(var, Pelle)
acl:relcl(Pelle, gjorde)
~~~

