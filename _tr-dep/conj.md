---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as and, or, etc. 

We diverge from UD specification by marking the last (instead of the first) conjunct as the head of the relation.
All the other conjuncts depend on the last via the `conj` relation.

~~~ sdparse
Bir kız , iki erkek çocukları var . \n They have one girl and two boys.
conj(erkek, kız)
~~~

~~~ sdparse
Film siyah beyaz . \n The movie is black and white
conj(beyaz, siyah)
~~~

~~~ sdparse
Ayşe'yle Ali kavga ediyoralardı . \n Ayşe and Ali were fighting .
conj(Ali, Ayşe'yle)
~~~

~~~ sdparse
Ayşe , Ali ve beni davet etmedi . \n He\/she did not invite Ayşe , Ali and me .
conj(beni, Ali)
conj(beni, Ayşe)
cc(beni, ve)
punct(beni, ,-2)
~~~

~~~ sdparse
Ya Ayşe , ya Ali ya da  beni davet etmeliydi . \n He\/she should have invited not Ayşe , Ali or me .
conj(beni, Ali)
conj(beni, Ayşe)
cc(beni, ya-6)
cc(beni, ya-4)
cc(beni, Ya-1)
mwe(ya-6, da)
~~~

See the relation [cc]() for a few more examples.
