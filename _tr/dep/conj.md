---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as and, or, etc. 

Following general UD guidelines, the first conjunct is the head
of the construction.
All other conjuncts depend on it via the ``conj`` relation.

~~~ sdparse
Bir kız , iki erkek çocukları var . \n They have one girl and two boys.
conj(kız, erkek)
~~~

~~~ sdparse
Film siyah beyaz . \n The movie is black and white
conj(siyah, beyaz)
~~~

~~~ sdparse
Ayşe'yle Ali kavga ediyoralardı . \n Ayşe and Ali were fighting .
conj(Ayşe'yle, Ali)
~~~

~~~ sdparse
Ayşe , Ali ve beni davet etmedi . \n He\/she did not invite Ayşe , Ali and me .
conj(Ayşe, Ali)
conj(Ayşe, beni)
cc(beni, ve)
punct(Ali, ,-2)
~~~

~~~ sdparse
Ya Ayşe , ya Ali , ya da  beni davet etmeliydi . \n He\/she should have invited either Ayşe , Ali or me .
conj(Ayşe, Ali)
conj(Ayşe, beni)
cc(beni, ya-7)
cc(Ali, ya-4)
cc(Ayşe, Ya-1)
fixed(ya-7, da)
~~~

See the relation [cc]() for a few more examples.
<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
