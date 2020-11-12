---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. These elements often appear to be in the periphery of the sentence, and may be separated off with a comma intonation.

~~~ sdparse
This is our office , me and Sam
dislocated(office, me)
cc(me, and)
conj(me, Sam)
~~~

~~~ sdparse
The Mezza Luna : you should try it .
det(Luna-3, The-1)
compound(Luna-3, Mezza-2)
dislocated(try-7, Luna-3)
nsubj(try-7, you-5)
aux(try-7, should-6)
root(root-0, try-7)
obj(try-7, it-8)
~~~

~~~ sdparse
The new Pakistani general , he 's just been elected .
dislocated(elected, general)
nsubj(elected, he)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
