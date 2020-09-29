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
Je to starý a moudrý muž . \n Is he old and wise man .
conj(starý, moudrý)
conj(old, wise)
~~~

~~~ sdparse
Máme jablka , hrušky , pomeranče a banány . \n We-have apples , pears , oranges and bananas .
obj(Máme, jablka)
obj(We-have, apples)
conj(jablka, hrušky)
conj(jablka, pomeranče)
conj(jablka, banány)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(banány, a)
cc(bananas, and)
punct(hrušky, ,-3)
punct(pomeranče, ,-5)
punct(pears, ,-13)
punct(oranges, ,-15)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Přišel domů , osprchoval se a hned šel do postele . \n He-came home , showered himself and immediately went to bed .
conj(Přišel, osprchoval)
conj(Přišel, šel)
conj(He-came, showered)
conj(He-came, went)
punct(osprchoval, ,-3)
punct(showered, ,-15)
cc(šel, a)
cc(went, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
Note that the present conversion procedure loses some annotations of shared modifiers and nested
coordination.
<!-- Interlanguage links updated Út zář 29 20:43:13 CEST 2020 -->
