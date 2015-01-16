---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. Dislocated elements are attached to the same governor as the dependent that they double for.

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
dislocated(it-8, Luna-3)
nsubj(try-7, you-5)
aux(try-7, should-6)
root(root-0, try-7)
dobj(try-7, it-8)
~~~
