---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

A `cc` is the relation between the first conjunct and the [coordinating conjunction](../pos/CONJ) delimiting another conjunct.

Note that we currently diverge from UD specification by marking the last conjunct as the head.
See the [conj]() relation, for more information.

~~~ sdparse
Elma ve armut aldık . \n We both apples and oranges .
cc(armut, ve)
conj(armut, Elma)
~~~

~~~ sdparse
Geldiler ve film başladı . \n They arrived and the movie started.
cc(başladı, ve)
conj(başladı, Geldiler)
~~~

~~~ sdparse
Okudum ama hiçbirşey anlamadım . \n I read it but I did not understand anything
cc(anlamadım, ama)
conj(anlamadım, Okudum)
~~~

~~~ sdparse
Ali ile Ayşe'yi gördüm .  \n I saw Ali and Ayşe
conj(Ayşe'yi, Ali)
cc(Ayşe'yi, ile)
~~~
Note that in instrumental or commutative usage of _ile_ the relation [case]() is used.

~~~ sdparse
Ya Ayşe ya Ali oradadır . \n Either Ayşe or Ali would be there .
cc(Ali, ya-3)
cc(Ali, Ya-1)
conj(Ali, Ayşe)
~~~

~~~ sdparse
Ne Ayşe ne Ali geldi . \n Neither Ayşe nor Ali came .
cc(Ali, ne-3)
cc(Ali, Ne-1)
conj(Ali, Ayşe)
~~~

~~~ sdparse
Almak isterim de çok pahalı . \n I want to buy but it is too expensive
cc(pahalı, de)
conj(pahalı, isterim)
~~~
