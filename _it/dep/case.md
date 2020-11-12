---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

In Italian, the case relation is used for any preposition introducing a noun, pronoun, adjective or adverb. Prepositions are treated as dependents of the element they attach to (or introduce) in an “extended nominal projection”. 

~~~ sdparse
Avevano da poco lasciato la cima
case(poco, da)
~~~
~~~ sdparse
Camminata da spia
case(spia, da)
~~~
~~~ sdparse
Sono d' accordo su il principio
case(principio, su)
det(principio, il)
nmod(Sono, accordo)
nmod(accordo, principio)
~~~
~~~ sdparse
il ministro di l' Interno
case(Interno, di)
det(Interno, l')
nmod(ministro, Interno)
~~~

The <code>case</code> relation can also be used for multiword expression introducing a complement. 

~~~ sdparse
Prima di tutto 
case(tutto, Prima)
mwe(Prima, di)
~~~

If the head of the relation is a verb in a subordinate clause, than the correct relation is [mark](). If the verb is used as a noun infinitive, than <code>case</code> is the correct relation.

~~~ sdparse
La consegna consiste in il fare ronde notturne .
case(fare, in)
det(fare, il)
~~~
~~~ sdparse
Si finisce con l' esaltare il genio maschile .
case(esaltare, con)
det(esaltare, l')
nmod(finisce, esaltare)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:15 CET 2020 -->
