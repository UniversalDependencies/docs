---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` is the relation between the first conjunct and the [coordinating conjunction](../pos/CCONJ) delimiting another conjunct.

See the [conj]() relation, for more information.
Punctuation that delimit the conjuncts are indicated with [punct]() relation.

~~~ sdparse
Elma ve armut aldık . \n We both apples and oranges .
cc(armut, ve)
conj(Elma, armut)
~~~

~~~ sdparse
Geldiler ve film başladı . \n They arrived and the movie started.
cc(başladı, ve)
conj(Geldiler, başladı)
~~~

~~~ sdparse
Okudum ama hiçbirşey anlamadım . \n I read it but I did not understand anything
cc(anlamadım, ama)
conj(Okudum, anlamadım)
~~~

~~~ sdparse
Ali ile Ayşe'yi gördüm .  \n I saw Ali and Ayşe
conj(Ali, Ayşe'yi)
cc(Ayşe'yi, ile)
~~~
Note that in instrumental or commutative usage of _ile_ the relation [case]() is used.

~~~ sdparse
Ya Ayşe ya Ali oradadır . \n Either Ayşe or Ali would be there .
cc(Ali, ya-3)
cc(Ayşe, Ya-1)
conj(Ayşe, Ali)
~~~

~~~ sdparse
Ne Ayşe ne Ali geldi . \n Neither Ayşe nor Ali came .
cc(Ali, ne-3)
cc(Ayşe, Ne-1)
conj(Ayşe, Ali)
~~~

~~~ sdparse
Almak isterim de çok pahalı . \n I want to buy but it is too expensive
cc(pahalı, de)
conj(isterim, pahalı)
~~~

A coordinating conjunction at the beginning of a sentence,
even there is no [conj]() is also called ``cc``.

~~~ sdparse
Ve film başladı . \n And, the movie started.
cc(başladı, Ve)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:11 CEST 2020 -->
