---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _and, or,_ or a comma or other punctuation.
We treat conjunctions asymmetrically in what is known as the Stanford style:
The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Je to starý a moudrý muž . \n Is he old and wise man .
conj(starý, moudrý)
conj(old, wise)
~~~

~~~ sdparse
Máme jablka , hrušky , pomeranče a banány . \n We-have apples , pears , oranges and bananas .
dobj(Máme, jablka)
dobj(We-have, apples)
conj(jablka, hrušky)
conj(jablka, pomeranče)
conj(jablka, banány)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(jablka, a)
cc(apples, and)
punct(jablka, ,-3)
punct(jablka, ,-5)
punct(apples, ,-13)
punct(apples, ,-15)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Přišel domů , osprchoval se a hned šel do postele . \n He-came home , showered himself and immediately went to bed .
conj(Přišel, osprchoval)
conj(Přišel, šel)
conj(He-came, showered)
conj(He-came, went)
punct(Přišel, ,-3)
punct(He-came, ,-15)
cc(Přišel, a)
cc(He-came, and)
~~~
