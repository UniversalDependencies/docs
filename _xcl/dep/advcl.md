---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
Իբրեւ ետես զնա. անկաւ առ ոտս նորա : \n And when he saw him, he fell at his feet.
advcl(անկաւ, ետես)
advcl(fell, saw)
~~~

According to the current UD guidelines, optional depictives are also tagged as [advmod]().

~~~ sdparse
Գնաց դարձեալ ի լեառնն միայն : \n He departed again into a mountain himself alone.
advcl(Գնաց, միայն)
advcl(departed, alone)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:15 CET -->
