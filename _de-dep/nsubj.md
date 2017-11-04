---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

`nsubj` marks noun phrases that are the subject of a finite clause. The head of `nsubj` is typically a verb, but can be another noun phrase or adjective, for example in copula constructions.

~~~ sdparse
Die Frau schläft . \n The woman sleeps .
nsubj(schläft, Frau)
~~~

~~~ sdparse
Die Frau ist Ärztin . \n The woman is a doctor .
nsubj(Ärztin, Frau)
~~~

~~~ sdparse
Die Frau ist müde . \n The woman is tired .
nsubj(müde, Frau)
~~~

