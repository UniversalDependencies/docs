---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers
of another noun or noun phrase.

The `nmod` relation is further specified by
the [Case](tr-feat/Case) feature or [case]() relation.

~~~ sdparse
çelik kapı \n steel door
nmod(kapı, çelik)
~~~

~~~ sdparse
Türk mühendisler \n Turkish engineers
nmod(mühendisler, Türk)
~~~

~~~ sdparse
resim –li kitap \n (the\/a) book with illustrations
nmod(kitap, resim)
case(resim, –li)
~~~

~~~ sdparse
ücret –siz hizmet \n (the\/a) service without fee (free service)
nmod(hizmet, ücret)
case(ücret, –siz)
~~~

For possessive constructions we use [nmod:poss](nmod-poss).
<!-- Interlanguage links updated Pá kvě 14 11:09:10 CEST 2021 -->
