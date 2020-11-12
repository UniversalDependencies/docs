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
Он старый и мудрый мужчина . \n He-is old and wise man .
conj(старый, мудрый)
conj(old, wise)
~~~

~~~ sdparse
У нас есть яблоки , груши , апельсины и бананы . \n By us are apples , pears , oranges and bananas .
nsubj(есть, яблоки)
nsubj(are, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(яблоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(яблоки, и)
cc(apples, and)
punct(яблоки, ,-5)
punct(яблоки, ,-7)
punct(apples, ,-17)
punct(apples, ,-19)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Он пришел домой , помылся и пошел в кровать . \n He came home , showered-himself and went to bed .
conj(пришел, помылся)
conj(пришел, пошел)
conj(came, showered-himself)
conj(came, went)
punct(пришел, ,-4)
punct(came, ,-15)
cc(пришел, и)
cc(came, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
