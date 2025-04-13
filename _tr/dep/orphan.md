---
layout: relation
title: 'orphan'
redirect_from: "tr/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---

The orphan relation is used to provide a satisfactory treatment of certain instances of ellipsis.


~~~ sdparse
Ali kitap , Ahmet gazete okudu . \n Ali book , Ahmet newspaper read .
nsubj(okudu, Ahmet-4)
nsubj(read, Ahmet-12)
obj(okudu, gazete)
obj(read, newspaper)
conj(Ali-1, okudu)
conj(Ali-9, read)
orphan(Ali-1, kitap)
orphan(Ali-9, book)
~~~

"Ahmet read newspapers, Ali books."

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:23 CET -->
