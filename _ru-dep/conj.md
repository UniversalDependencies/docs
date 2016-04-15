---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _and, or,_ or a comma or other punctuation.
We treat coordination asymmetrically in what is known as the Stanford style:
The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Он старый и мудрый мужчина . \n He is old and wise man .
conj(старый, мудрый)
conj(old, wise)
~~~

~~~ sdparse
У нас есть яблоки , груши , апельсины и бананы . \n We have apples , pears , oranges and bananas .
dobj(есть, яблоки)
dobj(We-have, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(ялоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(яблоки, и)
cc(apples, and)
punct(яблоки, ,-5)
punct(яблоки, ,-7)
punct(apples, ,-16)
punct(apples, ,-18)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Он пришел домой , помылся и пошел в кровать . \n He came home , showered himself and immediately went to bed .
conj(пришел, помылся)
conj(пришел, пошел)
conj(came, пошел)
conj(came, went)
punct(пришел, ,-4)
punct(came, ,-15)
cc(пришел, и)
cc(came, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
