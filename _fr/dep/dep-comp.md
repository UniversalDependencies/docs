---
layout: relation
title: 'dep:comp'
shortdef: 'unspecified dependency'
udver: '2'
---

The `dep:comp` relation is used in **UD_French-GSD** and in **UD_French-Spoken** for passive constructions (with the lemma *se* for the dependent).

~~~ sdparse
Max s' intéressa à elle \n Max took interest in her
dep:comp(intéressa,s')
~~~

It is also used in construction *plus de*, *beaucoup de*:

~~~ sdparse
le concept demande beaucoup de moyens \n the concept requires a lot of means
dep:comp(beaucoup,moyens)
~~~
