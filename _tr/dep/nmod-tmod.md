---
layout: relation
title: 'nmod:tmod'
shortdef: 'temporal modifier'
---

A temporal modifier is a subtype of the [nmod]() relation: if the modifier is specifying time, it is labeled as `nmod:tmod`.

~~~ sdparse
Geçen hafta bir kitap okudum . \n Las week I read a book
nmod:tmod(okudum, hafta)
~~~

~~~ sdparse
Üç ay –dır okumuyorum . \n I haven't been reading for three months
case(ay, –dır)
nmod:tmod(okumuyorum, ay)
~~~

~~~ sdparse
Öğleden sonra okuyacağım . \n I will read (it) in the afternoon
case(Öğleden, sonra)
nmod:tmod(okuyacağım, Öğleden)
~~~

~~~ sdparse
Her yıl aynı yere gidiyoruz . \n We go to the same place every year
nmod:tmod(gidiyoruz, yıl)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
