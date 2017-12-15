---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause.

~~~ sdparse
Ձյունը հալվեց արևից : \n Snow was-melted by-sun .
nsubj:pass(հալվեց, Ձյունը)
nsubj:pass(was-melted, Snow)
~~~

Reflexive passive: 

~~~ sdparse
Նա կախվեց : \n He hung-himself .
nsubj:pass(կախվեց, Նա)
nsubj:pass(hung-himself, He)
~~~

Reciprocal passive:

~~~ sdparse
Նրանք համբուրվեցին ։ \n They kissed-each-other .
nsubj:pass(համբուրվեցին, Նրանք)
nsubj:pass(kissed-each-other, They)
~~~
