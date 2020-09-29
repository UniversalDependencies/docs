---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause.

~~~ sdparse
Det vil ta lang tid å rette opp feilene \n It will take a long time to correct the errors
csubj(ta,rette)
~~~

When the matrix clause is a copula construction, the head of the `csubj` may be an adjectival (or even nominal) predicate.

~~~ sdparse
Det er rart at vi kom i mål i det hele tatt \n It is funny that we reached our goal at all
csubj(rart,kom)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:49 CEST 2020 -->
