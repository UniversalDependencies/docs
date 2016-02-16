---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (det) holds between a nominal head and its determiner.

~~~ sdparse
Bütün kitapları okudu . \n (He\/she) have read all books
det(kitapları, Bütün)
~~~

~~~ sdparse
Güzel bir kitap okudum . \n I read a nice book
det(kitap, bir)
amod(kitap, Güzel)
~~~

~~~ sdparse
Bu kitabı okumalısın . \n You should read this book
det(kitabı, Bu)
~~~

~~~ sdparse
Bazı kitaplar bombadan tehlikelidir . \n Some books are more dangerous than a bomb
det(kitaplar, Bazı)
~~~
