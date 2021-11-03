---
layout: relation
title: 'obl:tmod'
shortdef: 'temporal modifier'
udver: '2'
---

A temporal modifier is a subtype of the [obl]() relation: if the modifier is specifying time, it is labeled as `obl:tmod`.

~~~ sdparse
Geçen hafta bir kitap okudum . \n Las week I read a book
obl:tmod(okudum, hafta)
~~~

~~~ sdparse
Üç ay –dır okumuyorum . \n I haven't been reading for three months
case(ay, –dır)
obl:tmod(okumuyorum, ay)
~~~

~~~ sdparse
Öğleden sonra okuyacağım . \n I will read (it) in the afternoon
case(Öğleden, sonra)
obl:tmod(okuyacağım, Öğleden)
~~~

~~~ sdparse
Her yıl aynı yere gidiyoruz . \n We go to the same place every year
obl:tmod(gidiyoruz, yıl)
~~~

<!-- Interlanguage links updated St lis 3 20:59:06 CET 2021 -->
