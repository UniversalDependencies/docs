---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

The conjunct relation holds between coordinated elements. We treat
coordination asymmetrically: The head of the relation is the first
conjunct and other conjuncts depend on it via the `conj` relation.

~~~ sdparse
ROOT Kappingin byrjaði í Napoli og endaði í Brescia . 
conj(byrjaði, endaði)
cc(byrjaði, og)
nsubj(byrjaði, Kappingin)
case(Napoli, í)
case(Brescia, í)
punct(byrjaði, .)
~~~

~~~ sdparse
1500 kr per barn och år \n 1500 kr per child and year
conj(barn, år)
~~~

~~~ sdparse
En sekunds tvekan eller dröjsmål eller slarv \n A second's hesitation or delay or carelessness
conj(tvekan, dröjsmål)
conj(tvekan, slarv)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:25 CEST 2020 -->
