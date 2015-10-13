---
layout: relation
title: 'cop'
shortdef: 'copula'
---

 `cop` relation is used with copulative verbs. The main difference between the general UD schema and the Basque annotation follows form the fact that English *to be* corresponds to several  in Basque verbs.
 
 More precisely, izan *to be* egon *to be* ukan *to have* geratu *to stay keep* ibili *to be*


* English:

These two parts fold by the places that are marked .

* Basque:

Bi zati hauek markaturik dauden tokietatik tolesten dira .

*Two parts these marked are-that places  aux-intrans-present .*

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira .

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(dira-8, tolesten-7)
~~~
