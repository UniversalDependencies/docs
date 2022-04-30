---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _and, or,_ or a comma or other punctuation.
We treat coordination asymmetrically.
The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Он старый и мудрый мужчина. \n He-is old and wise man .
cc(старый, и)
cc(old, and)
~~~

~~~ sdparse
Мы покупаем яблоки , груши , апельсины и бананы . \n We buy apples , pears , oranges and bananas .
obj(покупаем, яблоки)
obj(buy, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(яблоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(бананы, и)
cc(bananas, and)
punct(груши, ,-4)
punct(апельсины, ,-6)
punct(pears, ,-15)
punct(oranges, ,-17)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Он пришел домой , помылся и пошел в кровать . \n He came home , showered-himself and went to bed .
conj(пришел, помылся)
conj(пришел, пошел)
conj(came, showered-himself)
conj(came, went)
punct(помылся, ,-4)
punct(showered-himself, ,-15)
cc(пошел, и)
cc(went, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
Note that the present conversion procedure loses some annotations of shared modifiers and nested
coordination.
<!-- Interlanguage links updated St lis 3 20:58:46 CET 2021 -->
