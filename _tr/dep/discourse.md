---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
---

This is used for interjections and other discourse particles and elements
(which are not clearly linked to the structure of the sentence, except in an expressive way).

~~~ sdparse
Okudu mu acaba ? \n Did he\/she read (I wonder) ?
discourse(Okudu, acaba)
~~~

~~~ sdparse
Çabuk okusa bari . \n I wish he reads quickly 'bari'
discourse(okusa, bari)
~~~

~~~ sdparse
Aferin , okumuşsun . \n Well done! You must have read it.
discourse(okumuşsun, Aferin)
~~~

~~~ sdparse
Bak , bu kitabı okumalısın . \n look, you need to read this book
discourse(okumalısın, Bak)
~~~

~~~ sdparse
Peki , kitabı okudun mu ? \n OK, have you read the book?
discourse(okudun, Peki)
~~~
