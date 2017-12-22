---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _և_ (and), _կամ_ (or), or a comma or other punctuation.
We treat coordination asymmetrically.
The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Նա ծեր և իմաստուն մարդ է ։ \n Is he old and wise man .
conj(ծեր, իմաստուն)
conj(old, wise)
~~~

~~~ sdparse
Մենք ունենք խնձոր , տանձ , նարինջ և բանան ։ \n We have apples , pears , oranges and bananas .
obj(ունենք, խնձոր)
obj(have, apples)
conj(խնձոր, տանձ)
conj(խնձոր, նարինջ)
conj(խնձոր, բանան)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(բանան, և)
cc(bananas, and)
punct(խնձոր ,-4)
punct(տանձ, ,-6)
punct(pears, ,-14)
punct(oranges, ,-16)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Նա տուն եկավ , ցնցուղ ընդունեց և անմիջապես գնաց քնելու ։ \n He came home , showered himself and immediately went to-bed .
conj(եկավ, ընդունեց)
conj(եկավ, գնաց)
conj(came, showered)
conj(came, went)
punct(եկավ, ,-4)
punct(showered, ,-15)
cc(գնաց, և)
cc(went, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
Note that the present conversion procedure loses some annotations of shared modifiers and nested
coordination.
