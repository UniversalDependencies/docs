---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
---

A clausal passive subject is a clausal syntactic subject of a passive clause.

~~~ sdparse
Bylo mi doporučeno , abych to velmi dobře zvážil . \n It-has-been to-me recommended , that-I it very well weigh .
csubjpass(doporučeno, zvážil)
csubjpass(recommended, weigh)
~~~

Reflexive passive (the meaning is “You are not expected to come before nine o'clock.”)

~~~ sdparse
Nepředpokládá se , že přijdete před devátou . \n It-does-not-expect itself , that you-will-come before nine .
csubjpass(Nepředpokládá, přijdete)
csubjpass(It-does-not-expect, you-will-come)
~~~
