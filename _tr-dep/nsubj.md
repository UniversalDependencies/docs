---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause. 

~~~ sdparse
Ali okuyor . \n Ali is reading
nsubj(okuyor, Ali)
~~~

For existential sentences, "the thing that exists" is the subject.
This includes possessive existentials.

~~~ sdparse
Üç kitap var . \n There are three books
nsubj(var, kitap)
~~~

~~~ sdparse
Benim üç kitabım var . \n I have three books
nsubj(var, kitabım)
~~~

Although we currently mark the head of the verbal nouns as nouns,
we use [csubj]() when they are in the subject position.
