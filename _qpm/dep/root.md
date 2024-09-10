---
layout: relation
title:  'root'
shortdef: 'root'
udver: '2'
---


The [root]() dependency indicates the root of the sentence. There should be just one node with the `root` dependency relation in every tree. 


~~~ sdparse
astinomíjeta fáti annók čulǽka 
"the police caught a man"                              
root(fáti)
~~~

Copula constructions have been discussed in [cop]():


~~~ sdparse
magáreno je stáro 
"the donkey is old"
root(stáro)
nsubj(stáro, magáreno)     
~~~ 

If the main predicate is not present (due to ellipsis) and there are multiple orphaned dependents, 
one of these is promoted to the head ('root') position and the other orphans are attached to it.
(This rule has in practice been followed since release v1.2 but was not explicitly stated in the
original v1 guidelines.)
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:48 CEST -->
