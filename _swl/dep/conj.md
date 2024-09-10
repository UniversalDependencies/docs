---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements. We treat
coordination asymmetrically: The head of the relation is the first
conjunct and other conjuncts depend on it via the `conj` relation. 
For Swedish Sign Language, we use `conj` for elements coordinated with or without a 
`cc`, as well as repeated elements within a clause not attributed to repair (see [reparandum()].

~~~ sdparse
PRO1 PERF MED.VARA OS@b VM@b \n I have participated in the Olympics and the World Championship
conj(OS@b, VM@b)
~~~

~~~ sdparse
PRO1 PRO1 HETA TEDDIE@b@en TEDDIE-SUNDQVIST@en \n I am called Teddie Sundqvist.
conj(PRO1, PRO1)
~~~	
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:59 CEST -->
