---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The remnant relation is used to provide a satisfactory treatment of certain instances of ellipsis.

~~~ sdparse
Ali kitabı okudu , Ahmet de . \n Ali read the book, Ahmet too.
nsubj(okudu, Ali)
remnant(Ali, Ahmet)
~~~

~~~ sdparse
Ali okudu kitabı , Ahmet değil . \n Ali read the book, not Ahmet.
nsubj(okudu, Ali)
remnant(Ali, Ahmet)
~~~

~~~ sdparse
Ali kitap , Ahmet gazete okudu . \n Mehmet read newspapers, Ahmet books.
nsubj(okudu, Ahmet)
dobj(okudu, gazete)
remnant(Ahmet, Ali)
remnant(gazete, kitap)
~~~
